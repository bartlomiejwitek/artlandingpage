import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
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

export default function () {
  const router = useRouter();

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

  return (
    <div className={galleryStyls.wrapper}>
      <NavigationComponent />
      <PageBreakComponent>Pejzaże</PageBreakComponent>
      <Gallery>
        <div>
          <Image
            className={galleryStyls.item}
            src={kotly}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={szrenica}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={kotly}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={szrenica}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={pies}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={szrenica}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
      </Gallery>
      <PageBreakComponent>Kopie</PageBreakComponent>
      <Gallery>
        <div>
          <Image
            className={galleryStyls.item}
            src={kotly}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={szrenica}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={kotly}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={szrenica}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={pies}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
        <div>
          <Image
            className={galleryStyls.item}
            src={szrenica}
            alt="Szrenica"
            layout="fill"
          ></Image>
        </div>
      </Gallery>
      <footer
        className={indexS3Styles.customfooter}
        style={{ position: "relative", marginTop: "20px" }}
      >
        <span>Design and execution - Bartlomiej Witek 2022</span>
      </footer>
    </div>
  );
}
