import Head from "next/head";
import Link from "next/link";
import originalService from "./../../services/OriginalService";
import WalkList from "../../components/walklist";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
// import React, { useState, createContext, useContext,useEffect } from "react";
// const EventContext = createContext(null);

const walker = ({ walks }) => {
  //const { events, setEvents,useEffect,fetchEvents,deleteEvent } = useContext(EventContext);
  const [events, setEvents] = useState(() => []);

  useEffect(() => {
    const getEvents = async () => {
      const eventsServer = await originalService.fetchEvents();
      setEvents(eventsServer);
    };
    getEvents();
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
      <WalkList walks={walks} onDelete={deleteEvent} formPath="/form/" />
    </>
  );
};

export default walker;
