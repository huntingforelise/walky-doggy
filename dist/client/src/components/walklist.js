import Walk from "./Walk";
var WalkList = function (_a) {
    var formPath = _a.formPath, onDelete = _a.onDelete, walks = _a.walks, findWalks = _a.findWalks, ownerHistory = _a.ownerHistory, ownerUpcoming = _a.ownerUpcoming, onJoin = _a.onJoin;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "list" }, walks &&
            walks.map(function (walk) {
                return (React.createElement(Walk, { key: walk._id, walk: walk, onDelete: onDelete, formPath: formPath, findWalks: findWalks, ownerHistory: ownerHistory, ownerUpcoming: ownerUpcoming, onJoin: onJoin }));
            }))));
};
export default WalkList;
//# sourceMappingURL=walklist.js.map