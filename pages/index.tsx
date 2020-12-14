import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tenzu Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          <h1 className="bg-white">WELCOME GUITAR TENZU SHOP</h1>
        </main>
    </div>
  );
}