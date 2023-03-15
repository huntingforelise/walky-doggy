import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { AuthProvider } from "../utils/AuthContext";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </AuthProvider>
  );
}
