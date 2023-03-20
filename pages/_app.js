import "../styles/style.scss";

import Head from "next/head";
import Header from "../components/Header";
import Cursor from "../components/Cursor";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ackyl's Atelier of Wonder</title>
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
