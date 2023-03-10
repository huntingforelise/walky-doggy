import "@/styles/globals.css";
import Layout from "../../components/Layout";
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
