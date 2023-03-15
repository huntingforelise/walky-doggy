import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Login from "../components/login";
import Register from "../components/register";
// const initialState = {
//   username: "",
//   email: "",
//   password: "",
//   isOwner: false,
//   isWalker: false,
// };
export default function Home() {
    var _a = useState("login"), currentTab = _a[0], setCurrentTab = _a[1];
    // const [isAuthenticated, setIsAuthenticated] = useState(initialState);
    var handleTabChange = function (tab) {
        setCurrentTab(tab);
    };
    return (<>
      <Head>
        <title>Walky Doggy | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <div className="pic-home">
          <Image className="pichome" src="/homepage2.jpeg" alt="man-with-dag" width={323.12} height={554.4} priority/>
          <div className="container">
            <p className={styles.text}>
              Give your dogs all the care and comfort they need and assist you
              in the busy life.
            </p>
            <div className="login-container">
              <button className={"btn-login ".concat(currentTab === "login" ? "btn-clicked" : "")} onClick={function () {
            handleTabChange("login");
        }}>
                Login
              </button>
              <button className={"btn-login ".concat(currentTab === "register" ? "btn-clicked" : "")} onClick={function () {
            handleTabChange("register");
        }}>
                Register
              </button>
            </div>
            <div>{currentTab === "login" ? <Login /> : <Register />}</div>
          </div>
        </div>
      </div>
    </>);
}
//# sourceMappingURL=index.jsx.map