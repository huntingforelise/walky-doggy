import WalkList from "@/components/Walklist";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import Link from "next/link";

const ownerhistory = () => {
  const [pastWalks, setPastWalks] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      const filteredWalks = [];
      for (const walk of walks.past) {
        if (walk.ownerID === userId) {
          filteredWalks.push(walk);
        }
      }
      setPastWalks(filteredWalks);
    });
  }, []);

  const deleteWalk = async (_id) => {
    await WalkService.deleteWalk(_id);
    const updatedArray = pastWalks.filter((walk) => walk._id !== _id);
    setPastWalks(updatedArray);
  };

  return (
    <>
      <div className="myaccount-div">
        <Link href="/owneraccount/book">
          <button className={styles.button}>Book a walk</button>
        </Link>
        <Link href="/owneraccount/ownerhistory">
          <button className={styles.buttonselected}>
            View My Walk History
          </button>
        </Link>
        <Link href="/owneraccount/upcoming">
          <button className={styles.button}>Upcoming Walks</button>
        </Link>
      </div>
      <WalkList walks={pastWalks} formPath="/formuser/" onDelete={deleteWalk} />
      ;
    </>
  );
};

export default ownerhistory;
