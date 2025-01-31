"use client";

import styles from './Location.module.scss';
import useUserLocation from "@/hooks/useUserLocation";

export default function Location() {
    const { location, error } = useUserLocation();

    if (error) {
        return <div className={styles.textContainer}>Ошибка: {error}</div>;
    }

    if (!location) {
        return <div className={styles.textContainer}>Загрузка...</div>;
    }

  return (
    <div className={styles.container} >
        <div className={styles.imageContainer} >
            <img
                src="/images/icons/location.svg"
                alt='location' />
        </div>
        <div className={styles.textContainer}>
            Ваш город: {location}
        </div>

    </div>
  );
}
