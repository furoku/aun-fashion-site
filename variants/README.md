# AUN Variant Brief

既存の AUN サイトのページ構成と主要要素は固定し、見た目の方向だけを大きく変えるための variant 群です。

## 固定するもの

- 3 ページ構成:
  `index.html`, `lookbook.html`, `about.html`
- セクション順序と主要要素:
  hero / season statement / editorial strip / why AUN / representative look / selected pieces / partner routes
- `AUN` の文言と画像素材
- パートナー向けの営業資料としての性格

## 変えてよいもの

- フォント
- 配色
- 背景処理
- 余白設計
- 境界線や面の扱い
- 画像の見せ方
- アニメーションや hover のニュアンス
- ラベルや CTA の視覚トーン

## 実装ルール

- 各 variant は自分のフォルダだけを持つ
- 画像とコンテンツは共通:
  `../../assets/generated/`, `../common/variant-app.js`
- 画像パス補正は `common/variant-app.js` が担当する
- なるべく `assets/styles.css` のみで世界観を作り切る

## 候補テーマ

1. `01-obsidian-runway`
   refs: `jp/droga5`, `global/ferrari`
2. `02-parchment-salon`
   refs: `global/claude`, `jp/note`
3. `03-gallery-minimal`
   refs: `global/apple`, `jp/muji`
4. `04-editorial-grid`
   refs: `jp/wired`, `global/figma`
5. `05-midnight-system`
   refs: `global/linear.app`, `global/framer`
6. `06-atelier-cream`
   refs: `global/clay`, `jp/studio`
7. `07-monochrome-pill`
   refs: `global/cal`, `jp/smarthr`
8. `08-acid-signal`
   refs: `jp/novasell`, `global/clickhouse`
9. `09-engineered-blue`
   refs: `global/bmw`, `jp/toyota`
10. `10-soft-hospitality`
    refs: `global/airbnb`, `jp/cybozu`
