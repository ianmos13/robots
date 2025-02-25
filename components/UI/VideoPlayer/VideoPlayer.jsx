'use client'
import { useRef, useState } from 'react'
import styles from './VideoPlayer.module.scss'

const VideoPlayer = ({ videoPath = '/test_video_2.webm' }) => {
	const videoRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)

	const handlePlayPause = () => {
		const video = videoRef.current
		if (!video) return
		if (isPlaying) {
			video.pause()
		} else {
			video.play()
		}
		setIsPlaying(!isPlaying)
	}

	return (
		<div className={styles.container}>
			<video
				ref={videoRef}
				controls={false}
				className={styles.videoPlayer}
				loop={true}
			>
				<source src={videoPath} type='video/mp4' />
				Your browser does not support the video tag.
			</video>
			<div className={styles.buttonContainer}>
				<button className={styles.playButton} onClick={handlePlayPause}>
					<img src='/images/icons/play.svg' alt='play' />
				</button>
			</div>
		</div>
	)
}

export default VideoPlayer
