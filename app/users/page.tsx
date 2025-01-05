import styles from '../page.module.scss';

import { deleteUser } from '@/lib/actions521';

import Link from 'next/link';
import { PrismaClient, User } from '@prisma/client';

export default async function Page() {
  // ここはServer Componentsとして動作する
  const prisma = new PrismaClient();
  const users: User[] = await prisma.user.findMany();
  console.log('/users/page.tsx users', users);

  return (
    <>
      <p className={styles.main}>users CRUDサンプル</p>
      <p>参考 https://reffect.co.jp/nextjs/next-js-server-action-14#CRUD</p>

      <hr />
      <br />
      <h1>User一覧</h1>

      <Link href="/users/create">新規作成</Link>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link href={`/users/${user.id.toString()}`}>詳細</Link>
                &nbsp;
                <Link href={`/users/${user.id.toString()}/edit`}>編集</Link>
                &nbsp;
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button type="submit">削除</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
