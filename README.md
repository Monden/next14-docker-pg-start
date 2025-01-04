## Next.js 14 のまっさらな状態に下記を対応した雛形プロジェクトです

- local Docker  開発環境起動
- local Docker  Postgresql起動
- Next.js Server Action内でのPrismaClientでDB操作

### 元環境
https://github.com/Monden/next14-docker-start/commit/ec5ba80592e3c2814fc748b5245e43590077e1e3
※Hot reload対応 (画面の修正がブラウザに即反映される)
※docker-compose.dev.yml のみ考慮 (本番のイメージ作成は未考慮)

### 参考
https://zenn.dev/takumi0616/articles/3fc3097a235f64


### 設定済みモジュール (vscode設定含む)
eslint
prettier
CSS Modules
Sass
stylelint
husky
lint-staged

### 構築手順(構築内容)
https://motomichi-works.hatenablog.com/entry/2024/04/13/185819
https://motomichi-works.hatenablog.com/entry/2024/04/14/184949
https://motomichi-works.hatenablog.com/entry/2024/08/03/204320
https://motomichi-works.hatenablog.com/entry/2024/10/19/004104

### 未対応なもの
- Graphql
- 認証

# Dockerを利用する場合

### build (初回など)
` $ node install `
または
` $ docker compose -f docker-compose.dev.yml run --rm app sh -c 'npm install' `

※後者の方がPermission問題が発生しやすいので前者のようにdocker外でnode installしたほうが良いと思われる

### 起動
` $ docker compose -f docker-compose.dev.yml up `


# Dockerを利用しない場合のビルド/起動方法
### install
` $ npm install `

### 起動方法
` $ npm run dev `

### コードフォマット
` $ npm run lint:fix `


-----------------

以下は自動生成されたreadme





--------------


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
