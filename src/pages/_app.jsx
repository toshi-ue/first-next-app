import "src/styles/globals.css";
import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
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
