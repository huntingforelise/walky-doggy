import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

// this will be merged into index once we have authentication set up

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
            <Link href="/account/find">
              <button className={styles.button}>Find a Walk</button>
            </Link>
            <Link href="/account/scheduled">
              <button className={styles.button}>Scheduled Walks</button>
            </Link>
            <Link href="/account/walkerhistory">
              <button className={styles.button}>View My Walk History</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalkerAccount;
