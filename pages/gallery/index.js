import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import NavigationComponent from "../../components/navigation-component";
import Gallery from "../../components/gallery-component";
// import galleryStyles from "../../styles/gallery_index.module.css";
import galleryStyls from "../../styles/gallery_index.module.css";
import Image from "next/image";
import szrenica from "../../public/images/szrenica1.jpg";
import kotly from "../../public/images/kotly.jpg";
import pies from "../../public/images/pies.jpg";
import indexS3Styles from "../../styles/index_section3.module.css";
import PageBreakComponent from "../../components/page-break-component";

import MonkByTheSea from "../../public/images/kopie/caspar_d_friedrich_monk.jpg";
import Jablka from "../../public/images/kopie/jablka.jpg";
import AndriensPreparing from "../../public/images/kopie/andreiens_preparing.jpg";
import HugoEngl from "../../public/images/kopie/hugo.JPG";
import AfternoonTea from "../../public/images/kopie/afternoon_tea.JPG";
import Breakfast from "../../public/images/kopie/carl_w_breakfast.JPG";
import ZoominComponent from "../../components/zoomin-component";

export default function () {
  const router = useRouter();
  const [imageStyle, setImageStyle] = useState({});
  const imagesRef = useRef([]);
  const imagesOverlayRef = useRef([]);
  const [showZoomin, setShowZoomin] = useState(false);
  const [previousScroll, setPreviosScroll] = useState(0);

  const images = [
    [
      {
        alt: "Kotły",
        img: (
          <Image
            className={galleryStyls.item}
            src={kotly}
            alt="Kotły"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Szrenica",
        img: (
          <Image
            className={galleryStyls.item}
            src={szrenica}
            alt="Szrenica"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Chata",
        img: (
          <Image
            className={galleryStyls.item}
            src="/images/pejzaze/chata.jpg"
            alt="Chata"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "IMG_0190.JPG",
        img: (
          <Image
            className={galleryStyls.item}
            src="/images/pejzaze/IMG_0190.JPG"
            alt="IMG_0190.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "img_0328.jpg",
        img: (
          <Image
            className={galleryStyls.item}
            src="/images/pejzaze/IMG_0328.JPG"
            alt="IMG_0328.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "img_5836.jpg",
        img: (
          <Image
            className={galleryStyls.item}
            src="/images/pejzaze/IMG_5836.JPG"
            alt="IMG_5836.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "img_5843.jpg",
        img: (
          <Image
            className={galleryStyls.item}
            src="/images/pejzaze/IMG_5843.JPG"
            alt="IMG_5843.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "img_6020.jpg",
        img: (
          <Image
            className={galleryStyls.item}
            src="/images/pejzaze/IMG_6020.JPG"
            alt="IMG_6020.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "img_6734.jpg",
        img: (
          <Image
            className={galleryStyls.item}
            src="/images/pejzaze/IMG_6734.JPG"
            alt="IMG_6734.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "krowy1.jpg",
        img: (
          <Image
            className={galleryStyls.item}
            src="/images/pejzaze/KROWY1.JPG"
            alt="KROWY1.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "P1080017.jpg",
        img: (
          <Image
            className={galleryStyls.item}
            src="/images/pejzaze/P1080017.JPG"
            alt="P1080017.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "PB1700014.JPG",
        img: (
          <Image
            className={galleryStyls.item}
            src="/images/pejzaze/PB1700014.JPG"
            alt="PB1700014.JPG"
            layout="fill"
          ></Image>
        ),
      },
    ],
    [
      {
        alt: "Inny obraz",
        img: (
          <Image
            className={galleryStyls.item}
            src={MonkByTheSea}
            alt="Caspar David Friedrich - Monk By The Sea"
            layout="fill"
          ></Image>
        ),
      },
    ],
  ];

  useEffect(() => {
    console.log(router);
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        console.log(router);
        // Will run when leaving the current page; on back/forward actions
        // Add your logic here, like toggling the modal state
      }
      console.log(router);
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  const imageMouseEnter = (refId) => {
    imagesRef.current[refId].style.opacity = "0.1";
    imagesOverlayRef.current[refId].style.opacity = "1.0";
  };

  const imageMouseLeave = (refId) => {
    imagesRef.current[refId].style.opacity = "1.0";
    imagesOverlayRef.current[refId].style.opacity = "0.0";
  };

  const nextButtonClick = () => {
    //dodac tutaj tak zeby przeskakiwal do nsatepnego arraya zeby przez wszystkie sekcje szlo
    setShowZoomin((prev) => {
      console.log(prev);
      console.log(images[prev[0]].length);
      if (prev[1] + 1 < images[prev[0]].length) {
        return [prev[0], prev[1] + 1];
      } else {
        //next array exists (next section)
        if (images[prev[0] + 1]) {
          return [prev[0] + 1, 0];
        } else {
          return prev;
        }
      }
    });
  };

  const previousButtonClick = () => {
    setShowZoomin((prev) => {
      if (prev[1] - 1 >= 0) {
        return [prev[0], prev[1] - 1];
      } else {
        if (images[prev[0] - 1]) {
          return [prev[0] - 1, images[prev[0] - 1].length - 1];
        } else {
          return prev;
        }
      }
    });
  };

  return (
    <div className={galleryStyls.wrapper}>
      <NavigationComponent />
      <PageBreakComponent>Pejzaże</PageBreakComponent>
      <Gallery>
        {images[0].map((image, i) => {
          return (
            <div>
              <span
                onMouseEnter={() => imageMouseEnter(i)}
                onMouseLeave={() => imageMouseLeave(i)}
                key={i}
                className={galleryStyls.imageOverlay}
                ref={(el) => (imagesOverlayRef.current[i] = el)}
                onClick={() => {
                  console.log(i);
                  console.log(images[0][i]);
                  document.body.style.overflow = "hidden";
                  setPreviosScroll(window.scrollY);
                  window.scrollTo(0, 0);
                  setShowZoomin([0, i]);
                }}
              >
                {image.alt}
              </span>
              <div
                style={{ transition: "opacity 0.8s" }}
                ref={(el) => (imagesRef.current[i] = el)}
              >
                {image.img}
              </div>
            </div>
          );
        })}
      </Gallery>
      <PageBreakComponent>Kopie</PageBreakComponent>
      <Gallery>
        <div>
          <Image
            className={galleryStyls.item}
            src={MonkByTheSea}
            alt="Caspar David Friedrich - Monk By The Sea"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={Jablka}
            alt="Jabłka"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={AndriensPreparing}
            alt="Andriens van den Berg - Preparing the evening meal"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={HugoEngl}
            alt="Hugo Engl - Familien Szene"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={AfternoonTea}
            alt="Francisco Miralles - Afternoon Tea"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={Breakfast}
            alt="Carl Wilhelm Holsoe - Breakfast"
            layout="fill"
          ></Image>
        </div>
      </Gallery>
      {showZoomin !== false ? (
        <ZoominComponent
          image={images[showZoomin[0]][showZoomin[1]].img}
          title={images[showZoomin[0]][showZoomin[1]].alt}
          close={() => {
            setShowZoomin(false);
            console.log(previousScroll);
            window.scrollTo(0, previousScroll);
            document.body.style.overflow = "unset";
          }}
          next={() => {
            nextButtonClick();
          }}
          prev={() => {
            previousButtonClick();
          }}
        />
      ) : null}
      <footer
        className={indexS3Styles.customfooter}
        style={{ position: "relative", marginTop: "20px" }}
      >
        <span>Design and execution - Bartlomiej Witek 2022</span>
      </footer>
    </div>
  );
}
