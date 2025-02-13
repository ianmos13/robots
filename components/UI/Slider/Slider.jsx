import ProductCard from '@/components/UI/ProductCard/ProductCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Slider.module.scss'

export default function Slider({ type, swiperRef, items }) {
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
					slidesPerView: type === 'grid' ? 4 : 4.05,
					spaceBetween: 20,
				},
				1440: {
					slidesPerView: items.length > 3 ? 4.0 : 3.0,
					spaceBetween: 10,
				},
				1100: {
					slidesPerView: 3.0,
					spaceBetween: 10,
				},
				1025: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				150: {
					slidesPerView: 'auto',
					spaceBetween: 0,
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
