import styles from '../page.module.scss';

import { revalidatePath } from 'next/cache';
import { PrismaClient, User } from '@prisma/client';

export default async function Page() {
  // Server Componentsとして動作する
  const prisma = new PrismaClient();
  const users: User[] = await prisma.user.findMany();
  console.log('users', users);

  // eslint-disable-next-line @typescript-eslint/require-await
  const addUser = async (data: FormData) => {
    // メソッドを呼ぶだけでここもServer Componentsとして動作する
    'use server';
    console.log('click addUser ', data);
    const _prisma = new PrismaClient();

    await _prisma.user.create({ data: { name: data.get('name') as string, email: data.get('email') as string } });

    revalidatePath('/users_post_by_server_components'); // リロード
  }

  return (
    <>
      <p className={styles.main}>3.ServerComponents(page.tsx)で一覧表示&POSTするフォーム</p>
      <p>参考 https://reffect.co.jp/nextjs/next-js-server-action-14#Server_Components</p>

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
