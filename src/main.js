const STORES = ['神楽坂','男マエ食道'];
const CATEGORY_OPTIONS = ['消耗品','ドリンク','食材'];
const UNIT_OPTIONS = ['本','袋','箱','ケース','缶','個','kg'];

const DEFAULT_ITEMS = [
  {name:'天然水 SPARKLING', unit:'ケース', min:3, target:6, category:'ドリンク', stores:['神楽坂','男マエ食道']},
  {name:'コーラ（PET）', unit:'本', min:20, target:40, category:'ドリンク', stores:['男マエ食道']},
  {name:'ジンジャーエール（PET）', unit:'本', min:20, target:40, category:'ドリンク', stores:['男マエ食道']},
  {name:'双生8寸(21cm)100/袋', unit:'袋', min:4, target:8, category:'消耗品', stores:['神楽坂','男マエ食道']},
  {name:'おしぼり[FT]タイムリー125/袋', unit:'袋', min:2, target:6, category:'消耗品', stores:['神楽坂','男マエ食道']},
  {name:'理研 キャノーラサラダ油 16.5kg', unit:'缶', min:1, target:2, category:'食材', stores:['神楽坂','男マエ食道']},
  {name:'ティッシュペーパー200組×5個', unit:'箱', min:10, target:20, category:'消耗品', stores:['神楽坂','男マエ食道']},
  {name:'ニトリルバリューS', unit:'箱', min:0, target:2, category:'消耗品', stores:['神楽坂']},
  {name:'ニトリルバリューM', unit:'箱', min:1, target:3, category:'消耗品', stores:['神楽坂','男マエ食道']},
  {name:'ニトリルバリューL', unit:'箱', min:1, target:3, category:'消耗品', stores:['神楽坂','男マエ食道']},
  {name:'エルヴェール ペーパータオル', unit:'袋', min:4, target:8, category:'消耗品', stores:['神楽坂','男マエ食道']},
  {name:'ポリエチレン キッチンラップ30cm×100m', unit:'本', min:3, target:6, category:'消耗品', stores:['神楽坂','男マエ食道']},
  {name:'マイソフトコンク１kg', unit:'袋', min:1, target:2, category:'食材', stores:['神楽坂','男マエ食道']},
  {name:'ハンドスキッシュEX 4.5L 2本', unit:'本', min:1, target:2, category:'消耗品', stores:['神楽坂','男マエ食道']},
  {name:'トイレットペーパー絹織(シングル２倍)', unit:'個', min:5, target:12, category:'消耗品', stores:['神楽坂','男マエ食道']},
  {name:'福助 ニューポリ袋 08 No.12', unit:'袋', min:1, target:2, category:'消耗品', stores:['神楽坂']},
  {name:'福助 ニューポリ袋 08 No.7', unit:'袋', min:1, target:2, category:'消耗品', stores:['神楽坂']},
];

const DEFAULT_STORE = {
  '天然水 SPARKLING': {'神楽坂':4,'男マエ食道':0},
  'コーラ（PET）': {'神楽坂':null,'男マエ食道':20},
  'ジンジャーエール（PET）': {'神楽坂':null,'男マエ食道':18},
  '双生8寸(21cm)100/袋': {'神楽坂':6,'男マエ食道':6},
  'おしぼり[FT]タイムリー125/袋': {'神楽坂':2,'男マエ食道':2},
  '理研 キャノーラサラダ油 16.5kg': {'神楽坂':2,'男マエ食道':2},
  'ティッシュペーパー200組×5個': {'神楽坂':15,'男マエ食道':15},
  'ニトリルバリューS': {'神楽坂':1,'男マエ食道':null},
  'ニトリルバリューM': {'神楽坂':2,'男マエ食道':2},
  'ニトリルバリューL': {'神楽坂':2,'男マエ食道':2},
  'エルヴェール ペーパータオル': {'神楽坂':6,'男マエ食道':6},
  'ポリエチレン キッチンラップ30cm×100m': {'神楽坂':4,'男マエ食道':4},
  'マイソフトコンク１kg': {'神楽坂':2,'男マエ食道':2},
  'ハンドスキッシュEX 4.5L 2本': {'神楽坂':2,'男マエ食道':2},
  'トイレットペーパー絹織(シングル２倍)': {'神楽坂':28,'男マエ食道':28},
  '福助 ニューポリ袋 08 No.12': {'神楽坂':2,'男マエ食道':null},
  '福助 ニューポリ袋 08 No.7': {'神楽坂':2,'男マエ食道':null},
};

const DEFAULT_APT = [
  {name:'天然水 SPARKLING', unit:'ケース', stock:2, min:2, target:6, orderQty:4, supplier:'アマゾン', category:'ドリンク'},
  {name:'コーラ（PET）', unit:'ケース', stock:2, min:1, target:4, orderQty:1, supplier:'アマゾン', category:'ドリンク'},
  {name:'ジンジャーエール（PET）', unit:'ケース', stock:2, min:0, target:4, orderQty:1, supplier:'アマゾン', category:'ドリンク'},
  {name:'双生8寸(21cm)100/袋', unit:'袋', stock:19, min:2, target:30, orderQty:30, supplier:'みやこオンライン', category:'消耗品'},
  {name:'おしぼり[FT]タイムリー125/袋', unit:'袋', stock:6, min:2, target:10, orderQty:8, supplier:'王子タイムリー', category:'消耗品'},
  {name:'理研 キャノーラサラダ油 16.5kg', unit:'缶', stock:1, min:0, target:2, orderQty:2, supplier:'ハピネス', category:'食材'},
  {name:'ティッシュペーパー200組×5個', unit:'箱', stock:0, min:0, target:2, orderQty:1, supplier:'コスモス', category:'消耗品'},
  {name:'ニトリルバリューS', unit:'箱', stock:1, min:0, target:2, orderQty:1, supplier:'ハピネス', category:'消耗品'},
  {name:'ニトリルバリューM', unit:'箱', stock:0, min:0, target:2, orderQty:1, supplier:'ハピネス', category:'消耗品'},
  {name:'ニトリルバリューL', unit:'箱', stock:1, min:0, target:2, orderQty:1, supplier:'ハピネス', category:'消耗品'},
  {name:'エルヴェール ペーパータオル', unit:'袋', stock:40, min:4, target:42, orderQty:42, supplier:'容器スタイル', category:'消耗品'},
  {name:'ポリエチレン キッチンラップ30cm×100m', unit:'本', stock:26, min:4, target:30, orderQty:30, supplier:'容器スタイル', category:'消耗品'},
  {name:'マイソフトコンク１kg', unit:'袋', stock:0, min:1, target:3, orderQty:2, supplier:'ハピネス', category:'食材'},
  {name:'ハンドスキッシュEX 4.5L 2本', unit:'本', stock:0, min:0, target:2, orderQty:null, supplier:'ココデカウ', category:'消耗品'},
  {name:'トイレットペーパー絹織(シングル２倍)', unit:'個', stock:12, min:0, target:12, orderQty:12, supplier:'コスモス', category:'消耗品'},
];

