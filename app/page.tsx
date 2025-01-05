import styles from './page.module.scss';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p className={styles.main}>Home</p>
      <p><Link href="/users_by_csr_and_api">1.ServerActionを利用しないフォーム(useState Hook)</Link></p>
      <p><Link href="/users_by_server_components">2.ServerAction(page.tsx)で一覧表示するフォーム</Link></p>
      <p><Link href="/users_post_by_server_components">3.ServerComponents(page.tsx)で一覧表示&POSTするフォーム</Link></p>
      <p><Link href="/users_post_by_server_actions">4.ServerComponents(actions file)で一覧表示&POSTするフォーム</Link></p>
      <p><Link href="/users_from_cl_to_server_actions">5.ClientComponentsからServerComponents(actions file)でPOSTするフォーム</Link></p>
      <hr />
      <p><Link href="/users">ユーザー管理(CRUD)</Link></p>
    </>
  );
}
