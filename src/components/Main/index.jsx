import { Inter } from "@next/font/google";
import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline/";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
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
      <main className={classes.main}>
        <Headline page={props.page}>
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
    </>
  );
}
