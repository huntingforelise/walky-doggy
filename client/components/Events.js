import Event from "./Event";

const Events = ({ events, onDelete, formPath }) => {
  //const events = useContext(EventContext)
  return (
    <div id="list">
      {events.map((event, index) => {
        return (
          <Event
            key={index}
            walk={event}
            // events={events}
            onDelete={onDelete}
            formPath={formPath}
          />
        );

        //console.log("event: " + JSON.stringify(event));
        // if (index === 0) {
        //   return <NextEvent key={index} event={event} />
        // } else {
        //   return <Event key={index} event={event} events={events} onDelete={onDelete} formPath={formPath}/>
        // }
      })}
    </div>
  );
};

export default Events;
