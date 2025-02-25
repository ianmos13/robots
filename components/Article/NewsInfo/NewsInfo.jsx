import React from "react";
import styles from "./NewsInfo.module.scss";

export default function NewsInfo({ date, author }) {
  return (
    <div className={styles.newsInfo}>
      <div className={styles.newsDate}>{date}</div>
      {/*<div className={styles.author}>*/}
      {/*  <span>Автор: </span>*/}
      {/*  {author}*/}
      {/*</div>*/}
    </div>
  );
}
