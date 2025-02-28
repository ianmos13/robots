import React from "react";
import styles from "./Substance.module.scss";

export default function Substance({ substance }) {
  return (
    <div className={styles.substance}>
      <div className={styles.title}>Содержание</div>
      {Array.isArray(substance) ? (
        <ul>
            { substance.map((item, index) => (
              <li className={styles.substanceItem} key={index}>{item}</li>
            ))}
        </ul>
      ) : (
          <div className={styles.substanceItem}>{substance}</div>
      )}
    </div>
  );
}