function load(key, def){
  try{
    const s = localStorage.getItem(key);
    if(s) return JSON.parse(s);
  }catch(e){}
  return JSON.parse(JSON.stringify(def));
}
function persist(key, data, tsKey){
  try{
    localStorage.setItem(key, JSON.stringify(data));
    if(tsKey) localStorage.setItem(tsKey, String(Date.now()));
  }catch(e){
    console.error('persist failed:', e);
    toast('保存に失敗しました。ストレージ容量を確認してください。');
  }
}
function nowText(){
  return new Date().toLocaleString('ja-JP',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'});
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function clampInt(value,min=0,max=9999){
  if(value === '' || value == null) return null;
  const n = Number(value);
  if(!Number.isFinite(n)) return null;
  return Math.min(max, Math.max(min, Math.floor(n)));
}
function inferCategory(name,current){
  if(current && CATEGORY_OPTIONS.includes(current)) return current;
  const s = String(name || '');
  if(/コーラ|ジンジャー|SPARKLING|水|炭酸/i.test(s)) return 'ドリンク';
  if(/油|ソフトコンク/i.test(s)) return '食材';
  return '消耗品';
}
function normalizeStoreItem(item){
  return {
    category: inferCategory(item.name, item.category),
    target: item.target ?? ((item.min || 0) * 2 || 1),
    supplier: item.supplier || '',
    supplierUrl: (item.supplierUrl || '').trim(),
    orderQty: item.orderQty ?? null,
    stores: item.stores || ['神楽坂','男マエ食道'],
    ...item,
    name: (item.name || '').trim(),  // normalize whitespace
  };
}
function normalizeAptItem(item){
  return {
    category: inferCategory(item.name, item.category),
    target: item.target ?? ((item.min || 0) * 2 || 1),
    supplier: item.supplier || '—',
    supplierUrl: (item.supplierUrl || '').trim(),
    orderQty: item.orderQty ?? null,
    ...item,
    name: (item.name || '').trim(),  // normalize whitespace
  };
}


const SUPABASE_STORAGE_KEY = 'inv_supabase_config_v1';
const STORE_CODE_MAP = {'神楽坂':'kagurazaka','男マエ食道':'otokomae'};
const STORE_NAME_MAP = {'kagurazaka':'神楽坂','otokomae':'男マエ食道'};
let supabaseClient = null;
let currentAuthUser = null;
let cloudEnabled = false;
let itemIdByName = {};
let itemNameById = {};
let transferInFlight = false;
let transferDraftQty = {};

function resolveItemIdByName(name){
  return itemIdByName[name]
    || ITEMS.find(i => i.name === name)?.id
    || aptStock.find(i => i.name === name)?.itemId
    || aptStock.find(i => i.name === name)?.id
    || null;
}
function cloudErrorMessage(err, fallback='クラウド保存に失敗しました'){
  if(!err) return fallback;
  return err.message || err.details || err.hint || fallback;
}

function cloudConfig(){
  return load(SUPABASE_STORAGE_KEY, {url:'', anonKey:'', email:'', password:''});
}
function saveCloudConfig(cfg){
  persist(SUPABASE_STORAGE_KEY, cfg);
}
function updateSyncStatus(text, connected=false){
  const el = document.getElementById('sync-status');
  if(!el) return;
  el.textContent = text;
  el.style.background = connected ? '#e8f5ee' : '#f3efe8';
  el.style.color = connected ? 'var(--green)' : 'var(--text)';
}
function openCloudSettings(){ showTab('settings'); }
function closeCloudModal(){ /* modal removed – settings now in tab */ }
function closeCloudModalOutside(e){ /* modal removed */ }
function isCloudReady(){
  return cloudEnabled && !!supabaseClient && !!currentAuthUser;
}
async function connectSupabase(){
  const url = document.getElementById('cloud-url').value.trim();
  const anonKey = document.getElementById('cloud-anon-key').value.trim();
  const email = document.getElementById('cloud-email').value.trim();
  const password = document.getElementById('cloud-password').value.trim();
  if(!url || !anonKey || !email || !password){
    alert('Supabase URL / Anon Key / メール / パスワードを入力してください');
    return;
  }
  try{
    supabaseClient = window.supabase.createClient(url, anonKey);
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if(error) throw error;
    currentAuthUser = data.user;
    cloudEnabled = true;
    saveCloudConfig({url, anonKey, email, password});
    await upsertMyProfile();
    await reloadAllFromSupabase();
    updateSyncStatus('接続中: ' + email, true);
    closeCloudModal();
    toast('☁ Supabase に接続しました');
  }catch(err){
    console.error(err);
    updateSyncStatus('接続失敗');
    alert('接続に失敗しました: ' + (err.message || err));
  }
}
async function tryAutoConnectSupabase(){
  const cfg = cloudConfig();
  if(!cfg.url || !cfg.anonKey) return;
  try{
    supabaseClient = window.supabase.createClient(cfg.url, cfg.anonKey);
    const { data } = await supabaseClient.auth.getSession();
    if(data?.session?.user){
      currentAuthUser = data.session.user;
      cloudEnabled = true;
      await upsertMyProfile();
      await reloadAllFromSupabase();
      updateSyncStatus('接続中: ' + (cfg.email || currentAuthUser.email || 'logged-in'), true);
      return;
    }

    if(cfg.email && cfg.password){
      const { data: loginData, error: loginError } = await supabaseClient.auth.signInWithPassword({
        email: cfg.email,
        password: cfg.password
      });
      if(loginError) throw loginError;
      currentAuthUser = loginData.user;
      cloudEnabled = true;
      await upsertMyProfile();
      await reloadAllFromSupabase();
      updateSyncStatus('接続中: ' + (cfg.email || currentAuthUser.email || 'logged-in'), true);
    }else{
      updateSyncStatus('設定済み（再ログイン待ち）');
    }
  }catch(err){
    console.error(err);
    updateSyncStatus('接続失敗');
  }
}
async function upsertMyProfile(){
  if(!supabaseClient || !currentAuthUser) return;
  const displayName = localStorage.getItem('inv_user') || currentAuthUser.email?.split('@')[0] || 'staff';
  await supabaseClient.from('profiles').upsert({
    id: currentAuthUser.id,
    display_name: displayName
  });
}
function mapItemRow(row, targets){
  return normalizeStoreItem({
    id: row.id,
    itemId: row.id,
    name: row.name,
    category: row.category,
    unit: row.unit,
    min: row.min_stock,
    target: row.target_stock,
    supplier: row.supplier || '',
    supplierUrl: (row.supplier_url || '').trim(),
    orderQty: row.fixed_order_qty ?? null,
    stores: targets
  });
}
async function reloadAllFromSupabase(){
  if(!supabaseClient) return;
  updateSyncStatus('同期中...');
  const [itemsRes, targetsRes, storeRes, aptRes, orderRes, logsRes] = await Promise.all([
    supabaseClient.from('items').select('*').eq('is_active', true).order('name'),
    supabaseClient.from('item_store_targets').select('*').eq('is_enabled', true),
    supabaseClient.from('store_inventory').select('*'),
    supabaseClient.from('apartment_inventory').select('*'),
    supabaseClient.from('order_checks').select('*').eq('checked', true),
    supabaseClient.from('inventory_logs').select('*').order('created_at', {ascending:false}).limit(200)
  ]);
  if(itemsRes.error) throw itemsRes.error;
  if(targetsRes.error) throw targetsRes.error;
  if(storeRes.error) throw storeRes.error;
  if(aptRes.error) throw aptRes.error;
  if(orderRes.error) throw orderRes.error;
  if(logsRes.error) throw logsRes.error;

  itemIdByName = {};
  itemNameById = {};
  const targetMap = {};
  (targetsRes.data || []).forEach(t => {
    const name = STORE_NAME_MAP[t.store_code];
    if(!targetMap[t.item_id]) targetMap[t.item_id] = [];
    if(name) targetMap[t.item_id].push(name);
  });

  ITEMS = (itemsRes.data || []).map(row => {
    itemIdByName[row.name] = row.id;
    itemNameById[row.id] = row.name;
    return mapItemRow(row, targetMap[row.id] || []);
  });

  storeStock = {};
  ITEMS.forEach(item => {
    storeStock[item.name] = {'神楽坂': null, '男マエ食道': null};
  });
  (storeRes.data || []).forEach(r => {
    const name = itemNameById[r.item_id];
    const storeName = STORE_NAME_MAP[r.store_code];
    if(name && storeName){
      if(!storeStock[name]) storeStock[name] = {'神楽坂': null, '男マエ食道': null};
      storeStock[name][storeName] = r.quantity;
    }
  });

  aptStock = (aptRes.data || []).map(r => {
    const item = ITEMS.find(i => i.id === r.item_id || itemIdByName[i?.name] === r.item_id || i.name === itemNameById[r.item_id]);
    const fallback = ITEMS.find(i => i.name === itemNameById[r.item_id]);
    const ref = item || fallback;
    return normalizeAptItem({
      id: r.id,
      itemId: r.item_id,
      name: ref?.name || itemNameById[r.item_id] || '不明商品',
      category: ref?.category || '消耗品',
      unit: ref?.unit || '個',
      stock: r.quantity,
      min: (r.min_stock ?? ref?.min) ?? 0,
      target: (r.target_stock ?? ref?.target) ?? 1,
      supplier: ref?.supplier || '—',
      supplierUrl: ref?.supplierUrl || '',
      orderQty: ref?.orderQty ?? null
    });
  });

  orderChecks = {};
  (orderRes.data || []).forEach(r => {
    const itemName = itemNameById[r.item_id];
    const scopeName = r.scope === 'store_shortage' ? '店舗不足' : 'アパート発注';
    if(itemName){
      orderChecks[`${scopeName}__${itemName}`] = {
        checkedAt: new Date(r.checked_at).getTime(),
        user: '',
        qty: r.checked_qty || 0,
        unit: ITEMS.find(i=>i.name===itemName)?.unit || '',
        supplier: ITEMS.find(i=>i.name===itemName)?.supplier || ''
      };
    }
  });


  // ── Auto-clear stale orderChecks (item no longer below min) ──────
  // Must run here so Supabase is also updated (not just localStorage).
  const _staleOC = [];
  Object.keys(orderChecks).forEach(function(key){
    const sep  = key.indexOf('__');
    const sc   = key.slice(0, sep);
    const nm   = key.slice(sep + 2);
    let stale  = false;
    if(sc === '店舗不足'){
      const it = ITEMS.find(function(i){ return i.name === nm; });
      // Stale if: item gone, stock recovered, OR url removed (moved to shopping)
      stale = !it || getTotal(it) > it.min || !it.supplierUrl;
    } else {
      const ap = aptStock.find(function(a){ return a.name === nm; });
      stale = !ap || ap.stock > ap.min || !ap.supplierUrl;
    }
    if(stale) _staleOC.push({ key:key, scope:sc, name:nm, entry:orderChecks[key] });
  });
  if(_staleOC.length){
    _staleOC.forEach(function(s){ delete orderChecks[s.key]; });
    persist('inv_order_checks_v1', orderChecks);
    // Clear in Supabase so next sync does not restore them
    if(isCloudReady() && currentAuthUser){
      _staleOC.forEach(function(s){
        const iid = itemIdByName[s.name];
        if(!iid) return;
        cloudRpc('set_order_checked', {
          p_item_id: iid,
          p_scope: s.scope === '店舗不足' ? 'store_shortage' : 'apartment_order',
          p_checked: false,
          p_qty: (s.entry && s.entry.qty) || 0,
          p_user_id: currentAuthUser.id,
          p_note: null
        }).catch(function(e){ console.error('auto-clear orderCheck:', e); });
      });
    }
  }
  // ──────────────────────────────────────────────────────────────────
  logs = (logsRes.data || []).map(r => ({
    at: new Date(r.created_at).getTime(),
    type: ({
      quantity_change:'数量変更',
      transfer_apply:'補充実行',
      transfer_undo:'補充取消',
      order_checked:'発注済み',
      order_unchecked:'発注済み取消',
      item_created:'追加',
      item_updated:'編集',
      item_deleted:'削除'
    })[r.action_type] || r.action_type,
    scope: r.scope,
    itemName: r.item_name_snapshot,
    message: r.message,
    user: r.acted_by_name || '担当者未設定',
    delta: r.quantity_delta
  }));

  persist('inv_items_v3', ITEMS);
  persist('inv_store_v3', storeStock, 'inv_store_ts_v3');
  persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');
  persist('inv_logs_v3', logs);
  persist('inv_order_checks_v1', orderChecks);
  setLastSaved('store','inv_store_ts_v3');
  setLastSaved('apt','inv_apt_ts_v3');
  updateSyncStatus('接続中: ' + (cloudConfig().email || currentAuthUser?.email || 'cloud'), true);
  renderDashboard(); renderUndoBar(); renderStore(); renderLogs();
  if(document.getElementById('view-apt').style.display !== 'none') renderApt();
  if(document.getElementById('view-refill').style.display !== 'none') renderRefill();
  if(document.getElementById('view-order').style.display !== 'none') renderOrder();
    if(document.getElementById('view-shopping').style.display !== 'none') renderShopping();
}
async function cloudRpc(name, params){
  const { error, data } = await supabaseClient.rpc(name, params);
  if(error) throw error;
  return data;
}
async function cloudUpdateItem(item, mode='upsert'){
  if(!isCloudReady()) return;
  const payload = {
    id: item.id || undefined,
    name: item.name,
    category: item.category,
    unit: item.unit,
    supplier: item.supplier || null,
    supplier_url: item.supplierUrl || null,
    fixed_order_qty: item.orderQty ?? null,
    is_active: mode === 'delete' ? false : true
  };
  // min/target は明示指定された場合のみ items テーブルに反映(アパート編集時は未指定にして店舗値を保持)
  if(item.min !== undefined && item.min !== null)    payload.min_stock    = item.min;
  if(item.target !== undefined && item.target !== null) payload.target_stock = item.target;
  const { data, error } = await supabaseClient.from('items').upsert(payload).select().single();
  if(error) throw error;
  item.id = data.id;
  itemIdByName[item.name] = data.id;
  itemNameById[data.id] = item.name;
  return data.id;
}
async function cloudReplaceStoreTargets(item){
  if(!isCloudReady() || !item.id) return;
  await supabaseClient.from('item_store_targets').delete().eq('item_id', item.id);
  const rows = item.stores.map(s => ({ item_id:item.id, store_code: STORE_CODE_MAP[s], is_enabled:true }));
  if(rows.length) {
    const { error } = await supabaseClient.from('item_store_targets').insert(rows);
    if(error) throw error;
  }
  for(const s of item.stores){
    const qty = storeStock[item.name]?.[s] ?? 0;
    const { error } = await supabaseClient.from('store_inventory').upsert({
      item_id:item.id, store_code:STORE_CODE_MAP[s], quantity:qty, updated_by:currentAuthUser.id
    }, { onConflict: 'item_id,store_code' });
    if(error) throw error;
  }
}
async function cloudEnsureStoreTarget(itemId, storeName){
  if(!isCloudReady() || !itemId || !STORE_CODE_MAP[storeName]) return;
  const { error } = await supabaseClient
    .from('item_store_targets')
    .upsert({
      item_id: itemId,
      store_code: STORE_CODE_MAP[storeName],
      is_enabled: true
    }, { onConflict: 'item_id,store_code' });
  if(error) throw error;
}

async function cloudUpsertStoreQuantity(itemName, storeName, qty){
  if(!isCloudReady()) return;
  const item = ITEMS.find(i => i.name === itemName);
  if(!item) return;
  let itemId = itemIdByName[item.name] || item.itemId;
  if(!itemId){
    itemId = await cloudUpdateItem(item, 'upsert');
  }
  await cloudEnsureStoreTarget(itemId, storeName);
  const { error } = await supabaseClient.from('store_inventory').upsert({
    item_id:itemId,
    store_code:STORE_CODE_MAP[storeName],
    quantity:qty,
    updated_by:currentAuthUser.id
  }, { onConflict: 'item_id,store_code' });
  if(error) throw error;
}
async function cloudUpsertApartment(itemName){
  if(!isCloudReady()) return;
  const apt = aptStock.find(a => a.name === itemName);
  const item = ITEMS.find(i => i.name === itemName) || apt;
  if(!item) return;
  let itemId = itemIdByName[item.name] || item.itemId;
  if(!itemId){
    itemId = await cloudUpdateItem(item, 'upsert');
  }
  const qty = apt?.stock ?? 0;
  const payload = { item_id:itemId, quantity:qty, updated_by:currentAuthUser.id };
  if(apt && Number.isFinite(apt.min))    payload.min_stock    = apt.min;
  if(apt && Number.isFinite(apt.target)) payload.target_stock = apt.target;
  const { error } = await supabaseClient.from('apartment_inventory').upsert(payload, { onConflict: 'item_id' });
  if(error) throw error;
}

let ITEMS = load('inv_items_v3', DEFAULT_ITEMS).map(normalizeStoreItem);
let storeStock = load('inv_store_v3', DEFAULT_STORE);
let aptStock = load('inv_apt_v3', DEFAULT_APT).map(normalizeAptItem);
let logs = load('inv_logs_v3', []);
let orderChecks = load('inv_order_checks_v1', {});
let modalState = {};
let selectedStores = ['神楽坂','男マエ食道'];
let quickFilter = 'all';
let storeViewFilter = localStorage.getItem('inv_store_view_filter_v1') || 'all';
let storeChecklist = load('inv_store_checklist_v1', {});
let lastTransferAction = null;
let undoTimer = null;
let shoppingQtyOverrides = {};
let shoppingPurchased = {};
let shoppingDirectPending = null;

function updateHeaderUser(){
  const user = localStorage.getItem('inv_user') || '未設定';
  const el = document.getElementById('header-user-chip');
  if(el) el.textContent = '担当者 ' + user;
}
function setLastSaved(suffix, tsKey){
  const ts = localStorage.getItem(tsKey);
  const el = document.getElementById('last-updated-' + suffix);
  if(ts && el){
    const d = new Date(parseInt(ts,10));
    el.textContent = '最終保存: ' + d.toLocaleString('ja-JP',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'});
  }
}

function todayChecklistKey(){
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
function cleanupOldChecklistEntries(){
  const today = todayChecklistKey() + '__';
  let changed = false;
  Object.keys(storeChecklist).forEach(key => {
    if(!key.startsWith(today)){
      delete storeChecklist[key];
      changed = true;
    }
  });
  if(changed) persist('inv_store_checklist_v1', storeChecklist);
}
function checklistEntryKey(itemName, storeName){
  return `${todayChecklistKey()}__${itemName}__${storeName}`;
}
function isStoreChecked(itemName, storeName){
  return !!storeChecklist[checklistEntryKey(itemName, storeName)];
}
function toggleStoreChecked(encodedItemName, encodedStoreName){
  const itemName = decodeURIComponent(encodedItemName);
  const storeName = decodeURIComponent(encodedStoreName);
  const user = localStorage.getItem('inv_user') || '担当者未設定';
  const key = checklistEntryKey(itemName, storeName);
  if(storeChecklist[key]){
    delete storeChecklist[key];
    toast(`${storeName} / ${itemName} の確認済みを解除しました`);
  }else{
    storeChecklist[key] = { at: Date.now(), user };
    toast(`${storeName} / ${itemName} を確認済みにしました`);
  }
  persist('inv_store_checklist_v1', storeChecklist);
  renderStore();
}
function setStoreViewFilter(value){
  storeViewFilter = value;
  localStorage.setItem('inv_store_view_filter_v1', value);
  updateStoreViewButtons();
  renderStore();
}
function updateStoreViewButtons(){
  const map = {
    'all': 'store-view-all',
    '神楽坂': 'store-view-kagurazaka',
    '男マエ食道': 'store-view-otokomae'
  };
  Object.entries(map).forEach(([value, id]) => {
    const el = document.getElementById(id);
    if(el) el.classList.toggle('active', storeViewFilter === value);
  });
}
function eid(name, suf){ return (name + '__' + suf).replace(/[^\w]/g, '_'); }
function getTotal(item){ return item.stores.reduce((s, st) => s + (storeStock[item.name]?.[st] ?? 0), 0); }
function getUsageScore(name){
  return logs.filter(l => l.itemName === name && l.type === '数量変更' && l.delta < 0)
    .reduce((sum, l) => sum + Math.abs(l.delta), 0);
}
function getTarget(item){
  return Number.isFinite(item.target) ? item.target : ((item.min || 0) * 2 || 1);
}
function getStatusLevel(current, min){
  if(current <= min) return 'danger';
  if(current <= min + 2) return 'warning';
  return 'success';
}
function getStatusText(current, min){
  const level = getStatusLevel(current, min);
  if(level === 'danger') return '🔴 要補充';
  if(level === 'warning') return '🟡 要注意';
  return '🟢 正常';
}
function getAutoOrderQty(currentStock, min, target, fixedOrderQty){
  if(fixedOrderQty != null && fixedOrderQty !== '') return fixedOrderQty;
  const safeTarget = Math.max(target || 0, (min || 0) + 1, 1);
  return Math.max(0, safeTarget - currentStock);
}
function findAptItem(name){ return aptStock.find(a => a.name === name) || null; }
function getTransferSuggestion(storeItem){
  const total = getTotal(storeItem);
  const shortage = Math.max(0, (storeItem.min + 1) - total);
  const apt = findAptItem(storeItem.name);
  if(!apt || shortage <= 0 || apt.stock <= 0) return null;
  const moveQty = Math.min(shortage, apt.stock);
  return { apt, shortage, moveQty, remainingShortage: Math.max(0, shortage - moveQty) };
}

function getTransferKey(name, store){
  return `${name}__${store}`;
}
function getStoreShortage(item, storeName){
  const current = storeStock[item.name]?.[storeName];
  return Math.max(0, (item.min + 1) - (current ?? 0));
}
function getDraftValue(name, storeName){
  const saved = transferDraftQty[getTransferKey(name, storeName)];
  return Number.isFinite(saved) ? saved : null;
}
function buildTransferPlanMap(item, transfer){
  const plan = {};
  let remainingApt = Math.max(0, transfer?.apt?.stock ?? 0);

  for(const s of item.stores){
    const shortage = getStoreShortage(item, s);
    const saved = getDraftValue(item.name, s);
    if(saved != null){
      const qty = Math.max(0, Math.min(Math.floor(Number(saved) || 0), shortage, remainingApt));
      plan[s] = qty;
      remainingApt -= qty;
    }else{
      plan[s] = null;
    }
  }

  for(const s of item.stores){
    if(plan[s] != null) continue;
    const shortage = getStoreShortage(item, s);
    const qty = Math.max(0, Math.min(shortage, remainingApt));
    plan[s] = qty;
    remainingApt -= qty;
  }

  return plan;
}
function getDefaultTransferQty(item, transfer, storeName){
  const plan = buildTransferPlanMap(item, transfer);
  return plan[storeName] ?? 0;
}
function getAvailableTransferForStore(item, transfer, storeName){
  const aptStockQty = Math.max(0, transfer?.apt?.stock ?? 0);
  const plan = buildTransferPlanMap(item, transfer);
  const others = item.stores.reduce((sum, s) => s === storeName ? sum : sum + (plan[s] ?? 0), 0);
  return Math.max(0, aptStockQty - others);
}
function getSelectedTransferQty(item, transfer, storeName){
  const plan = buildTransferPlanMap(item, transfer);
  return Math.max(0, plan[storeName] ?? 0);
}
function setTransferQtyValue(itemName, storeName, value){
  const item = ITEMS.find(i => i.name === itemName);
  const apt = findAptItem(itemName);
  if(!item || !apt) return;
  const transfer = getTransferSuggestion(item);
  if(!transfer) return;

  const shortage = getStoreShortage(item, storeName);
  const currentPlan = buildTransferPlanMap(item, transfer);
  const others = item.stores.reduce((sum, s) => s === storeName ? sum : sum + (currentPlan[s] ?? 0), 0);
  const maxQty = Math.max(0, (transfer.apt.stock ?? 0) - others);  // upper limit = apt remaining stock
  const normalized = Math.max(0, Math.min(maxQty, Math.floor(Number(value) || 0)));
  transferDraftQty[getTransferKey(itemName, storeName)] = normalized;
}
function getTransferPlan(item, transfer){
  return item.stores.map(storeName => ({
    storeName,
    shortage: getStoreShortage(item, storeName),
    qty: getSelectedTransferQty(item, transfer, storeName)
  }));
}
function getTransferPlanTotal(item, transfer){
  return getTransferPlan(item, transfer).reduce((sum, row) => sum + row.qty, 0);
}
function changeTransferQty(encodedName, encodedStore, diff){
  const name = decodeURIComponent(encodedName);
  const storeName = decodeURIComponent(encodedStore);
  const item = ITEMS.find(i => i.name === name);
  const transfer = item ? getTransferSuggestion(item) : null;
  if(!item || !transfer) return;
  const next = getSelectedTransferQty(item, transfer, storeName) + diff;
  setTransferQtyValue(name, storeName, next);
  renderTransferBox(item.name);
}
function inputTransferQty(encodedName, encodedStore, rawValue){
  const name = decodeURIComponent(encodedName);
  const storeName = decodeURIComponent(encodedStore);
  setTransferQtyValue(name, storeName, rawValue);
  renderTransferBox(name);
}
function renderTransferQtyControl(itemName, storeName){
  const item = ITEMS.find(i => i.name === itemName);
  const transfer = item ? getTransferSuggestion(item) : null;
  const wrap = document.getElementById('TQ_' + eid(itemName + '__' + storeName,''));
  if(!wrap) return;
  if(!item || !transfer){
    wrap.innerHTML = '';
    return;
  }
  const qty = getSelectedTransferQty(item, transfer, storeName);
  const maxQty = getAvailableTransferForStore(item, transfer, storeName);  // upper limit = apt remaining stock
  wrap.innerHTML = `
    <div class="transfer-store-row">
      <div>
        <div class="transfer-store-name">${storeName}</div>
        <div class="small-note">不足 ${getStoreShortage(item, storeName)}${item.unit} ／ 入力上限 ${maxQty}${item.unit}</div>
      </div>
      <div class="transfer-qty-wrap">
        <div class="transfer-qty-controls">
          <button class="transfer-qty-btn" onclick="changeTransferQty('${encodeURIComponent(item.name)}','${encodeURIComponent(storeName)}',-1)">−</button>
          <input class="transfer-qty-input" type="number" min="0" max="${maxQty}" value="${qty}" inputmode="numeric"
            onchange="inputTransferQty('${encodeURIComponent(item.name)}','${encodeURIComponent(storeName)}',this.value)">
          <button class="transfer-qty-btn" onclick="changeTransferQty('${encodeURIComponent(item.name)}','${encodeURIComponent(storeName)}',1)">＋</button>
        </div>
        <div class="transfer-qty-unit">${item.unit}</div>
      </div>
    </div>`;
}
function getTransferSummaryHtml(item, transfer){
  const total = getTransferPlanTotal(item, transfer);
  const remainApt = Math.max(0, (transfer.apt.stock ?? 0) - total);
  return `<div class="transfer-summary">合計 <strong>${total}${item.unit}</strong> を補充予定 ／ アパート残り <strong>${remainApt}${item.unit}</strong></div>`;
}
function getTransferBoxHtml(item){
  const transfer = getTransferSuggestion(item);
  if(!transfer) return '';
  const maxQty = Math.min(transfer.apt.stock ?? 0, transfer.shortage);
  return `
    <div class="transfer-box" id="TB_${eid(item.name,'')}">
      <div class="transfer-title">アパートから補充提案</div>
      <div class="small-note">不足合計 ${transfer.shortage}${item.unit} のうち、アパートから <strong>${maxQty}${item.unit}</strong> まで配分できます。</div>
      <div class="transfer-store-grid">
        ${item.stores.map(storeName => `<div id="TQ_${eid(item.name + '__' + storeName,'')}"></div>`).join('')}
      </div>
      ${getTransferSummaryHtml(item, transfer)}
      <div class="transfer-actions">
        <button class="mini-btn primary" onclick="showTransferConfirm('${encodeURIComponent(item.name)}')">配分した数で補充する</button>
        <button class="mini-btn secondary" onclick="showTab('order')">発注を見る</button>
      </div>
    </div>`;
}
// Inline version for refill tab – avoids duplicate-ID conflict with store tab
function getTransferBoxHtmlInline(item, actionLabel, actionOnclick){
  const transfer = getTransferSuggestion(item);
  if(!transfer) return '';
  const maxQty = Math.min(transfer.apt.stock ?? 0, transfer.shortage);
  const storeRows = item.stores.map(storeName => {
    const shortage  = getStoreShortage(item, storeName);
    const available = getAvailableTransferForStore(item, transfer, storeName);
    const qty = getSelectedTransferQty(item, transfer, storeName);
    const enc = encodeURIComponent(item.name);
    const encS = encodeURIComponent(storeName);
    return `<div class="transfer-store-row">
      <div>
        <div class="transfer-store-name">${storeName}</div>
        <div class="small-note">不足 ${shortage}${item.unit} ／ 入力上限 ${available}${item.unit}</div>
      </div>
      <div class="transfer-qty-wrap">
        <div class="transfer-qty-controls">
          <button class="transfer-qty-btn" onclick="changeTransferQtyRefill('${enc}','${encS}',-1)">−</button>
          <input class="transfer-qty-input" type="number" min="0" max="${available}" value="${qty}" inputmode="numeric"
            onchange="inputTransferQtyRefill('${enc}','${encS}',this.value)">
          <button class="transfer-qty-btn" onclick="changeTransferQtyRefill('${enc}','${encS}',1)">＋</button>
        </div>
        <div class="transfer-qty-unit">${item.unit}</div>
      </div>
    </div>`;
  }).join('');
  return `
    <div class="transfer-box" id="TBR_${eid(item.name,'')}">
      <div class="transfer-title">アパートから補充提案</div>
      <div class="small-note">不足合計 ${transfer.shortage}${item.unit} のうち、アパートから <strong>${maxQty}${item.unit}</strong> まで配分できます。</div>
      <div class="transfer-store-grid">${storeRows}</div>
      <div class="transfer-summary" id="TBRS_${eid(item.name,'')}">合計 <strong>${getTransferPlanTotal(item,transfer)}${item.unit}</strong> を補充予定 ／ アパート残り <strong>${Math.max(0,(transfer.apt.stock??0)-getTransferPlanTotal(item,transfer))}${item.unit}</strong></div>
      <div class="transfer-actions">
        <button class="mini-btn primary" onclick="showTransferConfirm('${encodeURIComponent(item.name)}')">配分した数で補充する</button>
        <button class="mini-btn secondary" onclick="${actionOnclick}">${actionLabel}</button>
      </div>
    </div>`;
}
function changeTransferQtyRefill(encodedName, encodedStore, diff){
  const name = decodeURIComponent(encodedName);
  const storeName = decodeURIComponent(encodedStore);
  const item = ITEMS.find(i => i.name === name);
  const transfer = item ? getTransferSuggestion(item) : null;
  if(!item || !transfer) return;
  const current = getSelectedTransferQty(item, transfer, storeName);
  const next = current + diff;
  setTransferQtyValue(name, storeName, next);
  // Re-render just the refill transfer box for this item
  const box = document.getElementById('TBR_' + eid(name,''));
  if(box) box.outerHTML = getTransferBoxHtmlInline(item, '店舗で確認', "showTab('store')");
}
function inputTransferQtyRefill(encodedName, encodedStore, rawValue){
  const name = decodeURIComponent(encodedName);
  const storeName = decodeURIComponent(encodedStore);
  setTransferQtyValue(name, storeName, rawValue);
  const item = ITEMS.find(i => i.name === name);
  if(!item) return;
  const box = document.getElementById('TBR_' + eid(name,''));
  if(box) box.outerHTML = getTransferBoxHtmlInline(item, '店舗で確認', "showTab('store')");
}
function renderTransferBox(itemName){
  const item = ITEMS.find(i => i.name === itemName);
  const host = document.getElementById('TB_' + eid(itemName,''));
  if(host && item){
    host.outerHTML = getTransferBoxHtml(item);
  }
  if(item){
    item.stores.forEach(storeName => renderTransferQtyControl(item.name, storeName));
  }
}
function getTransferDraftQty(encodedName, encodedStore){
  const name = decodeURIComponent(encodedName);
  const storeName = decodeURIComponent(encodedStore);
  const item = ITEMS.find(i => i.name === name);
  const transfer = item ? getTransferSuggestion(item) : null;
  if(!item || !transfer) return 0;
  return getSelectedTransferQty(item, transfer, storeName);
}
function renderAllTransferQtyControls(){
  ITEMS.forEach(item => {
    if(getTransferSuggestion(item)) renderTransferBox(item.name);
  });
}
function updateStoreCardUI(name){
  const item = ITEMS.find(i => i.name === name);
  if(!item) return;
  const card = document.getElementById(eid(name,'card'));
  if(!card) return;
  const total = getTotal(item);
  const usage = getUsageScore(name);
  const totalEl = document.getElementById('TOT_' + eid(name,''));
  const badgeEl = document.getElementById('BAD_' + eid(name,''));
  const usageEl = document.getElementById('USAGE_' + eid(name,''));
  const transferEl = document.getElementById('TR_' + eid(name,''));
  if(totalEl){ totalEl.textContent = total; totalEl.className = `total-strong ${statusClassForTotal(total,item.min)}`; }
  if(usageEl) usageEl.textContent = usage;
  if(badgeEl){
    badgeEl.textContent = getStatusText(total,item.min);
    badgeEl.className = statusBadgeClass(total,item.min);
  }
  STORES.forEach(storeName => {
    const qtyEl = document.getElementById(eid(name, storeName));
    if(qtyEl && item){
      const sv = storeStock[name]?.[storeName] ?? 0;
      qtyEl.textContent = sv;
      if(item.stores.includes(storeName)) qtyEl.className = `qty-val ${storeQtyStatusClass(sv, item)}`;
    }
  });
  card.className = `item-card ${statusClassForCard(total,item.min)}`;
  if(transferEl) transferEl.innerHTML = getTransferBoxHtml(item);
  item.stores.forEach(storeName => renderTransferQtyControl(item.name, storeName));
}
function setUndoTransfer(action){
  lastTransferAction = action;
  renderUndoBar();
  if(undoTimer) clearTimeout(undoTimer);
  undoTimer = setTimeout(() => {
    lastTransferAction = null;
    renderUndoBar();
  }, 12000);
}
function renderUndoBar(){
  const wrap = document.getElementById('undo-bar');
  const textEl = document.getElementById('undo-text');
  if(!wrap || !textEl) return;
  if(!lastTransferAction){
    wrap.classList.remove('show');
    textEl.textContent = '';
    return;
  }
  textEl.textContent = `${lastTransferAction.itemName} を ${lastTransferAction.qty}${lastTransferAction.unit}、アパートから ${lastTransferAction.toStore} へ移動しました。間違いならやり直せます。`;
  wrap.classList.add('show');
}
function dismissUndo(){
  lastTransferAction = null;
  if(undoTimer) clearTimeout(undoTimer);
  renderUndoBar();
}
function undoLastTransfer(){
  if(!lastTransferAction) return;
  const {itemName,toStore,qty,unit,user} = lastTransferAction;
  const apt = findAptItem(itemName);
  if(!apt){
    toast('アパート在庫データが見つかりません');
    return;
  }
  const currentStore = storeStock[itemName]?.[toStore] ?? 0;
  if(currentStore < qty){
    toast('店舗在庫が変わっているため、この補充は元に戻せません');
    return;
  }
  storeStock[itemName][toStore] = currentStore - qty;
  apt.stock = (apt.stock ?? 0) + qty;
  persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');
  persist('inv_store_v3', storeStock, 'inv_store_ts_v3');
  addLog({type:'補充取消', scope:`${toStore}→アパート`, itemName, user:user || localStorage.getItem('inv_user') || '担当者未設定', message:`${qty}${unit} の補充を取り消し`});
  setLastSaved('apt','inv_apt_ts_v3');
  setLastSaved('store','inv_store_ts_v3');
  // Cloud sync: reverse the transfer in Supabase
  if(isCloudReady() && currentAuthUser){
    const itemId = resolveItemIdByName(itemName);
    if(itemId){
      Promise.all([
        cloudRpc('increment_store_inventory',{
          p_item_id: itemId,
          p_store_code: STORE_CODE_MAP[toStore],
          p_delta: -qty,
          p_user_id: currentAuthUser.id
        }),
        cloudRpc('increment_apartment_inventory',{
          p_item_id: itemId,
          p_delta: qty,
          p_user_id: currentAuthUser.id
        })
      ]).then(() => {
        reloadAllFromSupabase().catch(e => console.error('アンド同期失敗:', e));
      }).catch(e => {
        console.error('補充取消のクラウド同期失敗:', e);
        toast('ローカルは元に戻しました。クラウド同期に失敗しました。');
      });
    }
  }
  if(document.getElementById('view-store').style.display !== 'none') updateStoreCardUI(itemName); else renderStore();
  if(document.getElementById('view-apt').style.display !== 'none') renderApt();
  if(document.getElementById('view-refill').style.display !== 'none') renderRefill();
  if(document.getElementById('view-order').style.display !== 'none') renderOrder();
  if(document.getElementById('view-shopping').style.display !== 'none') renderShopping();
  if(document.getElementById('view-log').style.display !== 'none') renderLogs();
  renderDashboard();
  dismissUndo();
  toast(`↩ ${itemName} の補充を取り消しました`);
}
function addLog({type, scope, itemName, message, user, delta=null}){
  const entry = { at:Date.now(), type, scope, itemName, message, user:user || localStorage.getItem('inv_user') || '担当者未設定', delta };
  logs.unshift(entry);
  logs = logs.slice(0, 200);
  persist('inv_logs_v3', logs);
}
function orderCheckKey(scope, name){
  return `${scope}__${name}`;
}
function getOrderCheck(scope, name){
  return orderChecks[orderCheckKey(scope, name)] || null;
}
async function setOrderChecked(scope, name, unit, qty, supplier){
  scope = decodeURIComponent(scope);
  name = decodeURIComponent(name);
  supplier = decodeURIComponent(supplier || '');
  const user = ensureActionUser();
  if(!user) return;
  const entry = { checkedAt: Date.now(), user, qty, unit, supplier: supplier || '' };
  orderChecks[orderCheckKey(scope, name)] = entry;
  persist('inv_order_checks_v1', orderChecks);
  addLog({
    type:'発注済み',
    scope,
    itemName:name,
    user,
    message:`${qty}${unit} を発注済みに変更${supplier ? '（発注先: ' + supplier + '）' : ''}`
  });
  if(document.getElementById('view-order').style.display !== 'none') renderOrder();
    if(document.getElementById('view-shopping').style.display !== 'none') renderShopping();
  if(document.getElementById('view-log').style.display !== 'none') renderLogs();
  toast(`✅ ${name} を発注済みにしました`);
  if(isCloudReady()){
    try{
      await cloudRpc('set_order_checked', {
        p_item_id: itemIdByName[name],
        p_scope: scope === '店舗不足' ? 'store_shortage' : 'apartment_order',
        p_checked: true,
        p_qty: qty,
        p_user_id: currentAuthUser.id,
        p_note: supplier || null
      });
    }catch(err){
      console.error(err);
      toast('クラウド保存に失敗しました');
    }
  }
}
async function clearOrderChecked(scope, name){
  scope = decodeURIComponent(scope);
  name = decodeURIComponent(name);
  const existing = getOrderCheck(scope, name);
  if(!existing) return;
  const user = ensureActionUser();
  if(!user) return;
  delete orderChecks[orderCheckKey(scope, name)];
  persist('inv_order_checks_v1', orderChecks);
  addLog({
    type:'発注済み取消',
    scope,
    itemName:name,
    user,
    message:`発注済みチェックを取り消しました`
  });
  if(document.getElementById('view-order').style.display !== 'none') renderOrder();
    if(document.getElementById('view-shopping').style.display !== 'none') renderShopping();
  if(document.getElementById('view-log').style.display !== 'none') renderLogs();
  toast(`↩ ${name} の発注済みを取り消しました`);
  if(isCloudReady()){
    try{
      await cloudRpc('set_order_checked', {
        p_item_id: itemIdByName[name],
        p_scope: scope === '店舗不足' ? 'store_shortage' : 'apartment_order',
        p_checked: false,
        p_qty: existing.qty || 0,
        p_user_id: currentAuthUser.id,
        p_note: null
      });
    }catch(err){
      console.error(err);
      toast('クラウド保存に失敗しました');
    }
  }
}

function askUserName(){
  const current = localStorage.getItem('inv_user') || '';
  const user = window.prompt('担当者名を入力してください', current);
  if(!user || !user.trim()) return null;
  localStorage.setItem('inv_user', user.trim());
  updateHeaderUser();
  if(isCloudReady()) upsertMyProfile().catch(console.error);
  return user.trim();
}
function ensureActionUser(){
  return localStorage.getItem('inv_user') || askUserName();
}
function dashboardStats(){
  const storeIssues = new Set(ITEMS.filter(item => getTotal(item) <= item.min).map(i => i.name));
  const aptIssues = new Set(aptStock.filter(item => item.stock <= item.min).map(i => i.name));
  const allNames = new Set([...ITEMS.map(i => i.name), ...aptStock.map(i => i.name)]);
  const totalItemCount = allNames.size;
  const refillCount = storeIssues.size;
  const aptOrderCount = aptIssues.size;
  let normalCount = 0;
  allNames.forEach(name => { if(!storeIssues.has(name) && !aptIssues.has(name)) normalCount++; });
  return { refillCount, aptOrderCount, normalCount, totalItemCount };
}
function renderDashboard(){
  const s = dashboardStats();
  document.getElementById('dashboard-kpis').innerHTML = `
    <div class="kpi-card danger" onclick="showTab('refill')" style="cursor:pointer">
      <div class="kpi-label">補充必要</div>
      <div class="kpi-value">${s.refillCount}</div>
      <div class="kpi-sub">店舗側の不足</div>
    </div>
    <div class="kpi-card warning" onclick="showTab('order')" style="cursor:pointer">
      <div class="kpi-label">発注必要</div>
      <div class="kpi-value">${s.aptOrderCount}</div>
      <div class="kpi-sub">アパート在庫</div>
    </div>
    <div class="kpi-card good">
      <div class="kpi-label">正常</div>
      <div class="kpi-value">${s.normalCount}</div>
      <div class="kpi-sub">合計 ${s.totalItemCount} 品目</div>
    </div>
  `;
  document.getElementById('hero-stamp').textContent = '最終更新 ' + nowText();
}
function setQuickFilter(val){
  quickFilter = val;

  const storeCategoryEl = document.getElementById('filter-category');
  const aptCategoryEl = document.getElementById('filter-apt-category');

  if(val === 'danger'){
    if(storeCategoryEl) storeCategoryEl.value = 'all';
    if(aptCategoryEl) aptCategoryEl.value = 'all';
  }else if(CATEGORY_OPTIONS.includes(val)){
    if(storeCategoryEl) storeCategoryEl.value = val;
    if(aptCategoryEl) aptCategoryEl.value = val;
  }else{
    if(storeCategoryEl) storeCategoryEl.value = 'all';
    if(aptCategoryEl) aptCategoryEl.value = 'all';
  }

  renderDashboard();
  renderStore();
  renderApt();
}
function showTab(tab){
  // If already on this tab, scroll to top
  const currentTab = document.getElementById('tab-' + tab);
  if(currentTab && currentTab.classList.contains('active')){
    window.scrollTo({top:0, behavior:'smooth'});
    return;
  }
  ['store','refill','apt','order','log','shopping','settings'].forEach(t => {
    const view = document.getElementById('view-' + t);
    if(view) view.style.display = t === tab ? 'block' : 'none';
    const tabEl = document.getElementById('tab-' + t);
    if(tabEl) tabEl.classList.toggle('active', t === tab);
  });
  // Render the selected tab
  if(tab === 'store') renderStore();
  if(tab === 'apt') renderApt();
  if(tab === 'refill') renderRefill();
  if(tab === 'order') renderOrder();
  if(tab === 'log') renderLogs();
  if(tab === 'shopping') renderShopping();
}
function populateStoreSearch(){
  const sel = document.getElementById('search-store');
  if(!sel) return;
  const prev = sel.value;
  sel.innerHTML = '<option value="">商品名: すべて</option>';
  [...ITEMS].sort((a,b)=>a.name.localeCompare(b.name,'ja')).forEach(item=>{
    const opt = document.createElement('option');
    opt.value = item.name;
    opt.textContent = item.name;
    sel.appendChild(opt);
  });
  sel.value = prev;  // restore previous selection if still valid
}
function populateAptSearch(){
  const sel = document.getElementById('search-apt');
  if(!sel) return;
  const prev = sel.value;
  sel.innerHTML = '<option value="">商品名: すべて</option>';
  [...aptStock].sort((a,b)=>a.name.localeCompare(b.name,'ja')).forEach(item=>{
    const opt = document.createElement('option');
    opt.value = item.name;
    opt.textContent = item.name;
    sel.appendChild(opt);
  });
  sel.value = prev;
}
function toggleFilterPanel(scope){
  const panel = document.getElementById("filter-panel-" + scope);
  const btn   = document.getElementById("filter-toggle-" + scope);
  if(!panel || !btn) return;
  const isOpen = panel.classList.toggle("open");
  btn.classList.toggle("open", isOpen);
}
function updateFilters(){ renderStore(); }
function sortItems(items, sortValue){
  const arr = [...items];
  if(sortValue === '使用頻度順'){
    arr.sort((a,b) => getUsageScore(b.name) - getUsageScore(a.name) || a.name.localeCompare(b.name,'ja'));
  }else if(sortValue === '店舗別'){
    arr.sort((a,b) => a.stores.join(',').localeCompare(b.stores.join(','),'ja') || a.name.localeCompare(b.name,'ja'));
  }else if(sortValue === '名前順'){
    arr.sort((a,b) => a.name.localeCompare(b.name,'ja'));
  }else{
    arr.sort((a,b) => (((b.min + 1) - getTotal(b)) - ((a.min + 1) - getTotal(a))) || a.name.localeCompare(b.name,'ja'));
  }
  return arr;
}
function filteredStoreItems(){
  populateStoreSearch();
  const q = (document.getElementById('search-store')?.value || '').trim().toLowerCase();
  const category = document.getElementById('filter-category')?.value || 'all';
  const sortValue = document.getElementById('sort-store')?.value || '不足順';
  let list = ITEMS.filter(item => {
    const matchesQ = !q || item.name.toLowerCase().includes(q);
    const matchesCategory = category === 'all' || item.category === category;
    const matchesQuick = quickFilter === 'all' ||
      (quickFilter === 'danger' ? getTotal(item) <= item.min : item.category === quickFilter);
    return matchesQ && matchesCategory && matchesQuick;
  });
  return sortItems(list, sortValue);
}
function statusClassForCard(current,min){
  const level = getStatusLevel(current,min);
  if(level === 'danger') return 'danger';
  if(level === 'warning') return 'warning';
  return '';
}
function statusBadgeClass(current,min){
  const level = getStatusLevel(current,min);
  if(level === 'danger') return 'badge badge-danger';
  if(level === 'warning') return 'badge badge-warning';
  return 'badge badge-success';
}


function statusClassForTotal(current,min){
  const level=getStatusLevel(current,min);
  if(level==='danger') return 'total-danger';
  if(level==='warning') return 'total-warning';
  return 'total-ok';
}
function storeQtyStatusClass(v,item){
  if(v<=0) return 'qty-danger';
  const thr=Math.ceil((item.min||0)/Math.max(1,item.stores.length));
  if(v<=thr) return 'qty-warning';
  return 'qty-ok';
}
function renderStoreCard(item, focusStoreName=null){
  const total = getTotal(item);
  const usage = getUsageScore(item.name);
  const target = getTarget(item);
  const transfer = getTransferSuggestion(item);
  const rowStores = focusStoreName ? [focusStoreName] : STORES;
  const storeRowsHtml = rowStores.map(store => {
    const inItem = item.stores.includes(store);
    const cls = store === '神楽坂' ? 'kagurazaka' : 'otoko';
    if(!inItem){
      return `<div class="store-row"><div class="store-left"><div class="store-name-label ${cls}">${store}</div></div><span class="na-label">対象外</span></div>`;
    }
    const v = storeStock[item.name]?.[store] ?? 0;
    const checked = isStoreChecked(item.name, store);
    const checkedEntry = storeChecklist[checklistEntryKey(item.name, store)] || null;
    const checkedMeta = checkedEntry
      ? `<span class="store-check-note">${new Date(checkedEntry.at).toLocaleTimeString('ja-JP',{hour:'2-digit',minute:'2-digit'})}</span>`
      : '<span class="store-check-note">未確認</span>';
    return `<div class="store-row">
      <div class="store-left"><div class="store-name-label ${cls}"><span class="store-status-dot ${storeQtyStatusClass(v, item)}"></span>${store}</div></div>
      <div class="store-row-right">
        <span class="qty-val ${storeQtyStatusClass(v, item)}" id="${eid(item.name, store)}">${v}</span>
        <span class="qty-unit">${item.unit}</span>
        ${checkedMeta}
        <button class="check-btn-store ${checked ? 'checked' : ''}" aria-label="${store} ${item.name} の確認状態" title="${checked ? '確認済み' : '未確認'}" onclick="toggleStoreChecked('${encodeURIComponent(item.name)}','${encodeURIComponent(store)}')"></button>
        <button class="change-btn" onclick="openQtyModal({mode:'store',name:'${encodeURIComponent(item.name)}',store:'${encodeURIComponent(store)}'})">変更</button>
      </div>
    </div>`;
  }).join('');

  return `<div class="item-card ${statusClassForCard(total,item.min)}" id="${eid(item.name,'card')}">
    <div class="card-header">
      <div class="item-title-wrap">
        <div class="item-name">${escapeHtml(item.name)}</div>
        <div class="item-meta">カテゴリ: ${escapeHtml(item.category)} ／ 使用頻度: <span id="USAGE_${eid(item.name,'')}">${usage}</span></div>
      </div>
      <div class="item-header-actions">
        <button class="edit-btn" data-edit-mode="store" data-edit-name="${escapeHtml(item.name)}">✎ 編集</button>
      </div>
    </div>

    <div class="status-row">
      <span class="${statusBadgeClass(total,item.min)}" id="BAD_${eid(item.name,'')}">${getStatusText(total,item.min)}</span>
      <span class="total-label">合計 <span class="total-strong ${statusClassForTotal(total,item.min)}" id="TOT_${eid(item.name,'')}">${total}</span> ${item.unit}</span>
    </div>

    <div class="store-rows">${storeRowsHtml}</div>

    <div class="meta-grid">
      <div class="meta-box">
        <div class="meta-label">最低在庫</div>
        <div class="meta-value">${item.min}<span class="qty-unit"> ${item.unit}</span></div>
      </div>
      <div class="meta-box">
        <div class="meta-label">目標在庫</div>
        <div class="meta-value">${target}<span class="qty-unit"> ${item.unit}</span></div>
      </div>
    </div>

    <div id="TR_${eid(item.name,'')}">${getTransferBoxHtml(item)}</div>
  </div>`;
}
function renderStoreSection(items, storeName){
  const sectionItems = items.filter(item => item.stores.includes(storeName));
  const sectionHtml = sectionItems.length
    ? sectionItems.map(item => renderStoreCard(item, storeName)).join('')
    : `<div class="empty"><div class="empty-icon">📭</div>${escapeHtml(storeName)} の該当商品がありません</div>`;
  return `
    <div class="store-group">
      <div class="store-group-title">
        <span>${escapeHtml(storeName)}</span>
        <span class="count">${sectionItems.length}件</span>
      </div>
      ${sectionHtml}
    </div>`;
}
function renderStore(){
  const c = document.getElementById('store-items');
  const list = filteredStoreItems();
  updateStoreViewButtons();
  if(!list.length){
    document.getElementById('store-count-pill').textContent = '0件';
    c.innerHTML = '<div class="empty"><div class="empty-icon">🔎</div>該当する商品がありません</div>';
    return;
  }
  if(storeViewFilter === 'all'){
    const totalVisible = STORES.reduce((sum, storeName) => sum + list.filter(item => item.stores.includes(storeName)).length, 0);
    document.getElementById('store-count-pill').textContent = totalVisible + '件';
    c.innerHTML = STORES.map(storeName => renderStoreSection(list, storeName)).join('');
  }else{
    const filtered = list.filter(item => item.stores.includes(storeViewFilter));
    document.getElementById('store-count-pill').textContent = filtered.length + '件';
    c.innerHTML = renderStoreSection(filtered, storeViewFilter);
  }
  bindEditButtons();
  renderAllTransferQtyControls();
}

function renderRefill(){
  const c = document.getElementById('refill-items');
  const list = ITEMS.filter(item => getTotal(item) <= item.min);
  document.getElementById('refill-count-pill').textContent = list.length + '件';
  if(!list.length){
    c.innerHTML = '<div class="empty"><div class="empty-icon">✅</div>補充が必要な商品はありません</div>';
    return;
  }
  c.innerHTML = list.map(item => {
    const total = getTotal(item);
    const detail = item.stores.map(s => `${s}: ${storeStock[item.name]?.[s] ?? 0}${item.unit}`).join(' ／ ');
    const transfer = getTransferSuggestion(item);
    return `<div class="refill-card">
      <div class="refill-main">
        <div style="flex:1">
          <div class="item-name">${escapeHtml(item.name)}</div>
          <div class="item-meta">${detail}</div>
          <div class="small-note">最低在庫: ${item.min} ${item.unit}</div>
        </div>
        <div style="text-align:right">
          <div class="refill-count">${total}</div>
          <div class="refill-count-unit">${item.unit}</div>
        </div>
      </div>
      ${transfer ? getTransferBoxHtmlInline(item, '店舗で確認', "showTab('store')") : ''}
    </div>`;
  }).join('');
  // No separate renderAllTransferQtyControls needed – controls rendered inline above
}
function makeOrderCard({scope,name,unit,min,target,supplier,supplierUrl,orderQty,currentStock,category,transferText,transferButtonHtml=''}){
  const recommended = getAutoOrderQty(currentStock,min,target,orderQty);
  const shopBtn = supplierUrl
    ? `<a href="${supplierUrl}" class="shop-btn" target="_blank">🛍 ショップを開く</a>`
    : `<span class="shop-btn-disabled">URLが未設定</span>`;
  // Purchase section (仕入れ完了) ─────────────────────────────────────
  const checked = getOrderCheck(scope, name);  // evaluated first
  const purchaseScope = scope.includes('アパート') ? 'アパート' : '店舗';
  const _enc     = encodeURIComponent(name);
  const _encS    = encodeURIComponent(purchaseScope);
  const _buyKey  = name + '|' + purchaseScope;
  const _buyQty  = shoppingQtyOverrides[_buyKey] != null ? shoppingQtyOverrides[_buyKey] : recommended;
  const _dest    = aptStock.some(function(a){ return a.name === name; })
    ? '<span class="shopping-dest apt">↑アパート</span>'
    : '<span class="shopping-dest store">→店舗直接</span>';
  const purchaseRow = checked
    ? `<div class="order-purchase-row">
        <div class="order-purchase-left">
          <span class="order-purchase-label">仕入れ</span>
          ${_dest}
          <span class="order-purchase-qty">${_buyQty}${unit}</span>
        </div>
        <div class="order-purchase-btns">
          <button class="shopping-edit-btn" onclick="shoppingOpenEdit('${_enc}','${_encS}','${unit}',${_buyQty})">✏️ 編集</button>
          <button class="shopping-buy-btn" onclick="shoppingPurchase('${_enc}','${_encS}',${_buyQty},'${unit}')">✅ 仕入れ完了</button>
        </div>
      </div>`
    : `<div class="order-purchase-row order-purchase-locked">
        <span class="order-purchase-hint">🔒 まず「発注済みにする」を押してください</span>
      </div>`;
  const checkControls = checked
    ? `<div class="order-done-note">✅ 発注済み：${new Date(checked.checkedAt).toLocaleString('ja-JP',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})} ／ ${escapeHtml(checked.user || '担当者未設定')}</div>
       <div class="order-check-row">
         <button class="check-btn secondary" onclick="clearOrderChecked('${encodeURIComponent(scope)}','${encodeURIComponent(name)}')">発注済みを取り消す</button>
       </div>`
    : `<div class="order-check-row">
         <button class="check-btn primary" onclick="setOrderChecked('${encodeURIComponent(scope)}','${encodeURIComponent(name)}','${unit}',${recommended},'${encodeURIComponent(supplier || '')}')">✅ 発注済みにする</button>
       </div>`;
  return `<div class="order-card">
    <div class="order-card-top">
      <div class="order-title-wrap">
        <div class="order-name">${escapeHtml(name)}</div>
        <div class="order-meta">カテゴリ: ${escapeHtml(category || '—')} ／ 発注先: ${escapeHtml(supplier || '—')} ／ 区分: ${escapeHtml(scope)}</div>
      </div>
      <span class="badge ${checked ? 'badge-success' : 'badge-danger'}">${checked ? '✓ 発注済み' : '⚠ 対応'}</span>
    </div>
    <div class="order-detail-row">
      <div class="order-detail-item">
        <div class="order-detail-label">現在在庫</div>
        <div class="order-detail-val red">${currentStock} <span class="order-detail-unit">${unit}</span></div>
      </div>
      <div class="order-detail-item">
        <div class="order-detail-label">最低在庫</div>
        <div class="order-detail-val">${min} <span class="order-detail-unit">${unit}</span></div>
      </div>
      <div class="order-detail-item">
        <div class="order-detail-label">自動発注数</div>
        <div class="order-detail-val blue">${recommended} <span class="order-detail-unit">${unit}</span></div>
      </div>
    </div>
    ${transferText ? `<div class="transfer-box"><div class="transfer-title">補充優先</div><div class="small-note">${transferText}</div></div>` : ''}
    ${checkControls}
    ${purchaseRow}
    <div class="order-shop-row">
      ${transferButtonHtml}
      ${shopBtn}
    </div>
  </div>`;
}
function renderOrder(){
  const c = document.getElementById('order-items');
  const aptList = aptStock.filter(item => item.stock <= item.min && item.supplierUrl);
  // Auto-clear orderChecks for items no longer in the order list
  const _visibleKeys = new Set(
    aptList.map(i => orderCheckKey('アパート発注', i.name))
  );
  const _nowStale = [];
  Object.keys(orderChecks).forEach(key => {
    if (!_visibleKeys.has(key)) _nowStale.push(key);
  });
  if (_nowStale.length) {
    _nowStale.forEach(key => {
      const sep = key.indexOf('__');
      const sc  = key.slice(0, sep);
      const nm  = key.slice(sep + 2);
      const ent = orderChecks[key];
      delete orderChecks[key];
      // Also clear from Supabase if connected
      if(isCloudReady() && currentAuthUser){
        const iid = itemIdByName[nm];
        if(iid) cloudRpc('set_order_checked', {
          p_item_id: iid,
          p_scope: sc === '店舗不足' ? 'store_shortage' : 'apartment_order',
          p_checked: false,
          p_qty: (ent && ent.qty) || 0,
          p_user_id: currentAuthUser.id,
          p_note: null
        }).catch(e => console.error('renderOrder auto-clear:', e));
      }
    });
    persist('inv_order_checks_v1', orderChecks);
  }
  document.getElementById('order-count-pill').textContent = aptList.length + '件';
  if(!aptList.length){
    c.innerHTML = '<div class="empty"><div class="empty-icon">✅</div>ネット発注が必要な商品はありません</div>';
    return;
  }
  const html = aptList.map(item => makeOrderCard({
    scope:'アパート発注',
    name:item.name, unit:item.unit, min:item.min, target:getTarget(item),
    supplier:item.supplier, supplierUrl:item.supplierUrl, orderQty:item.orderQty,
    currentStock:item.stock, category:item.category, transferText:''
  })).join('');
  c.innerHTML = html;
}

function updateAptCardUI(index){
  const item = aptStock[index];
  if(!item) return;
  const card = document.getElementById('AC_' + index);
  if(!card) return;
  const valueEl = document.getElementById('AV_' + index);
  const badgeEl = document.getElementById('AB_' + index);
  const autoOrderEl = document.getElementById('AO_' + index);
  const recommended = getAutoOrderQty(item.stock, item.min, getTarget(item), item.orderQty);

  if(valueEl){ valueEl.textContent = item.stock; valueEl.className = `qty-val ${statusClassForTotal(item.stock,item.min)}`; }
  if(autoOrderEl) autoOrderEl.textContent = recommended;
  if(badgeEl){
    badgeEl.textContent = getStatusText(item.stock, item.min);
    badgeEl.className = statusBadgeClass(item.stock, item.min);
  }
  card.className = `apt-card ${statusClassForCard(item.stock, item.min)}`;
}
function renderApt(){
  populateAptSearch();
  const q = (document.getElementById('search-apt')?.value || '').trim().toLowerCase();
  const category = document.getElementById('filter-apt-category')?.value || 'all';
  const sortValue = document.getElementById('sort-apt')?.value || '不足順';
  let list = aptStock.filter(item => {
    const matchesQ = !q || item.name.toLowerCase().includes(q);
    const matchesCategory = category === 'all' || item.category === category;
    const matchesQuick = quickFilter === 'all' ||
      (quickFilter === 'danger' ? item.stock <= item.min : item.category === quickFilter);
    return matchesQ && matchesCategory && matchesQuick;
  });
  if(sortValue === '使用頻度順'){
    list.sort((a,b) => getUsageScore(b.name) - getUsageScore(a.name) || a.name.localeCompare(b.name,'ja'));
  }else if(sortValue === '名前順'){
    list.sort((a,b) => a.name.localeCompare(b.name,'ja'));
  }else{
    list.sort((a,b) => (((b.min + 1) - b.stock) - ((a.min + 1) - a.stock)) || a.name.localeCompare(b.name,'ja'));
  }
  document.getElementById('apt-count-pill').textContent = list.length + '件';
  const c = document.getElementById('apt-items');
  if(!list.length){
    c.innerHTML = '<div class="empty"><div class="empty-icon">🔎</div>該当する商品がありません</div>';
    return;
  }
  c.innerHTML = list.map(item => {
    const i = aptStock.findIndex(x => x.name === item.name);
    const recommended = getAutoOrderQty(item.stock, item.min, getTarget(item), item.orderQty);
    return `<div class="apt-card ${statusClassForCard(item.stock,item.min)}" id="AC_${i}">
      <div class="apt-header">
        <div class="apt-title-wrap">
          <div class="apt-name">${escapeHtml(item.name)}</div>
          <div class="apt-meta">カテゴリ: ${escapeHtml(item.category)} ／ 仕入先: ${item.supplierUrl ? `<a href="${item.supplierUrl}" style="color:var(--navy);text-decoration:none" target="_blank">${escapeHtml(item.supplier)}</a>` : escapeHtml(item.supplier || '—')}</div>
        </div>
        <div class="apt-header-actions">
          <span class="${statusBadgeClass(item.stock,item.min)}" id="AB_${i}">${getStatusText(item.stock,item.min)}</span>
          <button class="edit-btn" data-edit-mode="apt" data-edit-idx="${i}">✎ 編集</button>
        </div>
      </div>
      <div class="apt-stock-row">
        <div>
          <div class="small-note">現在の在庫</div>
          <div class="small-note">最低在庫: <strong>${item.min} ${item.unit}</strong></div>
          <div class="small-note">自動発注数: <strong><span id="AO_${i}">${recommended}</span> ${item.unit}</strong></div>
        </div>
        <div class="qty-display">
          <span class="qty-val ${statusClassForTotal(item.stock,item.min)}" id="AV_${i}">${item.stock}</span>
          <span class="qty-unit">${item.unit}</span>
          <button class="change-btn" onclick="openQtyModal({mode:'apt',idx:${i}})">変更</button>
        </div>
      </div>
    </div>`;
  }).join('');
  bindEditButtons();
}
function renderLogs(){
  const c = document.getElementById('log-items');
  const list = logs.slice(0,50);
  if(!list.length){
    c.innerHTML = '<div class="empty"><div class="empty-icon">📝</div>履歴はまだありません</div>';
    return;
  }
  c.innerHTML = list.map(log => `
    <div class="log-card">
      <div class="log-title">${escapeHtml(log.itemName || '対象なし')} <span class="badge badge-info">${escapeHtml(log.type)}</span></div>
      <div class="log-meta">${new Date(log.at).toLocaleString('ja-JP',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})} ／ ${escapeHtml(log.user || '担当者未設定')} ／ ${escapeHtml(log.scope || '')}</div>
      <div class="detail-box">${escapeHtml(log.message || '')}</div>
    </div>
  `).join('');
}

async function chStore(name, store, d, user = localStorage.getItem('inv_user') || '担当者未設定'){
  if(!storeStock[name]) storeStock[name] = {};
  const before = storeStock[name][store] ?? 0;
  const after = Math.max(0, before + d);
  if(before === after) return;
  storeStock[name][store] = after;
  const valEl = document.getElementById(eid(name, store));
  if(valEl) valEl.textContent = after;
  persist('inv_store_v3', storeStock, 'inv_store_ts_v3');
  addLog({type:'数量変更', scope:`店舗/${store}`, itemName:name, user, delta:d, message:`${store} 在庫を ${before} → ${after} に変更`});
  setLastSaved('store','inv_store_ts_v3');
  updateHeaderUser();
  if(document.getElementById('view-store').style.display !== 'none') updateStoreCardUI(name);
  if(document.getElementById('view-refill').style.display !== 'none') renderRefill();
  if(document.getElementById('view-order').style.display !== 'none') renderOrder();
  if(document.getElementById('view-shopping').style.display !== 'none') renderShopping();
  if(document.getElementById('view-log').style.display !== 'none') renderLogs();
  renderDashboard();

  if(isCloudReady()){
    try{
      const itemId = resolveItemIdByName(name);
      if(!itemId) throw new Error(`item_id が見つかりません: ${name}`);
      await cloudRpc('increment_store_inventory', {
        p_item_id: itemId,
        p_store_code: STORE_CODE_MAP[store],
        p_delta: d,
        p_user_id: currentAuthUser.id
      });
    }catch(err){
      console.error(err);
      storeStock[name][store] = before;
      if(valEl) valEl.textContent = before;
      updateStoreCardUI(name);
      alert('クラウド保存に失敗しました: ' + cloudErrorMessage(err));
    }
  }
}
async function chApt(i, d, user = localStorage.getItem('inv_user') || '担当者未設定'){
  const before = aptStock[i].stock;
  const after = Math.max(0, before + d);
  if(before === after) return;
  aptStock[i].stock = after;
  persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');
  addLog({type:'数量変更', scope:'アパート', itemName:aptStock[i].name, user, delta:d, message:`アパート在庫を ${before} → ${after} に変更`});
  setLastSaved('apt','inv_apt_ts_v3');
  updateHeaderUser();
  if(document.getElementById('view-apt').style.display !== 'none') updateAptCardUI(i);
  if(document.getElementById('view-store').style.display !== 'none') renderStore();
  if(document.getElementById('view-order').style.display !== 'none') renderOrder();
  if(document.getElementById('view-shopping').style.display !== 'none') renderShopping();
  if(document.getElementById('view-log').style.display !== 'none') renderLogs();
  renderDashboard();

  if(isCloudReady()){
    try{
      const itemName = aptStock[i].name;
      const itemId = aptStock[i].itemId || resolveItemIdByName(itemName);
      if(!itemId) throw new Error(`item_id が見つかりません: ${itemName}`);
      await cloudRpc('increment_apartment_inventory', {
        p_item_id: itemId,
        p_delta: d,
        p_user_id: currentAuthUser.id
      });
    }catch(err){
      console.error(err);
      aptStock[i].stock = before;
      updateAptCardUI(i);
      alert('クラウド保存に失敗しました: ' + cloudErrorMessage(err));
    }
  }
}

async function performTransferSingle(name, toStore, qty, user, options = {}){
  const { silent = false, skipUndo = false, skipReload = false } = options;
  const apt = findAptItem(name);
  const item = ITEMS.find(i => i.name === name);
  if(!apt || !item || qty <= 0) return { moved: 0 };

  const beforeApt = apt.stock ?? 0;
  const beforeStore = storeStock[name]?.[toStore] ?? 0;
  const moveQty = Math.min(qty, beforeApt);
  if(moveQty <= 0) return { moved: 0 };

  if(isCloudReady()){
    const itemId = item.id || item.itemId || resolveItemIdByName(name);
    if(!itemId) throw new Error(`item_id が見つかりません: ${name}`);
    await cloudEnsureStoreTarget(itemId, toStore);
    await cloudRpc('apply_transfer', {
      p_item_id: itemId,
      p_store_code: STORE_CODE_MAP[toStore],
      p_qty: moveQty,
      p_user_id: currentAuthUser.id
    });
    // Log locally and set undo (cloud already persisted)
    addLog({type:'補充実行', scope:`アパート→${toStore}`, itemName:name, user,
      message:`${moveQty}${item.unit} をアパートから ${toStore} へ補充`});
    if(!skipUndo){
      setUndoTransfer({itemName:name, toStore, qty:moveQty, unit:item.unit, user});
    }
    if(!skipReload) await reloadAllFromSupabase();
    if(!silent) toast(`📦 ${name} を ${toStore} に ${moveQty}${item.unit} 補充しました`);
    return { moved: moveQty };
  }

  apt.stock -= moveQty;
  if(!storeStock[name]) storeStock[name] = {};
  storeStock[name][toStore] = (storeStock[name][toStore] ?? 0) + moveQty;
  persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');
  persist('inv_store_v3', storeStock, 'inv_store_ts_v3');
  addLog({type:'補充実行', scope:`アパート→${toStore}`, itemName:name, user, message:`${moveQty}${item.unit} をアパートから ${toStore} へ補充`});
  if(!skipUndo){
    setUndoTransfer({itemName:name, toStore, qty:moveQty, unit:item.unit, user});
  }
  setLastSaved('apt','inv_apt_ts_v3');
  setLastSaved('store','inv_store_ts_v3');
  if(!silent) toast(`📦 ${name} を ${toStore} に ${moveQty}${item.unit} 補充しました`);
  return { moved: moveQty };
}
async function applyTransferPlan(encodedName){
  const name = decodeURIComponent(encodedName);
  const user = ensureActionUser();
  if(!user) return;
  if(transferInFlight){
    toast('補充処理中です。完了までお待ちください');
    return;
  }

  if(isCloudReady()){
    try{
      await reloadAllFromSupabase();
    }catch(err){
      console.error(err);
      alert('最新のクラウド在庫を取得できませんでした: ' + cloudErrorMessage(err, '同期に失敗しました'));
      return;
    }
  }

  const item = ITEMS.find(i => i.name === name);
  const transfer = item ? getTransferSuggestion(item) : null;
  if(!item || !transfer){
    toast('補充対象を確認してください');
    return;
  }
  const plan = getTransferPlan(item, transfer).filter(row => row.qty > 0);
  const totalQty = plan.reduce((sum, row) => sum + row.qty, 0);
  const currentAptStock = Math.max(0, findAptItem(name)?.stock ?? 0);
  if(totalQty <= 0){
    toast('補充数を入力してください');
    return;
  }
  if(totalQty > currentAptStock){
    alert(`アパート在庫が足りません。現在 ${currentAptStock}${item.unit} です。画面を最新化してから、もう一度配分してください。`);
    return;
  }

  transferInFlight = true;
  try{
    if(isCloudReady()){
      const itemId = item.id || item.itemId || resolveItemIdByName(name);
      if(!itemId) throw new Error(`item_id が見つかりません: ${name}`);
      for(const row of plan){
        await cloudEnsureStoreTarget(itemId, row.storeName);
        await cloudRpc('apply_transfer', {
          p_item_id: itemId,
          p_store_code: STORE_CODE_MAP[row.storeName],
          p_qty: row.qty,
          p_user_id: currentAuthUser.id
        });
        // Log each store transfer locally
        addLog({type:'補充実行', scope:`アパート→${row.storeName}`, itemName:name, user,
          message:`${row.qty}${item.unit} をアパートから ${row.storeName} へ補充`});
      }
      // Enable undo for single-store cloud transfers
      const _cloudPlanDone = plan.filter(r => r.qty > 0);
      if(_cloudPlanDone.length === 1){
        setUndoTransfer({itemName:name, toStore:_cloudPlanDone[0].storeName,
          qty:_cloudPlanDone[0].qty, unit:item.unit, user});
      }
      await reloadAllFromSupabase();
    }else{
      const apt = findAptItem(name);
      for(const row of plan){
        const moveQty = Math.min(row.qty, apt.stock ?? 0);
        if(moveQty <= 0) continue;
        apt.stock -= moveQty;
        if(!storeStock[name]) storeStock[name] = {};
        storeStock[name][row.storeName] = (storeStock[name][row.storeName] ?? 0) + moveQty;
        addLog({type:'補充実行', scope:`アパート→${row.storeName}`, itemName:name, user, message:`${moveQty}${item.unit} をアパートから ${row.storeName} へ補充`});
      }
      persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');
      persist('inv_store_v3', storeStock, 'inv_store_ts_v3');
      setLastSaved('apt','inv_apt_ts_v3');
      setLastSaved('store','inv_store_ts_v3');
      // Enable undo if plan touched exactly one store
      const _planDone = plan.filter(r => r.qty > 0);
      if(_planDone.length === 1){
        setUndoTransfer({itemName:name, toStore:_planDone[0].storeName, qty:_planDone[0].qty,
          unit:item.unit, user});
      }
    }

    item.stores.forEach(storeName => delete transferDraftQty[getTransferKey(name, storeName)]);

    if(document.getElementById('view-store').style.display !== 'none') renderStore();
    if(document.getElementById('view-refill').style.display !== 'none') renderRefill();
    if(document.getElementById('view-order').style.display !== 'none') renderOrder();
    if(document.getElementById('view-shopping').style.display !== 'none') renderShopping();
    if(document.getElementById('view-apt').style.display !== 'none') renderApt();
    if(document.getElementById('view-log').style.display !== 'none') renderLogs();
    renderDashboard();

    const summary = plan.map(row => `${row.storeName}${row.qty}${item.unit}`).join(' / ');
    toast(`📦 ${name} を補充しました（${summary}）`);
  }catch(err){
    console.error(err);
    alert('補充に失敗しました: ' + cloudErrorMessage(err, '補充処理に失敗しました'));
  }finally{
    transferInFlight = false;
  }
}
async function applyTransfer(encodedName, encodedStore, qty){
  const name = decodeURIComponent(encodedName);
  const toStore = decodeURIComponent(encodedStore);
  const user = ensureActionUser();
  if(!user) return;
  if(transferInFlight){
    toast('補充処理中です。完了までお待ちください');
    return;
  }
  transferInFlight = true;
  try{
    await performTransferSingle(name, toStore, qty, user);
    if(document.getElementById('view-store').style.display !== 'none') updateStoreCardUI(name); else renderStore();
    if(document.getElementById('view-refill').style.display !== 'none') renderRefill();
    if(document.getElementById('view-order').style.display !== 'none') renderOrder();
    if(document.getElementById('view-shopping').style.display !== 'none') renderShopping();
    if(document.getElementById('view-apt').style.display !== 'none') renderApt();
    if(document.getElementById('view-log').style.display !== 'none') renderLogs();
    renderDashboard();
  }catch(err){
    console.error(err);
    alert('補充に失敗しました: ' + cloudErrorMessage(err, '補充処理に失敗しました'));
  }finally{
    transferInFlight = false;
  }
}

let repeatTimer = null;
let repeatInterval = null;
let activeRepeatPointerId = null;
let activeRepeatButton = null;
let activeRepeatToken = '';
let touchPressTriggered = false;
let touchStartX = 0;
let touchStartY = 0;
const TOUCH_MOVE_CANCEL_PX = 12;
const TOUCH_HOLD_DELAY_MS = 180;

function runRepeatAction(token){
  const parts = token.split('|').map(decodeURIComponent);
  if(parts[0] === 'store') chStore(parts[1], parts[2], Number(parts[3]));
  if(parts[0] === 'apt') chApt(Number(parts[1]), Number(parts[2]));
}
function startRepeat(token, runImmediately = true){
  stopRepeat();
  if(runImmediately) runRepeatAction(token);
  repeatTimer = setTimeout(() => {
    repeatInterval = setInterval(() => runRepeatAction(token), 140);
  }, 330);
}
function stopRepeat(){
  clearTimeout(repeatTimer); repeatTimer = null;
  clearInterval(repeatInterval); repeatInterval = null;
}
function clearRepeatInteraction(){
  stopRepeat();
  activeRepeatPointerId = null;
  activeRepeatButton = null;
  activeRepeatToken = '';
  touchPressTriggered = false;
}
function bindRepeatButtons(){
  document.querySelectorAll('[data-repeat]').forEach(btn => {
    const token = btn.getAttribute('data-repeat');
    btn.onpointerdown = e => {
      e.preventDefault();
      activeRepeatPointerId = e.pointerId;
      activeRepeatButton = btn;
      activeRepeatToken = token;
      touchPressTriggered = false;

      if(e.pointerType === 'touch'){
        touchStartX = e.clientX;
        touchStartY = e.clientY;
        stopRepeat();
        repeatTimer = setTimeout(() => {
          if(activeRepeatPointerId !== e.pointerId || activeRepeatButton !== btn) return;
          touchPressTriggered = true;
          btn.setPointerCapture?.(e.pointerId);
          startRepeat(token, true);
        }, TOUCH_HOLD_DELAY_MS);
      }else{
        btn.setPointerCapture?.(e.pointerId);
        startRepeat(token, true);
      }
    };
    btn.onpointermove = e => {
      if(e.pointerType !== 'touch') return;
      if(activeRepeatPointerId !== e.pointerId || activeRepeatButton !== btn) return;
      const moved = Math.abs(e.clientX - touchStartX) > TOUCH_MOVE_CANCEL_PX || Math.abs(e.clientY - touchStartY) > TOUCH_MOVE_CANCEL_PX;
      if(moved && !touchPressTriggered){
        clearRepeatInteraction();
      }
    };
    btn.onpointerup = e => {
      if(e.pointerType === 'touch' && !touchPressTriggered){
        clearRepeatInteraction();
        return;
      }
      clearRepeatInteraction();
    };
    btn.onpointerleave = () => {
      if(touchPressTriggered) stopRepeat();
    };
    btn.onpointercancel = clearRepeatInteraction;
    btn.onclick = e => e.preventDefault();
  });
}
function bindEditButtons(){
  document.querySelectorAll('[data-edit-mode]').forEach(btn => {
    btn.onclick = () => {
      const mode = btn.getAttribute('data-edit-mode');
      if(mode === 'store'){
        openModal({mode:'store', editName:btn.getAttribute('data-edit-name')});
      }else if(mode === 'apt'){
        openModal({mode:'apt', editIdx:Number(btn.getAttribute('data-edit-idx'))});
      }
    };
  });
}
document.addEventListener('pointerup', clearRepeatInteraction);

async function saveStore(){
  persist('inv_store_v3', storeStock, 'inv_store_ts_v3');
  setLastSaved('store','inv_store_ts_v3');
  if(isCloudReady()){
    try{
      for(const item of ITEMS){
        for(const storeName of item.stores){
          const qty = storeStock[item.name]?.[storeName] ?? 0;
          await cloudUpsertStoreQuantity(item.name, storeName, qty);
        }
      }
      await reloadAllFromSupabase();
    }catch(err){
      console.error(err);
      alert('店舗在庫のクラウド保存に失敗しました: ' + cloudErrorMessage(err, '保存に失敗しました'));
      return;
    }
  }
  renderDashboard();
  toast('✓ 店舗在庫を保存しました');
}
async function saveApt(){
  persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');
  setLastSaved('apt','inv_apt_ts_v3');
  if(isCloudReady()){
    try{
      for(const item of aptStock){
        await cloudUpsertApartment(item.name);
      }
      await reloadAllFromSupabase();
    }catch(err){
      console.error(err);
      alert('アパート在庫のクラウド保存に失敗しました: ' + cloudErrorMessage(err, '保存に失敗しました'));
      return;
    }
  }
  renderDashboard();
  toast('✓ アパート在庫を保存しました');
}

let qtyModalState = null;
function openQtyModal(opts){
  qtyModalState = opts;
  const input = document.getElementById('qty-modal-input');
  const title = document.getElementById('qty-modal-title');
  const unitEl = document.getElementById('qty-modal-unit');
  const meta = document.getElementById('qty-modal-meta');
  let value = 0;
  let unit = '個';
  if(opts.mode === 'shopping'){
    const nm = decodeURIComponent(opts.name);
    const sc = decodeURIComponent(opts.store);
    value = opts.value != null ? opts.value : 0;
    unit  = opts.unit || '個';
    title.textContent = '仕入れ数を変更';
    meta.textContent  = nm + ' （' + sc + '）';
  }else if(opts.mode === 'store'){
    const name = decodeURIComponent(opts.name);
    const store = decodeURIComponent(opts.store);
    const item = ITEMS.find(i => i.name === name);
    value = storeStock[name]?.[store] ?? 0;
    unit = item?.unit || '個';
    title.textContent = `${store} の在庫数を変更`;
    meta.textContent = `${name} の現在在庫を変更します`;
  }else{
    const item = aptStock[opts.idx];
    if(!item) return;
    value = item.stock ?? 0;
    unit = item.unit || '個';
    title.textContent = 'アパート在庫数を変更';
    meta.textContent = `${item.name} の現在在庫を変更します`;
  }
  input.value = value;
  unitEl.textContent = unit;
  document.getElementById('qty-modal-overlay').classList.add('open');
  setTimeout(() => { input.focus(); input.select(); }, 50);
}
function closeQtyModal(){
  document.getElementById('qty-modal-overlay').classList.remove('open');
  qtyModalState = null;
}
function closeQtyModalOutside(e){
  if(e.target === document.getElementById('qty-modal-overlay')) closeQtyModal();
}
function stepQtyModal(delta){
  const input = document.getElementById('qty-modal-input');
  const current = Math.max(0, parseInt(input.value || '0', 10) || 0);
  input.value = Math.max(0, current + delta);
}
async function saveQtyModal(){
  if(!qtyModalState) return;
  const user = ensureActionUser();
  if(!user) return;
  const input = document.getElementById('qty-modal-input');
  const nextValue = Math.max(0, Math.min(9999, parseInt(input.value || '0', 10) || 0));
  if(qtyModalState.mode === 'shopping'){
    const key = decodeURIComponent(qtyModalState.name) + '|' + decodeURIComponent(qtyModalState.store);
    shoppingQtyOverrides[key] = nextValue;
    renderShopping();
    closeQtyModal();
    toast('✓ 仕入れ数を変更しました');
    return;
  }
  if(qtyModalState.mode === 'store'){
    const name = decodeURIComponent(qtyModalState.name);
    const store = decodeURIComponent(qtyModalState.store);
    const item = ITEMS.find(i => i.name === name);
    if(!item) return;
    if(!storeStock[name]) storeStock[name] = {};
    const prev = storeStock[name]?.[store] ?? 0;
    storeStock[name][store] = nextValue;
    persist('inv_store_v3', storeStock, 'inv_store_ts_v3');
    setLastSaved('store','inv_store_ts_v3');
    const delta = nextValue - prev;
    if(delta !== 0){
      addLog({type:'数量変更', scope:store, itemName:name, user, delta, message:`${prev}${item.unit} → ${nextValue}${item.unit} に変更`});
    }
    if(isCloudReady()){
      try{
        await cloudUpsertStoreQuantity(name, store, nextValue);
        await reloadAllFromSupabase();
      }catch(err){
        console.error(err);
        storeStock[name][store] = prev;
        persist('inv_store_v3', storeStock, 'inv_store_ts_v3');
        try{ await reloadAllFromSupabase(); }catch(_){}
        alert('クラウド保存に失敗したため、店舗在庫の変更を元に戻しました: ' + cloudErrorMessage(err, '保存に失敗しました'));
        closeQtyModal();
        return;
      }
    }
    if(document.getElementById('view-store').style.display !== 'none') updateStoreCardUI(name); else renderStore();
    if(document.getElementById('view-refill').style.display !== 'none') renderRefill();
    if(document.getElementById('view-order').style.display !== 'none') renderOrder();
    if(document.getElementById('view-shopping').style.display !== 'none') renderShopping();
    if(document.getElementById('view-log').style.display !== 'none') renderLogs();
    renderDashboard();
    toast(`✓ ${store} の在庫を変更しました`);
  }else{
    const item = aptStock[qtyModalState.idx];
    if(!item) return;
    const prev = item.stock ?? 0;
    item.stock = nextValue;
    persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');
    setLastSaved('apt','inv_apt_ts_v3');
    const delta = nextValue - prev;
    if(delta !== 0){
      addLog({type:'数量変更', scope:'アパート', itemName:item.name, user, delta, message:`${prev}${item.unit} → ${nextValue}${item.unit} に変更`});
    }
    if(isCloudReady()){
      try{
        await cloudUpsertApartment(item.name);
        await reloadAllFromSupabase();
      }catch(err){
        console.error(err);
        item.stock = prev;
        persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');
        try{ await reloadAllFromSupabase(); }catch(_){}
        alert('クラウド保存に失敗したため、アパート在庫の変更を元に戻しました: ' + cloudErrorMessage(err, '保存に失敗しました'));
        closeQtyModal();
        return;
      }
    }
    if(document.getElementById('view-apt').style.display !== 'none') renderApt();
    if(document.getElementById('view-refill').style.display !== 'none') renderRefill();
    if(document.getElementById('view-order').style.display !== 'none') renderOrder();
    if(document.getElementById('view-shopping').style.display !== 'none') renderShopping();
    if(document.getElementById('view-log').style.display !== 'none') renderLogs();
    renderDashboard();
    toast('✓ アパート在庫を変更しました');
  }
  closeQtyModal();
}

function openModal(opts){
  modalState = opts;
  const isEdit = opts.editName != null || opts.editIdx != null;
  ['f-name','f-min','f-target','f-stock','f-supplier','f-url','f-order','f-store-supplier','f-store-url','f-store-order'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('f-user').value = localStorage.getItem('inv_user') || '';
  document.getElementById('f-category').value = '消耗品';
  document.getElementById('f-unit').value = '';
  selectedStores = ['神楽坂','男マエ食道'];
  STORES.forEach(s => document.getElementById('chk-' + s).className = 'store-check checked');
  document.getElementById('f-stores-row').style.display = opts.mode === 'store' ? 'block' : 'none';
  document.getElementById('f-store-order-fields').style.display = opts.mode === 'store' ? 'block' : 'none';
  document.getElementById('f-apt-fields').style.display = opts.mode === 'apt' ? 'block' : 'none';
  // モードに応じて「最低在庫数」「目標在庫数」のラベル/ヒントを切替
  const minLabel = document.getElementById('f-min-label');
  const targetLabel = document.getElementById('f-target-label');
  const minHelp = document.getElementById('f-min-help');
  if(opts.mode === 'apt'){
    if(minLabel)    minLabel.textContent    = 'アパートの最低在庫数 *';
    if(targetLabel) targetLabel.textContent = 'アパートの目標在庫数 *';
    if(minHelp)     minHelp.textContent     = 'アパート在庫の発注判定に使われます(店舗側の値とは独立)';
  }else{
    if(minLabel)    minLabel.textContent    = '店舗の最低在庫数 *';
    if(targetLabel) targetLabel.textContent = '店舗の目標在庫数 *';
    if(minHelp)     minHelp.textContent     = '店舗在庫の補充判定に使われます(アパート側の値とは独立)';
  }
  document.getElementById('f-stock-row').style.display = isEdit ? 'none' : 'block';
  document.getElementById('delete-section').style.display = isEdit ? 'block' : 'none';
  document.getElementById('modal-submit-btn').textContent = isEdit ? '変更を保存する' : '追加する';

  if(isEdit && opts.mode === 'store'){
    const item = ITEMS.find(i => i.name === opts.editName);
    if(!item) return;
    document.getElementById('modal-title').textContent = '店舗品目を編集';
    document.getElementById('f-name').value = item.name;
    document.getElementById('f-category').value = item.category;
    document.getElementById('f-unit').value = item.unit;
    document.getElementById('f-min').value = item.min;
    document.getElementById('f-target').value = getTarget(item);
    document.getElementById('f-store-supplier').value = item.supplier || '';
    document.getElementById('f-store-url').value = item.supplierUrl || '';
    document.getElementById('f-store-order').value = item.orderQty != null ? item.orderQty : '';
    selectedStores = [...item.stores];
    STORES.forEach(s => document.getElementById('chk-' + s).className = 'store-check' + (selectedStores.includes(s) ? ' checked' : ''));
  }else if(isEdit && opts.mode === 'apt'){
    const item = aptStock[opts.editIdx];
    if(!item) return;
    document.getElementById('modal-title').textContent = 'アパート品目を編集';
    document.getElementById('f-name').value = item.name;
    document.getElementById('f-category').value = item.category;
    document.getElementById('f-unit').value = item.unit;
    document.getElementById('f-min').value = item.min;
    document.getElementById('f-target').value = getTarget(item);
    document.getElementById('f-supplier').value = item.supplier || '';
    document.getElementById('f-url').value = item.supplierUrl || '';
    document.getElementById('f-order').value = item.orderQty != null ? item.orderQty : '';
  }else{
    document.getElementById('modal-title').textContent = opts.mode === 'store' ? '店舗 新規品目を追加' : 'アパート 新規品目を追加';
  }
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal(){ document.getElementById('modal-overlay').classList.remove('open'); }
function closeModalOutside(e){ if(e.target === document.getElementById('modal-overlay')) closeModal(); }
function toggleStore(store){
  const idx = selectedStores.indexOf(store);
  if(idx >= 0){
    if(selectedStores.length === 1) return;
    selectedStores.splice(idx,1);
    document.getElementById('chk-' + store).className = 'store-check';
  }else{
    selectedStores.push(store);
    document.getElementById('chk-' + store).className = 'store-check checked';
  }
}
function validateModalValues(){
  const user = (document.getElementById('f-user').value || '').trim();
  if(!user){ alert('担当者名を入力してください'); return null; }
  localStorage.setItem('inv_user', user);
  updateHeaderUser();

  const name = document.getElementById('f-name').value
    .trim().replace(/\s+/g, ' ');  // normalize inner spaces
  const category = document.getElementById('f-category').value;
  const unit = document.getElementById('f-unit').value;
  const minVal = clampInt(document.getElementById('f-min').value, 0, 9999);
  const targetRaw = clampInt(document.getElementById('f-target').value, 1, 9999);
  const stock = clampInt(document.getElementById('f-stock').value, 0, 9999) ?? 0;

  if(!name){ alert('商品名を入力してください'); return null; }
  if(!CATEGORY_OPTIONS.includes(category)){ alert('カテゴリを選択してください'); return null; }
  if(!UNIT_OPTIONS.includes(unit)){ alert('単位を選択してください'); return null; }
  if(minVal == null){ alert('最低在庫数を正しく入力してください'); return null; }
  const targetVal = targetRaw == null ? Math.max(minVal + 1, minVal * 2, 1) : Math.max(targetRaw, minVal + 1);

  return {user, name, category, unit, minVal, targetVal, stock};
}
async function submitModal(){
  const base = validateModalValues();
  if(!base) return;
  const {user,name,category,unit,minVal,targetVal,stock} = base;
  const {mode,editName,editIdx} = modalState;
  const isEdit = editName != null || editIdx != null;

  if(mode === 'store'){
    const supplier = document.getElementById('f-store-supplier').value.trim();
    const supplierUrl = document.getElementById('f-store-url').value.trim();
    const orderQty = clampInt(document.getElementById('f-store-order').value, 0, 9999);

    if(isEdit){
      const item = ITEMS.find(i => i.name === editName);
      if(!item) return;
      const oldName = item.name;
      if(oldName !== name && ITEMS.some(i => i.name === name)){ alert('同じ名前の商品が既に存在します'); return; }

      item.name = name;
      item.category = category;
      item.unit = unit;
      item.min = minVal;
      item.target = targetVal;
      item.stores = [...selectedStores];
      item.supplier = supplier || '';
      item.supplierUrl = supplierUrl || '';
      item.orderQty = orderQty;

      if(oldName !== name){
        storeStock[name] = storeStock[oldName] || {};
        delete storeStock[oldName];
        const oldItemId = itemIdByName[oldName];
        if(oldItemId && !itemIdByName[name]){
          itemIdByName[name] = oldItemId;
          // Keep itemNameById in sync
          if(itemNameById[oldItemId] === oldName) itemNameById[oldItemId] = name;
        }
        delete itemIdByName[oldName];
        // Migrate orderChecks keys
        ['店舗不足', 'アパート発注'].forEach(scope => {
          const oldKey = orderCheckKey(scope, oldName);
          const newKey = orderCheckKey(scope, name);
          if(orderChecks[oldKey]){
            orderChecks[newKey] = orderChecks[oldKey];
            delete orderChecks[oldKey];
          }
        });
        persist('inv_order_checks_v1', orderChecks);
        // Migrate shopping state keys
        ['店舗', 'アパート'].forEach(scope => {
          const oldK = oldName + '|' + scope;
          const newK = name    + '|' + scope;
          if(shoppingPurchased[oldK])   { shoppingPurchased[newK]   = shoppingPurchased[oldK];   delete shoppingPurchased[oldK]; }
          if(shoppingQtyOverrides[oldK]){ shoppingQtyOverrides[newK] = shoppingQtyOverrides[oldK]; delete shoppingQtyOverrides[oldK]; }
        });
      }

      STORES.forEach(s => {
        if(!selectedStores.includes(s)) storeStock[name][s] = null;
        else if(storeStock[name][s] == null) storeStock[name][s] = 0;
      });

      persist('inv_items_v3', ITEMS, null);
      persist('inv_store_v3', storeStock, 'inv_store_ts_v3');

      if(isCloudReady()){
        try{
          const id = await cloudUpdateItem(item, 'upsert');
          item.id = id;
          item.itemId = id;
          await cloudReplaceStoreTargets(item);
        }catch(err){
          console.error(err);
          alert('クラウド反映に失敗しました: ' + cloudErrorMessage(err));
        }
      }

      addLog({type:'編集', scope:'店舗マスタ', itemName:name, user, message:'商品情報を更新'});
      setLastSaved('store','inv_store_ts_v3');
      closeModal();
      renderStore(); renderLogs(); renderDashboard();
      toast(`✓ 「${name}」を更新しました`);
    }else{
      if(ITEMS.find(i => i.name === name)){ alert('同じ名前の商品が既に存在します'); return; }

      const newItem = {
        name, category, unit,
        min:minVal, target:targetVal,
        stores:[...selectedStores],
        supplier: supplier || '',
        supplierUrl: supplierUrl || '',
        orderQty
      };
      ITEMS.push(newItem);

      storeStock[name] = {};
      STORES.forEach(s => storeStock[name][s] = selectedStores.includes(s) ? stock : null);

      persist('inv_items_v3', ITEMS, null);
      persist('inv_store_v3', storeStock, 'inv_store_ts_v3');

      if(isCloudReady()){
        try{
          const id = await cloudUpdateItem(newItem, 'upsert');
          newItem.id = id;
          newItem.itemId = id;
          await cloudReplaceStoreTargets(newItem);
        }catch(err){
          console.error(err);
          alert('クラウド反映に失敗しました: ' + cloudErrorMessage(err));
        }
      }

      addLog({type:'追加', scope:'店舗マスタ', itemName:name, user, message:`新規品目を追加（初期在庫 ${stock}${unit}）`});
      setLastSaved('store','inv_store_ts_v3');
      closeModal();
      renderStore(); renderLogs(); renderDashboard();
      toast(`✓ 「${name}」を追加しました`);
    }
  }else{
    const supplier = document.getElementById('f-supplier').value.trim();
    const supplierUrl = document.getElementById('f-url').value.trim();
    const orderQty = clampInt(document.getElementById('f-order').value, 0, 9999);

    if(isEdit){
      const item = aptStock[editIdx];
      if(!item) return;
      const oldName = item.name;
      if(item.name !== name && aptStock.some((i,idx)=>idx !== editIdx && i.name === name)){ alert('同じ名前の商品が既に存在します'); return; }

      item.name = name;
      item.category = category;
      item.unit = unit;
      item.min = minVal;
      item.target = targetVal;
      item.supplier = supplier || '—';
      item.supplierUrl = supplierUrl || '';
      item.orderQty = orderQty;

      if(oldName !== name){
        const oldAptId = itemIdByName[oldName];
        if(oldAptId && !itemIdByName[name]){
          itemIdByName[name] = oldAptId;
          if(itemNameById[oldAptId] === oldName) itemNameById[oldAptId] = name;
        }
        delete itemIdByName[oldName];
        // Migrate orderChecks keys
        ['店舗不足', 'アパート発注'].forEach(scope => {
          const oldKey = orderCheckKey(scope, oldName);
          const newKey = orderCheckKey(scope, name);
          if(orderChecks[oldKey]){
            orderChecks[newKey] = orderChecks[oldKey];
            delete orderChecks[oldKey];
          }
        });
        persist('inv_order_checks_v1', orderChecks);
        ['店舗', 'アパート'].forEach(scope => {
          const oldK = oldName + '|' + scope;
          const newK = name    + '|' + scope;
          if(shoppingPurchased[oldK])   { shoppingPurchased[newK]   = shoppingPurchased[oldK];   delete shoppingPurchased[oldK]; }
          if(shoppingQtyOverrides[oldK]){ shoppingQtyOverrides[newK] = shoppingQtyOverrides[oldK]; delete shoppingQtyOverrides[oldK]; }
        });
      }

      persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');

      if(isCloudReady()){
        try{
          // 店舗にも存在する品目の場合は items テーブルの min/target を上書きしない(店舗側の値を保持)
          const isSharedWithStore = ITEMS.some(i => i.name === name);
          const cloudPayload = {
            id: item.itemId || itemIdByName[name],
            name: item.name,
            category: item.category,
            unit: item.unit,
            supplier: item.supplier,
            supplierUrl: item.supplierUrl,
            orderQty: item.orderQty
          };
          if(!isSharedWithStore){
            cloudPayload.min = item.min;
            cloudPayload.target = item.target;
          }
          const id = await cloudUpdateItem(cloudPayload, 'upsert');
          item.itemId = id;
          itemIdByName[item.name] = id;
          await cloudUpsertApartment(item.name);
        }catch(err){
          console.error(err);
          alert('クラウド反映に失敗しました: ' + cloudErrorMessage(err));
        }
      }

      addLog({type:'編集', scope:'アパートマスタ', itemName:name, user, message:'商品情報を更新'});
      setLastSaved('apt','inv_apt_ts_v3');
      closeModal();
      renderApt(); renderLogs(); renderDashboard();
      toast(`✓ 「${name}」を更新しました`);
    }else{
      if(aptStock.find(i => i.name === name)){ alert('同じ名前の商品が既に存在します'); return; }

      const newAptItem = {
        name, category, unit,
        stock, min:minVal, target:targetVal,
        supplier: supplier || '—',
        supplierUrl: supplierUrl || '',
        orderQty
      };
      aptStock.push(newAptItem);
      persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');

      if(isCloudReady()){
        try{
          // 店舗にも存在する品目の場合は items テーブルの min/target を上書きしない
          const isSharedWithStore = ITEMS.some(i => i.name === newAptItem.name);
          const cloudPayload = {
            name: newAptItem.name,
            category: newAptItem.category,
            unit: newAptItem.unit,
            supplier: newAptItem.supplier,
            supplierUrl: newAptItem.supplierUrl,
            orderQty: newAptItem.orderQty
          };
          if(!isSharedWithStore){
            cloudPayload.min = newAptItem.min;
            cloudPayload.target = newAptItem.target;
          }
          const id = await cloudUpdateItem(cloudPayload, 'upsert');
          newAptItem.itemId = id;
          itemIdByName[newAptItem.name] = id;
          await cloudUpsertApartment(newAptItem.name);
        }catch(err){
          console.error(err);
          alert('クラウド反映に失敗しました: ' + cloudErrorMessage(err));
        }
      }

      addLog({type:'追加', scope:'アパートマスタ', itemName:name, user, message:`新規品目を追加（初期在庫 ${stock}${unit}）`});
      setLastSaved('apt','inv_apt_ts_v3');
      closeModal();
      renderApt(); renderLogs(); renderDashboard();
      toast(`✓ 「${name}」を追加しました`);
    }
  }
}
function deleteItem(){
  const user = localStorage.getItem('inv_user') || '担当者未設定';
  const {mode,editName,editIdx} = modalState;
  if(mode === 'store'){
    if(!confirm(`「${editName}」を削除しますか？`)) return;
    const idx = ITEMS.findIndex(i => i.name === editName);
    if(idx >= 0) ITEMS.splice(idx,1);
    delete storeStock[editName];
    // Clean up all name-keyed state for deleted item
    ['店舗不足', 'アパート発注'].forEach(scope => {
      delete orderChecks[orderCheckKey(scope, editName)];
    });
    ['店舗', 'アパート'].forEach(scope => {
      const k = editName + '|' + scope;
      delete shoppingPurchased[k];
      delete shoppingQtyOverrides[k];
    });
    persist('inv_order_checks_v1', orderChecks);
    const _deletedStoreId = itemIdByName[editName];  // save before delete
    delete itemIdByName[editName];
    persist('inv_items_v3', ITEMS, null);
    persist('inv_store_v3', storeStock, 'inv_store_ts_v3');
    if(isCloudReady() && _deletedStoreId){
      supabaseClient.from('items').update({is_active:false}).eq('id', _deletedStoreId).then(({error})=>{
        if(error){ console.error(error); toast('クラウド反映に失敗しました'); }
      });
    }
    addLog({type:'削除', scope:'店舗マスタ', itemName:editName, user, message:'品目を削除'});
    setLastSaved('store','inv_store_ts_v3');
    closeModal();
    renderStore(); renderLogs(); renderDashboard();
    toast(`🗑 「${editName}」を削除しました`);
  }else{
    const name = aptStock[editIdx]?.name;
    if(!confirm(`「${name}」を削除しますか？`)) return;
    aptStock.splice(editIdx,1);
    // Clean up name-keyed state
    ['店舗不足', 'アパート発注'].forEach(scope => {
      delete orderChecks[orderCheckKey(scope, name)];
    });
    ['店舗', 'アパート'].forEach(scope => {
      const k = name + '|' + scope;
      delete shoppingPurchased[k];
      delete shoppingQtyOverrides[k];
    });
    persist('inv_order_checks_v1', orderChecks);
    const _deletedAptId = itemIdByName[name];  // save before delete
    delete itemIdByName[name];
    persist('inv_apt_v3', aptStock, 'inv_apt_ts_v3');
    if(isCloudReady() && _deletedAptId){
      supabaseClient.from('items').update({is_active:false}).eq('id', _deletedAptId).then(({error})=>{
        if(error){ console.error(error); toast('クラウド反映に失敗しました'); }
      });
    }
    addLog({type:'削除', scope:'アパートマスタ', itemName:name, user, message:'品目を削除'});
    setLastSaved('apt','inv_apt_ts_v3');
    closeModal();
    renderApt(); renderLogs(); renderDashboard();
    toast(`🗑 「${name}」を削除しました`);
  }
}
function toast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'), 2200);
}

async function bootApp(){
  document.getElementById('header-date').textContent = new Date().toLocaleDateString('ja-JP',{year:'numeric',month:'long',day:'numeric',weekday:'short'});
  setLastSaved('store','inv_store_ts_v3');
  setLastSaved('apt','inv_apt_ts_v3');
  cleanupOldChecklistEntries();
  updateHeaderUser();
  renderDashboard();
  renderUndoBar();
  renderStore();
  await tryAutoConnectSupabase();
}
bootApp();
let pendingTransferEncodedName = null;
function showTransferConfirm(encodedName){
  const name = decodeURIComponent(encodedName);
  const item = ITEMS.find(i => i.name === name);
  const transfer = item ? getTransferSuggestion(item) : null;
  if(!item || !transfer){ toast('補充対象を確認してください'); return; }
  const plan = getTransferPlan(item, transfer).filter(row => row.qty > 0);
  if(!plan.length){ toast('補充数を入力してください'); return; }
  const total = plan.reduce((sum, row) => sum + row.qty, 0);
  const remainApt = Math.max(0, (transfer.apt.stock ?? 0) - total);
  const rows = plan.map(row =>
    '<div class="transfer-confirm-row">' +
    '<span class="transfer-confirm-store">' + escapeHtml(row.storeName) + '</span>' +
    '<span class="transfer-confirm-arrow">→</span>' +
    '<span class="transfer-confirm-qty">' + row.qty + ' ' + item.unit + '</span>' +
    '</div>'
  ).join('');
  document.getElementById('transfer-confirm-body').innerHTML =
    '<div class="transfer-confirm-item">' + escapeHtml(name) + '</div>' +
    '<div class="transfer-confirm-rows">' + rows + '</div>' +
    '<div class="transfer-confirm-summary">合計 <strong>' + total + ' ' + item.unit + '</strong> をアパートから補充します<br>補充後のアパート在庫：<strong>' + remainApt + ' ' + item.unit + '</strong></div>';
  pendingTransferEncodedName = encodedName;
  document.getElementById('transfer-confirm-overlay').classList.add('open');
}
function closeTransferConfirm(){
  document.getElementById('transfer-confirm-overlay').classList.remove('open');
  pendingTransferEncodedName = null;
}
function closeTransferConfirmOutside(e){
  if(e.target === document.getElementById('transfer-confirm-overlay')) closeTransferConfirm();
}
async function executeTransferConfirm(){
  const name = pendingTransferEncodedName;
  closeTransferConfirm();
  if(name) await applyTransferPlan(name);
}

function renderShopping(){
  var storeItems = ITEMS
    .filter(function(item){
      var key = item.name + '|店舗';
      return getTotal(item) <= item.min && !item.supplierUrl && !shoppingPurchased[key];
    })
    .map(function(item){
      var key  = item.name + '|店舗';
      var dQty = getAutoOrderQty(getTotal(item), item.min, getTarget(item), item.orderQty);
      var qty  = shoppingQtyOverrides[key] != null ? shoppingQtyOverrides[key] : dQty;
      var hasApt = aptStock.some(function(a){ return a.name === item.name; });
      return { name:item.name, unit:item.unit,
               supplier:item.supplier||'仕入れ先未設定',
               qty:qty, scope:'店舗', hasApt:hasApt };
    });
  var aptItems = aptStock
    .filter(function(item){
      var key = item.name + '|アパート';
      return item.stock <= item.min && !item.supplierUrl && !shoppingPurchased[key];
    })
    .map(function(item){
      var key  = item.name + '|アパート';
      var dQty = getAutoOrderQty(item.stock, item.min, item.target||(item.min+5), item.orderQty);
      var qty  = shoppingQtyOverrides[key] != null ? shoppingQtyOverrides[key] : dQty;
      return { name:item.name, unit:item.unit,
               supplier:item.supplier||'仕入れ先未設定',
               qty:qty, scope:'アパート', hasApt:true };
    });
  var allItems = storeItems.concat(aptItems);
  var pill = document.getElementById('shopping-count-pill');
  if(pill) pill.textContent = allItems.length + '件';
  var container = document.getElementById('shopping-items');
  if(!container) return;
  if(allItems.length === 0){
    container.innerHTML = '<div class="empty-state">買い物が必要な商品はありません 🎉</div>';
    return;
  }
  var groups = {};
  allItems.forEach(function(item){
    if(!groups[item.supplier]) groups[item.supplier] = [];
    groups[item.supplier].push(item);
  });
  var html = '<div class="shopping-mode-badge">🛒 店頭購入リスト'     + '  <span class="shopping-mode-note">ネット発注対象外の商品</span></div>';
  Object.keys(groups).sort().forEach(function(supplier){
    var items = groups[supplier];
    html += '<div class="shopping-supplier-group">';
    html += '<div class="shopping-supplier-header">🏪 ' + escapeHtml(supplier) + '</div>';
    items.forEach(function(item){
      var enc  = encodeURIComponent(item.name);
      var encS = encodeURIComponent(item.scope);
      var destBadge = item.hasApt
        ? '<span class="shopping-dest apt">↑アパート</span>'
        : '<span class="shopping-dest store">→店舗直接</span>';
      html += '<div class="shopping-item-row">';
      html += '<span class="shopping-item-name">' + escapeHtml(item.name) + '</span>';
      html += '<span class="shopping-item-scope">' + escapeHtml(item.scope) + '</span>';
      html += destBadge;
      html += '<span class="shopping-item-qty">' + item.qty + item.unit + '</span>';
      html += '<button class="shopping-edit-btn" onclick="shoppingOpenEdit(';
      html += "'" + enc + "','" + encS + "','" + item.unit + "'," + item.qty;
      html += ')">✏️ 編集</button>';
      html += '<button class="shopping-buy-btn" onclick="shoppingPurchase(';
      html += "'" + enc + "','" + encS + "'," + item.qty + ",'" + item.unit + "'";
      html += ')">✅ 仕入れ完了</button>';
      html += '</div>';
    });
    html += '</div>';
  });
  container.innerHTML = html;
}

function shoppingOpenEdit(encodedName, encodedScope, unit, currentQty){
  var name  = decodeURIComponent(encodedName);
  var scope = decodeURIComponent(encodedScope);
  openQtyModal({ mode:'shopping', name:encodedName, store:encodedScope,
    unit:unit, value:Number(currentQty),
    label: name + ' (仕入れ数：' + scope + ')' });
}

// ── Store distribution overlay (for items not in aptStock) ──────────
function showShoppingStoreSelect(encodedName, qty, unit, stores){
  var name = decodeURIComponent(encodedName);
  shoppingDirectPending = { encodedName:encodedName, qty:qty, unit:unit, stores:stores };
  // Default: split evenly (floor), remainder to first store
  var base = Math.floor(qty / stores.length);
  var rem  = qty - base * stores.length;
  var rows = stores.map(function(s, i){
    var def = base + (i === 0 ? rem : 0);
    var encS = encodeURIComponent(s);
    return '<div class="shopping-dist-row">'
         + '<span class="shopping-dist-store">' + escapeHtml(s) + '</span>'
         + '<div class="shopping-dist-input-wrap">'
         + '<button class="shopping-dist-step" onclick="shoppingDistStep(\'' + encS + '\',-1)">-</button>'
         + '<input class="shopping-dist-input" id="sdist-' + encS + '" type="number" '
         +   'min="0" max="' + qty + '" value="' + def + '" '
         +   'oninput="updateShoppingDistTotal()">'
         + '<button class="shopping-dist-step" onclick="shoppingDistStep(\'' + encS + '\',1)">+</button>'
         + '</div>'
         + '<span class="shopping-dist-unit">' + escapeHtml(unit) + '</span>'
         + '</div>';
  }).join('');
  document.getElementById('shopping-store-select-body').innerHTML =
    '<p class="shopping-store-msg">「' + escapeHtml(name) + '」' + 'はアパート在庫に未登録です。'
    + '仕入れ分 <strong>' + qty + unit + '</strong> を各店舗に割り振ってください</p>'
    + '<div class="shopping-dist-rows">' + rows + '</div>'
    + '<div class="shopping-dist-total" id="shopping-dist-total">'
    + '割り振り合計: <span id="shopping-dist-sum">0</span>'
    + ' / <strong>' + qty + unit + '</strong>'
    + '<span class="shopping-dist-remain" id="shopping-dist-remain"></span>'
    + '</div>';
  document.getElementById('shopping-store-select-overlay').classList.add('open');
  updateShoppingDistTotal();
}
function closeShoppingStoreSelect(){
  document.getElementById('shopping-store-select-overlay').classList.remove('open');
  shoppingDirectPending = null;
}
// Live total updater
function updateShoppingDistTotal(){
  var p = shoppingDirectPending;
  if(!p || !p.stores) return;
  var total = 0;
  p.stores.forEach(function(s){
    var inp = document.getElementById('sdist-' + encodeURIComponent(s));
    if(inp) total += Math.max(0, parseInt(inp.value||'0',10)||0);
  });
  var sumEl    = document.getElementById('shopping-dist-sum');
  var remEl    = document.getElementById('shopping-dist-remain');
  var submitEl = document.getElementById('shopping-dist-submit');
  if(sumEl) sumEl.textContent = total;
  var diff = p.qty - total;
  if(diff === 0){
    if(remEl){ remEl.textContent = ' ✅'; remEl.className = 'shopping-dist-remain ok'; }
    if(submitEl){ submitEl.disabled = false; }
  } else {
    var sign = diff > 0 ? '+' : '';
    if(remEl){ remEl.textContent = ' (残り ' + sign + diff + ')'; remEl.className = 'shopping-dist-remain ng'; }
    if(submitEl){ submitEl.disabled = true; }
  }
}

// +/- step buttons
function shoppingDistStep(encodedStore, delta){
  var inp = document.getElementById('sdist-' + encodedStore);
  if(!inp) return;
  var p = shoppingDirectPending;
  var cur = Math.max(0, parseInt(inp.value||'0',10)||0);
  inp.value = Math.max(0, Math.min(p ? p.qty : 9999, cur + delta));
  updateShoppingDistTotal();
}

// Submit: apply distribution
async function confirmShoppingDistribution(){
  var p = shoppingDirectPending;
  if(!p || !p.stores) return;
  var user = ensureActionUser();
  if(!user) return;
  // Collect allocations
  var allocs = [];
  var total  = 0;
  p.stores.forEach(function(s){
    var inp = document.getElementById('sdist-' + encodeURIComponent(s));
    var q   = inp ? Math.max(0, parseInt(inp.value||'0',10)||0) : 0;
    allocs.push({ store:s, qty:q });
    total += q;
  });
  if(total !== Number(p.qty)){
    alert('割り振り合計が仕入れ数と一致していません。合計を確認してください。');
    return;
  }
  var name = decodeURIComponent(p.encodedName);
  closeShoppingStoreSelect();
  // Apply each allocation
  for(var i = 0; i < allocs.length; i++){
    if(allocs[i].qty <= 0) continue;
    await chStore(name, allocs[i].store, allocs[i].qty, user);
    addLog({type:'仕入れ完了', scope:allocs[i].store, itemName:name,
      user:user, delta:allocs[i].qty,
      message:allocs[i].store + 'に直接補充 (+' + allocs[i].qty + p.unit + ')'});
  }
  var key = name + '|店舗';
  shoppingPurchased[key] = true;
  delete shoppingQtyOverrides[key];
  renderShopping();
  var storeList = allocs.filter(function(a){ return a.qty > 0; })
    .map(function(a){ return a.store + ' +' + a.qty; }).join(' / ');
  toast('✓ ' + name + ' ' + '補充完了 (' + storeList + ')');
}

// ── Main purchase handler ────────────────────────────────────────────
async function shoppingPurchase(encodedName, encodedScope, qty, unit){
  var name   = decodeURIComponent(encodedName);
  var scope  = decodeURIComponent(encodedScope);
  var user   = ensureActionUser();
  if(!user) return;
  var numQty = Number(qty);
  if(numQty <= 0){ alert('仕入れ数が0です。編集ボタンで変更してください。'); return; }

  var idx = aptStock.findIndex(function(a){ return a.name === name; });

  if(idx >= 0){
    // 基本フロー: アパート在庫に追加
    await chApt(idx, numQty, user);
    var key = name + '|' + scope;
    shoppingPurchased[key] = true;
    delete shoppingQtyOverrides[key];
    addLog({type:'仕入れ完了', scope:scope, itemName:name, user:user, delta:numQty,
      message:'店舗で仕入れしアパートに入庫 (+' + numQty + unit + ')'});
    renderShopping();
    toast('✓ ' + name + ' 入庫完了 (+' + numQty + unit + ')');
  } else {
    // 例外フロー: アパート未登録 → 店舗に直接補充
    var storeItem = ITEMS.find(function(i){ return i.name === name; });
    var stores    = (storeItem && storeItem.stores && storeItem.stores.length)
                    ? storeItem.stores : STORES;
    if(stores.length === 1){
      // 1店舗 → そのまま直接補充
      await chStore(name, stores[0], numQty, user);
      var key2 = name + '|' + scope;
      shoppingPurchased[key2] = true;
      delete shoppingQtyOverrides[key2];
      addLog({type:'仕入れ完了', scope:stores[0], itemName:name, user:user, delta:numQty,
        message:stores[0] + 'に直接補充 (+' + numQty + unit + ')'});
      renderShopping();
      toast('✓ ' + name + ' ' + stores[0] + '補充完了 (+' + numQty + unit + ')');
    } else {
      // 複数店舗 → 選択UIを表示
      showShoppingStoreSelect(encodedName, numQty, unit, stores);
    }
  }
}
