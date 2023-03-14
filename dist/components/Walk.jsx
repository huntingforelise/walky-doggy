import moment from "moment";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
var Walk = function (_a) {
    var walk = _a.walk, onDelete = _a.onDelete, formPath = _a.formPath, findWalks = _a.findWalks, ownerHistory = _a.ownerHistory, ownerUpcoming = _a.ownerUpcoming, onJoin = _a.onJoin;
    return (walk && (<div className="walk-div">
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
            {findWalks ? (<div className="btn-dev">
                <button className="btn" onClick={function () { return onJoin(walk._id); }}>
                  Walk this doggy!
                </button>
              </div>) : ownerHistory ? (<>
                <div className="btn-dev">
                  <Link href={"".concat(formPath).concat(walk._id)}>
                    <button className="btn">View this walky</button>
                  </Link>
                  <FaTrash className="dele-btn" onClick={function () { return onDelete(walk._id); }}/>
                </div>
              </>) : ownerUpcoming ? (<FaTrash className="dele-btn" onClick={function () { return onDelete(walk._id); }}/>) : (<>
                <div className="btn-dev">
                  <Link href={"".concat(formPath).concat(walk._id)}>
                    <button className="btn">Update this walky</button>
                  </Link>
                  <FaTrash className="dele-btn" onClick={function () { return onDelete(walk._id); }}/>
                </div>
              </>)}
          </div>
        </div>
      </div>));
};
export default Walk;
//# sourceMappingURL=Walk.jsx.map