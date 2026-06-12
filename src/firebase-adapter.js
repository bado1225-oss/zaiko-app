// Firebase Adapter - Supabase クライアントと同形の API を Firestore で実装
// 既存の main.js を最小限の変更で Firebase に切り替えるためのレイヤー

(function(global){
  'use strict';

  // ===== Firebase 設定(公開可能) =====
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAwrSd5PgtLC8Bvzc6OTBodU4FwxVNubac",
    authDomain: "zaiko-app-24ae2.firebaseapp.com",
    projectId: "zaiko-app-24ae2",
    storageBucket: "zaiko-app-24ae2.firebasestorage.app",
    messagingSenderId: "517900197948",
    appId: "1:517900197948:web:002d37265f8e18906d2339"
  };

  // ===== グローバル参照 =====
  let _app = null, _db = null, _auth = null, _initialized = false;
  let _currentUser = null;
  const _authListeners = [];

  function ensureInit(){
    if(_initialized) return;
    if(typeof firebase === 'undefined') throw new Error('Firebase SDK が読み込まれていません');
    _app = firebase.apps.length ? firebase.app() : firebase.initializeApp(FIREBASE_CONFIG);
    _db = firebase.firestore();
    _auth = firebase.auth();
    _auth.onAuthStateChanged(user => {
      _currentUser = user;
      _authListeners.forEach(cb => { try{ cb(user ? 'SIGNED_IN' : 'SIGNED_OUT', user ? { user } : null); }catch(e){ console.error(e); } });
    });
    _initialized = true;
  }

  // ===== クエリビルダー =====
  function makeQuery(table){
    const state = {
      table,
      filters: [],    // {col, op, val}
      orderBy: null,  // {col, asc}
      limitN: null,
      onConflict: null,
      selectCols: null
    };
    const q = {
      select(cols){ state.selectCols = cols; return execGet(state); },
      eq(col, val){ state.filters.push({col, op:'==', val}); return q; },
      in(col, values){ state.filters.push({col, op:'in', val:values}); return q; },
      order(col, opts){ state.orderBy = { col, asc: !opts || opts.ascending !== false }; return q; },
      limit(n){ state.limitN = n; return q; },
      insert(rows){ return execInsert(state.table, rows); },
      upsert(row, opts){ state.onConflict = opts?.onConflict; return execUpsert(state.table, row, opts); },
      update(updates){ return execUpdate(state, updates); },
      delete(){ return execDelete(state); },
      single(){ return execGet(state, true); }
    };
    return q;
  }

  // 共通の Promise 化ヘルパー(完全な Promise 互換チェーンを返す)
  function _runAsync(asyncFn){
    return new Promise((resolve) => {
      asyncFn().then(resolve).catch(err => resolve({ data: null, error: err }));
    });
  }
  function _attachPromise(thenable, asyncFn){
    let cachedPromise = null;
    const getP = () => (cachedPromise || (cachedPromise = _runAsync(asyncFn)));
    thenable.then    = (onFul, onRej) => getP().then(onFul, onRej);
    thenable.catch   = (onRej)        => getP().catch(onRej);
    thenable.finally = (onFin)        => getP().finally(onFin);
    return thenable;
  }

  // === SELECT 実行 ===
  function execGet(state, single){
    const thenable = {
      eq(col, val){ state.filters.push({col, op:'==', val}); return thenable; },
      in(col, values){ state.filters.push({col, op:'in', val:values}); return thenable; },
      order(col, opts){ state.orderBy = { col, asc: !opts || opts.ascending !== false }; return thenable; },
      limit(n){ state.limitN = n; return thenable; },
      single(){ return execGet(state, true); }
    };
    return _attachPromise(thenable, async () => {
      try{
        let ref = _db.collection(state.table);
        for(const f of state.filters){
          // 'id' 列は Firestore のドキュメントIDとして扱う(Supabase の主キーセマンティクスに合わせる)
          if(f.col === 'id'){
            ref = ref.where(firebase.firestore.FieldPath.documentId(), f.op, f.val);
          }else{
            ref = ref.where(f.col, f.op, f.val);
          }
        }
        // where と orderBy の併用は複合インデックスを要するため、client-side でソートする
        const hasFilter = state.filters.length > 0;
        const serverOrderBy = !hasFilter && state.orderBy;
        if(serverOrderBy) ref = ref.orderBy(serverOrderBy.col, serverOrderBy.asc ? 'asc' : 'desc');
        const serverLimit = !hasFilter || !state.orderBy;
        if(serverLimit && state.limitN) ref = ref.limit(state.limitN);
        const snap = await ref.get();
        let data = snap.docs.map(d => normalizeDoc(d));
        if(hasFilter && state.orderBy){
          const col = state.orderBy.col;
          const dir = state.orderBy.asc ? 1 : -1;
          data.sort((a, b) => {
            const av = a[col], bv = b[col];
            if(av == null && bv == null) return 0;
            if(av == null) return 1;
            if(bv == null) return -1;
            if(typeof av === 'string') return av.localeCompare(bv, 'ja') * dir;
            return ((av > bv) - (av < bv)) * dir;
          });
          if(state.limitN) data = data.slice(0, state.limitN);
        }
        return { data: single ? (data[0] || null) : data, error: null };
      }catch(err){
        console.error('[firestore-get]', state.table, err);
        return { data: null, error: err };
      }
    });
  }

  // === INSERT 実行 ===
  async function execInsert(table, rows){
    try{
      const arr = Array.isArray(rows) ? rows : [rows];
      const written = [];
      for(const row of arr){
        const data = sanitize(row);
        let docRef;
        if(data.id){
          docRef = _db.collection(table).doc(String(data.id));
          await docRef.set(data);
        }else{
          docRef = _db.collection(table).doc();
          data.id = docRef.id;
          await docRef.set(data);
        }
        written.push({ id: docRef.id, ...data });
      }
      return makeReturnable({ data: Array.isArray(rows) ? written : written[0], error: null });
    }catch(err){
      console.error('[firestore-insert]', table, err);
      return makeReturnable({ data: null, error: err });
    }
  }

  // === UPSERT 実行 ===
  async function execUpsert(table, row, opts){
    try{
      const arr = Array.isArray(row) ? row : [row];
      const conflictCol = opts?.onConflict || 'id';
      const written = [];
      for(const r of arr){
        const data = sanitize(r);
        let docRef;
        // id か onConflict 列で既存検索
        if(data.id){
          docRef = _db.collection(table).doc(String(data.id));
          await docRef.set(data, { merge: true });
        }else if(conflictCol && data[conflictCol] !== undefined){
          const snap = await _db.collection(table).where(conflictCol, '==', data[conflictCol]).limit(1).get();
          if(!snap.empty){
            docRef = snap.docs[0].ref;
            await docRef.set(data, { merge: true });
          }else{
            docRef = _db.collection(table).doc();
            data.id = docRef.id;
            await docRef.set(data);
          }
        }else{
          docRef = _db.collection(table).doc();
          data.id = docRef.id;
          await docRef.set(data);
        }
        const fresh = await docRef.get();
        written.push(normalizeDoc(fresh));
      }
      return makeReturnable({ data: Array.isArray(row) ? written : written[0], error: null });
    }catch(err){
      console.error('[firestore-upsert]', table, err);
      return makeReturnable({ data: null, error: err });
    }
  }

  // === UPDATE 実行 ===
  function execUpdate(state, updates){
    const thenable = {
      eq(col, val){ state.filters.push({col, op:'==', val}); return thenable; },
      in(col, values){ state.filters.push({col, op:'in', val:values}); return thenable; }
    };
    return _attachPromise(thenable, async () => {
      try{
        let ref = _db.collection(state.table);
        for(const f of state.filters){
          // 'id' 列は Firestore のドキュメントIDとして扱う(Supabase の主キーセマンティクスに合わせる)
          if(f.col === 'id'){
            ref = ref.where(firebase.firestore.FieldPath.documentId(), f.op, f.val);
          }else{
            ref = ref.where(f.col, f.op, f.val);
          }
        }
        const snap = await ref.get();
        await Promise.all(snap.docs.map(d => d.ref.update(sanitize(updates))));
        return { data: snap.docs.map(d => normalizeDoc(d)), error: null };
      }catch(err){
        console.error('[firestore-update]', state.table, err);
        return { data: null, error: err };
      }
    });
  }

  // === DELETE 実行 ===
  function execDelete(state){
    const thenable = {
      eq(col, val){ state.filters.push({col, op:'==', val}); return thenable; },
      in(col, values){ state.filters.push({col, op:'in', val:values}); return thenable; }
    };
    return _attachPromise(thenable, async () => {
      try{
        let ref = _db.collection(state.table);
        for(const f of state.filters){
          // 'id' 列は Firestore のドキュメントIDとして扱う(Supabase の主キーセマンティクスに合わせる)
          if(f.col === 'id'){
            ref = ref.where(firebase.firestore.FieldPath.documentId(), f.op, f.val);
          }else{
            ref = ref.where(f.col, f.op, f.val);
          }
        }
        const snap = await ref.get();
        await Promise.all(snap.docs.map(d => d.ref.delete()));
        return { data: null, error: null };
      }catch(err){
        console.error('[firestore-delete]', state.table, err);
        return { data: null, error: err };
      }
    });
  }

  // === ヘルパー ===
  function sanitize(obj){
    const out = {};
    for(const k in obj){
      if(obj[k] === undefined) continue;
      out[k] = obj[k];
    }
    return out;
  }
  function normalizeDoc(doc){
    const data = doc.data ? doc.data() : doc;
    const id = doc.id || data.id;
    return { ...data, id };
  }
  function makeReturnable(result){
    // .select() を後置できるよう
    return Object.assign({
      select(){
        return Promise.resolve(result);
      },
      single(){
        const r = { ...result };
        if(Array.isArray(r.data)) r.data = r.data[0] || null;
        return Promise.resolve(r);
      },
      then(resolve){ resolve(result); }
    }, result);
  }

  // ===== RPC(原子的操作)を Firestore トランザクションで実装 =====
  async function rpcCall(name, params){
    try{
      if(name === 'increment_store_inventory'){
        const ref = _db.collection('store_inventory')
          .doc(`${params.p_item_id}_${params.p_store_code}`);
        await _db.runTransaction(async (tx) => {
          const snap = await tx.get(ref);
          const cur = snap.exists ? (snap.data().quantity || 0) : 0;
          const next = Math.max(0, cur + (params.p_delta || 0));
          tx.set(ref, {
            item_id: params.p_item_id,
            store_code: params.p_store_code,
            quantity: next,
            updated_by: params.p_user_id || null,
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        });
        return { data: null, error: null };
      }
      if(name === 'increment_apartment_inventory'){
        const ref = _db.collection('apartment_inventory').doc(String(params.p_item_id));
        await _db.runTransaction(async (tx) => {
          const snap = await tx.get(ref);
          const cur = snap.exists ? (snap.data().quantity || 0) : 0;
          const next = Math.max(0, cur + (params.p_delta || 0));
          tx.set(ref, {
            item_id: params.p_item_id,
            quantity: next,
            updated_by: params.p_user_id || null,
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        });
        return { data: null, error: null };
      }
      if(name === 'apply_transfer'){
        // アパート から 店舗 へ qty 個移動
        const aptRef = _db.collection('apartment_inventory').doc(String(params.p_item_id));
        const storeRef = _db.collection('store_inventory')
          .doc(`${params.p_item_id}_${params.p_store_code}`);
        await _db.runTransaction(async (tx) => {
          const [aptSnap, storeSnap] = await Promise.all([tx.get(aptRef), tx.get(storeRef)]);
          const apt = aptSnap.exists ? (aptSnap.data().quantity || 0) : 0;
          const store = storeSnap.exists ? (storeSnap.data().quantity || 0) : 0;
          const moveQty = Math.min(params.p_qty || 0, apt);
          tx.set(aptRef, {
            item_id: params.p_item_id,
            quantity: Math.max(0, apt - moveQty),
            updated_by: params.p_user_id || null,
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
          tx.set(storeRef, {
            item_id: params.p_item_id,
            store_code: params.p_store_code,
            quantity: store + moveQty,
            updated_by: params.p_user_id || null,
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        });
        return { data: null, error: null };
      }
      if(name === 'set_order_checked'){
        const ref = _db.collection('order_checks').doc(`${params.p_item_id}_${params.p_scope}`);
        if(params.p_checked){
          await ref.set({
            item_id: params.p_item_id,
            scope: params.p_scope,
            checked: true,
            checked_at: firebase.firestore.FieldValue.serverTimestamp(),
            checked_qty: params.p_qty || 0,
            user_id: params.p_user_id || null,
            note: params.p_note || null
          });
        }else{
          await ref.delete().catch(() => {});
        }
        return { data: null, error: null };
      }
      return { data: null, error: new Error('Unknown RPC: ' + name) };
    }catch(err){
      console.error('[firestore-rpc]', name, err);
      return { data: null, error: err };
    }
  }

  // ===== Auth =====
  const authApi = {
    async signInWithPassword({email, password}){
      try{
        ensureInit();
        const cred = await _auth.signInWithEmailAndPassword(email, password);
        _currentUser = cred.user;
        return {
          data: { user: cred.user, session: { user: cred.user } },
          error: null
        };
      }catch(err){
        return { data: null, error: err };
      }
    },
    async signOut(){
      try{ await _auth.signOut(); _currentUser = null; return { error: null }; }
      catch(err){ return { error: err }; }
    },
    async getUser(){
      ensureInit();
      return { data: { user: _auth.currentUser }, error: null };
    },
    async getSession(){
      ensureInit();
      const user = _auth.currentUser;
      return { data: { session: user ? { user } : null }, error: null };
    },
    onAuthStateChange(cb){
      _authListeners.push(cb);
      // 即時に状態通知も行う(Supabase 互換のため SUBSCRIPTION 風オブジェクトを返す)
      return { data: { subscription: { unsubscribe: () => { const i = _authListeners.indexOf(cb); if(i>=0) _authListeners.splice(i,1); } } } };
    }
  };

  // ===== Channel (リアルタイム購読) =====
  function makeChannel(name){
    const listeners = [];
    const channelObj = {
      on(event, opts, cb){
        // opts.event: INSERT, UPDATE, DELETE, *
        // opts.schema, opts.table
        const table = opts?.table;
        if(table){
          const unsub = _db.collection(table).onSnapshot(snap => {
            snap.docChanges().forEach(change => {
              cb({
                eventType: change.type.toUpperCase(),
                new: normalizeDoc(change.doc),
                old: null,
                table
              });
            });
          });
          listeners.push(unsub);
        }
        return channelObj;
      },
      subscribe(){ return channelObj; },
      unsubscribe(){ listeners.forEach(u => u()); return Promise.resolve(); }
    };
    return channelObj;
  }

  function removeChannel(channel){
    if(channel && channel.unsubscribe) return channel.unsubscribe();
  }

  // ===== クライアント生成 =====
  function createFirebaseClient(){
    ensureInit();
    return {
      from(table){ return makeQuery(table); },
      auth: authApi,
      rpc: rpcCall,
      channel: makeChannel,
      removeChannel,
      _firebase: { app: _app, db: _db, auth: _auth }
    };
  }

  global.createFirebaseClient = createFirebaseClient;
  global.__FIREBASE_CONFIG = FIREBASE_CONFIG;
})(window);
