import "src/styles/globals.css";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { useCounter } from "src/fooks/useCounter";
import { useInputArray } from "src/fooks/useInputArray";
import { useBackgroundLightBlue } from "src/fooks/useBackgroundLightBlue";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const { foo, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleAdd, handleChange } = useInputArray();
  useBackgroundLightBlue();

  return (
    // React.Fragmentはpages配下の_app.jsxなどは最上位のファイルなら他のファイルに影響を与えない（はず）なので使っても良いのではないか?
    <>
      <Head>
        {/* 共通化できるものは_app.jsxにまとめてもよい */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
