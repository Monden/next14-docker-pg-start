import styles from '../page.module.scss';

import UserForm522 from '@/components/UserForm522';
import { deleteUser } from '@/lib/actions521';
import prisma from '@/lib/prisma';

import { User } from '@prisma/client';

export default async function Page() {
  // ここはServer Componentsとして動作する
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
      <table>
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
                <form>
                  <input type="hidden" name="id" value={user.id} />
                  <button
                    formAction={deleteUser}
                  >削除</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
