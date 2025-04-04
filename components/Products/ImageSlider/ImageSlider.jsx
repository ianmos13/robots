import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ImageSlider.module.scss';

export default function ImageSlider({ images, isOpen, onClose, initialSlide }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const swiperRef = React.useRef(null);

  if (!isOpen) return null;

  const isVideo = (url) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className={styles.container}>
      <div className={styles.closeButton}>
        <button onClick={onClose}>
          <img src='/images/icons/x.svg' alt='Close' />
        </button>
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className={`${styles.swiperContainer} ${isHovered && styles.hovered}`}
          direction='horizontal'
          slidesPerView={'auto'}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          initialSlide={initialSlide}
        >
          <button
            className={`${styles.leftButton} ${isHovered && styles.active}`}
            onClick={handlePrev}
          ></button>
          <button
            className={`${styles.rightButton} ${isHovered && styles.active}`}
            onClick={handleNext}
          ></button>
          {images.map((media, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              {isVideo(media) ? (
                <video
                  loading="lazy"
                  controls
                  className={styles.videoSlide}
                >
                  <source src={media} type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
              ) : (
                <img loading="lazy" src={media} alt="Роботы" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
