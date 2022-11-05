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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Alumni+Sans+Pinstripe&family=Bad+Script&family=Bodoni+Moda:opsz@6..96&display=swap"
          rel="stylesheet"
        ></link>
        <title>Art Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationComponent />
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
      {/* <div className={galleryStyls.gallery}>

      </div> */}
    </div>
  );
}
