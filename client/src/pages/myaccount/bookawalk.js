import Head from "next/head";
import AddEvent from "../../../components/AddEvent";
import originalService from "./../../services/OriginalService";
import * as WalkService from "../../services/WalkService";
import { useState, useEffect } from "react";



const bookawalk = () => {
  const [events, setEvents] = useState(() =>[]);

  const postWalk = (event) => {
    console.log(event);
    WalkService.postWalk(event);
  };

  const fetchEvents = async () => {
    const res = await fetch("http://localhost:3001/events");
    const data = await res.json();

    return data;
  };
  
  const addEvent = async (event) => {
    await originalService.addEvent(event);
    await originalService.fetchEvents().then(newList => setEvents(newList));
  };

  return (
    <>
      <Head>
        <title>Walky Doggy | book a walk</title>
      </Head>
      <div className="container">
        <AddEvent onAdd={postWalk} />
      </div>
    </>
  );
};

export default bookawalk;
