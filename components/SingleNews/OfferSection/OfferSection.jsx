import React from "react";
import styles from "./OfferSection.module.scss";

export default function OfferSection({ text }) {
  return (
    <div className={styles.takeOfferContainer}>
      <div className={styles.takeOfferText}>{text}</div>
      <button className={styles.ctaButton}>Получить предложение</button>
    </div>
  );
}
