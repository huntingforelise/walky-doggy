import Head from "next/head";
import Link from "next/link";
import originalService from "./../../services/OriginalService";
import WalkList from "../../components/walklist";
import Events from "../../../components/Events";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
// import React, { useState, createContext, useContext,useEffect } from "react";
// const EventContext = createContext(null);

const walker = () => {
  const [pastWalks, setPastWalks] = useState([]);
  const [futureWalks, setFutureWalks] = useState([]);

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      console.log(walks);
      setPastWalks(walks.past);
      setFutureWalks(walks.future);
    });
  }, []);

  const deleteEvent = async (_id) => {
    await originalService.deleteEvent(_id);
    setEvents(events.filter((event) => event._id !== _id));
};

  return (
    <>
      <Head>
        <title>Walky Doggy | Walker</title>
      </Head>
      <h1 className={styles.title}>Walks Schedule</h1>
      <Events events={futureWalks} onDelete={deleteEvent} formPath="/form/" />
    </>
  );
};

export default walker;
