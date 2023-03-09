import moment from "moment";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

const Event = ({ walk, onDelete, formPath }) => {
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
            <div className="btn-dev">
              <Link href={`${formPath}${walk._id}`}>
                <button className="btn">Click</button>
              </Link>
              <FaTrash
                className="dele-btn"
                onClick={() => onDelete(walk._id)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Event;
