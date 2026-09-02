# React-useRef-ClickHistoryApp

Reactの `useRef` を使って、**前回クリックしたボタンの値を保持する**練習用アプリです。

## 📌 概要

1〜5のボタンを表示し、クリックしたボタンの値を `useRef` に保存します。

ボタンをクリックすると、現在クリックされたボタンを保存する前に、**前回クリックされたボタン**をコンソールへ表示します。

`useRef` は値を保持したまま、値の変更によってコンポーネントを再レンダリングしないという特徴があります。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* useRef

## 📂 ディレクトリ構成

```text
src/
├── components/
│   ├── DisplayButton.tsx
│   └── HandlePreviousButton.tsx
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 🧩 コンポーネント

### HandlePreviousButton

`useRef` を使用して、前回クリックされたボタンの値を保持します。

```tsx
const prevBtn = useRef<number | null>(null);
```

クリック時には、まず現在保持している値を確認します。

```tsx
console.log(
  `前回押されたボタン: ${
    prevBtn.current === null ? "空です" : prevBtn.current
  }`,
);

prevBtn.current = num;
```

### DisplayButton

`numbers` を受け取り、1〜5のボタンを表示します。

クリックされたボタンの値は `handleClick` を通して親コンポーネントへ渡します。

```tsx
{numbers.map((num) => (
  <button
    key={num}
    onClick={() => handleClick(num)}
  >
    {num}
  </button>
))}
```

## 🔄 処理の流れ

```text
App
 ↓
HandlePreviousButton
 ↓
DisplayButton
 ↓
ボタンをクリック
 ↓
handleClick(num)
 ↓
prevBtn.current を確認
 ↓
現在のボタン番号を prevBtn.current に保存
```

例えば、

```text
1 → 3 → 5
```

の順番でクリックした場合、コンソールには、

```text
前回押されたボタン: 空です
前回押されたボタン: 1
前回押されたボタン: 3
```

と表示されます。

## 💡 学習ポイント

* `useRef` の基本的な使い方
* `.current` による値の保持
* `useRef` と `useState` の違い
* 親コンポーネントから子コンポーネントへのprops渡し
* TypeScriptによるpropsの型定義
* コンポーネントの責務分離

## 🚀 起動方法

```bash
npm install
npm run dev
```

表示されたURLへアクセスしてください。

## 📝 学習目的

このアプリでは、Reactの `useRef` を使って**「再レンダリングを発生させずに値を保持する」**仕組みを理解することを目的としています。
