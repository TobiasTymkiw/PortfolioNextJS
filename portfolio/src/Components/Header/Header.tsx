"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-scroll";
import DownloadButton from "../DownloadButton/DownloadButton";

export default function Header() {
  const navLinks = [
    "Home",
    "About",
    "Experience",
    "Skills",
    /* "Projects", */
    "Contact",
  ];
  const [selected, setSelected] = useState(false);
  const handleSelect = (selected: boolean) => {
    setSelected(!selected);
  };

  const renderNavLink = (content: string) => {
    const scrollToId = `${content.toLocaleLowerCase()}Section`;

    return (
      <li key={content} className={styles.links}>
        <Link
          onClick={() => handleSelect(selected)}
          activeClass={styles.active}
          className={styles.button}
          to={scrollToId}
          spy={true}
          smooth={true}
          duration={900}
          offset={-10}
        >
          {content}
          <span className={styles.line}></span>
        </Link>
      </li>
    );
  };

  return (
    <header id="header" className={styles.header}>
      <nav className={styles.nav}>
        <button
          onClick={() => handleSelect(selected)}
          className={`${styles.burger} ${selected ? styles.open : ""}`}
          aria-label="Toggle Navigation"
          aria-expanded={selected}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
        <Link
          activeClass={styles.active}
          className={styles.button}
          to="homeSection"
          spy={true}
          smooth={true}
          duration={900}
          offset={-70}
        >
          FullStack Developer
          <span style={{ height: "3px" }}></span>
        </Link>
        <ul className={`${styles.ul} ${selected ? styles.f : ""}`}>
          {navLinks.map((nav) => renderNavLink(nav))}
          <li>
            <DownloadButton className={styles.downloadButton} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
