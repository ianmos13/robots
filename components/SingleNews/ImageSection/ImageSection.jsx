import React from "react";
import styles from "./ImageSection.module.scss";

export default function ImageSection({ imgSrc }) {
  return (
    <div className={styles.imgContainer}>
      <img src={imgSrc} alt="" />
    </div>
  );
}
