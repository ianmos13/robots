import React from "react";
import styles from "./Banner.module.scss";

export default function Banner({ videoUrl }) {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.tag}>Промышленные роботы</div>
        <div className={styles.title}>
          Повышение эффективности и точности: Роль роботов в промышленной автоматизации
        </div>
      </div>
      <div className={styles.videoContainer}>
          <video
            className={styles.videoBackground}
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
          />
      </div>
    </div>
  );
}
