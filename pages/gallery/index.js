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

//Import kopie
import MonkByTheSea from "../../public/images/kopie/caspar_d_friedrich_monk.jpg";
import Jablka from "../../public/images/kopie/jablka.jpg";
import AndriensPreparing from "../../public/images/kopie/andreiens_preparing.jpg";
import HugoEngl from "../../public/images/kopie/hugo.JPG";
import AfternoonTea from "../../public/images/kopie/afternoon_tea.JPG";
import Breakfast from "../../public/images/kopie/carl_w_breakfast.JPG";
import ZoominComponent from "../../components/zoomin-component";
import P4110008 from "../../public/images/kopie/P4110008.JPG";
import MothersDuty from "../../public/images/kopie/Mother_sDuty.JPG";
import bryczka from "../../public/images/kopie/bryczka.jpg";
import chabry from "../../public/images/kopie/chabry.jpg";
import Dali1 from "../../public/images/kopie/Dali1.jpg";
import Dali2 from "../../public/images/kopie/Dali2.jpg";
import Slonie from "../../public/images/kopie/slonie.jpg";
import ChlopieZeSzczyglem from "../../public/images/kopie/chlopiec_ze_szczyglem.jpg";
import TestamentMojejSztuki from "../../public/images/kopie/testament_mojej_sztuki.jpg";
//import pejzaze
import Chata from "../../public/images/pejzaze/chata.jpg";
import IMG_0190 from "../../public/images/pejzaze/IMG_0190.JPG";
import IMG_0328 from "../../public/images/pejzaze/IMG_0328.JPG";
import IMG_5836 from "../../public/images/pejzaze/IMG_5836.JPG";
import IMG_5843 from "../../public/images/pejzaze/IMG_5843.JPG";
import IMG_6020 from "../../public/images/pejzaze/IMG_6020.JPG";
import IMG_6734 from "../../public/images/pejzaze/IMG_6734.JPG";
import KROWY1 from "../../public/images/pejzaze/KROWY1.JPG";
import P1080017 from "../../public/images/pejzaze/P1080017.JPG";
import PB1700014 from "../../public/images/pejzaze/PB1700014.JPG";
import IMG_5931 from "../../public/images/pejzaze/IMG_5931.JPG";
import IMG_5933 from "../../public/images/pejzaze/IMG_5933.JPG";
//import kwiaty
import _20200917_122007 from "../../public/images/kwiaty/20200917_122007.jpg";
import _20200917_122020 from "../../public/images/kwiaty/20200917_122020.jpg";
import GORYCZKA_TROJESCIOWA from "../../public/images/kwiaty/GORYCZKA_TROJESCIOWA.JPG";
import IMG_3408 from "../../public/images/kwiaty/IMG_3408.JPG";
import IMG_3585 from "../../public/images/kwiaty/IMG_3585.JPG";
import IMG_3587 from "../../public/images/kwiaty/IMG_3587.JPG";
import IMG_9625 from "../../public/images/kwiaty/IMG_9625.JPG";
import konwalia from "../../public/images/kwiaty/konwalia.jpg";
import monet from "../../public/images/kwiaty/monet.jpg";
import PA170009 from "../../public/images/kwiaty/PA170009.png";
import SLONECZNIKI from "../../public/images/kwiaty/SLONECZNIKI.JPG";
import VVGMigdalowiec from "../../public/images/kwiaty/vvg_Kwitnacy_migdalowiec.jpg";
import wrzos from "../../public/images/kwiaty/wrzos.jpg";
//Import portrety
import portret1 from "../../public/images/portrety/Portret1.JPG";
import portret2 from "../../public/images/portrety/Portret2.JPG";
import portret3 from "../../public/images/portrety/Portret3.JPG";
import portret6 from "../../public/images/portrety/Portret6.JPG";
import portret7 from "../../public/images/portrety/Portret7.JPG";
import portret8 from "../../public/images/portrety/Portret8.JPG";
import portret9 from "../../public/images/portrety/Portret9.JPG";
import portret10 from "../../public/images/portrety/Portret10.JPG";
import portret11 from "../../public/images/portrety/Portret11.JPG";
import portret12 from "../../public/images/portrety/Portret12.JPG";
import portret13 from "../../public/images/portrety/Portret13.JPG";
import portret17 from "../../public/images/portrety/Portret17.JPG";
//Import madonnyianioly
import madonnyianioly1 from "../../public/images/madonnyianioly/madonnyianioly1.JPG";
import madonnyianioly2 from "../../public/images/madonnyianioly/madonnyianioly2.JPG";
import madonnyianioly3 from "../../public/images/madonnyianioly/madonnyianioly3.JPG";
import madonnyianioly4 from "../../public/images/madonnyianioly/madonnyianioly4.JPG";
import madonnyianioly5 from "../../public/images/madonnyianioly/madonnyianioly5.JPG";
import madonnyianioly6 from "../../public/images/madonnyianioly/madonnyianioly6.JPG";
import madonnyianioly7 from "../../public/images/madonnyianioly/madonnyianioly7.JPG";
import madonnyianioly8 from "../../public/images/madonnyianioly/madonnyianioly8.JPG";
import madonnyianioly9 from "../../public/images/madonnyianioly/madonnyianioly9.JPG";
import madonnyianioly10 from "../../public/images/madonnyianioly/madonnyianioly10.JPG";
import madonnyianioly11 from "../../public/images/madonnyianioly/madonnyianioly11.JPG";
import madonnyianioly12 from "../../public/images/madonnyianioly/madonnyianioly12.JPG";
import madonnyianioly14 from "../../public/images/madonnyianioly/madonnyianioly14.JPG";
import madonnyianioly15 from "../../public/images/madonnyianioly/madonnyianioly15.JPG";
import madonnyianioly16 from "../../public/images/madonnyianioly/madonnyianioly16.JPG";
//Import duchgor
import duchgor1 from "../../public/images/duchgor/duchgor1.JPG";
import duchgor2 from "../../public/images/duchgor/duchgor2.JPG";
import duchgor3 from "../../public/images/duchgor/duchgor3.JPG";
import duchgor4 from "../../public/images/duchgor/duchgor4.JPG";
import duchgor5 from "../../public/images/duchgor/duchgor5.JPG";
//Import okiennice
import okiennica1 from "../../public/images/okiennice/okiennica1.jpg"
import okiennica2 from "../../public/images/okiennice/okiennica2.jpg"
import okiennica3 from "../../public/images/okiennice/okiennica3.jpg"
//Import news
import bialaDolina from "../../public/images/news/Biala_Dolina_akryl_na_plotnie.jpg";
import dziewanny from "../../public/images/news/Dziewanny_i_sniezne_Kotly_akryl_na_plotnie.jpg"
import naparstnica from "../../public/images/news/naparstnica_akryl_na_desce.jpg"
import niebieskaPanorama from "../../public/images/news/niebieska_panorama_karkonoszy_akryl_na_desce.jpg"
import niebieski from "../../public/images/news/Niebieski_akryl_na_plotnie.jpg"
import panoramaTrawy from "../../public/images/news/Panorama_karkonoszy_trawy_akryl_na_desce.jpg"
import promien from "../../public/images/news/Promien_akryl_na_lupku.jpg"
import szrenicaWeMgle from "../../public/images/news/szrenica_we_mgle_akryl_na_plotnie.jpg"
import szrenicaZProfilu from "../../public/images/news/szrenica_z_profilu_akryl_na_desce.jpg"
import wschodNadIzera from "../../public/images/news/wschod_slonca_nad_izera_akryl_na_plotnie.jpg"


