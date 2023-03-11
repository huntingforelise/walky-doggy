import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const WalkerAccount = () => {
  const [walkerId, setWalkerId] = useState("");
  
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log("walkeraccount: " + userId);
    if (userId) setWalkerId(userId);
  }, []);

  return (
    <>
      <Head>
        <title>Walky Doggy | Walker</title>
      </Head>
      <div>
        <div>
          <h1 className={styles.title}>Walker</h1>
          <div className="myaccount-div">
            <Link href={{pathname: "/account/find", query: walkerId}}>
              <button className={styles.button}>Find a Walk</button>
            </Link>
            <Link href={{pathname: "/account/scheduled", query: walkerId}}>
              <button className={styles.button}>Scheduled Walks</button>
            </Link>
            <Link href={{pathname: "/account/walkerhistory", query: walkerId}}>
              <button className={styles.button}>View My Walk History</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalkerAccount;
