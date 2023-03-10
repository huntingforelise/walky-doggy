import WalkList from "@/components/Walklist";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import * as WalkService from "../../services/WalkService";

const walkhistory = () => {
  const [pastWalks, setPastWalks] = useState([]);

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      setPastWalks(walks.past);
    });
  }, []);

  return (
    <>
      <h1 className={styles.title}>View Walk History</h1>
      <WalkList walks={pastWalks} />;
    </>
  );
};

export default walkhistory;
