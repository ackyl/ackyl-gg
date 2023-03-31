import "../styles/style.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ackyl&apos;s Atelier of Wonder</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <main className="main-container">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
