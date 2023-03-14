import WalkList from "../../components/Walklist";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import Link from "next/link";

const upcoming = () => {
  const [futureWalks, setFutureWalks] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      const filteredWalks = walks.future.filter(
        (walk) => walk.walkerID === walkerID
      );
      setFutureWalks(filteredWalks);
    });
  }, []);

  const deleteWalk = async (_id) => {
    await WalkService.deleteWalk(_id);
    const updatedArray = futureWalks.filter((walk) => walk._id !== _id);
    setFutureWalks(updatedArray);
  };

  return (
    <>
      <div className="myaccount">
        <Link href="/owneraccount/book">
          <button className={styles.button}>Book a walk</button>
        </Link>
        <Link href="/owneraccount/ownerhistory">
          <button className={styles.button}>View My Walk History</button>
        </Link>
        <Link href="/owneraccount/upcoming">
          <button className={styles.buttonselected}>Upcoming Walks</button>
        </Link>
      </div>
      <WalkList
        walks={futureWalks}
        onDelete={deleteWalk}
        formPath="/form/"
        ownerUpcoming={true}
      />
    </>
  );
};

export default upcoming;
