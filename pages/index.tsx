import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import HomePage from 'components/pages/homePage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <h3>Welcome to Next.js!</h3>
        <Link href="/product/1">
          <a>product 1</a>
        </Link>
        <HomePage />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  );
}
