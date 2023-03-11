import WalkList from "../../components/Walklist";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import Link from "next/link";

//this only exists for the walker
const scheduled = () => {
  const [futureWalks, setFutureWalks] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      setFutureWalks(walks.future);
    });
  }, []);

  const deleteWalk = async (_id) => {
    await WalkService.deleteWalk(_id);
    const updatedArray = futureWalks.filter((walk) => walk._id !== _id);
    setFutureWalks(updatedArray);
  };

  return (
    <>
      <div className="myaccount-div">
        <Link href="/account/find">
          <button className={styles.button}>Find a Walk</button>
        </Link>
        <Link href="/account/scheduled">
          <button className={styles.buttonselected}>Scheduled Walks</button>
        </Link>
        <Link href="/account/walkerhistory">
          <button className={styles.button}>View My Walk History</button>
        </Link>
      </div>
      <WalkList walks={futureWalks} onDelete={deleteWalk} formPath="/form/" />
    </>
  );
};

export default scheduled;
