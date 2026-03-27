'use client'
import styles from "./Experience.module.scss";
import experiences from "./ExperienceData";
import { experience } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Qualifications() {
  const TABS = [
    { id: "All", label: "All", icon: "ri-list-check" },
    { id: "Work", label: "Work", icon: "ri-briefcase-line" },
    { id: "Education", label: "Education", icon: "ri-graduation-cap-line" },
    { id: "Side project", label: "Projects", icon: "ri-code-s-slash-line" },
  ] as const;

  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("All");

  const present =
    Date().split(" ").splice(1, 3)[0] +
    ". " +
    Date().split(" ").splice(1, 3)[2];

  const renderView = (content: experience) => {
    return (
      <div key={content.title} className={styles.container}>
        <div className={styles.point}></div>
        {/* IF link preview a little image */}
        {content.img && (
          <div className={styles.linkPreview}>
            <Image
              src={content.img}
              alt={content.title}
              width={400}
              height={250}
            />
          </div>
        )}
        <div className={styles.textbox}>
          {content.href ? (
            <Link href={content.href} target="_blank" rel="noreferrer">
              <h2>{content.title}</h2>
            </Link>
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
        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon}></i>
              {tab.label}
              <span className={styles.line}></span>
            </button>
          ))}
        </div>

        <div className={styles.scrollContainer}>
          <div className={styles.timeline}>
            <div className={styles.line}></div>
            {experiences
              .filter((st) => activeTab === "All" || st.type === activeTab)
              .map((st) => renderView(st))}
          </div>
        </div>
      </div>
    </section>
  );
}
