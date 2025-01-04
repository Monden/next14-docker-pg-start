import styles from '../page.module.scss';

import UserForm from '@/components/UserForm';

import { PrismaClient, User } from '@prisma/client';

const Page = async () => {
  const prisma = new PrismaClient();
  const users: User[] = await prisma.user.findMany();

  return (
    <>
      <p className={styles.main}>page.tsx をClient Componentとして動作させ, useState HookのFormでapi POST → Prisma(ServerComponent) → reload で追加するサンプル</p>
      <p>参考 https://reffect.co.jp/nextjs/next-js-server-action-14#Server_Actions</p>

      <hr />
      <UserForm />
      <br />
      {users.map((user) => (
        <li key={user.id}>{user.id},{user.name},{user.email}</li>
      ))}

    </>
  );
};

export default Page;
