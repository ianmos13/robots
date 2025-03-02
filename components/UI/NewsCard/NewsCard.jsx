import styles from "./NewsCard.module.scss";

export default function NewsCard({ id, image, title, description, date, slug }) {
  return (
    <a href={`/articles/${slug}`} className={styles.newsCard} key={id}>
      <div className={styles.imageContainer}>
        <div className={styles.tag}>Тег</div>
        {image ? <img src={image} alt={title} /> : null}
      </div>
      <div className={styles.newsInfo}>
        {/*<p className={styles.date}>{date}</p>*/}
        <div className={styles.title}>{title}</div>
        { description && (<div className={styles.description}>{description}</div>)}
      </div>
    </a>
  );
}
