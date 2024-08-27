import styles from "./Experience.module.scss";

export default function Qualifications() {
  const present =
    Date().split(" ").splice(1, 3)[0] +
    ". " +
    Date().split(" ").splice(1, 3)[2];

  interface researches {
    title: string;
    time: string;
    where: string;
    description?: string;
    position: string;
    href?: string;
  }

  const studies: researches[] = [
    {
      title: "Fundamentals of Programming",
      time: "May. 2021 - Jul. 2021",
      where: "Fundación Telefónica",
      position: "left",
    },
    {
      title: "Full Stack Web Development BootCamp",
      time: " Oct. 2021 - Aug. 2022",
      where: "Soy Henry",
      position: "right",
    },
    {
      title: `Rebirth Academic Project`,
      time: "Jul. 2022 - Aug. 2022",
      where: "Soy Henry",
      position: "left",
    },
    {
      title: "Proyment WebPage - Work Experience",
      time: "Mar. 2023 - Apr. 2023",
      where: "Proyment",
      position: "right",
      href: "https://proyment.com",
    },
    {
      title: "SPACEOS WebPage - Work Experience",
      time: `May. 2023 - Sep. 2023`, //////////////////////PRESENT
      where: "SPACEOS",
      position: "left",
      href: "https://www.spaceos.com.pe",
    },
    {
      title: "Redesign of their website and made integrations",
      time: `Aug. 2023 - Oct. 2023 `,
      where: "Proyment",
      position: "right",
      href: "https://proyment.com",
    },
    {
      title: "SPACEOS Web Application - Work Experience",
      time: "Dec. 2023 - May. 2024",
      where: "SPACEOS",
      position: "left",
      description:
        "1. Dashboard (Admin, Employees, Users).\n2. User authentication using Google Auth or emails through Next Auth.\n3. Information upload process for real state properties.\n4. Image upload, storage and management.\n5. Back-end with prisma as ORM and PostgreSQL DataBase on a VPS",
      href: "https://www.spaceos.com.pe",
    },
    {
      title: "SPACEOS Extension - Work Experience",
      time: `May. 2024 - Jul. 2024`,
      where: "SPACEOS",
      description:
        "1. Two new Landings with a form\n2. File upload and management\n3. Google Nearby API Integration\n4. Maintenance on a VPS \n5. Nginx configuration to domains and subdomains\n6. PM2 for Nodejs projects",
      position: "right",
      href: "https://www.spaceos.com.pe",
    },
    {
      title: "Self Hosted Server - Side project",
      time: `Jul. 2024 - ${present}`,
      where: "Personal Project",
      description:
        "1. Ubuntu server\n2. Plex media service\n3. Personal media storage \n4. Databases practise \n5. Nginx test envioremnt\n6. Network Management\n7. Host web Pages",
      position: "left",
    },
    /*     {
      title: "Something7",
      time: "2021 - 2022",
      where: "soyHenry",
      position: "left",
    },
    {
      title: "Something8",
      time: "2021 - 2022",
      where: "soyHenry",
      position: "right",
    },
    {
      title: "Something9",
      time: "2021 - 2022",
      where: "soyHenry",
      position: "left",
    }, */
  ];
  const renderView = (content: (typeof studies)[0]) => {
    return (
      <div
        key={content.title}
        className={`${styles.container} ${styles[`${content.position}`]}`}
      >
        <div
          className={`${styles.point} ${styles[`p${content.position}`]}`}
        ></div>
        <div className={styles.textbox}>
          {content.href ? (
            <a href={content.href} target="_blank" rel="noreferrer">
              <h2>{content.title}</h2>
            </a>
          ) : (
            <h2>{content.title}</h2>
          )}
          {content.description && (
            <p className={styles.expandible}>{content.description}</p>
          )}
          <small>{content.time}</small>
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
        <div className={styles.timeline}>
          <div className={styles.line}></div>
          {studies.map((st) => renderView(st))}
        </div>
      </div>
    </section>
  );
}
