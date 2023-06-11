import NavigationComponent from "../../components/navigation-component";
import contactStyles from "../../styles/contact-component.module.css";
import indexS3Styles from "../../styles/index_section3.module.css";
import galleryStyls from "../../styles/gallery_index.module.css";
import Image from "next/image";
import VVGMigdalowiec from "../../public/images/kwiaty/vvg_Kwitnacy_migdalowiec.jpg";

export default function ContactComponent() {
  return (
    <div className={contactStyles.wrapper}>
      <NavigationComponent />
      <div className={contactStyles.body}>
        <div className={contactStyles.divider}></div>
        Wszelkie pytania proszę kierować pod adres e-mail:{" "}
        <a href="mailto:"></a>
        <div className={contactStyles.imageWrapper}>
          <Image
            className={galleryStyls.item}
            src={VVGMigdalowiec}
            alt="Vincent Vang Gogh - Migdałowiec"
            layout="responsive"
          ></Image>
        </div>
      </div>
      <footer className={indexS3Styles.customfooter}>
        <span>Design and execution - Bartlomiej Witek 2022</span>
      </footer>
    </div>
  );
}
