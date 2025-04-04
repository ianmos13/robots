import ProductCard from '@/components/UI/ProductCard/ProductCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Slider.module.scss'

export default function Slider({ swiperRef, items, categories, hoverCard, onChangeSlider = () => {} }) {
	return (
		<Swiper
			onSwiper={swiper => (swiperRef.current = swiper)}
			onRealIndexChange={onChangeSlider}
			className={styles.swiperContainer}
			direction='horizontal'
			slidesPerView={'auto'}
			modules={[Navigation]}
			breakpoints={{
				1601: {
					spaceBetween: 20,
				},
				1025: {
					spaceBetween: 10,
				},
				150: {
					spaceBetween: 0,
				},
			}}
		>
			{items.map((robot, index) => (
				<SwiperSlide key={index} className={styles.swiperSlide}>
					<ProductCard key={robot.id} categories={categories} robot={robot} hoverCard={hoverCard}/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
