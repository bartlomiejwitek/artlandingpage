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

  const imagesLandscapes = [
    {
      alt: "Szrenica",
      img: (
        <Image
          className={galleryStyls.item}
          src={kotly}
          alt="Szrenica"
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
      alt: "Kotły",
      img: (
        <Image
          className={galleryStyls.item}
          src={kotly}
          alt="Szrenica"
          layout="fill"
        ></Image>
      ),
    },
    {
      alt: "Kotły",
      img: (
        <Image
          className={galleryStyls.item}
          src={szrenica}
          alt="Szrenica"
          layout="fill"
        ></Image>
      ),
    },
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

  return (
    <div className={galleryStyls.wrapper}>
      <NavigationComponent />
      <PageBreakComponent>Pejzaże</PageBreakComponent>
      <Gallery>
        {imagesLandscapes.map((image, i) => {
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
                  console.log(imagesLandscapes[i]);
                  setShowZoomin(i);
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
          image={imagesLandscapes[showZoomin].img}
          title={imagesLandscapes[showZoomin].alt}
          close={() => {
            setShowZoomin(false);
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
