// refactor into walklist.js - this will render a list of walks

import Walk from "../src/components/Walk";

const Events = ({ walks, onDelete, formPath }) => {
  return (
    <div id="list">
      {walks &&
        walks.map((walk, index) => {
          return (
            <Walk
              key={index}
              walk={walk}
              onDelete={onDelete}
              formPath={formPath}
            />
          );
        })}
    </div>
  );
};

export default Events;
