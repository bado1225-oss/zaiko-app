-- 店舗別の最低在庫・過剰在庫しきい値を item_store_targets に追加
-- Supabase → SQL Editor で下記を一度だけ実行してください

ALTER TABLE item_store_targets
  ADD COLUMN IF NOT EXISTS min_stock INT,
  ADD COLUMN IF NOT EXISTS max_stock INT;

-- ※ 既存レコードは min_stock/max_stock が NULL で、その場合アプリ側で
-- items.min_stock(店舗数で割ったデフォルト)にフォールバックします。
-- 過剰在庫は NULL のときは警告を出しません。
