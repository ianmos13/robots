import ConfirmModal from '@/components/UI/ConfirmModal/ConfirmModal'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './CategoriesFilter.module.scss'

export default function CategoriesFilter({ categories, onDelete }) {
	const [isCategoryModalOpen, setIsCategoryModalOpen] = React.useState(false)
	const [categoryToRemove, setCategoryToRemove] = React.useState(null)
	const [categoryName, setCategoryName] = React.useState('')

	const handleCategoryDeleteClick = (key, name) => {
		setCategoryToRemove(key)
		setCategoryName(name)
		setIsCategoryModalOpen(true)
	}

	const confirmCategoryDelete = () => {
		onDelete(categoryToRemove)
		setIsCategoryModalOpen(false)
		setCategoryToRemove(null)
		setCategoryName('')
	}

	const cancelCategoryDelete = () => {
		setIsCategoryModalOpen(false)
		setCategoryToRemove(null)
		setCategoryName('')
	}

	return (
		<>
			<div className={styles.container}>
				{categories.map(category => (
					<div
						key={category.key}
						className={styles.categoryContainer}
						onClick={() =>
							handleCategoryDeleteClick(category.key, category.name)
						}
					>
						{category.name}
						<img
							className={styles.removeButton}
							src='/images/icons/x.svg'
							alt='remove'
						/>
					</div>
				))}
			</div>
			<Swiper
				className={styles.swiperContainer}
				direction='horizontal'
				slidesPerView='auto'
				spaceBetween={10}
			>
				{categories.map(category => (
					<SwiperSlide key={category.key} className={styles.swiperSlide}>
						<div
							key={category.key}
							className={styles.categoryContainer}
							onClick={() =>
								handleCategoryDeleteClick(category.key, category.name)
							}
						>
							{category.name}
							<img
								className={styles.removeButton}
								src='/images/icons/x.svg'
								alt='remove'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<ConfirmModal
				isOpen={isCategoryModalOpen}
				message={`Вы точно хотите удалить категорию "${categoryName}"?`}
				onConfirm={confirmCategoryDelete}
				onCancel={cancelCategoryDelete}
			/>
		</>
	)
}
