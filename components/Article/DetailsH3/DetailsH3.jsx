import React from "react";
import styles from "./DetailsH3.module.scss";

export default function DetailsH3({ details }) {
  return (
    <div className={styles.h3Container}>
      <h3>{details.title}</h3>
      <div className={styles.h3Content}>
        {details.description}
        <ul>
          {details.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
