import "src/styles/globals.css";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { useCounter } from "src/fooks/useCounter";
import { useInputArray } from "src/fooks/useInputArray";
import { useBackgroundLightBlue } from "src/fooks/useBackgroundLightBlue";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  // {foo, isShow, handleClick, handleDisplay}が入っている
  // counter.foo といった書き方で参照できる
  const counter = useCounter();
  const inputArray = useInputArray();
  useBackgroundLightBlue();

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
