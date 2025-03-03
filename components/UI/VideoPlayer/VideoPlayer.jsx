'use client'
import { useRef, useState } from 'react'
import styles from './VideoPlayer.module.scss'
import { normalizeUrl } from "@/utils/normalizeUrl";

const VideoPlayer = ({
  videoPath = '/test_video_2.webm',
  previewImage = '/images/preview.svg',
  theme
}) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPreview, setShowPreview] = useState(true)

  const handlePlayPause = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    if (!isPlaying) {
      video.play()
      setIsPlaying(true)
      setShowPreview(false)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const handleVideoClick = () => {
    if (isPlaying) {
      const video = videoRef.current
      if (!video) return
      video.pause()
      setIsPlaying(false)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setShowPreview(true)
  }

  return (
    <div className={`${styles.container} ${styles[`${theme}Container`]} ${isPlaying ? styles.playing : ''}`}>
      <video
        ref={videoRef}
        className={styles.videoPlayer}
        loop
        controls={false}
        onClick={handleVideoClick}
        onEnded={handleEnded}
      >
        <source src={normalizeUrl(videoPath)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div className={styles.overlay} onClick={handlePlayPause}>
          {showPreview && (
            <img
              loading="lazy"
              className={styles.previewImage}
              src={previewImage}
              alt="preview"
            />
          )}
          <img
            className={styles.playIcon}
            src="/images/icons/play.svg"
            alt="play"
          />
        </div>
      )}
    </div>
  )
}

export default VideoPlayer
