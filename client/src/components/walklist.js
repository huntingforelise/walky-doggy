import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Walk from "./Walk";
import { useState, useEffect } from "react";
import * as WalkService from "../services/WalkService";

const WalkList = () => {
  const [pastWalks, setPastWalks] = useState([]);
  const [futureWalks, setFutureWalks] = useState([]);

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      console.log(walks);
      console.log("this is walklist within components")
      setPastWalks(walks.past);
      setFutureWalks(walks.future);
    });
  }, []);

  const deleteWalk = async (_id) => {
    await WalkService.deleteWalk(_id);
    const updatedArray = futureWalks.filter((walk) => walk._id !== _id);
    console.log(updatedArray);
    setFutureWalks(updatedArray);
    };
  
  return (
    <>
      <Head>
        <title>Walky Doggy | view walks</title>
      </Head>
      <h1 className={styles.title}>View Walk History</h1>
      <div id="list">
        {futureWalks &&
          futureWalks.map((walk) => {
            return (
              <Walk
                key={walk._id}
                walk={walk}
                onDelete={deleteWalk}
                formPath="/formuser"
              />
            );
          })}
      </div>
      <div id="list">
        {pastWalks &&
          pastWalks.map((walk) => {
            return (
              <Walk
                key={walk._id}
                walk={walk}
                formPath="/formuser"
              />
            );
          })}
      </div>
    </>
  );
};

export default WalkList;
