import Walk from "./Walk";
import * as WalkService from "../services/WalkService";
import { useState } from "react";

const WalkList = ({ formPath, onDelete, walks, findWalks, isOwner }) => {
  // const [newWalks, setNewWalks] = useState([]);

  // const deleteWalk = async (_id) => {
  //   await WalkService.deleteWalk(_id);
  //   const updatedArray = walks.filter((walk) => walk._id !== _id);
  //   setNewWalks(updatedArray);
  // };

  return (
    <>
      <div id="list">
        {walks &&
          walks.map((walk) => {
            return (
              <Walk
                key={walk._id}
                walk={walk}
                onDelete={onDelete}
                formPath={formPath}
                findWalks={findWalks}
                isOwner={isOwner}
              />
            );
          })}
      </div>
    </>
  );
};

export default WalkList;
