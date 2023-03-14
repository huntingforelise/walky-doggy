import Link from "next/link";
import styles from "@/styles/Home.module.css";
var WalkerAccount = function () {
    return (React.createElement("div", null,
        React.createElement("h1", { className: styles.title }, "Walker"),
        React.createElement("div", { className: "myaccount" },
            React.createElement(Link, { href: { pathname: "/walkeraccount/find" } },
                React.createElement("button", { className: styles.button }, "Find a Walk")),
            React.createElement(Link, { href: { pathname: "/walkeraccount/scheduled" } },
                React.createElement("button", { className: styles.button }, "Scheduled Walks")),
            React.createElement(Link, { href: { pathname: "/walkeraccount/walkerhistory" } },
                React.createElement("button", { className: styles.button }, "View My Walk History")))));
};
export default WalkerAccount;
//# sourceMappingURL=index.js.map