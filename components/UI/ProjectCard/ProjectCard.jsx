import styles from "./ProjectCard.module.scss";
import {isValidSubData} from "@/utils/validation";

export default function ProjectCard({ image, title, description, date, tags, slug }) {
  const cardTag = tags && isValidSubData(tags) ? tags[0] : ""
  return (
    <a href={`/our-projects/${slug}`} className={styles.projectCard} >
      <div className={styles.imageContainer}>
        <img loading="lazy" src={image} alt={title} />
        {cardTag && <div className={styles.tagBadge}>{cardTag}</div>}
      </div>

      <div className={styles.projectInfo}>
        {/*<p className={styles.projectDate}>{date}</p>*/}
        <div>{title}</div>
        { description && (<div className={styles.description}>{description}</div>)}
      </div>
    </a>
  );
}
