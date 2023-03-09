import Head from "next/head";
import AddEvent from "../../../components/AddEvent";
import { useState, useEffect } from "react";


const bookawalk = () => {
  const [events, setEvents] = useState(() =>[]);

  const fetchEvents = async () => {
    const res = await fetch("http://localhost:3001/events");
    const data = await res.json();

    return data;
  };
  
  const addEvent = async (event) => {
    fetch("http://localhost:3001/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(event),
    }).then(result => fetchEvents().then(newList => setEvents(newList)));
  
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
