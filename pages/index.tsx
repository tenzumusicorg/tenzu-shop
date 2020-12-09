import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tenzu Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>WELCOME GUITAR TENZU SHOP SHIT</h1>
        </main>
    </div>
  );
}