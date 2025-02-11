'use client'

import SwitchButtons from '@/components/UI/Buttons/SwitchButtons/SwitchButtons'
import { useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './CompletedProjectsSlider.module.scss'

const projects = [
	{
		title: 'Замена роботов и оптимизация линии упаковки сахара',
		description:
			'Клиенту потребовалась замена вышедших из строя роботов другого производителя и модернизация линии упаковки сахара. Мы демонтировали неисправное оборудование, пересобрали системы управления, устранили предыдущие ошибки и установили два робота CRP-RA18-25. Работа линии восстановлена в рекордные сроки, сэкономив затраты на 10 сотрудников.',
		image: 'images/completed-project-catalog.svg',
		tag: 'Металлоконструкции',
		data: 'Cентябрь 2024',
	},
	{
		title: 'Оптимизация производственного процесса',
		description:
			'Полная модернизация линии автоматизированной упаковки на основе манипуляторов CRP-RH14-10. Внедрение новых алгоритмов снизило потери на 15% и увеличило скорость упаковки на 20%.',
		image: 'images/completed-project-catalog.svg',
		tag: 'Металлоконструкции',
		data: 'Cентябрь 2024',
	},
	{
		title: 'Автоматизация сборочного процесса',
		description:
			'Внедрение автоматизированной сборочной линии с использованием роботов CRP-XYZ12. Увеличение производительности на 25% и снижение ошибок сборки на 5%.',
		image: 'images/completed-project-catalog.svg',
		tag: 'Металлоконструкции',
		data: 'Cентябрь 2024',
	},
	{
		title: 'Интеграция роботов в существующую систему',
		description:
			'Интеграция роботов CRP-ABC34 в существующую производственную линию. Обеспечена совместимость систем и повышение общей эффективности на 18%.',
		image: 'images/completed-project-catalog.svg',
		tag: 'Металлоконструкции',
		data: 'Cентябрь 2024',
	},
	{
		title: 'Оптимизация производственного процесса',
		description:
			'Полная модернизация линии автоматизированной упаковки на основе манипуляторов CRP-RH14-10. Внедрение новых алгоритмов снизило потери на 15% и увеличило скорость упаковки на 20%.',
		image: 'images/completed-project-catalog.svg',
		tag: 'Металлоконструкции',
		data: 'Cентябрь 2024',
	},
]

export default function CompletedProjectsSlider() {
	const swiperRef = useRef()
	const [activeButton, setActiveButton] = useState('')
	const prevRef = useRef(null)
	const nextRef = useRef(null)

	const handlePrevClick = () => {
		swiperRef.current?.slidePrev()
		setActiveButton('prev')
		setTimeout(() => setActiveButton(''), 300)
	}

	const handleNextClick = () => {
		swiperRef.current?.slideNext()
		setActiveButton('next')
		setTimeout(() => setActiveButton(''), 300)
	}

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.header}>
				<h4>Проекты внедрения промышленного робота манипулятора CRP-RH14-10</h4>
				<div className={styles.desktopButtonContainer}>
					<SwitchButtons
						activeButton={activeButton}
						handlePrev={handlePrevClick}
						handleNext={handleNextClick}
					/>
				</div>
			</div>
			<div className={styles.separator}></div>
			<div className={styles.slider}>
				<Swiper
					spaceBetween={20}
					slidesPerView={1.5}
					modules={[Navigation]}
					onBeforeInit={swiper => {
						swiper.params.navigation.prevEl = prevRef.current
						swiper.params.navigation.nextEl = nextRef.current
					}}
					onSwiper={swiper => {
						swiper.navigation.update()
						swiperRef.current = swiper
					}}
					breakpoints={{
						1600: {
							slidesPerView: 1.5,
							spaceBetween: 16,
						},
						1440: {
							slidesPerView: 1.3,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 1.1,
							spaceBetween: 16,
						},
						639: {
							slidesPerView: 1.05,
							spaceBetween: 16,
						},
						600: {
							slidesPerView: 1.5,
							spaceBetween: 10,
						},
						450: {
							slidesPerView: 1.3,
							spaceBetween: 10,
						},
						300: {
							slidesPerView: 1.05,
							spaceBetween: 10,
						},
					}}
				>
					{projects.map((prj, index) => (
						<SwiperSlide key={index} className={styles.swiperSlide}>
							<div className={styles.card}>
								<div className={styles.imageContainer}>
									<img
										src={prj.image}
										alt={prj.title}
										className={styles.image}
									/>
								</div>
								<div className={styles.descriptionContainer}>
									<div className={styles.titleContainer}>
										<div className={styles.data}>{prj.data}</div>
										<div className={styles.tag}>{prj.tag}</div>
										<div className={styles.title}>{prj.title}</div>
									</div>
									<div className={styles.description}>{prj.description}</div>
									<a className={styles.mobileRead} href={`/news`}>
										Читать далее
									</a>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={styles.mobileButtons}>
				<SwitchButtons
					activeButton={activeButton}
					handlePrev={handlePrevClick}
					handleNext={handleNextClick}
				/>
			</div>
		</div>
	)
}
