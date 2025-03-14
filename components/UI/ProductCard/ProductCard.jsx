'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './ProductCard.module.scss'

import CompareButton from '@/components/UI/CompareButton/CompareButton'
import FavoriteButton from '@/components/UI/FavoriteButton/FavoriteButton'
import useDeviceType from '../../../hooks/useDeviceType'
import { getProductUrl } from "@/utils/getProductUrl"
import Link from 'next/link'

export default function ProductCard({ robot, theme, categories, hoverCard = () => {} }) {
  const router = useRouter()
  const pathname = usePathname()
  const { isMobileView } = useDeviceType()
  const [isHovered, setIsHovered] = useState(false)

  const onHover = () => {
    hoverCard(true)
    setIsHovered(true)
  }

  const onLeave = () => {
    hoverCard(false)
    setIsHovered(false)
  }

  const hoverImage = robot?.images && robot.images.length > 1 ? robot.images[1] : robot?.hoverImage
  const productUrl = getProductUrl(robot, categories)

  
  const isSpecialPath = pathname.startsWith('/pozicionery') || pathname.startsWith('/promyshlennye-roboty')

  return (
    <div
      className={`${styles.card} ${styles[`${theme}Card`]}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={styles.cardHeader}>
        <div
          className={`${styles.imageWrapper} ${isHovered && styles.hoveredImageWrapper}`}
        >
          <img
            onClick={() => { router.push(productUrl) }}
            className={`${styles.robotImage} ${styles.mainImage}`}
            loading="lazy"
            src={robot.mainImage}
            alt={robot.title}
            style={{ opacity: isHovered && robot.hoverImage ? 0 : 1 }}
          />
          {hoverImage && (
            <img
              onClick={() => { router.push(productUrl) }}
              className={`${styles.robotImage} ${styles.hoverImage}`}
              src={hoverImage}
              alt={robot.title}
              loading="lazy"
              style={{ opacity: isHovered ? 1 : 0 }}
            />
          )}
        </div>
        <div className={styles.iconGroup}>
          <FavoriteButton robot={robot} />
          <CompareButton robot={robot} />
        </div>
      </div>
      <div
        className={styles.infoContainer}
        onClick={() => {
          router.push(productUrl)
        }}
      >
        
        <div className={styles.title}>
          {isSpecialPath ? <h2>{robot.title}</h2> : <h3>{robot.title}</h3>}
        </div>
        {/* <div>Sort {robot.sort}</div> */}
        <div className={styles.specsContainer}>
          <div className={styles.specsItem}>
            <img src='/images/icons/lenght.svg' alt='Длина руки' />
            <div className={styles.textContainer}>
              <div className={styles.text}>Длина руки (мм)</div>
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
            <Link href={productUrl} className={styles.detailsBtn}>
              Подробнее
            </Link>
          ) : (
            <div className={styles.emptyButton}></div>
          )}
        </div>
      </div>
    </div>
  )
}