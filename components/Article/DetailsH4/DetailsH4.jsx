import React from "react";
import styles from "./DetailsH4.module.scss";

export default function DetailsH4({ details }) {
  return (
    <div className={styles.h4Container}>
      <h4>{details.title}</h4>
        <div className={styles.h4Content}>
          { details?.points && details?.points?.length > 0 && (
            <ul>
              {details.points?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
          { details?.conclusion && (<div className={styles.conclusion}>{details.conclusion}</div>)}
        </div>
    </div>
  );
}
