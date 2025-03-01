'use client'

import Slider from '@/components/UI/Slider/Slider'
import SwitchButtons from '@/components/UI/Buttons/SwitchButtons/SwitchButtons'
import useCategories from '@/hooks/useCategories'
import useProducts from '@/hooks/useProducts'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import PdfButton from '../Buttons/PdfButton/PdfButton'
import CategoryTags from '../CategoryTags/CategoryTags'
import TitleWithSeparator from '../TitleWithSeparator/TitleWithSeparator'
import styles from './ProductCategoryGridSlider.module.scss'
import {makeAllCategories} from "@/utils/makeAllCategories";

export default function ProductCategoryGridSlider() {
	const swiperRef = useRef()
	const [selectedCategory, setSelectedCategory] = useState('all')
	 const [isHoveredCard, setIsHoveredCard] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0)
	const [activeButton, setActiveButton] = useState(null)
	const { categories } = useCategories()
	const { products } = useProducts()
	const router = useRouter()
	const allCategories = makeAllCategories(categories?.pozitsionery)

	const filteredRobots =
		selectedCategory === 'all'
			? products
			: products.filter(robot => robot.category === selectedCategory)


	useEffect(() => {
		setCurrentIndex(0)
	}, [selectedCategory])

	const hoverCard = (value) => {
		setIsHoveredCard(value)
}

	const handleNext = () => {
		swiperRef.current?.slideNext()
		setActiveButton('next')
		setTimeout(() => setActiveButton(''), 300)
	}

	const handlePrev = () => {
		swiperRef.current?.slidePrev()
		setActiveButton('prev')
		setTimeout(() => setActiveButton(''), 300)
	}

	const handleShowAll = () => {
		router.push("/pozicionery")
	}
	if (products.length > 0) return (
		<section className={styles.container}>
			<TitleWithSeparator
				theme='indexWithButton'
				title='Категории позиционеров'
				addButton='Посмотреть все модели'
				onClick={handleShowAll}
			/>

			<div className={styles.tagsContainer}>
				<CategoryTags
					theme='index'
					categories={allCategories}
					selectedCategory={selectedCategory}
					onSelectCategory={setSelectedCategory}
				/>
				<div className={styles.pdfButton}>
					<PdfButton theme='index' pdfName={'pdfName'} />
				</div>
			</div>

			<div className={styles.sliderWrapper}>
				<Slider
					items={filteredRobots}
					swiperRef={swiperRef}
					hoverCard={hoverCard}
				/>
			</div>

			<div
				className={`${styles.footer} ${
					isHoveredCard ? styles.footerInactive : ''
				}`}
			>
				<SwitchButtons
					activeButton={activeButton}
					handlePrev={handlePrev}
					handleNext={handleNext}
				/>
			</div>
			
		</section>
	)
}
