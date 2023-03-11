import Walk from "./Walk";

const WalkList = ({
  formPath,
  onDelete,
  walks,
  findWalks,
  ownerHistory,
  ownerUpcoming,
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
                ownerHistory={ownerHistory}
                ownerUpcoming={ownerUpcoming}
              />
            );
          })}
      </div>
    </>
  );
};

export default WalkList;
