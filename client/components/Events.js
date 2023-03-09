import Event from "./Event";

const Events = ({ events, onDelete, formPath }) => {
  //const events = useContext(EventContext)
  return (
    <div id="list">
      {events &&
        events.map((event, index) => {
          return (
            <Event
              key={index}
              walk={event}
              // events={events}
              onDelete={onDelete}
              formPath={formPath}
            />
          );
        })}
    </div>
  );
};

export default Events;
