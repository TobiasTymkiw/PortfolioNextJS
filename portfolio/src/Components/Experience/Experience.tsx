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
    href?: string;
  }

  const studies: researches[] = [
    {
      title: "Academic - Fundamentals of Programming",
      time: "May. 2021 - Jul. 2021",
      where: "Fundación Telefónica",
    },
    {
      title: "Academic - Full Stack Web Development BootCamp",
      time: " Oct. 2021 - Aug. 2022",
      where: "Soy Henry",
    },
    {
      title: `Academic - Rebirth Project`,
      time: "Jul. 2022 - Aug. 2022",
      where: "Soy Henry",

      href: "https://frontend-rebirth.vercel.app/",
    },
    {
      title: "Proyment WebPage - Job",
      time: "Mar. 2023 - Apr. 2023",
      where: "Proyment",

      description:
        "● Designed and developed dynamic, responsive user interfaces for eight websites, implementing interactive contact forms using React.js as the main technology.\n● Integrated contact forms with cloud-based backend services via Firebase, ensuring accurate data capture, secure storage, and real-time synchronization.\n● Optimized website performance by applying React.js best practices, such as reusable components, efficient state management and lazy loading of resources.\n● Performed tests and debugging of web interfaces to ensure functionality, compatibility, and optimal user experience across all devices and browsers.",
      /* href: "https://proyment.com", */
    },
    {
      title: "SPACEOS Web Application - Job",
      time: "May. 2023 - Nov. 2024",
      where: "SPACEOS",
      description:"● Designed and developed dynamic and responsive web interfaces for administrators, employees, and end users, utilizing Next.js to ensure a seamless and accessible user experience. \n● Implement user authentication systems through Google Auth, email validation, and phone verification, integrating Google API services for secure and efficient user management.\n● Configure and manage PostgreSQL databases on VPS servers, leveraging Prisma ORM for modeling and queries, ensuring backend scalability and performance.\n● Optimize multimedia resource upload and storage processes by integrating services such as Cloudinary. \n● Management and maintain VPS servers in Ubuntu/Linux environments, including configuring Nginx for domains and subdomains, and using tools like MobaXterm and PM2 for monitoring, deployment, and production application execution. \n● Apply SEO practices for effective project indexing on the web.",
     /*  description:
        "1. Dashboard (Admin, Employees, Users).\n2. User authentication using Google Auth or emails through Next Auth.\n3. Information upload process for real state properties.\n4. Image upload, storage and management.\n5. Back-end with prisma as ORM and PostgreSQL DataBase on a VPS", */
      href: "https://www.spaceos.com.pe",
    },
    {
      title: "Self Hosted Server - Side project",
      time: `Jul. 2024 - Aug. 2024`,
      where: "Personal Project",
      description:
        "1. Ubuntu server\n2. Plex media service\n3. Personal media storage \n4. Databases practise \n5. Nginx test envioremnt\n6. Network Management\n7. Host web Pages",
    },
    { title: "Octubre Rosa Parade Website - Side project",
      time: `Sep. 2024 - Oct. 2024`,
      where: "Rotaract Resistencia Oeste",
      description:"Project carried out for the Rotaract Resistencia Oeste club to address the ticket management challenges for the event.\n📍Form with dynamically controlled fields to ensure ticket availability and proper purchase processing.\n📍Connected to Google Sheets to store the data submitted through the form.\n📍Integrated with Firebase using the Firestore service for storing proof of purchase in image and PDF formats.",
      href:"https://rot-oct-rosa.vercel.app/"
    }
  ];
  const renderView = (content: (typeof studies)[0]) => {
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
