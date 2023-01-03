// import Head from 'next/head'
import Image from "next/image";
// import { Inter } from '@next/font/google'
import classes from "./Footer.module.css";

// const inter = Inter({ subsets: ['latin'] })

export function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={classes.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </footer>
    </>
  );
}
