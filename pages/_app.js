import "../styles/style.scss";

import Head from "next/head";

import Cursor from "../components/Cursor";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Digital Observatory</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <Cursor />
      <main className="main-container">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
