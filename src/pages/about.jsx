import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Inter } from "@next/font/google";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function About(props) {
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleAdd,
    handleChange,
  } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      {isShow ? <h1>count: {count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>
        {isShow ? "ひひょうじ" : "ひょうじ"}
      </button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>handleAdd</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />

      <Footer />
    </div>
  );
}
