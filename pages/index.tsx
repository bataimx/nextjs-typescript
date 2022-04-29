import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomePage from 'components/pages/homePage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photo Blog</title>
      </Head>
      <main className={styles.main}>
        <h3>Welcome to Next.js!</h3>
        <HomePage />
      </main>
    </div>
  );
}
