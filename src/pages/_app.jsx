import "src/styles/globals.css";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { useCounter } from "src/fooks/useCounter";
import { useInputArray } from "src/fooks/useInputArray";
import { useBackgroundColor } from "src/fooks/useBackgroundColor";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBackgroundColor();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}
