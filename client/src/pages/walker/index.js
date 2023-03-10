import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const WalkerAccount = () => {
  return (
    <>
      <Head>
        <title>Walky Doggy | Walker</title>
      </Head>
      <div>
        <div>
          <h1 className={styles.title}>Walker</h1>
          <div className="myaccount-div">
            <Link href="/walker/findawalk">
              <button className={styles.button}>Find a Walk</button>
            </Link>
            <Link href="/walker/schedule">
              <button className={styles.button}>Scheduled Walks</button>
            </Link>
            <Link href="/walker/walklist">
              <button className={styles.button}>View My Walk History - don't click</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalkerAccount;
