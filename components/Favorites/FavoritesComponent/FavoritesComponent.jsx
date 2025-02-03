'use client'
import DeleteAllButton from '@/components/UI/Buttons/DeleteAllButton/DeleteAllButton'
import CategoryTags from '@/components/UI/CategoryTags/CategoryTags'
import ProductCard from '@/components/UI/ProductCard/ProductCard'
import useDeviceType from '@/hooks/useDeviceType'
import categories from '@/public/data/products-catgories.json'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './FavoritesComponent.module.scss'

export default function FavoritesComponent() {
	const favorites = useSelector(state => state.favorite)
	const [selectedCategory, setSelectedCategory] = React.useState('all')
	const [currentIndex, setCurrentIndex] = React.useState(0)
	const [activeButton, setActiveButton] = React.useState('')
	const { isTabletView, isMobileView } = useDeviceType()

	const allCategories = [{ key: 'all', name: 'Все роботы' }, ...categories]
	const filteredRobots =
		selectedCategory === 'all'
			? favorites
			: favorites.filter(robot => robot.category === selectedCategory)

	const getTranslateXValue = () => {
		if (isMobileView) return 100
		if (isTabletView) return 49
		return 24.7
	}
	const totalFiltered = filteredRobots.length
	const maxIndex = Math.max(totalFiltered - 4, 0)

	React.useEffect(() => {
		setCurrentIndex(0)
	}, [selectedCategory])

	const handleNext = () => {
		setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
		setActiveButton('next')
		setTimeout(() => setActiveButton(''), 300)
	}

	const handlePrev = () => {
		setCurrentIndex(prev => Math.max(prev - 1, 0))
		setActiveButton('prev')
		setTimeout(() => setActiveButton(''), 300)
	}

	return (
		<section className={styles.container}>
			<div className={styles.topContainer}>
				<div className={styles.headerContainer}>
					<h1 className={styles.headerText}>ИЗБРАННЫЕ</h1>
					<div className={styles.deleteContainer}>
						<DeleteAllButton />
					</div>
				</div>
				<div className={styles.controllers}>
					<div className={styles.tagsContainer}>
						<CategoryTags
							categories={allCategories}
							selectedCategory={selectedCategory}
							onSelectCategory={setSelectedCategory}
						/>
					</div>
					<div className={styles.buttonsWrapper}>
						{/* {totalFiltered > 4 && ( */}
							<div className={styles.buttonsContainer}>
								<button
									className={`${styles.prevButton} ${styles.navButton} ${
										activeButton === 'prev' ? styles.active : ''
									}`}
									onClick={handlePrev}
								>
									<img
										src={
											activeButton === 'prev'
												? '/images/icons/active-prev.svg'
												: '/images/icons/prev.svg'
										}
										alt='Previous'
									/>
								</button>
								<button
									className={`${styles.nextButton} ${styles.navButton} ${
										activeButton === 'next' ? styles.active : ''
									}`}
									onClick={handleNext}
								>
									<img
										src={
											activeButton === 'next'
												? '/images/icons/active-next.svg'
												: '/images/icons/next.svg'
										}
										alt='Next'
									/>
								</button>
							</div>
						{/* )} */}
					</div>
				</div>
				<div className={styles.deleteContainer}>
					<DeleteAllButton />
				</div>
			</div>
			<div className={styles.sliderContainer}>
				<div
					className={styles.slider}
					style={{
						transform: `translateX(-${currentIndex * getTranslateXValue()}%)`,
					}}
				>
					{filteredRobots.map(robot => (
						<ProductCard key={robot.id} robot={robot} />
					))}
				</div>
			</div>
		</section>
	)
}
