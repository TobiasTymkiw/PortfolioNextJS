"use client";
import styles from "./Footer.module.scss";
import LinkedinSVG from "../../assets/Home/linkedin-box-fill.svg";
import GitHubSVG from "../../assets/Home/github-fill.svg";
import cvSvg from "../../assets/AboutMe/file-download-line.svg";
import Image from "next/image";
import Link from "next/dist/client/link";
import useDownloader from "react-use-downloader";

export default function Footer() {
  const presentYear =
  //Date().split(" ").splice(1, 3)[0] // Month
  // + ". " +
  Date().split(" ").splice(1, 3)[2];// Year

  const { download } = useDownloader();
  const fileURL = "/CV-TobiasTymkiw.pdf";
  const filename = "CV-TobiasTymkiw.pdf";
  const navLinks = [
    "About",
    "Skills",
    "Experience",
    /* "Projects", */
  ];

  const linkIcons = [
    {
      ref: "https://www.linkedin.com/in/tobias-tymkiw/",
      img: LinkedinSVG,
    },
    {
      ref: "https://github.com/TobiasTymkiw",
      img: GitHubSVG,
    },
  ];
  const handleClickNav = (scrollToId: string) => {
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  };
  const renderNavLink = (content: string) => {
    const scrollToId = `${content.toLocaleLowerCase()}Section`;

    return (
      <li key={content}>
        <button
          className={styles.button}
          onClick={() => handleClickNav(scrollToId)}
        >
          <>{content}</>
          <div className={styles.line}></div>
        </button>
      </li>
    );
  };
  const renderLinkIcon = (content: (typeof linkIcons)[0]) => {
    return (
      <Link
        className={styles.aLink}
        key={content.ref}
        href={content.ref}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image
          src={content.img}
          alt="Social-Media-Icon"
          className={styles.svgSocial}
        />
      </Link>
    );
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <h2>Tobias Tymkiw</h2>
          <ul className={styles.ulNav}>
            {navLinks.map((link) => renderNavLink(link))}
          </ul>
          <div className={styles.linksIcon}>
            {linkIcons.map((link) => renderLinkIcon(link))}

            <button
              onClick={() => download(fileURL, filename)}
              className={styles.button}
            >
              Download CV
              <Image src={cvSvg} alt="Download - Icon" />
            </button>
          </div>
          <span> All rights reserved. {presentYear}.</span>
        </div>
      </footer>
    </>
  );
}
