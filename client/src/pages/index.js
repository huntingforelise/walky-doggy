import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
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
    </>
  );
}
