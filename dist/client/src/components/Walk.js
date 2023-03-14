import moment from "moment";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
var Walk = function (_a) {
    var walk = _a.walk, onDelete = _a.onDelete, formPath = _a.formPath, findWalks = _a.findWalks, ownerHistory = _a.ownerHistory, ownerUpcoming = _a.ownerUpcoming, onJoin = _a.onJoin;
    return (walk && (React.createElement("div", { className: "walk-div" },
        React.createElement("div", { id: "walk-list" },
            React.createElement("div", { className: "left" },
                React.createElement("div", { className: "walk-day-month" }, moment(walk.date).format("Do[\n]MMM")),
                React.createElement("div", { className: "walk-outer" },
                    React.createElement("div", { className: "list-title" },
                        walk.dogName,
                        " "),
                    React.createElement("div", { className: "list-date" },
                        React.createElement("p", null, moment(walk.date).format("hh:mm a - MMMM  Do, YYYY"))),
                    React.createElement("div", { className: "list-venue" },
                        React.createElement("p", null, walk.pickUpLocation))),
                findWalks ? (React.createElement("div", { className: "btn-dev" },
                    React.createElement("button", { className: "btn", onClick: function () { return onJoin(walk._id); } }, "Walk this doggy!"))) : ownerHistory ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "btn-dev" },
                        React.createElement(Link, { href: "".concat(formPath).concat(walk._id) },
                            React.createElement("button", { className: "btn" }, "View this walky")),
                        React.createElement(FaTrash, { className: "dele-btn", onClick: function () { return onDelete(walk._id); } })))) : ownerUpcoming ? (React.createElement(FaTrash, { className: "dele-btn", onClick: function () { return onDelete(walk._id); } })) : (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "btn-dev" },
                        React.createElement(Link, { href: "".concat(formPath).concat(walk._id) },
                            React.createElement("button", { className: "btn" }, "Update this walky")),
                        React.createElement(FaTrash, { className: "dele-btn", onClick: function () { return onDelete(walk._id); } })))))))));
};
export default Walk;
//# sourceMappingURL=Walk.js.map