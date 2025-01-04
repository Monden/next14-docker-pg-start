## Next.js 14 のまっさらな状態にeslintなどの開発環境を導入した雛形プロジェクトです
https://github.com/Monden/next14-start repositoryの
master https://github.com/Monden/next14-start/commit/a5c1cbcc63cba3f01fa39fb6b642a11cc17363d4
をベースとして Docker コンテナ上で動作確認・開発できるようにした雛形開発環境です
※Hot reload対応 (画面の修正がブラウザに即反映される)
※docker-compose.dev.yml のみ考慮 (本番のイメージ作成は未考慮)

### Docker対応参考
https://qiita.com/Keichan_15/items/4fc605895fef2a33b629


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
- DB/Graphql
- 認証

# Dockerを利用する場合

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
