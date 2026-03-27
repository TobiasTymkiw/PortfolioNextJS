"use client";
import styles from "./AboutMe.module.scss";
import Image from "next/image";
import Portrait from "../../assets/AboutMe/HomeProfile.jpg";
import DownloadButton from "../DownloadButton/DownloadButton";

export default function AboutMe() {

  return (
    <section id="aboutSection" className={styles.about}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <p>My introduction</p>
        <div className={styles.aboutMeContainer}>
          <div className={styles.divImg}>
            <Image src={Portrait} alt="Working" />
          </div>
          <div className={styles.aboutInfo}>
            <div className={styles.cardsContainer}>
              <div className={styles.box}>
                <h3>Completed</h3>
                <p>4+ Projects</p>
              </div>
              <div className={styles.box}>
                <h3>Experience</h3>
                <p>3 years Working</p>
              </div>

              <div className={`${styles.box} ${styles.box3}`}>
                <h3>Support</h3>
                <p>Online 24/7</p>
              </div>
            </div>
            <span>
              <div className={styles.textContainer}>
                <p className={styles.aboutText}>
                  I am a very creative and curious person who enjoys taking
                  things apart and figuring out how they work. Currently, I work
                  as a Full Stack Developer and have experience working on web
                  projects that can be scaled up for team collaboration. I
                  consider myself a committed person, eager to learn, constantly
                  pushing my limits, being optimistic and perseverant. I am in
                  search of new challenges to obtain valuable solutions.
                </p>
                <p className={styles.aboutText}>
                  Currently, I am expanding my expertise by diving into
                  Cybersecurity, looking to integrate secure practices into
                  modern web applications. When I&apos;m not coding or configuring
                  servers, you can find me engaged in community projects or
                  exploring new hardware setups.
                </p>
              </div>

              <DownloadButton className={styles.downloadButton} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
