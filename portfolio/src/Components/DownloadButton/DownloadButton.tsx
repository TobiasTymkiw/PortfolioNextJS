"use client";
import React from "react";
import Image from "next/image";
import useDownloader from "react-use-downloader";
import cvSvg from "../../assets/AboutMe/file-download-line.svg";
import styles from "./DownloadButton.module.scss";

interface DownloadButtonProps {
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ className }) => {
  const { download } = useDownloader();
  const fileURL = "/CV-TobiasTymkiw.pdf";
  const filename = "CV-TobiasTymkiw.pdf";

  return (
    <button
      className={`${styles.button} ${className || ""}`}
      onClick={() => download(fileURL, filename)}
    >
      Download CV
      <Image src={cvSvg} alt="Download CV" />
    </button>
  );
};

export default DownloadButton;
