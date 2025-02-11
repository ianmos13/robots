"use client";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "@/redux/features/favoriteSlice";
import { addToCompare, removeFromCompare } from "@/redux/features/compareSlice";
import styles from "./ProductSlider.module.scss";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductSlider({ images, productInfo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const comparisons = useSelector((state) => state.compare || []);
  const favorites = useSelector((state) => state.favorite || []);

  const isCompared = comparisons.some((item) => item.id === productInfo.id);
  const isFavorited = favorites.some((item) => item.id === productInfo.id);

  const thumbnailRefs = useRef([]);

  useEffect(() => {
    if (thumbnailRefs.current[currentImageIndex]) {
      thumbnailRefs.current[currentImageIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentImageIndex]);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleComparisonClick = () => {
    if (isCompared) {
      dispatch(removeFromCompare(productInfo.id));
    } else {
      dispatch(addToCompare(productInfo));
    }
  };

  const handleFavoriteClick = () => {
    if (isFavorited) {
      dispatch(removeFromFavorite(productInfo.id));
    } else {
      dispatch(addToFavorite(productInfo));
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.productSlider}>
        <div className={styles.titleMobile}>
          <h3>{productInfo.title}</h3>
        </div>
        <div className={styles.swiper}>
          <Swiper
            className={styles.swiperContainer}
            direction="horizontal"
            slidesPerView="1.5"
            spaceBetween={10}
          >
            {productInfo.advantages.map((advantages, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <div key={advantages.key} className={styles.advantage}>
                  {advantages}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={images[currentImageIndex]}
            alt="Product"
            className={styles.mainImage}
          />
        
          <button className={styles.arrowLeft} onClick={handlePrevImage}>
            <img src="/images/icons/arrow-left-filled.svg" alt="Предыдущий" />
          </button>
          <button className={styles.arrowRight} onClick={handleNextImage}>
            <img src="/images/icons/arrow-rightfilled.svg" alt="Следующий" />
          </button>
          <div className={styles.thumbnailContainer}>
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el) => (thumbnailRefs.current[index] = el)}
                className={`${styles.thumbnail} ${
                  index === currentImageIndex ? styles.active : ""
                }`}
                onClick={() => handleImageChange(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.productInfo}>
          <h3>{productInfo.title}</h3>

          <div className={styles.advantagesContainer}>
            {productInfo.advantages.map((advantage, index) => (
              <div className={styles.advantage} key={index}>
                {advantage}
              </div>
            ))}
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.assignmentContainer}>
              <div className={styles.assignmentTitle}>Назначение:</div>
              <div className={styles.assignmentItem}>
                {productInfo.assignment.map((item, index) => (
                  <div className={styles.assignment} key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.specContainer}>
              <div className={styles.specTitle}>Длина рук (мм):</div>
              <div className={styles.specValue}>{productInfo.armLength}</div>
            </div>

            <div className={styles.capabilityContainer}>
              <div className={styles.capabilityTitle}>
                Грузоподъемность (кг):
              </div>
              <div className={styles.capabilityValue}>
                {productInfo.payloadRange}
              </div>
            </div>

            <div className={styles.sourceContainer}>
              <div className={styles.sourceTitle}>Источник:</div>
              <div className={styles.sourceGrid}>
                {productInfo.source.map((src, index) => (
                  <div className={styles.source} key={index}>
                    {src}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.btnContainer}>
            <button className={styles.ctaButton} onClick={handleOpenModal}>
              Получить коммерческое предложение
            </button>

            <div className={styles.btnContainerInner}>
              <div
                className={`${styles.compereBtn} ${
                  isCompared ? styles.activeBtn : ""
                }`}
                onClick={handleComparisonClick}
              >
                {!isCompared && (
                  <img
                    src="/images/icons/bar-chart.svg"
                    alt="Compare Icon"
                    className={styles.compareIcon}
                  />
                )}
                {isCompared
                  ? "Товар добавлен в сравнение"
                  : "Сравнить с другим товаром"}
              </div>

              <div
                className={`${styles.favoriteBtn} ${
                  isFavorited ? styles.activeBtn : ""
                }`}
                onClick={handleFavoriteClick}
              >
                <img
                  src={
                    isFavorited
                      ? "/images/icons/heart-active.svg"
                      : "/images/icons/heart.svg"
                  }
                  alt="Favorite Icon"
                />
                {isFavorited ? "Добавлен" : "В избранные"}
              </div>

              <div className={styles.social}>
                <a
                  href="https://t.me/your_telegram_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/icons/tg-icon.svg" alt="Telegram" />
                </a>

                <img src="/images/icons/separator.svg" alt="Separator" />

                <a
                  href="whatsapp://chat?number=84992885394"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/icons/whatsapp-icon.svg" alt="Whatsapp" />
                </a>
              </div>
              <div className={styles.mobilebtnContainer}>
                <div
                  className={`${styles.favoriteBtnMobile} ${
                    isFavorited ? styles.activeBtn : ""
                  }`}
                  onClick={handleFavoriteClick}
                >
                  <img
                    src={
                      isFavorited
                        ? "/images/icons/heart-active.svg"
                        : "/images/icons/heart.svg"
                    }
                    alt="Favorite Icon"
                  />
                  {isFavorited ? "Добавлен" : "В избранные"}
                </div>

                <div className={styles.socialMobile}>
                  <a
                    href="https://t.me/your_telegram_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/icons/tg-icon.svg" alt="Telegram" />
                  </a>

                  <img src="/images/icons/separator.svg" alt="Separator" />

                  <a
                    href="whatsapp://chat?number=84992885394"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/icons/whatsapp-icon.svg" alt="Whatsapp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RequestModal
        isOpen={isModalOpen}
        text={"Оставьте заявку"}
        onClose={handleCloseModal}
      />
    </>
  );
}