export default function GalleryWrapper() {
  const router = useRouter();
  const [imageStyle, setImageStyle] = useState({});
  const pejzazeImagesRef = useRef([]);
  const kopieImagesRef = useRef([]);
  const kwiatyImagesRef = useRef([]);
  const portretyImagesRef = useRef([]);
  const madonnyianiolyImagesRef = useRef([]);
  const duchgorImagesRef = useRef([]);
  const pejzazeImagesOverlayRef = useRef([]);
  const kwiatyImagesOverlayRef = useRef([]);
  const kopieImagesOverlayRef = useRef([]);
  const portretyImagesOverlayRef = useRef([]);
  const madonnyianiolyImagesOverlayRef = useRef([]);
  const duchgorImagesOverlayRef = useRef([]);
  const okienniceImagesRef = useRef([]);
  const okienniceImagesOverlayRef = useRef([]);
  const newsImagesRef = useRef([]);
  const newsImagesOverlayRef = useRef([]);
  const [showZoomin, setShowZoomin] = useState(false);
  const [previousScroll, setPreviosScroll] = useState(0);

  const images = [
    [
      {
        alt: "Śnieżne kotły latem - akryl na płótnie",
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
        alt: "Szrenica - olej na płótnie",
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
        alt: "Chata - Osiedle Huty - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={Chata}
            alt="Chata"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Widok z Wysokiego Kamienia (ciemny las) - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_0190}
            alt="IMG_0190.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Widok z Wysokiego Kamienia (jagodziny) - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_0328}
            alt="IMG_0328.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Sarenka i Szrenica - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_5836}
            alt="IMG_5836.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Panorama Karkonoszy(koń) - olej na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_6020}
            alt="IMG_6020.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Widok z Wysokiego Kamienia(kłosy) - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_6734}
            alt="IMG_6734.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Panorama Krakonoszy(krowy) - olej na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={KROWY1}
            alt="KROWY1.jpg"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Chata pod Szrenicą - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={P1080017}
            alt="P1080017.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Chata pod Wysokim Kamieniem- akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={PB1700014}
            alt="PB1700014.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Widok z Wysokiego Kamienia( łąki izerskie)- akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_5931}
            alt="IMG_5931.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Widok z Wysokiego Kamienia(jagodziny2) - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_5933}
            alt="IMG_5933.JPG"
            layout="fill"
          ></Image>
        ),
      },
    ],
    [
      {
        alt: "Caspar David Friedrich - Monk By The Sea - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={MonkByTheSea}
            alt="Caspar David Friedrich - Monk By The Sea"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Jabłka - Willys - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={Jablka}
            alt="Jabłka"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Andriens van den Berg - Preparing the evening meal - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={AndriensPreparing}
            alt="Andriens van den Berg - Preparing the evening meal"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Hugo Engl - Familien Szene - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={HugoEngl}
            alt="Hugo Engl - Familien Szene"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Francisco Miralles - Afternoon Tea - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={AfternoonTea}
            alt="Francisco Miralles - Afternoon Tea - olej na płótnie"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Carl Wilhelm Holsoe - Breakfast - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={Breakfast}
            alt="Carl Wilhelm Holsoe - Breakfast"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Nicolas Lancret - A Lady in a Garden Taking Coffe with Some Children - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={P4110008}
            alt="Nicolas Lancret - A Lady in a Garden Taking Coffe with Some Children"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Pieter de Hooch - Mother's Duty - olej na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={MothersDuty}
            alt="Pieter de Hooch - Mother's Duty"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Salvador Dali - Widmo Bryczki - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={bryczka}
            alt="Salvador Dali - Bryczka"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Salvador Dali - Chabry - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={chabry}
            alt="Salvador Dali - Chabry"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Salvador Dali - Pejzaż metafizyczny - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={Dali1}
            alt="Salvador Dali"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Salvador Dali - Ja, w wieku 6 lat, gdy sądziłem, że jestem dziewczynką, próbuję unieść taflę morza, by ujrzeć psa śpiącego w cieniu wód - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={Dali2}
            alt="Salvador Dali"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Salvador Dali - Słonie - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={Slonie}
            alt="Salvador Dali"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Wlastimil Hofman - Chłopiec ze Szczygłem - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={ChlopieZeSzczyglem}
            alt="Wlastimil Hofman - Chłopiec ze Szczygłem"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Wlastimil Hofman - Testament Mojej Sztuki - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={TestamentMojejSztuki}
            alt="Wlastimil Hofman - Testament Mojej Sztuki"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Claude Monet - Wazon pełen kwiatów- olej na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={monet}
            alt="monet.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Vincent van Gogh - Kwitnący Migdałowiec - olej na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={VVGMigdalowiec}
            alt="Vincent Vang Gogh - Migdałowiec"
            layout="fill"
          ></Image>
        ),
      },
    ],
    [
      {
        alt: "Dzwonek karkonoski - Śnieżne Kotły 1 - akryl n łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={_20200917_122007}
            alt="20200917_122007.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Goryczka trojeściowa 1 - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={_20200917_122020}
            alt="20200917_122020.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Goryczka trojeściowa 2 - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={GORYCZKA_TROJESCIOWA}
            alt="GORYCZKA_TROJESCIOWA.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Czosnek Siatkowaty - Śnieże Kotły - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_3408}
            alt="IMG_3408.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Skalnica Naprzeciwlistna - Śnieżne Kotły - akryl na łuku",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_3585}
            alt="IMG_3585.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Dzwonek karkonoski - Śnieżne Kotły 2 - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_3587}
            alt="IMG_3587.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Tryptyk kwiatowy(od lewej): Chabry i margaretki, Naparstnica, Malwa - akryl na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_9625}
            alt="IMG_9625.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Niezapominajki - olej na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={konwalia}
            alt="Niezapominajki - olej na desce"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Słoneczniki - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={SLONECZNIKI}
            alt="SLONECZNIKI.JPG"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Wrzosy - olej na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={wrzos}
            alt="wrzos"
            layout="fill"
          ></Image>
        ),
      },
    ],
    [
      {
        alt: "Dama - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret2}
            alt="portret2"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Dziewczyna - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret3}
            alt="portret3"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Zbliżenie na twarz - Dama - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret6}
            alt="portret6"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Dziewczynka z czerwoną kokardą - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret7}
            alt="portret7"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Dziewczynka i amarylis - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret8}
            alt="portret8"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Marcelka - akryl na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret9}
            alt="portret9"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Mikołaj - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret10}
            alt="portret10"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Dziewczynka z konwaliami - akryl na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret11}
            alt="portret11"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Mama i córka - olej na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret12}
            alt="portret12"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Tymon- akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret13}
            alt="portret13"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Piłsudski - ołówek i węgiel na kartonie",
        img: (
          <Image
            className={galleryStyls.item}
            src={portret17}
            alt="portret17"
            layout="fill"
          ></Image>
        ),
      },
    ],
    [
      {
        alt: "Anioł w niebieskiej sukni - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly1}
            alt="madonnyianioly1"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Anioł w bieli - akryl na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly2}
            alt="madonnyianioly2"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Anioł złotowłosy 1 - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly4}
            alt="madonnyianioly4"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Anioł w błękicie - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly5}
            alt="madonnyianioly5"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Madonna w sepii - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly6}
            alt="madonnyianioly6"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Anioł uśmiechnięty - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly7}
            alt="madonnyianioly7"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Anioł złotowłosy 2 - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly8}
            alt="madonnyianioly8"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Akt, popiersie - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly9}
            alt="madonnyianioly9"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Madonna w rumieńcach - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly10}
            alt="madonnyianioly10"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Madonna fioletowa - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly11}
            alt="madonnyianioly11"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: " Madonna w tiulu - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly12}
            alt="madonnyianioly12"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Anioł - akryl na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly14}
            alt="madonnyianioly14"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Anioł z kwiatem lilii - olej na metalu",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly15}
            alt="madonnyianioly15"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Anioł z dzbanem - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={madonnyianioly16}
            alt="madonnyianioly16"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Anioł ze Szrenicą w tle - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={IMG_5843}
            alt="IMG_5843.jpg"
            layout="fill"
          ></Image>
        ),
      },
    ],
    [
      {
        alt: " Duch gór - wg. obrazu Moritza von Schwinda - akryl na łupku - paprocie",
        img: (
          <Image
            className={galleryStyls.item}
            src={duchgor1}
            alt="duchgor1"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Duch gór - wg. obrazu Moritza von Schwinda - akryl na łupku - w sepii",
        img: (
          <Image
            className={galleryStyls.item}
            src={duchgor2}
            alt="duchgor2"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Duch gór - wg. obrazu Moritza von Schwinda - akryl na desce - muchomory",
        img: (
          <Image
            className={galleryStyls.item}
            src={duchgor3}
            alt="duchgor3"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Duch Gór na wietrze - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={duchgor4}
            alt="duchgor4"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Duch gór z kosturem - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={duchgor5}
            alt="duchgor5"
            layout="fill"
          ></Image>
        ),
      },
    ],
    [
      {
        alt: "Okiennica1",
        img: (
          <Image
            className={galleryStyls.item}
            src={okiennica1}
            alt="okiennica1"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Okiennica2",
        img: (
          <Image
            className={galleryStyls.item}
            src={okiennica2}
            alt="okiennica2"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Okiennica3",
        img: (
          <Image
            className={galleryStyls.item}
            src={okiennica3}
            alt="okiennica3"
            layout="fill"
          ></Image>
        ),
      },
    ],
    [
      {
        alt: "Biała Dolina - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={bialaDolina}
            alt="Biała Dolina - akryl na płótnie"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Dziewanny i Śnieżne Kotły - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={dziewanny}
            alt="Dziewanny i Śnieżne Kotły - akryl na płótnie"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Naparstnica - akryl na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={naparstnica}
            alt="Naparstnica - akryl na desce"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Niebieska panorama Karkonoszy - akryl na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={niebieskaPanorama}
            alt="Niebieska panorama Karkonoszy - akryl na desce"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Niebieski - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={niebieski}
            alt="Niebieski - akryl na płótnie"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Panorama Karkonoszy Trawy - akryl na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={panoramaTrawy}
            alt="Panorama Karkonoszy Trawy - akryl na desce"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Promień - akryl na łupku",
        img: (
          <Image
            className={galleryStyls.item}
            src={promien}
            alt="Promień - akryl na łupku"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Szrenica we mgle - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={szrenicaWeMgle}
            alt="Szrenica we mgle - akryl na płótnie"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Szrenica z profilu - akryl na desce",
        img: (
          <Image
            className={galleryStyls.item}
            src={szrenicaZProfilu}
            alt="Szrenica z profilu - akryl na desce"
            layout="fill"
          ></Image>
        ),
      },
      {
        alt: "Wschód słońca nad Izerą - akryl na płótnie",
        img: (
          <Image
            className={galleryStyls.item}
            src={wschodNadIzera}
            alt="Wschód słońca nad Izerą - akryl na płótnie"
            layout="fill"
          ></Image>
        ),
      },
    ]
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

  const imageMouseEnter = (refId, imagesRef, imagesOverlayRef) => {
    imagesRef.current[refId].style.opacity = "0.1";
    imagesOverlayRef.current[refId].style.opacity = "1.0";
  };

  const imageMouseLeave = (refId, imagesRef, imagesOverlayRef) => {
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

  const getElementsForGallery = (
    images,
    localArrayIndex,
    imagesRef,
    imagesOverlayRef
  ) => {
    return images.map((image, i) => {
      return (
        <div key={i}>
          <span
            onMouseEnter={() => imageMouseEnter(i, imagesRef, imagesOverlayRef)}
            onMouseLeave={() => imageMouseLeave(i, imagesRef, imagesOverlayRef)}
            key={i}
            className={galleryStyls.imageOverlay}
            ref={(el) => (imagesOverlayRef.current[i] = el)}
            onClick={() => {
              console.log(i);
              console.log(images[0][i]);
              document.body.style.overflow = "hidden";
              setPreviosScroll(window.scrollY);
              window.scrollTo(0, 0);
              setShowZoomin([localArrayIndex, i]);
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
    });
  };

  return (
    <div className={galleryStyls.wrapper}>
      <NavigationComponent />
      <PageBreakComponent>News</PageBreakComponent>
      <Gallery>
        {getElementsForGallery(
          images[7],
          7,
          newsImagesRef,
          newsImagesOverlayRef
        )}
      </Gallery>
      <PageBreakComponent>Pejzaże</PageBreakComponent>
      <Gallery>
        {getElementsForGallery(
          images[0],
          0,
          pejzazeImagesRef,
          pejzazeImagesOverlayRef
        )}
      </Gallery>
      <PageBreakComponent>Kopie</PageBreakComponent>
      <Gallery>
        {getElementsForGallery(
          images[1],
          1,
          kopieImagesRef,
          kopieImagesOverlayRef
        )}
      </Gallery>
      <PageBreakComponent>Kwiaty</PageBreakComponent>
      <Gallery>
        {getElementsForGallery(
          images[2],
          2,
          kwiatyImagesRef,
          kwiatyImagesOverlayRef
        )}
      </Gallery>
      <PageBreakComponent>Portrety</PageBreakComponent>
      <Gallery>
        {getElementsForGallery(
          images[3],
          3,
          portretyImagesRef,
          portretyImagesOverlayRef
        )}
      </Gallery>
      <PageBreakComponent>Madonny i anioły</PageBreakComponent>
      <Gallery>
        {getElementsForGallery(
          images[4],
          4,
          madonnyianiolyImagesRef,
          madonnyianiolyImagesOverlayRef
        )}
      </Gallery>
      <PageBreakComponent>Duch gór</PageBreakComponent>
      <Gallery>
        {getElementsForGallery(
          images[5],
          5,
          duchgorImagesRef,
          duchgorImagesOverlayRef
        )}
      </Gallery>
      <PageBreakComponent>Okiennice</PageBreakComponent>
      <Gallery>
        {getElementsForGallery(
          images[6],
          6,
          okienniceImagesRef,
          okienniceImagesOverlayRef
        )}
      </Gallery>
      {/* <PageBreakComponent>Współpraca z KPN</PageBreakComponent> */}

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
