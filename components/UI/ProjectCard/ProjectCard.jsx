import styles from "./ProjectCard.module.scss";
import {isValidSubData} from "@/utils/validation";

export default function ProjectCard({ image, title, date, tags, slug }) {
  const cardTag = tags && isValidSubData(tags) ? tags[0] : ""
  return (
    <a href={`/completed-projects/${slug}`} className={styles.projectCard} >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        {cardTag && <div className={styles.tagBadge}>{cardTag}</div>}
      </div>

      <div className={styles.projectInfo}>
        <p className={styles.projectDate}>{date}</p>
        <div>{title}</div>
      </div>
    </a>
  );
}
