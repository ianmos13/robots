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
            src="https://s3-figma-videos-production-sig.figma.com/video/1026790075068458266/TEAM/4ba7/84e0/-dfbe-4c06-beae-4628a16ec18b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ogm5xugfbCPrBA0UUyivD3t6Cxkfeau82x7ttf5ZtTbI1ojBhDq0tH3mPmLD8nQU-jiiuQsn3CIlpxJ4nT5h9~VvBk49i9uVpQYbEY-9S3lyv91PZ6hxoVvFMaHbYR22UT~KNcbSbPHS-KAn9y9~I6uzxUnIJ18euy2ELr8fpHYRzqw4RBxl7IGQaFu5-zyQuuQdS0~mJF19WF0fVJhPA1SjP-YDlPwM9vBRFfQMqEm2pE-Abs5o9rSd~NX2dAeqz~n6gOWDz8XrauUtJDnoKY-5YgwkpcyUNQtutoRm4Ly6z8jVVsOyWttyauwPz~~nvUO3MONtZU6qvPE-HevtSQ__"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
