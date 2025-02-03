import React from "react";
import styles from "./BackButton.module.scss";

export default function BackButton({ onBack }) {
  return (
    <div className={styles.leftContainer} onClick={onBack}>
      <img src="/images/icons/back-arrow.svg" alt="" />
      Вернуться к новостям
    </div>
  );
}
