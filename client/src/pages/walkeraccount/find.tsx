import WalkList from "../../components/walklist";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const find = () => {
  const [futureWalks, setFutureWalks] = useState([]);
  const walkerID = localStorage.getItem("userId");

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      const unassignedWalks = walks.future.filter(
        (walk: { walkerID: string }) => !walk.walkerID
      );
      setFutureWalks(unassignedWalks);
    });
  }, []);

  const joinWalk = async (walkId: string) => {
    const output = await WalkService.joinWalk(walkId, walkerID);
    if (!output.error) {
      const successToast = () => toast("Wahoo! You'll walky this doggy!");
      successToast();
    } else {
      const errorToast = () => toast(output.res);
      errorToast();
    }
  };

  return (
    <>
      <div className="myaccount">
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
