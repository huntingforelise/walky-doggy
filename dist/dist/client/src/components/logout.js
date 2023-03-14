import React from "react";
import userService from "../Services/UserService";
import { useRouter } from "next/router";
var Logout = function () {
    var router = useRouter();
    var isOwner = localStorage.getItem("isOwner");
    console.log(isOwner);
    var handleClick = function () {
        userService.logout();
        localStorage.setItem("userId", "");
        localStorage.setItem("isOwner", "");
        localStorage.setItem("isWalker", "");
        router.push("/");
    };
    return (React.createElement("div", null, React.createElement("h2", null, "Are you sure you want to log out?"), React.createElement("button", { variant: "contained", className: "confirm-btn", onClick: function () {
            if (isOwner === "true") {
                router.push("/owneraccount");
            }
            else {
                router.push("/walkeraccount");
            }
        } }, "No"), React.createElement("button", { variant: "contained", color: "error", className: "confirm-btn", onClick: handleClick }, "Yes")));
};
export default Logout;
//# sourceMappingURL=logout.js.map
//# sourceMappingURL=logout.js.map