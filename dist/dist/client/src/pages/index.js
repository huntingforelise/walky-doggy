import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
var initialState = {
    username: "",
    email: "",
    password: "",
    isOwner: false,
    isWalker: false,
};
export default function Home() {
    var _a = useState("login"), currentTab = _a[0], setCurrentTab = _a[1];
    var _b = useState(initialState), isAuthenticated = _b[0], setIsAuthenticated = _b[1];
    var handleTabChange = function (tab) {
        setCurrentTab(tab);
    };
    return (React.createElement(React.Fragment, null, React.createElement(Head, null, React.createElement("title", null, "Walky Doggy | Home")), React.createElement("div", null, React.createElement("h1", { className: styles.title }, "Home"), React.createElement("div", { className: "pic-home" }, React.createElement(Image, { className: "pichome", src: "/homepage2.jpeg", alt: "man-with-dag", width: 323.12, height: 554.4, priority: true }), React.createElement("div", { className: "container" }, React.createElement("p", { className: styles.text }, "Give your dogs all the care and comfort they need and assist you in the busy life."), React.createElement("div", { className: "login-container" }, React.createElement("button", { className: "btn-login ".concat(currentTab === "login" ? "btn-clicked" : ""), onClick: function () {
            handleTabChange("login");
        } }, "Login"), React.createElement("button", { className: "btn-login ".concat(currentTab === "register" ? "btn-clicked" : ""), onClick: function () {
            handleTabChange("register");
        } }, "Register")), React.createElement("div", null, currentTab === "login" ? (React.createElement(Login, { setIsAuthenticated: setIsAuthenticated })) : (React.createElement(Register, { setIsAuthenticated: setIsAuthenticated }))))))));
}
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map