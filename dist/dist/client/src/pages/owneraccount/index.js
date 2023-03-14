import Link from "next/link";
import styles from "@/styles/Home.module.css";
var OwnerAccount = function () {
    return (React.createElement("div", null, React.createElement("h1", { className: styles.title }, "Owner"), React.createElement("div", { className: "myaccount" }, React.createElement(Link, { href: "/owneraccount/book" }, React.createElement("button", { className: styles.button }, "Book a walk")), React.createElement(Link, { href: "/owneraccount/ownerhistory" }, React.createElement("button", { className: styles.button }, "View My Walk History")), React.createElement(Link, { href: "/owneraccount/upcoming" }, React.createElement("button", { className: styles.button }, "Upcoming Walks")))));
};
export default OwnerAccount;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map