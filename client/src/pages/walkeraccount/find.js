import Head from "next/head";
import WalkList from "../../components/Walklist";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import Link from "next/link";

const find = () => {
  const [futureWalks, setFutureWalks] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      setFutureWalks(walks.future);
    });
  }, []);

  return (
    <>
      <div className="myaccount-div">
        <Link href="/account/find">
          <button className={styles.buttonselected}>Find a Walk</button>
        </Link>
        <Link href="/account/scheduled">
          <button className={styles.button}>Scheduled Walks</button>
        </Link>
        <Link href="/account/walkerhistory">
          <button className={styles.button}>View My Walk History</button>
        </Link>
      </div>
      <WalkList walks={futureWalks} findWalks={true} />
    </>
  );
};

export default find;
