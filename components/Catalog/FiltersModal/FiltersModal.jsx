import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import Filters from '../Filters/Filters'
import styles from './FiltersModal.module.scss'

export default function FiltersModal({
	isOpen,
	onClose,
	selectedFilters,
	onApply,
	maxReach,
	maxPayload,
	applications,
	axes,
	voltages
}) {
	const [tempFilters, setTempFilters] = useState([])

	useEffect(() => {
		if (isOpen) {
			setTempFilters(selectedFilters)
		}
	}, [isOpen, selectedFilters])

	const removeFilter = filter => {
		setTempFilters(prev => prev.filter(item => item !== filter))
	}

	const clearFilters = () => {
		setTempFilters([])
	}

	const handleApply = () => {
		onApply(tempFilters)
	}

	return isOpen ? (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<div className={styles.modalHeader}>
					<h3>Все Фильтры</h3>
					<button className={styles.closeBtn} onClick={onClose}>
						<img src='/images/icons/x.svg' alt='Close' />
					</button>
				</div>

				<div className={styles.modalBody}>
					<Filters
						selectedFilters={tempFilters}
						onChangeFilters={setTempFilters}
						maxReach={maxReach}
						maxPayload={maxPayload}
						applications={applications}
						axes={axes}
						voltages={voltages}
					/>
				</div>

				<div className={styles.modalFooter}>
					<div className={styles.category}>
						{tempFilters.length > 0 ? (
							<>
								<div className={styles.default} onClick={clearFilters}>
									Очистить всё
									<img src='/images/icons/x.svg' alt='Очистить все' />
								</div>
								{tempFilters.map((filter, index) => (
									<div
										key={index}
										className={styles.active}
										onClick={() => removeFilter(filter)}
									>
										{filter}
										<img src='/images/icons/x-blue.svg' alt='Удалить' />
									</div>
								))}
							</>
						) : (
							<div className={styles.default}>Нет активных фильтров</div>
						)}
					</div>
					<Swiper
						className={styles.selectedFilterSwiperContainer}
						direction='horizontal'
						slidesPerView='auto'
						spaceBetween={10}
					>
						{tempFilters.length > 0 ? (
							<>
								<SwiperSlide className={styles.swiperSlide}>
									<div className={styles.default} onClick={clearFilters}>
										Очистить всё
										<img src='/images/icons/x.svg' alt='Очистить все' />
									</div>
								</SwiperSlide>
								{tempFilters.map((filter, index) => (
									<SwiperSlide className={styles.swiperSlide} key={index}>
										<div
											className={styles.active}
											onClick={() => removeFilter(filter)}
										>
											{filter}
											<img src='/images/icons/x-blue.svg' alt='Удалить' />
										</div>
									</SwiperSlide>
								))}
							</>
						) : (
							<SwiperSlide className={styles.swiperSlide}>
								<div className={styles.default}>Нет активных фильтров</div>
							</SwiperSlide>
						)}
					</Swiper>
					<button className={styles.applyButton} onClick={handleApply}>
						Показать
					</button>
				</div>
			</div>
		</div>
	) : null
}
