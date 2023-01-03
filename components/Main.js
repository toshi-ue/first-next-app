import { Inter } from "@next/font/google";
import classes from "./Main.module.css";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
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
