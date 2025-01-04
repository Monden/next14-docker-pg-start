import styles from '../page.module.scss';

import UserForm522 from '@/components/UserForm522';

import { PrismaClient, User } from '@prisma/client';

export default async function Page() {
  // ここはServer Componentsとして動作する
  const prisma = new PrismaClient();
  const users: User[] = await prisma.user.findMany();
  console.log('users', users);

  return (
    <>
      <p className={styles.main}>5. ClientComponentからServerComponents(actions.ts) でPOSTするフォームするフォーム</p>
      <p>参考 https://reffect.co.jp/nextjs/next-js-server-action-14#Client_Components</p>

      <hr />
      <br />

      <UserForm522 />

      <br />
      {users.map((user) => (
        <li key={user.id}>{user.id},{user.name},{user.email}</li>
      ))}
    </>
  );
}
