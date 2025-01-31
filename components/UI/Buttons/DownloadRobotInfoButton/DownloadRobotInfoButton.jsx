import { useState } from "react";
import styles from "./DownloadRobotInfoButton.module.scss";

export default function DownloadRobotInfoButton({ defaultText, activeText, defaultIcon, activeIcon, url }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.btnDownload} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      <img src={isActive ? activeIcon : defaultIcon} alt="icon" className={styles.icon} />
      <span className={styles.buttonText}>{isActive ? activeText : defaultText}</span>
    </div>
  );
}
