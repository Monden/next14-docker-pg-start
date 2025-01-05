import styles from '../../page.module.scss';

import prisma from '@/lib/prisma';

export default async function Page({ params }: { params: { id: string } }) {
  // ここはServer Componentsとして動作する
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });
  console.log('/users/[id]/page.tsx user', user);

  return (
    <>
      <h1>User詳細</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>id</td>
            <td>{params.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{user?.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user?.email}</td>
          </tr>
        </thead>
      </table>
    </>
  );
}
