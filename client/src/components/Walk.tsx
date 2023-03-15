import moment from "moment";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

type Walk = {
  _id: string;
  ownerID: string;
  dogName: string;
  date: Date;
  pickUpLocation: string;
  walkerID: string;
  imageURL: string[];
  coordinates: number[];
  didPee: boolean;
  didPoo: boolean;
};

type WalkProps = {
  walk: Walk;
  onDelete: (id: string) => void;
  formPath: string;
  findWalks: boolean;
  ownerHistory: boolean;
  ownerUpcoming: boolean;
  onJoin: (id: string) => void;
};

const Walk = ({
  walk,
  onDelete,
  formPath,
  findWalks,
  ownerHistory,
  ownerUpcoming,
  onJoin,
}: WalkProps) => {
  return (
    walk && (
      <div className="walk-div">
        <div id="walk-list">
          <div className="left">
            <div className="walk-day-month">
              {moment(walk.date).format("Do[\n]MMM")}
            </div>
            <div className="walk-outer">
              <div className="list-title">{walk.dogName} </div>
              <div className="list-date">
                <p>{moment(walk.date).format("hh:mm a - MMMM  Do, YYYY")}</p>
              </div>
              <div className="list-venue">
                <p>{walk.pickUpLocation}</p>
              </div>
            </div>
            {findWalks ? (
              <div className="btn-dev">
                <button className="btn" onClick={() => onJoin(walk._id)}>
                  Walk this doggy!
                </button>
              </div>
            ) : ownerHistory ? (
              <>
                <div className="btn-dev">
                  <Link href={`${formPath}${walk._id}`}>
                    <button className="btn">View this walky</button>
                  </Link>
                  <FaTrash
                    className="dele-btn"
                    onClick={() => onDelete(walk._id)}
                  />
                </div>
              </>
            ) : ownerUpcoming ? (
              <FaTrash
                className="dele-btn"
                onClick={() => onDelete(walk._id)}
              />
            ) : (
              <>
                <div className="btn-dev">
                  <Link href={`${formPath}${walk._id}`}>
                    <button className="btn">Update this walky</button>
                  </Link>
                  <FaTrash
                    className="dele-btn"
                    onClick={() => onDelete(walk._id)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Walk;
