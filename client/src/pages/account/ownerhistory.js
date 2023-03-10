import WalkList from "@/components/Walklist";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import Link from "next/link";

const ownerhistory = () => {
  const [pastWalks, setPastWalks] = useState([]);

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      setPastWalks(walks.past);
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
        <Link href="/account/book">
          <button className={styles.button}>Book a walk</button>
        </Link>
        <Link href="/account/ownerhistory">
          <button className={styles.buttonselected}>
            View My Walk History
          </button>
        </Link>
        <Link href="/account/upcoming">
          <button className={styles.button}>Upcoming Walks</button>
        </Link>
      </div>
      <WalkList walks={pastWalks} formPath="/formuser/" onDelete={deleteWalk} />
      ;
    </>
  );
};

export default ownerhistory;
