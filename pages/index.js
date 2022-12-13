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
import SliderStatusComponent from "../components/slider-status-component";
import SliderNavigationComponent from "../components/slider-navigation-component";

export default function Home() {
  const [windowSize, setWindowSize] = useState();
  const [currentScrollTop, setCurrentScrollTop] = useState();
  const [scrollTop, setScrollTop] = useState({ current: null, past: null });
  const scrollTopRef = useRef(scrollTop);
  const windowSizeRef = useRef(windowSize);
  const SCROLL_SNAP_URL_MULTIPIERL = 0.15; /* To multiply this by the screen height */
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [imageStyle, setImageStyle] = useState({
    opacity: "0.2",
    transition: "opacity 1s",
  });
  const [showImageNavigationControls, setShowImageNavigationControls] =
    useState(false);

  const handleCurrentImageIndexChange = (index) => {
    setCurrentImageIndex(index);
    console.log(index);
  };

  const handleResize = () => {
    console.log(window.innerWidth + " " + window.innerHeight);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const handleScroll = (event) => {
    setCurrentScrollTop(event.srcElement.scrollTop);
  };

  const smoothImageAnimation = () => {
    setImageStyle({ opacity: "1.0", transition: "opacity 0.5s" });
    // setTimeout(() => {
    //   setImageStyle({ opacity: "0.2", transition: "opacity 0.5s" });
    // }, 5700);
  };

  const imagesMainSlider = [
    {
      img: (
        <Image
          src={szrenica}
          alt="Szrenica"
          layout="fill"
          style={imageStyle}
          onLoad={smoothImageAnimation}
        ></Image>
      ),
      textTop: "Szrenica",
      textBottom: "Olej na płótnie",
    },
    {
      img: (
        <Image
          src={pies}
          alt="Szrenica"
          layout="fill"
          style={imageStyle}
          onLoad={smoothImageAnimation}
        ></Image>
      ),
      textTop: "Pejzaż",
      textBottom: "<Technika>",
    },
    {
      img: (
        <Image
          src={kotly}
          alt="Szrenica"
          layout="fill"
          style={imageStyle}
          onLoad={smoothImageAnimation}
        ></Image>
      ),
      textTop: "Kotły",
      textBottom: "<Technika>",
    },
  ];

  function debounce(func, timeout = 100) {
    var timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const testFunction = () => {};

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

  const handleNextImageMemoized = useCallback(() => {
    handleSliderNextImage();
  }, [currentImageIndex]);

  const handleSliderNextImage = () => {
    setCurrentImageIndex((prev) => {
      if (prev + 1 <= imagesMainSlider.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  const handleSliderPreviousImage = () => {
    if (currentImageIndex - 1 >= 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(imagesMainSlider.length - 1);
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
    let progressInterval;
    progressInterval = setInterval(() => {
      setWidth((prev) => {
        if (prev > 93.5) {
          console.log("width greater than 92");
          setImageStyle({ opacity: "0.2", transition: "opacity 0.5s" });
        }
        return prev + 0.25;
      });
    }, 15);
    const imageChangeInteerval = setInterval(() => {
      clearInterval(progressInterval);
      console.log("goo next");
      handleNextImageMemoized();
      setWidth(0);
      progressInterval = setInterval(() => {
        setWidth((prev) => {
          console.log(prev);
          if (prev > 93.5) {
            console.log("width greater than 91.5");
            setImageStyle({ opacity: "0.2", transition: "opacity 0.5s" });
          }
          return prev + 0.25;
        });
      }, 15);
    }, 6000);
    return () => {
      clearInterval(imageChangeInteerval);
      clearInterval(progressInterval);
    };
  }, []);

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
      <div className={indexStyles.sectionsWrapper} id="sections-wrapper">
        <section>
          <NavigationComponent />
          <div className={indexStyles.sectionOneImageContainer}>
            <div
              onMouseEnter={() => {
                console.log("mouse enter");
                setShowImageNavigationControls(true);
              }}
              onMouseLeave={() => {
                setShowImageNavigationControls(false);
              }}
            >
              <SliderNavigationComponent
                className={indexStyles.sliderNavigationLeft}
                onClickHandler={handleSliderPreviousImage}
                show={showImageNavigationControls}
              >
                {" "}
                <Image
                  src="/west_FILL0_wght400_GRAD0_opsz48.svg"
                  height={15}
                  width={15}
                />
              </SliderNavigationComponent>
              {imagesMainSlider[currentImageIndex].img}
              <SliderNavigationComponent
                className={indexStyles.sliderNavigationRight}
                onClickHandler={handleSliderNextImage}
                show={showImageNavigationControls}
              >
                {" "}
                <Image
                  src="/east_FILL0_wght400_GRAD0_opsz48.svg"
                  height={15}
                  width={15}
                />
              </SliderNavigationComponent>
              <div className={indexStyles.progressBarWrapper}>
                <div
                  style={{ width: `${width}%` }}
                  className={indexStyles.progressBar}
                ></div>
              </div>
              <div className={indexStyles.testclass}>
                {imagesMainSlider[currentImageIndex].textTop}
                <p>{imagesMainSlider[currentImageIndex].textBottom}</p>
              </div>
            </div>
          </div>
          <SliderStatusComponent
            handleCurrentImageIndexChange={handleCurrentImageIndexChange}
            currentImageIndex={currentImageIndex}
            images={imagesMainSlider}
          />
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
