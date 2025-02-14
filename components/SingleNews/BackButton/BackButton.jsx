import React from "react";
import styles from "./BackButton.module.scss";

export default function BackButton({ onBack }) {
  return (
    <div className={styles.buttonContainer} onClick={onBack}>
      <img src="/images/icons/back-arrow.svg" alt="" />
        <span className={styles.titleLarge}>Вернуться&nbsp;к&nbsp;новостям</span>
        <span className={styles.titleMedium}>К&nbsp;новостям</span>
    </div>
  );
}
