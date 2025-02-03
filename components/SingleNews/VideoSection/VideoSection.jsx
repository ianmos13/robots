import React from "react";
import styles from "./VideoSection.module.scss";

export default function VideoSection() {
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
          src="https://s3-figma-videos-production-sig.figma.com/video/1026790075068458266/TEAM/a4c9/e0ac/-db43-44cb-830e-b496539a502f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CgEKEhmBp2SPn~~6TcEMXpq0QsIqKA6R2-eL0vUiUsnGhstStv2Wwg-4Py1BZv~WjakwVJJwF4CFnkTj8NEKvHjaTzuGSORCPZ9c6s7XWCHDAf6Q9ys7bgbh0Ga1vnNvVX2xQkGjJsCm5aqfvFiT0HySkEfBWs5xy3j~Mmf1NTKa2JHxIZohXlEi8MXmeDNrjj6fVAF2L7gtBPtPZ4nfV-JNXz~R0Y9~Tqu6Dno8SUdU~bALR2If7Bw7rp7xlFKhVFzHaBdfQASL5hB2taJN-0GTAJRkJV0fZeL9DpTtWz5jrAgXzOMQGXvabijv5f~7rujnaIGHNioHl6OAQJvZAA__"
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
