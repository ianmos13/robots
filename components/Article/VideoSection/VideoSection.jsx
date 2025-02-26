import React from "react";
import styles from "./VideoSection.module.scss";
import VideoPlayer from "@/components/UI/VideoPlayer/VideoPlayer";

export default function VideoSection({src}) {
  return (
    <div className={styles.videoWrapper}>
      <VideoPlayer videoPath={src}/>
    </div>
  );
}
