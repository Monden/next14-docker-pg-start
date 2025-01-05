import styles from '../page.module.scss';

import prisma from '@/lib/prisma';

import { User } from '@prisma/client';


export default async function Page() {
  const users: User[] = await prisma.user.findMany();

  return (
    <>
      <p className={styles.main}>page.tsx をServer Componentsとして動作させ Prisma Client経由でDBからUser一覧を取得するサンプル</p>
      <p>参考 https://reffect.co.jp/nextjs/next-js-server-action-14</p>

      <hr />
      <br />

      <br />
      {users.map((user) => (
        <li key={user.id}>{user.id},{user.name},{user.email}</li>
      ))}
    </>
  );
}
