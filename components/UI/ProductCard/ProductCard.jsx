'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.scss';

import CompareButton from '@/components/UI/CompareButton/CompareButton';
import FavoriteButton from '@/components/UI/FavoriteButton/FavoriteButton';
import useDeviceType from '../../../hooks/useDeviceType';
import { getProductUrl } from "@/utils/getProductUrl";
import Link from 'next/link';

export default function ProductCard({ robot, theme, categories, hoverCard = () => {} }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isMobileView } = useDeviceType();
  const [isHovered, setIsHovered] = useState(false);

  const onHover = () => {
    hoverCard(true);
    setIsHovered(true);
  };

  const onLeave = () => {
    hoverCard(false);
    setIsHovered(false);
  };

  const hoverImage = robot?.images2 && robot.images2.length > 1 ? robot.images2[1].url : robot?.hoverImage;
  const productUrl = getProductUrl(robot, categories);

  const isSpecialPath = pathname.startsWith('/pozicionery') || pathname.startsWith('/promyshlennye-roboty');
  const isPositioner = productUrl.includes('pozicionery');

  return (
    <div
      className={`${styles.card} ${styles[`${theme}Card`]}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={styles.cardHeader}>
        <div className={`${styles.imageWrapper} ${isHovered ? styles.hoveredImageWrapper : ''}`}>
          <div onClick={() => router.push(productUrl)} className={styles.imageClickable}>
            {robot.mainImage && (
              <Image
                className={`${styles.robotImage} ${styles.mainImage}`}
                src={robot.mainImage2.url}
                alt={robot.mainImage2.alt || 'mainImagALT'}
                title={robot.mainImage2.title || 'mainImagtitle '}
                loading="lazy"
                style={{ opacity: isHovered && robot.hoverImage ? 0 : 1 }}
                width={300} 
                height={300}
              />
            )}
          </div>
          {hoverImage && (
            <div onClick={() => router.push(productUrl)} className={styles.imageClickable}>
              <Image
                className={`${styles.robotImage} ${styles.hoverImage}`}
                src={hoverImage}
                alt={robot.title}
                loading="lazy"
                style={{ opacity: isHovered ? 1 : 0 }}
                width={300}
                height={300}
              />
            </div>
          )}
        </div>
        <div className={styles.iconGroup}>
          <FavoriteButton robot={robot} />
          <CompareButton robot={robot} />
        </div>
      </div>
      <div
        className={styles.infoContainer}
        onClick={() => router.push(productUrl)}
      >
        <div className={styles.title}>
          {isSpecialPath ? <h2>{robot.title}</h2> : <h3>{robot.title}</h3>}
        </div>
        <div className={styles.specsContainer}>
          <div className={styles.specsItem}>
            <Image
              src="/images/icons/lenght.svg"
              alt={isPositioner ? 'Размер' : 'Длина руки'}
              width={24}
              height={24}
            />
            <div className={styles.textContainer}>
              <div className={styles.text}>
                {isPositioner ? 'Размер' : 'Длина руки (мм)'}
              </div>
              <div className={styles.value}>{robot.armLength}</div>
            </div>
          </div>
          <div className={styles.specsItem}>
            <Image
              src="/images/icons/weight.svg"
              alt="Грузоподъемность"
              width={24}
              height={24}
            />
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
  );
}
