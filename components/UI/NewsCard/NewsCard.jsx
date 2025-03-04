'use client' 
import { usePathname } from 'next/navigation'
import styles from "./NewsCard.module.scss"

export default function NewsCard({ id, image, title, description, date, slug }) {
  const pathname = usePathname() 


  const isHomePage = pathname === '/'

  return (
    <a href={`/articles/${slug}`} className={styles.newsCard} key={id}>
      <div className={styles.imageContainer}>
        <div className={styles.tag}>Тег</div>
        {image ? <img loading="lazy" src={image} alt={title} /> : null}
      </div>
      <div className={styles.newsInfo}>
        {/*<p className={styles.date}>{date}</p>*/}
        <div className={styles.title}>
          {isHomePage ? <h3>{title}</h3> : <h2>{title}</h2>} 
        </div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
    </a>
  )
}