import Head from "next/head";
import { useState, useEffect } from "react";
import Events from "../../../components/Events";
import styles from "@/styles/Home.module.css";
//import {EventContextProvider} from "../../../components/EventContextComponent";
// import EventContext from "../../../components/EventContext";
// import { EventContextProvider } from "../../../components/EventContextProvider";

const viewwalks = () => {
  const [events, setEvents] = useState(() => []);

  useEffect(() => {
    const getEvents = async () => {
      const eventsServer = await fetchEvents();
      setEvents(eventsServer);
    };
    getEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await fetch("http://localhost:3001/events/past");
    const data = await res.json();

    return data;
  };

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
      <h1 className={styles.title}>View Walk Histroy</h1>
      <Events events={events} onDelete={deleteEvent} formPath="/formuser/" />
    </>
  );
};

export default viewwalks;
