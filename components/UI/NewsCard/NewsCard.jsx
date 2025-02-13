import styles from "./NewsCard.module.scss";

export default function NewsCard({ id, image, title, date, slug }) {
  return (
    <a href={`/news/${slug}`} className={styles.newsCard} key={id}>
      <div className={styles.imageContainer}>
        <div className={styles.tag}>Тег</div>
        <img src={image} alt={title} />
      </div>
      <div className={styles.newsInfo}>
        <p className={styles.date}>{date}</p>
        <div className={styles.title}>{title}</div>
      </div>
    </a>
  );
}