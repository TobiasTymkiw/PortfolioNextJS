import { experience } from "@/types";
//reverse the array

const experiences: experience[] = [
    {
        title: "Ethereum Developer Pack - Education",
        time: `Apr. 2025 - Jul. 2025`,
        where: "ETH KIPU",
        href: "https://drive.google.com/file/d/1WDY_6725I18DjYP5kBMZX5p5rIpgrjYC/view?usp=drive_link"
    },
    {
        title: "Associate Degree in CyberSecurity - Education",
        time: `Jan. 2025 - Present.`,
        where: "Teclab",
    },
    {
        title: "Octubre Rosa Parade Website - Community project",
        time: `Sep. 2024 - Oct. 2024`,
        where: "Rotaract Resistencia Oeste",
        description:
            "Project carried out for the Rotaract Resistencia Oeste club to address the ticket management challenges for the event.\n● Form with dynamically controlled fields to ensure ticket availability and proper purchase processing.\n● Connected to Google Sheets to store the data submitted through the form.\n● Integrated with Firebase using the Firestore service for storing proof of purchase in image and PDF formats.",
        href: "https://rot-oct-rosa.vercel.app/",
    },
    {
        title: "CyberSecurity Analyst - Education",
        time: `Nov. 2024 - Jan. 2025`,
        where: "CoderHouse ",
        href: "https://drive.google.com/file/d/1w61buKB2FOOkwYAoOOzjatBGU2RehMpP/view?usp=drive_link"
    },
    {
        title: "Self Hosted Server - Side project",
        time: `Jul. 2024 - Aug. 2024`,
        where: "Personal Project",
        description: "● Configure the hardware of an old computer for use as a home server.\n● Manage the storage and organization of personal files on the server.\n● Implement and manage databases for learning practices and projects.\n● Host and test web pages using Nginx as a web server in a controlled environment"
        // description:"1. Ubuntu server\n2. Plex media service\n3. Personal media storage \n4. Databases practise \n5. Nginx test envioremnt\n6. Network Management\n7. Host web Pages",
    },
    {
        title: "SPACEOS Web Application - FullStack Job",
        time: "May. 2023 - Nov. 2024",
        where: "SPACEOS",
        description:
            "● Developed responsive web interfaces in Next.js for admins, employees, and end users, ensuring accessibility and a seamless experience. \n● Implemented secure user authentication with Google Auth, email, and phone verification, integrating Google API services.\n● Managed PostgreSQL databases on VPS servers with Prisma ORM, and optimized media handling via Cloudinary integration. \n● Administered Ubuntu/Linux VPS environments, configuring Nginx, managing domains, and deploying with tools like MobaXterm and PM2, while applying SEO best practices for web indexing.",
        //description:"● Designed and developed dynamic and responsive web interfaces for administrators, employees, and end users, utilizing Next.js to ensure a seamless and accessible user experience. \n● Implement user authentication systems through Google Auth, email validation, and phone verification, integrating Google API services for secure and efficient user management.\n● Configure and manage PostgreSQL databases on VPS servers, leveraging Prisma ORM for modeling and queries, ensuring backend scalability and performance.\n● Optimize multimedia resource upload and storage processes by integrating services such as Cloudinary. \n● Management and maintain VPS servers in Ubuntu/Linux environments, including configuring Nginx for domains and subdomains, and using tools like MobaXterm and PM2 for monitoring, deployment, and production application execution. \n● Apply SEO practices for effective project indexing on the web.",
    },
    {
        title: "Proyment WebPage - FullStack Job",
        time: "Mar. 2023 - Apr. 2023",
        where: "Proyment",
        description:
            "● Designed and developed dynamic, responsive user interfaces for eight websites, implementing interactive contact forms using React.js as the main technology.\n● Integrated contact forms with cloud-based backend services via Firebase, ensuring accurate data capture, secure storage, and real-time synchronization.\n● Optimized website performance by applying React.js best practices, such as reusable components, efficient state management and lazy loading of resources.\n● Performed tests and debugging of web interfaces to ensure functionality, compatibility, and optimal user experience across all devices and browsers.",
        href: "https://drive.google.com/file/d/1GbaZL6XVxDWTq-SI2XUfEZTC2PrjwN0P/view?usp=drive_link"
    },
    {
        title: `Education - Rebirth Project`,
        time: "Jul. 2022 - Aug. 2022",
        description: "● Designed corporate image and led UI/UX development for a pet adoption app, enhancing user engagement and usability.\n● Collaborated in an agile SCRUM team with one-week sprints, presenting progress to the Product Owner and managing tasks via Kanban in Trello and Slack.\n● Developed core features including CRUD operations, authentication, and MercadoPago payment gateway integration for pet donations.\n● Utilized React, Redux, Bootstrap, Node.js, Express, Sequelize, and Git/GitHub for full-stack development.",
        where: "Soy Henry",
        href: "https://frontend-rebirth.vercel.app/",
    },
    {
        title: "Education - Full Stack Web Development BootCamp",
        time: " Oct. 2021 - Aug. 2022",
        where: "Soy Henry",
        href: "https://drive.google.com/file/d/1nccMFRCYISo6W8GA1ePAvPLC4DXXkx0r/view?usp=drive_link"
    },
    {
        title: "Education - Fundamentals of Programming",
        time: "May. 2021 - Jul. 2021",
        where: "Fundación Telefónica",
        href: "https://drive.google.com/file/d/1633NVik6FZ0yNeHdH3XBEkAOdho8Cp11/view?usp=sharing"
    },
];

export default experiences;