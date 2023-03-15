import WalkList from "../../components/walklist";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const upcoming = () => {
  const [futureWalks, setFutureWalks] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      const filteredWalks = walks.future.filter(
        (walk: { ownerID: string }) => walk.ownerID === userId
      );
      setFutureWalks(filteredWalks);
    });
  }, []);

  const deleteWalk = async (_id: string) => {
    const output = await WalkService.deleteWalk(_id);
    if (!output.error) {
      const successToast = () => toast(output.res);
      successToast();
      const updatedArray = futureWalks.filter((walk) => walk._id !== _id);
      setFutureWalks(updatedArray);
    } else {
      const errorToast = () => toast(output.res);
      errorToast();
    }
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
