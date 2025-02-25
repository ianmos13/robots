"use client";

import styles from './DownloadButton.module.scss';
import {useState} from "react";

export default function DownloadButton() {
    const [isMouseLeaved, setIsMouseLeaved] = useState(false);

  return (
    <a href="/data/katalog_сентябрь_вэб.pdf"
       className={`${styles.container} ${isMouseLeaved ? styles.unhovered : ""}`}
       onMouseEnter={() => setIsMouseLeaved(false)}
       onMouseLeave={() => setIsMouseLeaved(true)}
    >
        <div className={styles.buttonContainer} >
            <div className={styles.imageContainer} >
              <img
                src="/images/icons/download-icon.svg"
                alt="download"
                className={styles.icon}
              />
            </div>
        </div>
    </a>
  );
}
