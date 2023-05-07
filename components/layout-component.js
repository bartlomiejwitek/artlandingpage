import React from "react";
import Head from "next/head";
import indexStyles from "../styles/Index.module.css";
import layoutStyles from "../styles/layout-componetn.module.css";

export default function LayoutComponent({ children }) {
  return (
    <div className={indexStyles.container}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Alumni+Sans+Pinstripe&family=Bad+Script&family=Bodoni+Moda:opsz@6..96&display=swap"
          rel="stylesheet"
        ></link>
        <title>Monika Krakowska Art</title>
        <meta name="description" content="Monika Krakowska Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      {/* <div className={layoutStyles.firstLine}></div>
      <div className={layoutStyles.secondLine}></div> */}
    </div>
  );
}
