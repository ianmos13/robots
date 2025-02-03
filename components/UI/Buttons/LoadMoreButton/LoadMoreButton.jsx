import React from "react";
import styles from "./LoadMoreButton.module.scss";

export default function LoadMoreButton({ onClick }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.showMoreBtn} onClick={onClick}>
        <span className={styles.btnText}>Загрузить ещё</span>
        <span className={styles.spinner}></span>
      </button>
    </div>
  );
}
