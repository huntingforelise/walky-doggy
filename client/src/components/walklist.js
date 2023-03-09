import Head from "next/head";
// import { useState, useEffect } from "react";
// import Events from "../../../components/Events";
import styles from "@/styles/Home.module.css";
import Event from "../../components/Event";

const WalkList = ({ walks }) => {
  // const [events, setEvents] = useState(() => []);

  // useEffect(() => {
  //   const getEvents = async () => {
  //     const eventsServer = await fetchEvents();
  //     setEvents(eventsServer);
  //   };
  //   getEvents();
  // }, []);

  // const fetchEvents = async () => {
  //   const res = await fetch("http://localhost:3001/events/past");
  //   const data = await res.json();

  //   return data;
  // };

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
      <div id="list">
        {walks.map((walk) => {
          return (
            <Event
              key={walk._id}
              walk={walk}
              onDelete={deleteEvent}
              formPath="/formuser"
            />
          );
        })}
      </div>
    </>
  );
};

export default WalkList;
