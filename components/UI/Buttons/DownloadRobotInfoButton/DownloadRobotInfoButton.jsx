import { useState } from "react";
import styles from "./DownloadRobotInfoButton.module.scss";

export default function DownloadRobotInfoButton({ text, url }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if(isActive) {
      if (typeof window !== "undefined"){
        window.open(url);
      }
    }
  };

  return (
    <div
      className={`${styles.btnDownload} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      <img
          src={isActive ? "/images/icons/download-white.svg" : "/images/icons/Union.svg"}
          alt="icon"
          className={styles.icon}
      />
      <span className={styles.buttonText}>
        {isActive ? "Скачать" : text}
      </span>
    </div>
  );
}
