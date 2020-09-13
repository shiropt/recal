## プロジェクト名
Recal
 
## 概要
食事を管理するアプリケーションです。
ユーザー毎に1日の食事をmorning,lunch,dinnerに分けて登録できます。
登録した情報はリストとして表示され、編集、削除、ページネーションが可能です。
楽天レシピ、ぐるなびのAPIを使ってレシピ情報や飲食店検索も出来ます。
スマートフォン様にレスポンシブ対応もしております。
 
## 制作背景
日々の食事の管理をするにあたり、メニューを登録しておけば食事バランスに配慮できる
また、何を作ろうか迷った時に検索できるツールもあれば便利と考えた為、開発に至りました。
 
 
## 使用技術
* フロントエンド
Vue.js(VueRouter,Vuex,Vuetify,axios)

* バックエンド
Firebase(Hosting,Authentication,CloudFirestore)
 
### DB設計

 #### Usersテーブル
|Column            |Type    |Options                          |
|------------------|--------|---------------------------------|
|email             |string  |null: false                      |
|password          |string  |null: false                      |
#### Association
has_many :menus

#### Menusテーブル
|Column            |Type    |Options                         |
|------------------|--------|--------------------------------|
|morning           |string |null: false                      |
|lunch             |string |null: false                      |
|dinner            |string |null: false                      |
|user_id           |string |null: false, foreign_key: true   |
#### Association
belongs_to :user

 
## 使い方
* 新規登録
アプリにアクセスすると登録画面が表示されるので新規登録ボタンを押下してフォームにemailとpasswordを登録します。
* ログイン
既に新規登録が完了している場合はログインボタンを押下して登録したemailとpasswordを入力してログインします
* レシピの検索
レシピを見るボタンから検索キーワードを入力すると楽天レシピのレシピ情報がインクリメンタルサーチで出力されます。
検索結果からレシピ情報を閲覧することが出来ます。
* 飲食店の検索
外食するボタンを押すとフリーワードとエリア検索の入力フォームが表示され検索条件に応じてぐるなびAPIから飲食店情報を取得します。
* ピックアップメニュー
楽天APIから取得したオススメメニューが表示されており、詳細をみたい場合はボタンクリックで楽天レシピに遷移できます。

* 投稿
 記録するボタンを押すとmorning,lunch,dinnerの入力フォームがダイアログで表示され、投稿日がカレンダーから選択出来ます。投稿日を指定しない場合は当日の日付でFireStoreに保存されます。入力フォームは1つ以上の入力が必須です。保存は1日1回までとし、変更が必要な場合は後述のListの中の編集または削除ボタンを押下して実行します。

* 投稿情報の閲覧
 会員ページの右側に投稿したメニューのリストが表示されます。
 最大7件表示され、ページネーションが可能です。

* 編集、削除
 リストには登録した日付、morning,lunch,dinnerが表示され、編集、削除ボタンが存在します。
 編集を押下するとダイアログが表示され、入力フォームには既存のデータがセットされています。
 編集内容を入力後saveボタンを押下するとFireStoreのデータが更新されます。
 削除ボタンを押すと確認のダイアログが表示され、削除ボタンを押すとFireStoreから該当のデータが削除されます。

* ページ遷移
 ヘッダー左のロゴを押すと非ログイン状態であれば登録用ページへ、ログイン状態であれば会員トップページへ遷移します。
 ヘッダー右のログアウトボタンはログイン状態で表示され押すとログアウトし、トップページへリダイレクトされます。

 
## テスト用アカウント
email:    recal@test.ne.jp
password: testpass
 

## ライセンス
* GitHub https://github.com/shiropt/recal.git
* URL https://recal-f1a64.web.app