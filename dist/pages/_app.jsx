import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { AuthProvider } from "../utils/AuthContext";
import { ToastContainer } from "react-toastify";
export default function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<AuthProvider>
      <Layout>
        <Component {...pageProps}/>
        <ToastContainer />
      </Layout>
    </AuthProvider>);
}
//# sourceMappingURL=_app.jsx.map