import styles from "./Skills.module.scss";
import Medal from "../../assets/Skills/medal-line.svg";
import Image from "next/image";
export default function Skills() {
  return (
    <>
      <section id="skillsSection" className={styles.Skills}>
        <div className={styles.container}>
          <h2>Skills</h2>
          <p>My technical level</p>
          <div className={styles.infocontainer}>
            <div className={styles.box}>
              <h3>Front-End Development</h3>
              <div className={styles.groupseparation}>
                <div className={styles.skillsgroup}>
                  <div className={styles.skillsdata}>
                     <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>HTML</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>TypeScript</h3>
                      <p>Beginner</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>React</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>JavaScript</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                </div>
                <div className={styles.skillsgroup}>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>Sass</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>Git</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>Figma</h3>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>NextJS</h3>
                      <p>Intermediate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SecondBox */}
            <div className={styles.box}>
              <h3>Back-End Development</h3>
              <div className={styles.groupseparation}>
                <div className={styles.skillsgroup}>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>Node JS</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>PostgreSQL</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>Express</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>Sequelize</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                </div>
                <div className={styles.skillsgroup}>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>FireBase</h3>
                      <p>Beginner</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>Postman</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>Python</h3>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  {/* <div className={styles.skillsdata}>
                    <Image src={Medal} alt="Medal-Icon" />
                    <div>
                      <h3 className={styles.skillsname}>Next Tech</h3>
                      <p>Advanced</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
