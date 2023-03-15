import Walk from "./Walk";

type WalkProps = {
  walks: Walk[];
  onDelete?: (id: string) => Promise<void>;
  formPath?: string;
  findWalks?: boolean;
  ownerHistory?: boolean;
  ownerUpcoming?: boolean;
  onJoin?: (id: string) => Promise<void>;
};

const WalkList = ({
  formPath,
  onDelete,
  walks,
  findWalks,
  ownerHistory,
  ownerUpcoming,
  onJoin,
}: WalkProps) => {
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
                onJoin={onJoin}
              />
            );
          })}
      </div>
    </>
  );
};

export default WalkList;
