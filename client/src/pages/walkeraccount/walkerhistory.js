import WalkList from "@/components/Walklist";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import { useRouter } from "next/router";
import Link from "next/link";

const walkerhistory = () => {
  const [pastWalks, setPastWalks] = useState([]);
  const userId = localStorage.getItem("userId");
  const router = useRouter();
  const query = router.query;

  console.log(query);

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
        <Link href="/account/find">
          <button className={styles.button}>Find a Walk</button>
        </Link>
        <Link href="/account/scheduled">
          <button className={styles.button}>Scheduled Walks</button>
        </Link>
        <Link href="/account/walkerhistory">
          <button className={styles.buttonselected}>
            View My Walk History
          </button>
        </Link>
      </div>
      <WalkList walks={pastWalks} formPath="/formuser/" onDelete={deleteWalk} />
      ;
    </>
  );
};

export default walkerhistory;
