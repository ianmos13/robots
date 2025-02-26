import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './ImageSlider.module.scss'

export default function ImageSlider({ images, isOpen, onClose }) {
	const [isHovered, setIsHovered] = React.useState(false)

	const swiperRef = React.useRef(null)
	if (!isOpen) return null

	const handleNext = () => {
		swiperRef.current?.slideNext()
	}
	const handlePrev = () => {
		swiperRef.current?.slidePrev()
	}
	return (
		<>
			<div className={styles.container}>
				<div className={styles.closeButton}>
					<button
						onClick={() => {
							onClose()
						}}
					>
						<img src='/images/icons/x.svg' alt='Close' />
					</button>
				</div>
				<div
					onMouseEnter={() => {
						setIsHovered(true)
					}}
					onMouseLeave={() => {
						setIsHovered(false)
					}}
				>
					<Swiper
						onSwiper={swiper => (swiperRef.current = swiper)}
						className={`${styles.swiperContainer} ${
							isHovered && styles.hovered
						}`}
						direction='horizontal'
						slidesPerView={'auto'}
						modules={[Navigation, Pagination]}
						pagination={{ clickable: true }}
					>
						<button
							className={`${styles.leftButton} ${isHovered && styles.active}`}
							onClick={handlePrev}
						></button>
						<button
							className={`${styles.rightButton} ${isHovered && styles.active}`}
							onClick={handleNext}
						></button>

						{images.map((image, index) => (
							<SwiperSlide key={index} className={styles.swiperSlide}>
								<img src={image} alt='Роботы' />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	)
}
