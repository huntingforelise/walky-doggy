import React from "react";
import * as userService from "../services/UserService";
import { useRouter } from "next/router";
var Logout = function () {
    var router = useRouter();
    var isOwner = localStorage.getItem("isOwner");
    var handleClick = function () {
        userService.logout();
        localStorage.setItem("userId", "");
        localStorage.setItem("isOwner", "");
        localStorage.setItem("isWalker", "");
        router.push("/");
    };
    return (<div>
      <h2>Are you sure you want to log out?</h2>
      <button 
    // variant="contained"
    className="confirm-btn" onClick={function () {
            if (isOwner === "true") {
                router.push("/owneraccount");
            }
            else {
                router.push("/walkeraccount");
            }
        }}>
        No
      </button>
      <button 
    // variant="contained"
    color="error" className="confirm-btn" onClick={handleClick}>
        Yes
      </button>
    </div>);
};
export default Logout;
//# sourceMappingURL=logout.jsx.map