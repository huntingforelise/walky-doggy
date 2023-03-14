import WalkList from "../../components/Walklist";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import Link from "next/link";

const find = () => {
  const [futureWalks, setFutureWalks] = useState([]);
  const walkerID = localStorage.getItem("userId");

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      const unassignedWalks = walks.future.filter((walk) => !walk.walkerID);
      setFutureWalks(unassignedWalks);
    });
  }, []);

  const joinWalk = async (walkId) => {
    const output = await WalkService.joinWalk(walkId, walkerID);
    console.log(output);
    //we need a success message here!
  };

  return (
    <>
      <div className="myaccount-div">
        <Link href="/walkeraccount/find">
          <button className={styles.buttonselected}>Find a Walk</button>
        </Link>
        <Link href="/walkeraccount/scheduled">
          <button className={styles.button}>Scheduled Walks</button>
        </Link>
        <Link href="/walkeraccount/walkerhistory">
          <button className={styles.button}>View My Walk History</button>
        </Link>
      </div>
      <WalkList walks={futureWalks} onJoin={joinWalk} findWalks={true} />
    </>
  );
};

export default find;
