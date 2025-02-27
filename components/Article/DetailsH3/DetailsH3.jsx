import React from "react";
import styles from "./DetailsH3.module.scss";
import {isValidSubData} from "@/utils/validation";

export default function DetailsH3({ details }) {
  return (
    <div className={styles.h3Container}>
      <h3>{details.title}</h3>
        { details?.description && (
          <div className={styles.h3Content}>
              { details?.points && isValidSubData(details.points) && (
                  <ul>
                      {Array.isArray(details.points) ? (
                          <>
                              { details?.points?.length > 0 && details.points.map((point, index) => (
                                  <li key={index}>{point}</li>
                              ))}
                          </>
                      ) : (
                          <li>{details.points}</li>
                      )}
                  </ul>
              )}
          </div>
        )}
    </div>
  );
}
