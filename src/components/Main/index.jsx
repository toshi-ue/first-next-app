import { Inter } from "@next/font/google";
import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline/";
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    // unicode or そのまま使う(utf-8)。推奨はunicode（らしい）
    //  https://ja.reactjs.org/docs/jsx-in-depth.html#string-literals
    //  ただしunicodeとutf8の表示は微妙に違うので注意
    // title: "Docs <span>\u2192</span>",
    title: "Docs <span>-></span>",
    description:
      "Find in-depth information about Next.js features and&nbsp;API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn <span>-></span>",
    description:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates <span>-></span>",
    description:
      "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy <span>-></span>",
    description:
      "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.",
  },
];

export function Main(props) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <>
      <main className={classes.main}>
        <Headline page={props.page} handleReduce={handleReduce}>
          <code className={classes.code}>
            pages/{props.page}.js ({items.length})
          </code>
        </Headline>
        <Links items={items} handleReduce={handleReduce} />
      </main>
    </>
  );
}
