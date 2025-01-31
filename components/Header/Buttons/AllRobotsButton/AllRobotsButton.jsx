"use client";

import styles from './AllRobotsButton.module.scss';
import {useState} from "react";

export default function AllRobotsButton({ onClick }) {
  const [imageUrl, setImageUrl] = useState("/images/icons/menu-blue.svg");

  return (
    <div className={styles.container}
         onMouseEnter={() => setImageUrl("/images/icons/menu.svg")}
         onMouseLeave={() => setImageUrl("/images/icons/menu-blue.svg")}
         onClick={onClick}
    >
        <div className={styles.buttonContainer} >
            <div className={styles.imageContainer} >
              <img
                  src={imageUrl}
                  alt="all robots"
                  className={styles.icon}
              />
            </div>
            <span className={styles.text}>
                Все промышленные роботы
            </span>
        </div>
    </div>
  );
}
