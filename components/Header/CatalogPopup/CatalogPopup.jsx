"use client";

import { useRouter } from 'next/navigation'
import styles from './CatalogPopup.module.scss';
import Link from "next/link";
import {useState} from "react";
import AllRobotsButton from "@/components/Header/Buttons/AllRobotsButton/AllRobotsButton";

export default function CatalogPopup({ catalogElements, openCatalog }) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState(null);

  const goToCatalogPage = () => {
    router.push("/catalog?category=all&type=promyshlennyeRoboty");
  };

  return (
    <div
        className={styles.container}
    >
      <AllRobotsButton onClick={goToCatalogPage}/>
      <div className={styles.catalogBox} >
        <div className={styles.buttonsContainer} >
          {catalogElements.map((element, idx) => (
            <Link
                key={idx}
                href={element.link}
                className={styles.buttonContainer}
                onMouseEnter={() => setImageUrl(element.image)}
                onMouseLeave={() => setImageUrl(null)}
                onClick={openCatalog}
            >
              <div className={styles.link}>
                {element.name}
              </div>
             </Link>
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
