'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import DeleteAllButton from '@/components/UI/Buttons/DeleteAllButton/DeleteAllButton'
import ConfirmModal from '@/components/UI/ConfirmModal/ConfirmModal'
import { clearFavorites, removeFromFavorite } from '@/redux/features/favoriteSlice'
import CategoriesFilter from '@/components/UI/CategoriesFilter/CategoriesFilter'
import SwitchButtons from '@/components/UI/Buttons/SwitchButtons/SwitchButtons'
import styles from './FavoritesComponent.module.scss'
import useDeviceType from '@/hooks/useDeviceType'
import useCategories from '@/hooks/useCategories'

// Динамический импорт Slider с отключённым SSR
const Slider = dynamic(() => import('@/components/UI/Slider/Slider'), { ssr: false })

function FavoritesComponentContent() {
  const { isTabletView } = useDeviceType()
  const swiperRef = React.useRef(null)
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorite)
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [activeButton, setActiveButton] = React.useState('')
  const [isConfirmModalOpen, setIsConfirmModalOpen] = React.useState(false)
  const { categories, error, loading } = useCategories()

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

  const handleRemoveCategory = (categoryKey) => {
    favorites.forEach(item => {
      if (item.category === categoryKey) {
        dispatch(removeFromFavorite(item.id))
      }
    })
  }

  const categoryKeys = new Set(favorites.map(item => item.category))
  const uniqueCategories = categories.filter(category =>
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
            <SwitchButtons
              activeButton={activeButton}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </div>
        </div>
        <div className={styles.deleteContainer}>
          <DeleteAllButton onClick={handleModalOpen} />
        </div>
      </div>
      {filteredRobots.length === 0 ? (
        <div className={styles.emptyState}>
          <p>В избранном пока ничего нет</p>
        </div>
      ) : (
        <Slider swiperRef={swiperRef} items={filteredRobots} />
      )}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        message="ВЫ действительно хотите удалить товары?"
        onConfirm={handleFavoritesClearClick}
        onCancel={handleModalClose}
      />
    </section>
  )
}

export default function FavoritesComponent() {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <FavoritesComponentContent />
}
