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

#### 相対パスから絶対パスに変更する

- 相対パスより絶対パスの方が良さげ
- 変更方法は `next.js absolute path`で調べる
  - [next absolute path - Google 検索](https://www.google.com/search?q=next+absolute+path&client=firefox-b-d&sxsrf=AJOqlzVZRBaQVDPrw1h_JVZuV14bEo9tmw%3A1673187289741&ei=2c-6Y6rlLI3m2roPvdOA8A8&oq=next+absopath&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgYIABAHEB4yCAgAEAgQBxAeMggIABAIEAcQHjIICAAQCBAHEB4yCAgAEAgQBxAeMggIABAIEAcQHjIICAAQCBAHEB4yCAgAEAgQBxAeOgcIIxCwAhAnOgcIABCABBANOggIABAHEB4QCkoECEEYAEoECEYYAFAAWKQHYNQOaABwAXgAgAGkAYgBzASSAQMwLjSYAQCgAQHAAQE&sclient=gws-wiz-serp)
  - [Advanced Features: Absolute Imports and Module Path Aliases | Next.js](https://nextjs.org/docs/advanced-features/module-path-aliases#:~:text=of%20the%20project.-,an%20example%20of%20this%20configuration%3A,-%2F%2F%20tsconfig.json%20or)
- VS Code の基本設定では自動インポート補完は相対パスで補完されるので、絶対パスにしたい場合わざわざ修正しなければならず手間がかかる。

  - 絶対パスに変更する場合は VS Code の`.vscode/settings.json`に`"javascript.preferences.importModuleSpecifier": "non-relative"`を追記する

#### Chapter12

##### useCallback, useEffect の第二引数の使い方

第二引数に値を入れることで、値が変更したことを検知して関数を実行して表示などを更新する。cleanupfunction が先行して実行されることに注意

#### Chapter13

##### useEffect を使用して string, Boolean を扱う

HTML タグでの値の変化による表示の制御は`{}`で囲い、三項演算子を使用する(jsx による制限)。
何も表示させたくない場合は null を代入する

```jsx:example.jsx
export default function Home() {
  return (
    <>
      <button onClick={handleDisplay}>{isShow ? "ひひょうじ" : "ひょうじ"}</button>
      <button onClick={handleDisplay}>{isShow ? "表示する" : null }</button>
    </>
  );
}
```

#### Chapter14

##### immutables(不変変数), destructive method(非破壊メソッド)、スプレッド構文

JavaScript は現在破壊的メソッドが推奨されていない。
そのためスプレッド構文などを用いて対応する。

#### Chapter15

##### Custome Hooks(カスタムフック)の使い方、使い所

###### カスタムフック（ス）とは

> カスタムフックとは、名前が ”use” で始まり、ほかのフックを呼び出せる JavaScript の関数のことです。
> [独自フックの作成 – React](https://ja.reactjs.org/docs/hooks-custom.html#:~:text=%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%95%E3%83%83%E3%82%AF%E3%81%A8%E3%81%AF%E3%80%81%E5%90%8D%E5%89%8D%E3%81%8B%E3%82%99%20%E2%80%9Duse%E2%80%9D%20%E3%81%A6%E3%82%99%E5%A7%8B%E3%81%BE%E3%82%8A%E3%80%81%E3%81%BB%E3%81%8B%E3%81%AE%E3%83%95%E3%83%83%E3%82%AF%E3%82%92%E5%91%BC%E3%81%B2%E3%82%99%E5%87%BA%E3%81%9B%E3%82%8B%20javascript%20%E3%81%AE%E9%96%A2%E6%95%B0%E3%81%AE%E3%81%93%E3%81%A8%E3%81%A6%E3%82%99%E3%81%99%E3%80%82)

###### カスタムフックスのメリット

- コードを共通化できる
- return 文までの記述が短くなる
- 関心ごとを分離させることができる

###### カスタムフックスの使い方

[フックの導入 – React](https://ja.reactjs.org/docs/hooks-intro.html)

- カスタムフックスは共通化（コードの再利用）に使える
- カスタムフックスは`useXxx`という名前で関数を作成する
  - [独自フックの作成 – React](https://ja.reactjs.org/docs/hooks-custom.html#:~:text=%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%E3%80%81-,%E5%90%8D%E5%89%8D%E3%81%AF%20use%20%E3%81%A6%E3%82%99%E5%A7%8B%E3%82%81%E3%82%8B%E3%81%B8%E3%82%99%E3%81%8D%E3%81%A6%E3%82%99%E3%81%99)
- `hooks`ディレクトリを作成してそこにコードを記述することができる。ディレクトリ名は`utils`などいろいろあるのでチームの決まりに合わせる
- フックスを使用する場合のルールがある[フックのルール – React](https://ja.reactjs.org/docs/hooks-rules.html)
  - フックを呼び出すのはトップレベルのみ
  - フックを呼び出すのは React の関数内のみ
    - フックを通常の JavaScript 関数から呼び出さないでください
- ファイルの拡張子は jsx のほうがわかりやすい（かも）
- カスタムフックスとコンポーネントの使い分け
  - コンポーネントとロジックを一緒にしたいのであればコンポーネントとして作成する
  - コンポーネントとロジックを分けたい（UI は自由度を持たせたい）のであればカスタムフックとして作成する

#### Chapter16

##### State のリフトアップ(状態共通化)

状態共通化といってる
大きく 2 通り

- ページ間での状態を共通化する方法(Next.js 可、React.js 不可 - [【Next.js で学ぶ React 講座 #16】State のリフトアップでページ間やコンポーネント間で値を共通化しよう！ - YouTube](https://youtu.be/Jhi2X4zkyPI?list=PLwM1-TnN_NN6fUhOoZyU4iZiwhLyISopO&t=627))
- コンポーネント間での状態を共通化する方法(Next.js 可、React.js 可)
  - 親からは props, 子で引数に値を分割代入する

#### Chapter17

##### useMemo, useRouter

useMemo は必要なタイミングで値の評価、再生成させるために使用する。
パフォーマンスの向上につながる可能性が高い。

useRouter で使用できるプロパティは以下
[next/router | Next.js](https://nextjs.org/docs/api-reference/next/router#router-object)
