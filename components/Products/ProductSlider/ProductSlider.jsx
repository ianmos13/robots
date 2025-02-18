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
  const product =
    Array.isArray(productInfo)
      ? productInfo[0]
      : productInfo?.data
      ? productInfo.data[0]
      : productInfo;

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const comparisons = useSelector((state) => state.compare || []);
  const favorites = useSelector((state) => state.favorite || []);
  const thumbnailRefs = useRef([]);

  const safeImages =
    images && images.length > 0
      ? images
      : product?.images && product.images.length > 0
      ? product.images
      : product?.mainImage
      ? [product.mainImage]
      : [];

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
      prevIndex === 0 ? safeImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === safeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isCompared = product
    ? comparisons.some((item) => item.id === product.id)
    : false;
  const isFavorited = product
    ? favorites.some((item) => item.id === product.id)
    : false;

  const handleComparisonClick = () => {
    if (product) {
      if (isCompared) {
        dispatch(removeFromCompare(product.id));
      } else {
        dispatch(addToCompare(product));
      }
    }
  };

  const handleFavoriteClick = () => {
    if (product) {
      if (isFavorited) {
        dispatch(removeFromFavorite(product.id));
      } else {
        dispatch(addToFavorite(product));
      }
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return product ? (
    <>
      <div className={styles.productSlider}>
        {product.title && (
          <div className={styles.titleMobile}>
            <h3>{product.title}</h3>
          </div>
        )}
        {product.advantages && product.advantages.length > 0 && (
          <div className={styles.swiper}>
            <Swiper
              className={styles.swiperContainer}
              direction="horizontal"
              slidesPerView="1.5"
              spaceBetween={10}
            >
              {product.advantages.map((advantage, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.advantage}>{advantage}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {safeImages.length > 0 && (
          <div className={styles.imageContainer}>
            <img
              src={safeImages[currentImageIndex]}
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
              {safeImages.map((image, index) => (
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
        )}
        <div className={styles.productInfo}>
          {product.title && <h3>{product.title}</h3>}
          {product.advantages && product.advantages.length > 0 && (
            <div className={styles.advantagesContainer}>
              {product.advantages.map((advantage, index) => (
                <div className={styles.advantage} key={index}>
                  {advantage}
                </div>
              ))}
            </div>
          )}
          {((product.assignment && product.assignment.length > 0) ||
            product.armLength ||
            product.payloadRange ||
            (product.source && product.source.length > 0)) && (
            <div className={styles.infoContainer}>
              {product.assignment && product.assignment.length > 0 && (
                <div className={styles.assignmentContainer}>
                  <div className={styles.assignmentTitle}>Назначение:</div>
                  <div className={styles.assignmentItem}>
                    {product.assignment.map((item, index) => (
                      <div className={styles.assignment} key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {product.armLength && (
                <div className={styles.specContainer}>
                  <div className={styles.specTitle}>Длина рук (мм):</div>
                  <div className={styles.specValue}>{product.armLength}</div>
                </div>
              )}
              {product.payloadRange && (
                <div className={styles.capabilityContainer}>
                  <div className={styles.capabilityTitle}>
                    Грузоподъемность (кг):
                  </div>
                  <div className={styles.capabilityValue}>
                    {product.payloadRange}
                  </div>
                </div>
              )}
              {product.source && product.source.length > 0 && (
                <div className={styles.sourceContainer}>
                  <div className={styles.sourceTitle}>Источник:</div>
                  <div className={styles.sourceGrid}>
                    {product.source.map((src, index) => (
                      <div className={styles.source} key={index}>
                        {src}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
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
  ) : null;
}
