import React from "react";
import styles from "./BackButton.module.scss";

export default function BackButton({ onBack, title }) {
  return (
    <div className={styles.buttonContainer} onClick={onBack}>
      <img src="/images/icons/back-arrow.svg" alt="" />
        <span className={styles.titleLarge}>{title?.large}</span>
        <span className={styles.titleMedium}>{title?.small}</span>
    </div>
  );
}
