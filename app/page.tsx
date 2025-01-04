import styles from './page.module.scss';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p className={styles.main}>Home</p>
      <p><Link href="/users_by_server_components">/users_by_server_components</Link></p>
    </>
  );
}
