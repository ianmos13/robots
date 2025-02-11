'use client'

import Slider from '@/components/UI/Slider/Slider'
import categories from '@/public/data/products-catgories.json'
import robotsList from '@/public/data/products.json'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import PdfButton from '../Buttons/PdfButton/PdfButton'
import CategoryTags from '../CategoryTags/CategoryTags'
import TitleWithSeparator from '../TitleWithSeparator/TitleWithSeparator'
import styles from './ProductCategoryGridSlider.module.scss'
import SwitchButtons from "@/components/UI/Buttons/SwitchButtons/SwitchButtons";

export default function ProductCategoryGridSlider() {
	const swiperRef = useRef()
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [currentIndex, setCurrentIndex] = useState(0)
	const [activeButton, setActiveButton] = useState(null)
	
	const router = useRouter()
	const allCategories = [{ key: 'all', name: 'Все роботы' }, ...categories]

	const filteredRobots =
		selectedCategory === 'all'
			? robotsList
			: robotsList.filter(robot => robot.category === selectedCategory)

	const totalFiltered = filteredRobots.length

	useEffect(() => {
		setCurrentIndex(0)
	}, [selectedCategory])

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
		router.push('/catalog')
	}
	return (
		<section className={styles.container}>
			<TitleWithSeparator
				theme='indexWithButton'
				title='Категории продукции'
				addButton='Посмотреть все модели'
				onClick={handleShowAll}
			/>

			<div className={styles.tagsContainer}>
				<CategoryTags
					theme="index"
					categories={allCategories}
					selectedCategory={selectedCategory}
					onSelectCategory={setSelectedCategory}
				/>
				<div className={styles.pdfButton}>
					<PdfButton theme="index" pdfName={'pdfName'} />
				</div>
			</div>

			<div className={styles.sliderWrapper}>
				<Slider type="grid" items={filteredRobots} swiperRef={swiperRef} />
			</div>

			{totalFiltered > 4 && (
				<div className={styles.footer}>
					<SwitchButtons
						activeButton={activeButton}
						handlePrev={handlePrev}
						handleNext={handleNext}
					/>
				</div>
			)}
		</section>
	)
}
