import styles from "./Skills.module.scss";
import Medal from "../../assets/Skills/medal-line.svg";
import Image from "next/image";
export default function Skills() {
  return (
    <section id="skillsSection" className={styles.Skills}>
      <div className={styles.container}>
        <h2>Skills</h2>
        <p>My technical level</p>
        <div className={styles.infoContainer}>
          {/* FirstBox */}
          <div className={styles.box}>
            <h3>Front-End Development</h3>
            <div className={styles.groupSeparation}>
              <div className={styles.skillsGroup}>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>React</h3>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
              <div className={styles.skillsGroup}>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>Sass</h3>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>Git</h3>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>Figma</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>NextJS</h3>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SecondBox */}
          <div className={styles.box}>
            <h3>Back-End Development</h3>
            <div className={styles.groupSeparation}>
              <div className={styles.skillsGroup}>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>Node JS</h3>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>Nginx</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>Prisma</h3>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
              <div className={styles.skillsGroup}>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>FireBase</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>Postman</h3>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>Linux/Ubuntu</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className={styles.skillsData}>
                  <Image src={Medal} alt="Medal-Icon" />
                  <div>
                    <h3>DNS/Domains</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
                {/* <div className={styles.skillsData}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3>Next Tech</h3>
                      <p>Advanced</p>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
