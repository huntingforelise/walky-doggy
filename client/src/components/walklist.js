import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Event from "../../components/Event";

const WalkList = ({ future, past }) => {
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
        {future &&
          future.map((walk) => {
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
      <div id="list">
        {past &&
          past.map((walk) => {
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
