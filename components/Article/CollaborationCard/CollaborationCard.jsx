"use client";
import { useRef } from "react";
import styles from "./CollaborationCard.module.scss";

export default function CollaborationCard() {
  const videoRef = useRef(null);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>ПРИГЛАШАЕМ К СОТРУДНИЧЕСТВУ</h2>
        <p className={styles.description}>
          Упрощаем и ускоряем производственные процессы в самых разных сферах,
          от электроники до пищевой промышленности
        </p>
        <button className={styles.button}>Оставить заявку</button>
      </div>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.videoBackground}
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/test_video_2.webm"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
