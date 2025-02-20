// Quotation.jsx
import React from "react";
import styles from "./Quotation.module.scss";

export default function Quotation({text}) {
  return (
    <div className={styles.quotation}>
      <div className={styles.quotationImage}>
        <img src="/images/icons/quotation.svg" alt="quotation" />
      </div>
      <div className={styles.quotationText}>{text}</div>
    </div>
  );
}
