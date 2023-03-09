import Head from "next/head";
import { useState, useEffect } from "react";
import Events from "../../../components/Events";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";
//import {EventContextProvider} from "../../../components/EventContextComponent";
// import EventContext from "../../../components/EventContext";
// import { EventContextProvider } from "../../../components/EventContextProvider";

const viewwalks = () => {
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
    await fetch(`http://localhost:3001/events/${_id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("deleteevent: " + JSON.stringify(deleteEvent));
      setEvents(events.filter((event) => event._id !== _id));
    });
  };

  return (
    <>
      <Head>
        <title>Walky Doggy | view walks</title>
      </Head>
      <h1 className={styles.title}>View Walk History</h1>
      <Events walks={pastWalks} onDelete={deleteEvent} formPath="/formuser/" />
    </>
  );
};

export default viewwalks;
