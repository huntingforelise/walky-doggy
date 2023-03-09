import "@/styles/globals.css";
// import { EventContextProvider } from "../../components/EventContextProvider";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import * as WalkService from "../services/WalkService";
import WalkList from "../components/walklist";
//import context from newly made context file

export default function App({ Component, pageProps }) {
  const [pastWalks, setPastWalks] = useState([]);
  const [futureWalks, setFutureWalks] = useState([]);

  useEffect(() => {
    WalkService.getWalks().then((walks) => {
      setPastWalks(walks.past);
      setFutureWalks(walks.future);
    });
  }, []);

  return (
    <Layout>
      {/* wrap with provider */}
      <Component {...pageProps} />
      {/* wrap with provider */}
      <WalkList future={futureWalks} past={pastWalks} />
    </Layout>
  );
}
