import Link from "next/link";
import styles from "../../styles/Home.module.css";
var WalkerAccount = function () {
    return (<div>
      <h1 className={styles.title}>Walker</h1>
      <div className="myaccount">
        <Link href={{ pathname: "/walkeraccount/find" }}>
          <button className={styles.button}>Find a Walk</button>
        </Link>
        <Link href={{ pathname: "/walkeraccount/scheduled" }}>
          <button className={styles.button}>Scheduled Walks</button>
        </Link>
        <Link href={{ pathname: "/walkeraccount/walkerhistory" }}>
          <button className={styles.button}>View My Walk History</button>
        </Link>
      </div>
    </div>);
};
export default WalkerAccount;
//# sourceMappingURL=index.jsx.map