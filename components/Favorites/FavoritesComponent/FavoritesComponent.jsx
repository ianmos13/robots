'use client'
import DeleteAllButton from '@/components/UI/Buttons/DeleteAllButton/DeleteAllButton'
import ConfirmModal from '@/components/UI/ConfirmModal/ConfirmModal'
import { default as categoryList } from '@/public/data/products-catgories.json'
import {
	clearFavorites,
	removeFromFavorite,
} from '@/redux/features/favoriteSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesFilter from '@/components/UI/CategoriesFilter/CategoriesFilter'
import Slider from '@/components/UI/Slider/Slider'
import SwitchButtons from '@/components/UI/Buttons/SwitchButtons/SwitchButtons'
import styles from './FavoritesComponent.module.scss'

export default function FavoritesComponent() {
	const swiperRef = React.useRef(null)
	const dispatch = useDispatch()
	const favorites = useSelector(state => state.favorite)
	const [selectedCategory, setSelectedCategory] = React.useState('all')
	const [currentIndex, setCurrentIndex] = React.useState(0)
	const [activeButton, setActiveButton] = React.useState('')
	const [isConfirmModalOpen, setIsConfirmModalOpen] = React.useState(false)

	const filteredRobots =
		selectedCategory === 'all'
			? favorites
			: favorites.filter(robot => robot.category === selectedCategory)

	React.useEffect(() => {
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

	const handleModalOpen = () => {
		setIsConfirmModalOpen(true)
	}

	const handleFavoritesClearClick = () => {
		dispatch(clearFavorites())
		setIsConfirmModalOpen(false)
	}

	const handleModalClose = () => {
		setIsConfirmModalOpen(false)
	}

	const handleRemoveCategory = categoryKey => {
		favorites.forEach(item => {
			if (item.category === categoryKey) {
				dispatch(removeFromFavorite(item.id))
			}
		})
	}

	const categoryKeys = new Set(favorites.map(item => item.category))
	const uniqueCategories = categoryList.filter(category =>
		categoryKeys.has(category.key)
	)

	return (
		<section className={styles.container}>
			<div className={styles.topContainer}>
				<div className={styles.headerContainer}>
					<h1 className={styles.headerText}>ИЗБРАННЫЕ</h1>
					<div className={styles.headerDeleteContainer}>
						<DeleteAllButton onClick={handleModalOpen} />
					</div>
				</div>
				<div className={styles.controllers}>
					<CategoriesFilter
						categories={uniqueCategories}
						onDelete={handleRemoveCategory}
					/>
					<div className={styles.buttonsWrapper}>
						{favorites.length > 4 && (
							<SwitchButtons
								activeButton={activeButton}
								handleNext={handleNext}
								handlePrev={handlePrev}
							/>
						)}
					</div>
				</div>
				<div className={styles.deleteContainer}>
					<DeleteAllButton onClick={handleModalOpen} />
				</div>
			</div>
			<Slider swiperRef={swiperRef} items={filteredRobots} />
			<ConfirmModal
				isOpen={isConfirmModalOpen}
				message='ВЫ действительно хотите удалить товары?'
				onConfirm={handleFavoritesClearClick}
				onCancel={handleModalClose}
			/>
		</section>
	)
}
