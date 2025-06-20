import Header from "@/components/Header";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
