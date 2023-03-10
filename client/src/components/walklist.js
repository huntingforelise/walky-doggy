import Walk from "./Walk";
import * as WalkService from "../services/WalkService";

const WalkList = ({ formPath, walks }) => {
  console.log(formPath);
  console.log(walks);
  const path = formPath;

  const deleteWalk = async (_id) => {
    await WalkService.deleteWalk(_id);
    const updatedArray = futureWalks.filter((walk) => walk._id !== _id);
    setFutureWalks(updatedArray);
  };

  return (
    <>
      <div id="list">
        {walks &&
          walks.map((walk) => {
            return (
              <Walk
                key={walk._id}
                walk={walk}
                onDelete={deleteWalk}
                formPath={path}
              />
            );
          })}
      </div>
    </>
  );
};

export default WalkList;
