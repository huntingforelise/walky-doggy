import Head from "next/head";
import AddEvent from "../../../components/AddEvent";
import originalService from "./../../services/OriginalService";
import { useState, useEffect } from "react";


const bookawalk = () => {
  const [events, setEvents] = useState(() =>[]);
  
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
    <AddEvent onAdd={addEvent}/>
    </div>
  </> 
  )
}

export default bookawalk;
