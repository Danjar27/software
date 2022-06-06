import "../styles/globals.css";
import type { AppProps } from "next/app";
import { stores, StoresProvider } from "../store/stores";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ESPE software Project</title>
      </Head>
      <StoresProvider value={stores}>
        <Component {...pageProps} />
      </StoresProvider>
    </>
  );
}

export default MyApp;
