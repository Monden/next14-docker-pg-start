import styles from './page.module.scss';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p className={styles.main}>Home</p>
      <p><Link href="/users_by_csr_and_api">/users_by_csr_and_api / 1.ServerActionを利用しないフォーム(useState Hook)</Link></p>
      <p><Link href="/users_by_server_components">/users_by_server_components</Link></p>
    </>
  );
}
