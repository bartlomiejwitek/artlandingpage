import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import indexStyles from "../styles/Index.module.css";
import indexS2Styles from "../styles/Index_section2.module.css";
import indexS3Styles from "../styles/index_section3.module.css";
import szrenica from "../public/images/szrenica1.jpg";
import navStyles from "../styles/navbar.module.css";
import kotly from "../public/images/kotly.jpg";
import pies from "../public/images/pies.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [windowSize, setWindowSize] = useState();
  const [currentScrollTop, setCurrentScrollTop] = useState();
  const [scrollTop, setScrollTop] = useState({ current: null, past: null });
  const SCROLL_SNAP_URL_MULTIPIERL = 0.15; /* To multiply this by the screen height */

  const handleResize = () => {
    console.log(window.innerWidth + " " + window.innerHeight);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const handleScroll = (event) => {
    setCurrentScrollTop(event.srcElement.scrollTop);
  };

  function debounce(func, timeout = 1000) {
    let timer;
    return (...args) => {
      console.log("returning");
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const testFunction = () => {
    console.log("inside debounce");
  };

  /* Always having the current and one historical value */
  const pushScrollTop = (value) => {
    // console.log(scrollTop);
    if (scrollTop.current === null) {
      setScrollTop({ current: value, past: null });
    } else {
      setScrollTop({ current: value, past: scrollTop.current });
    }
  };

  const handleSectionUrlChange = () => {
    console.log("Hanldesectionurl called!");
    console.log(
      `Curent: ${scrollTop.current}, Past: ${scrollTop.past},  Delta:  ${
        scrollTop.current - scrollTop.past
      }`
    );
    if (windowSize !== null && windowSize !== undefined) {
      /* Removing everything past origin in URL -> scrolling up case. section2 -> section1*/
      if (
        scrollTop.current <=
          windowSize.height - SCROLL_SNAP_URL_MULTIPIERL * windowSize.height &&
        scrollTop.current - scrollTop.past < 0
      ) {
        window.history.pushState({}, "", window.location.origin);
      } else if (
        /* Adding #section-two when scrolling from top to bottom section1 -> section2 */
        scrollTop.current >=
          windowSize.height * (1 - SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current <
          windowSize.height * (1 + SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current - scrollTop.past > 0
      ) {
        window.history.pushState(
          {},
          "",
          window.location.origin + "#section-two"
        );
      } else if (
        /* Scrolling from section2 -> section3*/
        scrollTop.current >=
          windowSize.height * (1 + 1 - SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current <
          windowSize.height * (1 + 1 + SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current - scrollTop.past > 0
      ) {
        window.history.pushState(
          {},
          "",
          window.location.origin + "#section-three"
        );
      } else if (
        /* Scrolling section3 -> section2 */
        scrollTop.current <=
          windowSize.height * (1 + 1 - SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current >
          windowSize.height * (1 + SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current - scrollTop.past < 0
      ) {
        window.history.pushState(
          {},
          "",
          window.location.origin + "#section-two"
        );
      }
    }
  };

  useEffect(() => {
    pushScrollTop(currentScrollTop);
  }, [currentScrollTop]);

  useEffect(() => {
    debounce(() => handleSectionUrlChange())(); //This needs to be called because debounce itself returns a function! Does not invoke it!
  }, [scrollTop]);

  useEffect(() => {
    console.log("Window size updated:");
    console.log(windowSize);
  }, [windowSize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log(window.innerWidth);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const sectionsWrapper =
      document.getElementById(
        "sections-wrapper"
      ); /* Event is on the wrapper div because of css overflow-y scrolling*/
    sectionsWrapper.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      sectionsWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={indexStyles.container}>
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@1&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Alumni+Sans+Pinstripe&family=Bad+Script&display=swap"
          rel="stylesheet"
        ></link> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Alumni+Sans+Pinstripe&family=Bad+Script&family=Bodoni+Moda:opsz@6..96&display=swap"
          rel="stylesheet"
        ></link>
        <title>Art Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={indexStyles.sectionsWrapper} id="sections-wrapper">
        <section>
          <header className={indexStyles.header}>
            <h1>Monika Krakowska Art</h1>
            <div className={indexStyles.telephone}>
              <Image
                src="/phone-solid.svg"
                height={15}
                width={15}
                className={indexStyles.telephoneIcon}
              />
              <span>32 123 44 55</span>
            </div>
          </header>
          <a
            href="#main-menu"
            className={navStyles.menuToggle}
            id="main-menu-toggle"
          >
            <span>
              <Image
                src="/bars-solid.svg"
                height={30}
                width={30}
                className={navStyles.barsIcon}
              />
            </span>
          </a>
          <nav className={navStyles.navigationWrapper} id="main-menu">
            <a href="#" className={navStyles.menuClose}>
              <span className={navStyles.xmarkIcon}>
                <Image src="/xmark-solid.svg" height={30} width={30} />
              </span>
            </a>
            <ul>
              <li className={navStyles.navButton}>Start</li>
              <li className={navStyles.navButton}>Galeria</li>
              <li className={navStyles.navButton}>Kontakt</li>
              <li className={navStyles.navButton}>O mnie</li>
            </ul>
          </nav>
          <div className={indexStyles.sectionOneImageContainer}>
            <div>
              <Image src={szrenica} alt="Szrenica" layout="fill"></Image>
              <div className={indexStyles.testclass}>
                Śnieżka
                <p>Olej na płótnie</p>
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            placerat lectus at mauris elementum malesuada. Nunc fringilla purus
            nec tortor malesuada, quis feugiat diam porta. Mauris vulputate
            magna ac ligula aliquet, at fermentum ex mattis. Donec a efficitur
            libero. Duis est ligula, commodo a sem sit amet, pharetra pharetra
            ligula.
          </p>
          <div className={indexStyles.sectionTitle}>
            <p>1. Strona główna</p>
            <div></div>
          </div>
          <a href="#section-two" className={indexStyles.buttonDown}>
            <Image
              src="/angle-down-solid.svg"
              height={30}
              width={40}
              className={indexStyles.arrowDownIconWhite}
            />
          </a>
        </section>
        <section id="section-two">
          <p>
            Śnieżne kotły latem. Aenean sed pharetra lacus, vitae pellentesque
            est. Integer augue tellus, pharetra non ultrices at, hendrerit eu
            leo.{" "}
          </p>
          <div className={indexStyles.sectionOneImageContainer}>
            <div>
              <Image src={kotly} alt="Ktoły" layout="fill"></Image>
            </div>
            <div className={indexS2Styles.backgroundText}>Pejzaże</div>
          </div>
          <div className={indexStyles.pageBreak}></div>
          <div
            className={`${indexStyles.sectionTitle} ${indexS2Styles.sectionTitle}`}
          >
            <p>2. Pejzaże</p>
            <div></div>
          </div>
        </section>
        <section id="section-three">
          <div className={indexStyles.pageBreak}>
            <div></div>
          </div>
          <div className={indexS3Styles.sectionThreeImageContainer}>
            <div>
              <Image src={pies} alt="Ktoły" layout="fill"></Image>
            </div>
            <div className={indexS3Styles.backgroundText}>
              PIĘKNO <br></br> NATURY <br></br> UWIECZNIONE
            </div>
          </div>
          <div className={indexStyles.pageBreak}></div>
        </section>
        <footer>Design and execution - Bartlomiej Witek 2022</footer>
      </div>
    </div>
  );
}
