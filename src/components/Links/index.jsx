import { Inter } from "@next/font/google";
import styles from "src/components/Links/Links.module.css";
import parse from "html-react-parser";

const inter = Inter({ subsets: ["latin"] });

export function Links({ items, handleReduce }) {
  return (
    <>
      <div className={styles.grid}>
        <button onClick={handleReduce}>へらす</button>
        {items.map((item) => {
          return (
            <a
              key={item.title}
              href={item.href}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>{parse(item.title)}</h2>
              <p className={inter.className}>{item.description}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
