import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    // マウント（レンダリング）されるタイミングで処理が実行される（背景がlightblueになる）
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時に実行される処理（背景が元に戻る）
    console.log("アンマウント時");
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <Link href="/about" onClick={handleClick}>
        ぼたん
      </Link>
      {/* <button
        onClick={function (e) {
          alert(!"#");
        }}
      >
        ぼたん
      </button> */}
      <Main page="index"></Main>

      <Footer />
    </>
  );
}
