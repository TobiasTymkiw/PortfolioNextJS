"use client";
import React from "react";
import LinkedinSVG from "../../assets/Home/linkedin-box-fill.svg";
import GitHubSVG from "../../assets/Home/github-fill.svg";
import chatImg from "../../assets/Home/message-2-line.svg";
import portrait from "../../assets/Home/CV Image.jpeg";
import Image from "next/image";
//import portrait2 from "../../assets/Home/HomeProfile.jpg";
import styles from "./Home.module.scss";

export default function Home() {
  const handleClickNav = (scrollToId: string) => {
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
      <section id="homeSection" className={styles.home}>
        <div className={styles.container}>
          <div className={styles.linksIcon}>
            <a
              href="https://www.linkedin.com/in/tobias-tymkiw/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={LinkedinSVG}
                alt="SocialMediaIcon"
                className={styles.svgSocial}
                width={50}
              />
            </a>
            <a
              href="https://github.com/TobiasTymkiw"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={GitHubSVG}
                alt="SocialMediaIcon"
                className={styles.svgSocial}
                width={50}
              />
            </a>
          </div>
          <div className={styles.profileContainer}>
            <div>
              <h1 id="#Home">
                Hello There!!
                <p>🖐</p>
              </h1>
              <h1>
                <span>---</span>I&apos;m Tobias Tymkiw
              </h1>
              <p>
                A Linux / Hardware enthusiast and CS50 student working 
                as Full-Stack Web Developer. <br />
                Based in Chaco, Argentina. I&apos;m
                very passionate and dedicated to my work.
              </p>
              {/* Contact button to that section */}
            </div>
            <button
              className={styles.contactButton}
              onClick={() => handleClickNav("contactSection")}
            >
              Contact Me!
              <Image src={chatImg} alt="Message-Icon" />
            </button>
          </div>
          <div className={styles.divImg}>
            <Image src={portrait} alt="CV-Img" className={styles.imgProfile} />
          </div>
        </div>
      </section>
  );
}
