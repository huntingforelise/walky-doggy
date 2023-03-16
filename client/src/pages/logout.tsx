import React from "react";
import * as userService from "../services/UserService";
import { useRouter } from "next/router";
import { useAuth } from '../utils/AuthContext';

const Logout = () => {
  const router = useRouter();
  const { setAuthState } = useAuth();
  const isOwner = localStorage.getItem("isOwner");

  const handleClick = () => {
    userService.logout();
    setAuthState(null, false, false);
    localStorage.setItem("userId", "");
    localStorage.setItem("isOwner", "");
    localStorage.setItem("isWalker", "");
    router.push("/");
  };

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button
        // variant="contained"
        className="confirm-btn"
        onClick={() => {
          if (isOwner === "true") {
            router.push("/owneraccount");
          } else {
            router.push("/walkeraccount");
          }
        }}
      >
        No
      </button>
      <button
        // variant="contained"
        color="error"
        className="confirm-btn"
        onClick={handleClick}
      >
        Yes
      </button>
    </div>
  );
};

export default Logout;
