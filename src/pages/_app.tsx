import "../styles/style.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ackyl&apos;s Atelier of Wonder</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <Cursor />
      <main className="main-container">
        <div className="container">
          <Component {...pageProps} />
        </div>
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default MyApp;
