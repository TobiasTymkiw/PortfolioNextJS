"use client";
import cvSvg from "../../assets/AboutMe/file-download-line.svg";
import styles from "./AboutMe.module.scss";
import Image from "next/image";
import Portrait from "../../assets/AboutMe/HomeProfile.jpg";
import useDownloader from "react-use-downloader";

export default function AboutMe() {
  const { download } = useDownloader();
  const fileURL = "/CV-TobiasTymkiw.pdf";
  const filename = "CV-TobiasTymkiw.pdf";

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
                  <p>19+ Projects</p>
                </div>
                <div className={styles.box}>
                  <h3>Experience</h3>
                  <p>2.4 years Working</p>
                </div>

                <div className={`${styles.box} ${styles.box3}`}>
                  <h3>Support</h3>
                  <p>Online 24/7</p>
                </div>
              </div>
              <span>
                <p className={styles.aboutText}>
                  I am a very creative and curious person who enjoys taking
                  things apart and figuring out how they work. Currently, I work
                  as a Full Stack Developer and have experience working on web
                  projects that can be scaled up for team collaboration. I
                  consider myself a committed person, eager to learn, constantly
                  pushing my limits, being optimistic and perseverant. I am in
                  search of new challenges to obtain valuable solutions.
                </p>

                <button onClick={() => download(fileURL, filename)}>
                  Download CV <Image src={cvSvg} alt="Download CV" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
  );
}
