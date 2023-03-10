import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Login from "./../components/login";
import Register from "./../components/register";


export default function Home() {
  const [currentTab, setCurrentTab] = useState('login');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <>
      <Head>
        <title>Walky Doggy | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <div className="pic-home">
          <Image
            className="pichome"
            src="/homepage2.jpeg"
            alt="man-with-dag"
            width={323.12}
            height={554.4}
            priority
          />
          <p className={styles.text}>
            Give your dogs all the care and comfort they need and assist you in
            the busy life.
          </p>
        </div>
      </div>
      <div>
        {currentTab === 'login' ? <Login/> : <Register />}
      </div>
      <div className={styles.TabContainer}>
          <button variant="contained"
            className={currentTab === 'login' ? styles.ActiveTab : ''}
            onClick={() => handleTabChange('login')}
          >
            Login
          </button>
          <button variant="contained"
            className={currentTab === 'register' ? styles.ActiveTab : ''}
            onClick={() => handleTabChange('register')}
          >
            Register
          </button>
        </div>
    </>
  );
}
