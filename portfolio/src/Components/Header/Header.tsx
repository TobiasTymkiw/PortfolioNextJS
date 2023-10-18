"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-scroll";
import cvSvg from "../../assets/AboutMe/file-download-line.svg";
import Image from "next/image";
import useDownloader from "react-use-downloader";

export default function Header() {
  const { download } = useDownloader();
  const fileURL = "/CV-TobiasTymkiw.pdf";
  const filename = "CV-TobiasTymkiw.pdf";
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    /* "Projects", */
    "Contact",
  ];

  const renderNavLink = (content: string) => {
    const scrollToId = `${content.toLocaleLowerCase()}Section`;

    return (
      <li key={content}>
        <Link
          activeClass={styles.active}
          className={styles.button}
          to={scrollToId}
          spy={true}
          smooth={true}
          duration={900}
          offset={5}
        >
          {content}
          <span className={styles.line}></span>
        </Link>
      </li>
    );
  };

  const [selected, setSelected] = useState(false);
  const handleSelect = (selected: boolean) => {
    setSelected(!selected);
  };

  return (
    <header id="header" className={styles.header}>
      <nav className={styles.nav}>
        <label onClick={() => handleSelect(selected)} className={styles.burger}>
          <span
            className={`${styles.bar} ${selected ? styles.actbar : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${selected ? styles.actbar : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${selected ? styles.actbar : ""}`}
          ></span>
        </label>
        <Link
          activeClass={styles.active}
          className={styles.button}
          to="homeSection"
          spy={true}
          smooth={true}
          duration={900}
          offset={5}
        >
          FullStack Developer
          <span style={{ height: "3px" }}></span>
        </Link>
        <ul className={`${styles.ul} ${selected ? styles.f : ""}`}>
          {navLinks.map((nav) => renderNavLink(nav))}
          <li>
            <button
              className={styles.downloadButton}
              onClick={() => download(fileURL, filename)}
            >
              Download CV
              <Image src={cvSvg} alt="Download CV" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
