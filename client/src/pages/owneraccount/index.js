import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

const OwnerAccount = () => {
  const [ownerId, setOwnerId] = useState("");
  
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const isOwner = localStorage.getItem("isOwner");
    console.log("owneraccount: " + userId + isOwner);
    if (userId) setOwnerId(userId);
  }, []);

  return (
    <>
      <Head>
        <title>Walky Doggy | Owner</title>
      </Head>
      <div>
        <div>
          <h1 className={styles.title}>Owner</h1>
          <div className="myaccount-div">
            <Link href={{ pathname: "/owneraccount/book", query: ownerId }}>
              <button className={styles.button}>Book a walk</button>
            </Link>
            <Link href={{ pathname: "/owneraccount/ownerhistory", query: ownerId }}>
              <button className={styles.button}>View My Walk History</button>
            </Link>
            <Link href={{ pathname: "/owneraccount/upcoming", query: ownerId }}>
              <button className={styles.button}>Upcoming Walks</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerAccount;
