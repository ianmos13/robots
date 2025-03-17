import { useState, useEffect, useRef } from "react";
import styles from "./DownloadRobotInfoButton.module.scss";

export default function DownloadRobotInfoButton({ text, url }) {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      const height = buttonRef.current.offsetHeight;
      setButtonHeight(height);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.open(url);
    }
  };

  const inlineStyle = buttonHeight ? { height: `${buttonHeight}px` } : {};

  return (
    <div
      ref={buttonRef}
      className={`${styles.btnDownload} ${isHovered ? styles.active : ""}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={inlineStyle}>
      <img
        src={
          isHovered
            ? "/images/icons/download-white.svg"
            : "/images/icons/Union.svg"
        }
        alt="icon"
        className={styles.icon}
      />
      <span className={styles.buttonText}>{isHovered ? "Скачать" : text}</span>
    </div>
  );
}
