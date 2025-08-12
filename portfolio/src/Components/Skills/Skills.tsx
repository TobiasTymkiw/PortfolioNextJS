"use client";
//Imports of the swiper component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "./skills-swiper.scss";

//Other Imports
import styles from "./Skills.module.scss";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import ethereumIcon from "@/assets/Skills/ethereum-eth-logo-diamond-purple.svg";
import ipfsIcon from "@/assets/Skills/ipfs-logo.svg";
import ozIcon from "@/assets/Skills/oz-iso.svg";

//Carrousel configuration
const speed = 5000;
const spaceBetween = 50;
const breakpoints = {
  340: { slidesPerView: 3 },
  550: { slidesPerView: 4 },
  830: { slidesPerView: 5 },
};
export default function Skills() {
  return (
    <section id="skillsSection" className={styles.Skills}>
      <div className={styles.container}>
        <h2>Skills</h2>
        <p>My technical levels</p>
        <div className={styles.infoContainer}>
          <h3>Front-End Development</h3>
          <div className={styles.swiperContainer}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={spaceBetween}
              loop={true}
              speed={speed}
              slidesPerView={4}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              //responsive
              breakpoints={breakpoints}
            >
              {frontEndTechnologies.map((tech) => (
                <SwiperSlide key={tech.name}>
                  <div key={tech.name} className={styles.techItem}>
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      width={44}
                      height={44}
                    />
                    <h4>{tech.name}</h4>
                    <p>{tech.level}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h3>Back-End Development</h3>
          <div className={styles.swiperContainer}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={spaceBetween}
              loop={true}
              speed={speed}
              slidesPerView={4}
              autoplay={{
                reverseDirection: true,
                delay: 0,
                disableOnInteraction: false,
              }}
              //responsive
              breakpoints={breakpoints}
            >
              {backEndTechnologies.map((tech) => (
                <SwiperSlide key={tech.name}>
                  <div key={tech.name} className={styles.techItem}>
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      width={44}
                      height={44}
                    />
                    <h4>{tech.name}</h4>
                    <p>{tech.level}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h3>Web3 Development</h3>
          <div className={styles.swiperContainer}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={spaceBetween}
              loop={true}
              speed={speed}
              slidesPerView={4}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              //responsive
              breakpoints={breakpoints}
            >
              {web3Technologies.map((tech) => (
                <SwiperSlide key={tech.name}>
                  <div key={tech.name} className={styles.techItem}>
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      width={44}
                      height={44}
                    />
                    <h4>{tech.name}</h4>
                    <p>{tech.level}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
//devicon icons
const frontEndTechnologies = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    level: "Intermediate",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    level: "Advanced",
  },
  {
    name: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    level: "Advanced",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    level: "Advanced",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    level: "Beginner",
  },
  {
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    level: "Advanced",
  },
];
const backEndTechnologies = [
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    level: "Advanced",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    level: "Advanced",
  },
  {
    name: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
    level: "Intermediate",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    level: "Advanced",
  },
  {
    name: "FireBase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    level: "Intermediate",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    level: "Advanced",
  },
  {
    name: "Ubuntu Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
    level: "Intermediate",
  },
];

const web3Technologies = [
  {
    name: "Solidity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
    level: "Intermediate",
  },
  {
    name: "Web3.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/web3js/web3js-original.svg",
    level: "Beginner",
  },
  {
    name: "Ethereum",
    icon: ethereumIcon,
    level: "Intermediate",
  },
  {
    name: "IPFS",
    icon: ipfsIcon,
    level: "Beginner",
  },
  {
    name: "OpenZeppelin",
    icon: ozIcon,
    level: "beginner",
  },
  {
    name: "Hardhat",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg",
    level: "Beginner",
  },
];
