import React from "react";
import styles from "./Substance.module.scss";

export default function Substance({ substance }) {
  return (
    <div className={styles.substance}>
      <div className={styles.title}>Содержание</div>
      <ul>
        {substance.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
