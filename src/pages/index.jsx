import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [foo, setFoo] = useState(1);
  // 上記の記述は以下の記述と同じ
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E9%85%8D%E5%88%97%E3%81%AE%E5%88%86%E5%89%B2%E4%BB%A3%E5%85%A5
  // const foo = array[0]
  // const setFoo = array[1]

  const handleClick = (e) => {
    // foo = foo + 1;
    setFoo((foo) => foo + 1);
  };

  useEffect(() => {
    // マウント（レンダリング）されるタイミングで処理が実行される（背景がlightblueになる）
    // console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時に実行される処理（背景が元に戻る）
    // console.log("アンマウント時");
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
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index"></Main>

      <Footer />
    </>
  );
}
