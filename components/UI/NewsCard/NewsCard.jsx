import styles from "./NewsCard.module.scss";

export default function NewsCard({ id, image, title, date, slug }) {
  return (
    <a href={`/news/${slug}`} className={styles.newsCard} key={id}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.newsInfo}>
        <p className={styles.newsDate}>{date}</p>
        <div>{title}</div>
      </div>
    </a>
  );
}