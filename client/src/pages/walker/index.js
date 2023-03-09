import Head from "next/head";
import Link from "next/link";
import Events from "../../../components/Events";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
// import React, { useState, createContext, useContext,useEffect } from "react";
// const EventContext = createContext(null);

const walker = () => {
  //const { events, setEvents,useEffect,fetchEvents,deleteEvent } = useContext(EventContext);
  const [events, setEvents] = useState(() => []);

  useEffect(() => {
    const getEvents = async () => {
      const eventsServer = await fetchEvents();
      setEvents(eventsServer);
    };
    getEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await fetch("http://localhost:3001/events");
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
        <title>Walky Doggy | Walker</title>
      </Head>
      <h1 className={styles.title}>Walks Schedule</h1>
      <Events events={events} onDelete={deleteEvent} formPath="/form/" />
    </>
  );
};

export default walker;
