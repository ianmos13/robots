import Link from 'next/link'
import styles from "./BlogCard.module.scss";

export default function BlogCard({ id, image, title, description, date, slug }) {
  return (
    <Link href={`/blog/${slug}`} className={styles.blogCard} key={id}>
      <div className={styles.imageContainer}>
        <div className={styles.tag}>Тег</div>
        {image ? <img loading="lazy" src={image} alt={title} /> : null}
      </div>
      <div className={styles.blogInfo}>
        {/*<p className={styles.date}>{date}</p>*/}
        <div className={styles.title}>{title}</div>
        { description && (<div className={styles.description}>{description}</div>)}
      </div>
    </Link>
  );
}
