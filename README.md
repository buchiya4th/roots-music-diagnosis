# roots-music-diagnosis.github.io

ルーツ音楽診断


# Vue.js+Nuxt.jsでルーツ音楽診断を作ってみた

## 完成版

[]()

## Vue.jsとは


## Nuxt.jsとは

[Nuxt.js公式）](https://ja.nuxtjs.org/)


## 作り方

### 環境
* Windows

### パッケージ
* Vue.js
* Nuxt.js
* pug
* scss
* yarn

### プロジェクト用のディレクトリ（以下、「ルートディレクトリ」）作成

任意の場所に作成する。


### Vue.jsのインストール

`vue-cli`をインストールすればコマンドを使えるようになるので、`vue-cli`をインストールする。

`git bash`で以下を実行
※yarnのインストールは[こちら](https://yarnpkg.com/en/docs/install)でどうぞ。

```
$ yarn add vue-cli
```

### Nuxt.jsのスターターテンプレートをインストール

`package.json`の`scripts`にコマンドを追加して実行する。

`package.json`に以下を追加

```
{
  // ... 省略 ...
  "scripts": {
    "vue": "vue init nuxt/starter"
  },
  // ... 省略 ...
}

```

`git bash`で以下を実行

```
$ yarn vue
```

### 依存パッケージをインストール

```
$ yarn
```

### プロジェクトの起動

```
$ yarn dev
```

ブラウザで`http://localhost:3000`を開いてNuxt.jsが起動できれいれば成功。

![](img/localhost.png)


### パッケージを追加

HTMLとCSSをそのまま記述するのはイケてないので、今回はテンプレートエンジンとAltCSSを使用します。
今回はpugとSassを使用します。

* [【Pug】ゴリラでもわかるJade改めPug入門](https://blog.mismithportfolio.com/web/20160326pugbegin)
  * HTMLをRubyっぽく書けるやーつ
* [CSSを超効率化する！SASSの基本と導入方法まとめ](https://blog.codecamp.jp/sass-basic)
  * CSSをネストしたり変数使ったり良い感じに書けるやーつ

まとめてインストール

```
$ yarn add -D pug node-sass sass-loader
```

※裏でwebpackが動いているのでloaderが必要


### ディレクトリ・ファイル構造

Nuxt.jsのスターターテンプレートを使えばディレクトリが良い感じになっています。<br>
今回使用するものだけまとめるとこんな感じ。

| ディレクトリ・ファイル | 内容 |
| --- | --- |
| assetsディレクトリ | 画像やCSSを格納するディレクトリ |
| componentsディレクトリ | コンポーネントを格納するディレクトリ |
| layoutsディレクトリ | レイアウトを格納するディレクトリ |
| pagesディレクトリ | ページを格納するディレクトリ |
| nuxt.config.js | 設定ファイル |


### 共通コンポーネントの用意

まずはヘッダー・フッターを用意して表示させる。


### ヘッダーを用意する

`components`ディレクトリに`Header.vue`を作成し、以下を記述する。

```
<template lang="pug">
  header.contentHeader.container
    p: img(src="~assets/img/title.png", alt="タイプ別診断 あなたにピッタリなダイエット方法は？")
</template>

<style lang="scss">
.contentHeader {
  text-align: center;
}
</style>

```

### フッターを用意する

`components`ディレクトリに`Footer.vue`を作成し、以下を記述する。

```
<template lang="pug">
  footer.footer
    p: router-link(to="/home/") 最初からやりなおす
</template>

<style style="scss">
.footer {
  text-align: center;
}
</style>


```

### /layouts/default.vueを以下に差し替える

全ページ共通のcomponents（ヘッダー・フッター）とページコンテンツ（nuxt）表示を設定する。

```
<template lang="pug">
  .wrap
    Header
    nuxt
    Footer
</template>

<script>
import Header from '~components/Header.vue'
import Footer from '~components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

```

### /pages/index.vueを用意する

トップページは診断ゲームの説明ページとする。<br>

```
<template lang="pug">
  .contents.container
    main.main.top-page
      p.leadText
        | あなたの性格にマッチしたルーツ音楽を導き出します。
        br
        | これで今日聴く音楽は決まり！
      ul.answerList
        li: router-link(to="/q1/") スタート
</template>

<style>
.leadText {
  max-width: 510px;
  margin: 40px auto;
}
</style>
```


### ページを確認してみる

`http://localhost:3000/`をブラウザで確認してみます。<br>
きちんと表示されていればOK。<br>



### 共通CSSを用意する

スタイルも設定しないとそれっぽくないですね。共通化できるスタイルは`assets`ディレクトリに用意します。<br>
今回は単一ファイルに必要分全部書きます。

#### scssを用意する

`assets`ディレクトリに`/scss/style.scss`を用意し、以下を記述。<br>
※各セレクタは後で使用する。

```
@charset "UTF-8";

*,
*::before,
*::after {
  box-sizing: border-box;
}

.wrap {
  margin: 0 10px;
}

.container {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}
.questionText {
  max-width: 600px;
  margin: 20px auto;
  font-size: 20px;
  font-weight: bold;
}
.answerList {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  li {
    display: inline-block;
    margin: 10px;
    background: #dff;
    text-align: center;
    &.textL {
      text-align: left;
    }
    a {
      display: table-cell;
      width: 290px;
      height: 90px;
      padding: 20px;
      border-radius: 4px;
      background: #7FBA00;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      vertical-align: middle;
    }
  }
}

.typeName {
  font-size: 40px;
  color: #f75d09;
}
.typeText {
  max-width: 600px;
  margin: 20px auto;
  font-size: 20px;
  font-weight: bold;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.page-enter-active {
  animation-name: fadeIn;
  animation-duration: .3s;
}
.page-leave-active {
  animation-name: fadeOut;
  animation-duration: .3s;
}

```


#### scssをcssに変換する準備をおこなう

`/assets/css`ディレクトリを用意する。

package.jsonにscssのwatchタスクを追加し、vueと一緒に動くように改変する。<br>
まずはscssをwatchするタスクを追記する。

```
// ...省略...
  "scripts": {
    // ...省略...
    "dev:scss": "node-sass assets/scss/style.scss --output-style compressed assets/css/style.css -w --source-map true"
  },
// ...省略...
```

`dev`タスクと`dev:scss`を並行で実行したいので`npm-run-all`をインストールする。

```
$ yarn add -D npm-run-all
```

package.jsonをに以下を追記する。

```
// ...省略...
  "scripts": {
    // ...省略...
    "watch": "run-p dev dev:scss"
  },
// ...省略...
```

#### nuxt.config.jsにcssの設定パスを追記する

共通のCSSを読み込ませるには`nuxt.config.js`に読み込み先を記述する必要がある。

```
module.exports = {
  head: {
    // ...省略...
  },
  css: [
    '~assets/css/style.css'
  ]
}
```


#### タスクを再スタートさせる

CLIでタスクを再スタートさせる。

1. Ctrl+Cでタスクを止める
2. `$ npm run develop`を実行する

うまく表示できていればOK。


### ページを作成する

`/pages/q1.vue`を以下の内容で作成する。

```
<template lang="pug">
.gameContent.container
  p.questionText
    | どちらかというと不器用なほうだ
  ul.answerList
    li: router-link(to="/q2/") はい
    li: router-link(to="/q3/") いいえ
</template>

```

必要なページだけ作成する。<br>
一通り流れが確認できれば完了。ね、簡単でしょ？

