import Head from "next/head";
import { Inter } from "@next/font/google";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const foo = 1;

  const handleClick = (e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  };

  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <a
        href="/about"
        onClick={(e) => {
          handleClick(e, foo);
        }}
      >
        ぼたん
      </a>
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
