import styles from "./Experience.module.scss";
import experiences from "./ExperienceData";
import { experience } from "@/types";

export default function Qualifications() {
  const present =
    Date().split(" ").splice(1, 3)[0] +
    ". " +
    Date().split(" ").splice(1, 3)[2];

  const renderView = (content: experience) => {
    return (
      <div key={content.title} className={styles.container}>
        <div className={styles.point}></div>
        <div className={styles.textbox}>
          {content.href ? (
            <a href={content.href} target="_blank" rel="noreferrer">
              <h2>{content.title}</h2>
            </a>
          ) : (
            <h2>{content.title}</h2>
          )}
          {content.description && (
            <p className={styles.text}>{content.description}</p>
          )}
          <h3>{content.time}</h3>
          <p>{content.where}</p>
        </div>
      </div>
    );
  };
  return (
    <section id="experienceSection" className={styles.qualification}>
      <div className={styles.container}>
        <h2>Experiences</h2>
        <p>My personal journey</p>
        <div className={styles.scrollContainer}>
          <div className={styles.timeline}>
            <div className={styles.line}></div>
            {experiences.map((st) => renderView(st))}
          </div>
        </div>
      </div>
    </section>
  );
}
