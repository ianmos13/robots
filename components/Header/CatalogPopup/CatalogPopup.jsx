"use client";

import styles from './CatalogPopup.module.scss';
import Link from "next/link";
import {useState} from "react";
import AllRobotsButton from "@/components/Header/Buttons/AllRobotsButton/AllRobotsButton";

export default function CatalogPopup({ catalogElements }) {

  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className={styles.container} >
      <AllRobotsButton />
      <div className={styles.catalogBox} >
        <div className={styles.buttonsContainer} >
          {catalogElements.map((element, idx) => (
            <div
                key={idx}
                className={styles.buttonContainer}
                onMouseEnter={() => setImageUrl(element.imageUrl)}
                onMouseLeave={() => setImageUrl(null)}
            >
              <Link
                  className={styles.link}
                  href={element.link}
              >
                {element.title}
              </Link>
             </div>
          ))}
        </div>
        <div className={styles.imageContainer} >
          { imageUrl && (
              <img src={imageUrl} alt='Catalog image' />
          )}
        </div>
      </div>
    </div>
  );
}
