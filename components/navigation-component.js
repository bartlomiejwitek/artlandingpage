import React from "react";
import Image from "next/image";
import Link from "next/link";
import navStyles from "../styles/navbar.module.css";

export default function NavigationComponent() {
  return (
    <React.Fragment>
      <header className={navStyles.header}>
        <h1>Monika Krakowska Art</h1>
        <div className={navStyles.telephone}>
          <Image
            src="/phone-solid.svg"
            height={15}
            width={15}
            className={navStyles.telephoneIcon}
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
          <li className={navStyles.navButton}>
            <Link href="/">Start</Link>
          </li>
          <li className={navStyles.navButton}>
            <Link href="/gallery">Galeria</Link>
          </li>
          <li className={navStyles.navButton}>Kontakt</li>
          <li className={navStyles.navButton}>O mnie</li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
