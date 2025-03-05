'use client'

import Slider from '@/components/UI/Slider/Slider'
import SwitchButtons from '@/components/UI/Buttons/SwitchButtons/SwitchButtons'
import useCategories from '@/hooks/useCategories'
import useProducts from '@/hooks/useProducts'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState, useMemo } from 'react'
import PdfButton from '../Buttons/PdfButton/PdfButton'
import CategoryTags from '../CategoryTags/CategoryTags'
import TitleWithSeparator from '../TitleWithSeparator/TitleWithSeparator'
import styles from './ProductCategoryGridSlider.module.scss'
import { makeAllCategories } from "@/utils/makeAllCategories";

export default function ProductCategoryGridSlider() {
	const swiperRef = useRef()
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [isHoveredCard, setIsHoveredCard] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [activeButton, setActiveButton] = useState(null)
	const { categories } = useCategories()
	const { products } = useProducts()
	const router = useRouter()

	// Ensure categories are memoized to avoid re-calculations
	const allCategories = useMemo(() => makeAllCategories(categories?.pozitsionery), [categories]);

	// Filter categories and modify the 'all' category key
	const filteredCategories = useMemo(() => allCategories.map(category => {
		if (category.key === 'all') {
			return { ...category, key: '2', slug: 'pozicionery' };
		}
		return category;
	}), [allCategories]);

	// Filter products based on the selected category
	const filteredRobots = useMemo(() => {
		return selectedCategory === 'all'
			? products
			: products.filter(robot => robot.category === selectedCategory);
	}, [products, selectedCategory]);

	// Reset currentIndex when selectedCategory changes
	useEffect(() => {
		setCurrentIndex(0);
	}, [selectedCategory]);

	// Check if we are in the browser environment
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true); // this will run only in the browser
	}, []);


	if (!isClient) return null;


	const hoverCard = (value) => {
		setIsHoveredCard(value);
	}


	const handleNext = () => {
		swiperRef.current?.slideNext();
		setActiveButton('next');
		setTimeout(() => setActiveButton(''), 300);
	}


	const handlePrev = () => {
		swiperRef.current?.slidePrev();
		setActiveButton('prev');
		setTimeout(() => setActiveButton(''), 300);
	}


	const handleShowAll = () => {
		router.push("/pozicionery");
	}


	if (products.length > 0) {
		return (
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
						categories={filteredCategories}
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
						categories={filteredCategories} 
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
		);
	}

	
}
