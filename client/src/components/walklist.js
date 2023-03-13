import Walk from "./Walk";
import * as WalkService from "../services/WalkService";
import { useState } from "react";

const WalkList = ({
  formPath,
  onDelete,
  walks,
  findWalks,
  isOwner,
  onJoin,
}) => {
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
                onJoin={onJoin}
              />
            );
          })}
      </div>
    </>
  );
};

export default WalkList;
