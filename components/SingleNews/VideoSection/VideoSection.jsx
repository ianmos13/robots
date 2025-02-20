import React from "react";
import styles from "./VideoSection.module.scss";

export default function VideoSection({src}) {
  return (
    <div className={styles.videoWrapper}>
      <video
        autoPlay
        muted
        loop
        controls={false}
        style={{ width: "100%", height: "100%" }}
      >
        <source
          src={src}
          type="video/mp4"
        />
      </video>
      {/*
      <div className={styles.playIcon}>
        <img src="/images/icons/play.svg" alt="play" />
      </div>
      */}
    </div>
  );
}
