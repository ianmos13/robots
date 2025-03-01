'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './ProductCard.module.scss'

import CompareButton from '@/components/UI/CompareButton/CompareButton'
import FavoriteButton from '@/components/UI/FavoriteButton/FavoriteButton'
import useDeviceType from '../../../hooks/useDeviceType'
import useCategories from '@/hooks/useCategories'


export default function ProductCard({ robot, theme, hoverCard = () => {} }) {
  const router = useRouter()
  const { isMobileView } = useDeviceType()
  const [isHovered, setIsHovered] = useState(false)
  const { categories } = useCategories(true)

  const onHover = () => {
    hoverCard(true)
    setIsHovered(true)
  }


  const onLeave = () => {
    hoverCard(false)
    setIsHovered(false)
  }

  const hoverImage = robot?.images && robot.images.length > 1 ? robot.images[1] : robot?.hoverImage
  const currentCategoryObj = categories.find(
    (category) => category.key === robot.category
  )

  let productUrl = ''
  if (currentCategoryObj) {

    if (currentCategoryObj.parent) {
      const parentCategoryObj = categories.find(
        (category) => category.key === currentCategoryObj.parent
      )
      if (parentCategoryObj) {
        productUrl = `/${parentCategoryObj.slug}/${currentCategoryObj.slug}/${robot.slug}`
      } else {
        productUrl = `/${currentCategoryObj.slug}/${robot.slug}`
      }
    } else {
      productUrl = `/${currentCategoryObj.slug}/${robot.slug}`
    }
  } else {

    productUrl = `/${robot.slug}`
  }

  return (
    <div
      className={`${styles.card} ${styles[`${theme}Card`]}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={styles.cardHeader}>
        <div
          className={`${styles.imageWrapper} ${isHovered && styles.hoveredImageWrapper}`}
          onClick={() => {
            router.push(productUrl)
          }}
        >
          <img
            className={`${styles.robotImage} ${styles.mainImage}`}
            src={robot.mainImage}
            alt={robot.title}
            style={{ opacity: isHovered && robot.hoverImage ? 0 : 1 }}
          />
        					{hoverImage && (
						<img
							className={`${styles.robotImage} ${styles.hoverImage}`}
							src={hoverImage}
							alt={robot.title}
							style={{ opacity: isHovered ? 1 : 0 }}
						/>
					)}
        </div>
        <div className={styles.iconGroup}>
          <FavoriteButton robot={robot}/>
          <CompareButton robot={robot} />
        </div>
      </div>
      <div
        className={styles.infoContainer}
        onClick={() => {
          router.push(productUrl)
        }}
      >
        <div className={styles.title}>{robot.title}</div>
        <div className={styles.specsContainer}>
          <div className={styles.specsItem}>
            <img src='/images/icons/lenght.svg' alt='Длина рук' />
            <div className={styles.textContainer}>
              <div className={styles.text}>Длина рук (мм)</div>
              <div className={styles.value}>{robot.armLength}</div>
            </div>
          </div>
          <div className={styles.specsItem}>
            <img src='/images/icons/weight.svg' alt='Грузоподъемность' />
            <div className={styles.textContainer}>
              <div className={styles.text}>Грузоподъемность (кг)</div>
              <div className={styles.value}>{robot.payloadRange}</div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          {isHovered ? (
            <a href={productUrl} className={styles.detailsBtn}>
              Подробнее
            </a>
          ) : (
            <div className={styles.emptyButton}></div>
          )}
        </div>
      </div>
    </div>
  )
}
