import styles from '../page.module.scss';

import { addUser } from '@/lib/actions521';
import prisma from '@/lib/prisma';

import { User } from '@prisma/client';

export default async function Page() {
  // Server Componentsとして動作する
  const users: User[] = await prisma.user.findMany();
  console.log('users', users);

  return (
    <>
      <p className={styles.main}>4. actions.ts のServerComponentsをするフォーム</p>
      <p>参考 https://reffect.co.jp/nextjs/next-js-server-action-14#Server_Components-2</p>

      <hr />
      <br />

      <form className="flex items-center mt-4" action={addUser}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" className="border mx-2 p-1" /><br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" className="border mx-2 p-1" /><br />
        <button
          type="submit"
          className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
        >
          Add User
        </button>
      </form>

      <br />
      {users.map((user) => (
        <li key={user.id}>{user.id},{user.name},{user.email}</li>
      ))}
    </>
  );
}
