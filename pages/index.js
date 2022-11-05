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
import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/router";
import NavigationComponent from "../components/navigation-component";

export default function Home() {
  const [windowSize, setWindowSize] = useState();
  const [currentScrollTop, setCurrentScrollTop] = useState();
  const [scrollTop, setScrollTop] = useState({ current: null, past: null });
  const scrollTopRef = useRef(scrollTop);
  const windowSizeRef = useRef(windowSize);
  const SCROLL_SNAP_URL_MULTIPIERL = 0.15; /* To multiply this by the screen height */
  const router = useRouter();

  const handleResize = () => {
    console.log(window.innerWidth + " " + window.innerHeight);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const handleScroll = (event) => {
    setCurrentScrollTop(event.srcElement.scrollTop);
  };

  function debounce(func, timeout = 100) {
    var timer;
    return (...args) => {
      // console.log("returning");
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("Invoking debounced function");
        func.apply(this, args);
      }, timeout);
    };
  }

  const testFunction = () => {
    console.log("inside debounce");
  };

  //UseCallback is needed because otherwise in useEffect multiple different debounce functions are called which defies the whole point
  const handleSectionUrlChangeCallbackWrapper = useCallback(
    debounce(() => handleSectionUrlChange()), //This needs to be called because debounce itself returns a function! Does not invoke it!
    []
  );

  /* Always having the current and one historical value */
  const pushScrollTop = (value) => {
    // console.log(scrollTop);
    // console.log("Pushscrolltop");
    if (scrollTop.current === null) {
      setScrollTop({ current: value, past: null });
    } else {
      setScrollTop({ current: value, past: scrollTop.current });
    }
  };

  const handleSectionUrlChange = (test) => {
    // console.log("Hanldesectionurl called!");
    // console.log("Test: " + test);
    let scrollTop = scrollTopRef.current;
    let windowSize = windowSizeRef.current;
    console.log(
      `Curent: ${scrollTop.current}, Past: ${scrollTop.past},  Delta:  ${
        scrollTop.current - scrollTop.past
      }`
    );
    // console.log("handlesection urlchange");
    console.log("Window size" + windowSize);
    if (windowSize !== null && windowSize !== undefined) {
      console.log("inside if");
      /* Removing everything past origin in URL -> scrolling up case. section2 -> section1*/
      if (
        scrollTop.current <=
          windowSize.height - SCROLL_SNAP_URL_MULTIPIERL * windowSize.height &&
        scrollTop.current - scrollTop.past < 0
      ) {
        // window.history.pushState({}, "", window.location.origin);
        console.log("case 1 true");
        router.push("").catch((e) => console.log(e));
      } else if (
        /* Adding #section-two when scrolling from top to bottom section1 -> section2 */
        scrollTop.current >=
          windowSize.height * (1 - SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current <
          windowSize.height * (1 + SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current - scrollTop.past > 0
      ) {
        console.log("case 2 true");
        // window.history.pushState(
        //   {},
        //   "",
        //   window.location.origin + "#section-two"
        // );
        // router.push("#section-two");
        if (router.asPath !== "/" + "#section-two") {
          router.push("#section-two").catch((e) => console.log(e));
        }
      } else if (
        /* Scrolling from section2 -> section3*/
        scrollTop.current >=
          windowSize.height * (1 + 1 - SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current <
          windowSize.height * (1 + 1 + SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current - scrollTop.past > 0
      ) {
        // window.history.pushState(
        //   {},
        //   "",
        //   window.location.origin + "#section-three"
        // );
        console.log("Case three true");
        router.push("#section-three").catch((e) => console.log(e));
      } else if (
        /* Scrolling section3 -> section2 */
        scrollTop.current >= windowSize.height * 1 &&
        scrollTop.current <
          windowSize.height * (1 + 1 + SCROLL_SNAP_URL_MULTIPIERL) &&
        scrollTop.current - scrollTop.past < 0
      ) {
        // window.history.pushState(
        //   {},
        //   "",
        //   window.location.origin + "#section-two"
        // );
        console.log("case four true");
        router.push("#section-two").catch((e) => console.log(e));
      } else {
        console.log("Nocase true");
      }
    }
  };

  useEffect(() => {
    pushScrollTop(currentScrollTop);
  }, [currentScrollTop]);

  useEffect(() => {
    scrollTopRef.current = scrollTop;
    handleSectionUrlChangeCallbackWrapper();
  }, [scrollTop]);

  useEffect(() => {
    console.log("Window size updated:");
    console.log(windowSize);
    windowSizeRef.current = windowSize;
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
          <NavigationComponent />
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
          <footer className={indexS3Styles.customfooter}>
            <span>Design and execution - Bartlomiej Witek 2022</span>
          </footer>
        </section>
      </div>
    </div>
  );
}
