import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const myaccount = () => {
  return (
    <>
      <Head>
        <title>Walky Doggy | My Account</title>
      </Head>
      <div>
        <div>
          <h1 className={styles.title}>My Account</h1>
          <div className="myaccount-div">
            <Link href="/myaccount/bookawalk">
              <button className={styles.button}>Book a walk</button>
            </Link>
            <Link href="/myaccount/walklist">
              <button className={styles.button}>View My Walk History</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default myaccount;
