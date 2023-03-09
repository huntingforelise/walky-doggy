import "@/styles/globals.css";
// import { EventContextProvider } from "../../components/EventContextProvider";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import * as WalkService from "../services/WalkService";
import WalkList from "../components/walklist";
//import context from newly made context file

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* wrap with provider */}
      <Component {...pageProps} />
      {/* wrap with provider */}
    </Layout>
  );
}
