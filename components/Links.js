import { Inter } from "@next/font/google";
import styles from "./Links.module.css";
import parse from "html-react-parser";

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
const inter = Inter({ subsets: ["latin"] });

export function Links() {
  return (
    <>
      <div className={styles.grid}>
        {ITEMS.map((item) => {
          return (
            <a
              // 以下を指定しないと
              // VSCodeで
              // Missing "key" prop for element in iterator というエラーが発生してしまう
              // ブラウザでも
              // Warning: Each child in a list should have a unique "key" prop.
              // というエラーが発生する
              key={item.title}
              href={item.href}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*
                HTML文字列をHTMLに変換して表示する必要がある
              */}
              <h2 className={inter.className}>{parse(item.title)}</h2>
              <p className={inter.className}>{item.description}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
