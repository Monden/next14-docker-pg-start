import styles from '../page.module.scss';

import UserForm from '@/components/UserForm';
import prisma from '@/lib/prisma';

import { User } from '@prisma/client';

const Page = async () => {
  const users: User[] = await prisma.user.findMany();

  return (
    <>
      <p className={styles.main}>page.tsx をServer Action, useState HookのForm を Client Componentとして動作させ, submit → api POST → Prisma(ServerComponent) → reload で追加するサンプル</p>
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
