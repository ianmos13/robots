import React from "react";
import styles from "./LoadMoreButton.module.scss";

export default function LoadMoreButton({ onClick, theme }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.showMoreBtn} ${styles[`${theme}Theme`]}`} onClick={onClick}>
        <span className={styles.btnText}>Загрузить ещё</span>
        <span className={styles.spinner}></span>
      </button>
    </div>
  );
}
