import WalkList from "../../components/walklist";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Walk = {
  _id?: string;
  ownerID: string;
  dogName: string;
  date: Date;
  pickUpLocation: string;
  walkerID?: string;
  imageURL?: string[];
  coordinates?: number[];
  didPee?: boolean;
  didPoo?: boolean;
};

const ownerhistory = () => {
  const [pastWalks, setPastWalks] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      const filteredWalks = walks.past.filter(
        (walk: Walk) => walk.ownerID === userId
      );
      setPastWalks(filteredWalks);
    });
  }, []);

  const deleteWalk = async (_id: string) => {
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
      <WalkList
        walks={pastWalks}
        formPath="/formuser/"
        onDelete={deleteWalk}
        ownerHistory={true}
      />
    </>
  );
};

export default ownerhistory;
