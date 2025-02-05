import ProductCard from '@/components/UI/ProductCard/ProductCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Slider.module.scss'

export default function Slider({ swiperRef, items }) {
	return (
		<Swiper
			onSwiper={swiper => (swiperRef.current = swiper)}
			className={styles.swiperContainer}
			direction='horizontal'
			slidesPerView={4}
			slidesPerGroup={1}
			modules={[Navigation]}
			breakpoints={{
				1720: {
					slidesPerView: 4.05,
					spaceBetween: 20,
				},
				1440: {
					slidesPerView: 4.0,
					spaceBetween: 10,
				},
				1200: {
					slidesPerView: 4.0,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				915: {
					slidesPerView: 1.85,
					spaceBetween: 10,
				},
				640: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				},
				450: {
					slidesPerView: 1.05,
					spaceBetween: 10,
				},
				150: {
					slidesPerView: 1.05,
					spaceBetween: 10,
				},
			}}
		>
			{items.map((robot, index) => (
				<SwiperSlide key={index} className={styles.swiperSlide}>
					<ProductCard key={robot.id} robot={robot} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
