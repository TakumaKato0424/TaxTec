# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ConTaxQuiz.create(example: "牛丼屋で牛丼をテイクアウトした。", answer: "true", explanation: "外食等に当たらないので軽減税率は適用されます。")
ConTaxQuiz.create(example: "ハンバーガー店でハンバーガーをテイクアウトした。", answer: "true", explanation: "外食等に当たらないので軽減税率は適用されます。")
ConTaxQuiz.create(example: "そば屋店でそばを出前した。", answer: "true", explanation: "外食等に当たらないので軽減税率は適用されます。")
ConTaxQuiz.create(example: "ピザ店でピザを宅配を頼んだ。", answer: "true", explanation: "外食等に当たらないので軽減税率は適用されます。")
ConTaxQuiz.create(example: "屋台での飲食料品を持ち帰り販売の商品を買って持って帰った。", answer: "true", explanation: "外食等に当たらないので軽減税率は適用されます。")
ConTaxQuiz.create(example: "コンビニ等の弁当・お惣菜の持ち帰り販売を買って持って帰った。", answer: "true", explanation: "外食等に当たらないので軽減税率は適用されます。")

ConTaxQuiz.create(example: "スーパーで「じゃがいも」を買った。", answer: "true", explanation: "飲食料品なので軽減税率は適用されます。")
ConTaxQuiz.create(example: "スーパーで「にんじん」を買った。", answer: "true", explanation: "飲食料品なので軽減税率は適用されます。")
ConTaxQuiz.create(example: "スーパーで「なす」を買った。", answer: "true", explanation: "飲食料品なので軽減税率は適用されます。")
ConTaxQuiz.create(example: "スーパーで「かぼちゃ」を買った。", answer: "true", explanation: "飲食料品なので軽減税率は適用されます。")
ConTaxQuiz.create(example: "スーパーで「いか」を買った。", answer: "true", explanation: "飲食料品なので軽減税率は適用されます。")
ConTaxQuiz.create(example: "スーパーで「マグロ」を買った。", answer: "true", explanation: "飲食料品なので軽減税率は適用されます。")
ConTaxQuiz.create(example: "スーパーで「牛肉」を買った。", answer: "true", explanation: "飲食料品なので軽減税率は適用されます。")
ConTaxQuiz.create(example: "スーパーで「豚肉」を買った。", answer: "true", explanation: "飲食料品なので軽減税率は適用されます。")
ConTaxQuiz.create(example: "スーパーで「鶏肉」を買った。", answer: "true", explanation: "飲食料品なので軽減税率は適用されます。")

ConTaxQuiz.create(example: "スーパーで「歯ブラシ」を買った。", answer: "false", explanation: "飲食料品ではないので軽減税率は適用されません。")
ConTaxQuiz.create(example: "スーパーで「鉛筆」を買った。", answer: "false", explanation: "飲食料品ではないので軽減税率は適用されません。")
ConTaxQuiz.create(example: "スーパーで「衣類」を買った。", answer: "false", explanation: "飲食料品ではないので軽減税率は適用されません。")
ConTaxQuiz.create(example: "スーパーで「医薬品」を買った。", answer: "false", explanation: "飲食料品ではないので軽減税率は適用されません。")

ConTaxQuiz.create(example: "ハンバーガー店で置き傘をテイクアウトした。", answer: "false", explanation: "飲食料品ではないので軽減税率は適用されません。置き引きは犯罪です。")
ConTaxQuiz.create(example: "牛丼屋で牛丼を飲食した。", answer: "false", explanation: "外食等に当たるので軽減税率は適用されません。")
ConTaxQuiz.create(example: "ハンバーガー点でハンバーガーをイートインした。", answer: "false", explanation: "外食等に当たるので軽減税率は適用されません。")
ConTaxQuiz.create(example: "ショッピングモールのフードコートで飲食した。", answer: "false", explanation: "外食等に当たるので軽減税率は適用されません。")
ConTaxQuiz.create(example: "寿司屋で飲食した", answer: "false", explanation: "外食等に当たるので軽減税率は適用されません。")
ConTaxQuiz.create(example: "コンビニのイートインコーナーで飲食した。", answer: "false", explanation: "外食等に当たるので軽減税率は適用されません。")
ConTaxQuiz.create(example: "ケータリングを頼んで飲食した", answer: "false", explanation: "外食等に当たるので軽減税率は適用されません。")
ConTaxQuiz.create(example: "出張料理を頼んで飲食した", answer: "false", explanation: "外食等に当たるので軽減税率は適用されません。")
