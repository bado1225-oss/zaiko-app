-- アパート固有の最低在庫・目標在庫を apartment_inventory に追加
-- Supabase → SQL Editor で下記を一度だけ実行してください
-- 既に存在する場合はスキップされます(IF NOT EXISTS)

ALTER TABLE apartment_inventory
  ADD COLUMN IF NOT EXISTS min_stock INT,
  ADD COLUMN IF NOT EXISTS target_stock INT;

-- 既存レコードに対して、items テーブルの現在値を初回コピー(任意)
-- これを実行しないと、既存のアパート品目の min/target は NULL 扱いで
-- アプリ側フォールバックにより items の値(= 店舗と同じ)を表示します
UPDATE apartment_inventory ai
SET
  min_stock    = COALESCE(ai.min_stock, i.min_stock),
  target_stock = COALESCE(ai.target_stock, i.target_stock)
FROM items i
WHERE ai.item_id = i.id
  AND (ai.min_stock IS NULL OR ai.target_stock IS NULL);
