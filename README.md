<!--
[Next.jsと一緒に学ぶReact講座 - YouTube](https://www.youtube.com/playlist?list=PLwM1-TnN_NN6fUhOoZyU4iZiwhLyISopO)
 -->
<!--
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
 -->

# Getting Started

今回は TypeScript を使用しない

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### 要約

- データと処理（ロジック）を分けるのがリファクタリングの基本。これを守るだけである程度読みやすくて使いやすいコードになる

#### Chapter5

##### CSS Modules は便利

- クラスの管理が楽、コードが簡潔
- BEM は大変、コードが長い
- 解決方法としていかのものもある
  - CSS in JS、styled-components や Emotion などのライブラリを使用
  - TailWindCSS のフレームワークなどを使用する

##### 使い方

- `[好きな名前].module.css`
- クラスのみ使える（id などは使えない）
- グローバル css は`_app.js`でのみ読み込む（他のファイルで読み込み厳禁）

#### Chapter6

##### Link コンポーネント

- ユーザー体験がより高速に
  - 逆に a タグを使用すると状態が初期化されてしまう

#### Chapter7

##### component を繰り返し使う方法

map を使う

##### 繰り返しを使うメリット

- コード量が少なくて済む
- component を修正するときに 1 箇所を修正するだけで良い

##### HTML Entities

- `&gt;`アンドで始まり、セミコロンで終わるコード
- jsx ではエスケープしてくれる
- HTML Entities をただしく表示させるには

##### 文字列中の HTML タグを HTML に変換する

[【React】HTML 文字列を HTML に変換して表示する方法｜ Web エンジニア研究室](https://www.engilaboo.com/react-html-parse/)

#### Chapter8

リファクタリング

##### jsx を使うメリット

VS Code が jsx に関する構文の補完を出してくれる

##### ディレクトリを src にまとめる

- components, pages, styles ディレクトリを移動する（したほうが見やすい、人によって好みあり）
  - VS Code の場合は自動で import のパスを変更してくれる（してくれないときもあるのでその時は手動で変更する）

#### さらにファイルを component ごとにまとめる

- `Xxx.jsx`と`Xxx.module.css`が同一階層にたくさんあると管理が大変
  - `Xxx.jsx`と`Xxx.module.css`を`Xxx`というフォルダーを作成しそこに移動する
  - そのままだと`Caused by: No such file or directory (os error 2)`というエラーが発生する。解決するためには`Xxx.jsx`を`index.jsx`に変更することでエラーが解決する。
  - `index`という名前は js において非常に重要な名前。 名前を`index`に置き換えることでディレクトリ名を参照したときにまずは`index`を探してくれる。
    - このエコシステムを使用することでパスが長くなってしまうのを防いでくれる

<!--
リモートは各自で応募
大分では C#も重宝される
フルリモート移住金制度(大分)あり

履歴書
・写真
・日付は常に最新にする
職務経歴書
・IT 業界への転職理由
なぜ、IT 業界を志すのか / IT 業界で何をしたいのか / 目標など
・自分でサービスを作りたい、フルスタックエンジニアになりたい
・活かせる技術・言語
ruby, php, javascript
・使用ツールなど
github, slack, notion
箇条書き
学習期間
・自己 PR
性格面と技術面
組織内でどんなことができるか、どういう対応するのか

- どこをアピールすればよいのか（学習してきたこと）
- PC スキルはある(photoshop, illustrator 使用経験あり)
- 笑顔で対応
- 追求できる
- 話を深堀する
  - 聞く力
  - わからないことは聞く

どんなことができて、どんなことができるか （編集済み）

面談のときはライトを応募
wantedly の面談

面接じにはライト -->
