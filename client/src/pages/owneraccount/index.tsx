import Link from "next/link";
import styles from "../../styles/Home.module.css";

const OwnerAccount = () => {
  return (
    <div>
      <h1 className={styles.title}>Owner</h1>
      <div className="myaccount">
        <Link href="/owneraccount/book">
          <button className={styles.button}>Book a walk</button>
        </Link>
        <Link href="/owneraccount/ownerhistory">
          <button className={styles.button}>View My Walk History</button>
        </Link>
        <Link href="/owneraccount/upcoming">
          <button className={styles.button}>Upcoming Walks</button>
        </Link>
      </div>
    </div>
  );
};

export default OwnerAccount;
