import WalkList from "../../components/walklist";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const walkerhistory = () => {
  const [pastWalks, setPastWalks] = useState([]);
  const walkerID = localStorage.getItem("userId");

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      const filteredWalks = walks.past.filter(
        (walk) => walk.walkerID === walkerID
      );
      setPastWalks(filteredWalks);
    });
  }, []);

  const deleteWalk = async (_id) => {
    const output = await WalkService.deleteWalk(_id);
    if (!output.error) {
      const successToast = () => toast(output.res);
      successToast();
      const updatedArray = pastWalks.filter((walk) => walk._id !== _id);
      setPastWalks(updatedArray);
    } else {
      const errorToast = () => toast(output.res);
      errorToast();
    }
  };

  return (
    <>
      <div className="myaccount">
        <Link href="/walkeraccount/find">
          <button className={styles.button}>Find a Walk</button>
        </Link>
        <Link href="/walkeraccount/scheduled">
          <button className={styles.button}>Scheduled Walks</button>
        </Link>
        <Link href="/walkeraccount/walkerhistory">
          <button className={styles.buttonselected}>
            View My Walk History
          </button>
        </Link>
      </div>
      <WalkList walks={pastWalks} formPath="/form/" onDelete={deleteWalk} />;
    </>
  );
};

export default walkerhistory;
