"use client";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal"
import { addToCompare, removeFromCompare } from "@/redux/features/compareSlice"
import {
  addToFavorite,
  removeFromFavorite,
} from "@/redux/features/favoriteSlice"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Swiper, SwiperSlide } from "swiper/react"
import ImageSlider from '../ImageSlider/ImageSlider'
import styles from "./ProductSlider.module.scss"

export default function ProductSlider({ productInfo }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageSliderOpen, setIsImageSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const comparisons = useSelector((state) => state.compare || []);
  const favorites = useSelector((state) => state.favorite || []);
  const thumbnailRefs = useRef([]);

  const safeImages =
      productInfo?.images && productInfo.images.length > 0
      ? productInfo.images
      : productInfo?.mainImage
      ? [productInfo.mainImage]
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

  const isCompared = productInfo
    ? comparisons.some((item) => item.id === productInfo.id)
    : false;
  const isFavorited = productInfo
    ? favorites.some((item) => item.id === productInfo.id)
    : false;

  const handleComparisonClick = () => {
    if (productInfo) {
      if (isCompared) {
        dispatch(removeFromCompare(productInfo.id));
      } else {
        dispatch(addToCompare(productInfo));
      }
    }
  };

  const handleFavoriteClick = () => {
    if (productInfo) {
      if (isFavorited) {
        dispatch(removeFromFavorite(productInfo.id));
      } else {
        dispatch(addToFavorite(productInfo));
      }
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleOpenImageSlider = () => {
    setIsImageSliderOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleCloseImageSlider = () => {
    setIsImageSliderOpen(false)
  }

  return productInfo ? (
    <>
      <div className={styles.productSlider}>
        {productInfo.title && (
          <div className={styles.titleMobile}>
            <h1>{productInfo.title}</h1>
          </div>
        )}
        {productInfo.advantages?.length > 0 && (
          <div className={styles.swiper}>
            <Swiper
              className={styles.swiperContainer}
              direction="horizontal"
              slidesPerView={'auto'}
              spaceBetween={10}
            >
              {productInfo.advantages.map((advantage, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.advantage}>{advantage}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {safeImages.length > 0 && (
          <div className={styles.imageContainer}>
            <div className={styles.mainImageContainer}>
              <img
                src={safeImages[currentImageIndex]}
                alt="Product"
                className={styles.mainImage}
                onClick={handleOpenImageSlider}
              />
            </div>
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
          {productInfo.title && <h1>{productInfo.title}</h1>}
          {productInfo.advantages?.length > 0 && (
            <div className={styles.advantagesContainer}>
              {productInfo.advantages.map((advantage, index) => (
                <div className={styles.advantage} key={index}>
                  {advantage}
                </div>
              ))}
            </div>
          )}
          {((productInfo.assignment?.length > 0) ||
              productInfo.armLength ||
              productInfo.payloadRange ||
            (productInfo.source && productInfo.source.length > 0)) && (
            <div className={styles.infoContainer}>
              {productInfo.assignment && productInfo.assignment.length > 0 && (
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
              )}
              {productInfo.armLength && (
                <div className={styles.specContainer}>
                  <div className={styles.specTitle}>Длина рук (мм):</div>
                  <div className={styles.specValue}>{productInfo.armLength}</div>
                </div>
              )}
              {productInfo.payloadRange && (
                <div className={styles.capabilityContainer}>
                  <div className={styles.capabilityTitle}>
                    Грузоподъемность (кг):
                  </div>
                  <div className={styles.capabilityValue}>
                    {productInfo.payloadRange}
                  </div>
                </div>
              )}
              {/* {productInfo.source && productInfo.source.length > 0 && (
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
              )} */}
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
                  href="https://t.me/crprobot_manager"
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
                    href="https://t.me/crprobot_manager"
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
        text={"Получить коммерческое предложение"}
        onClose={handleCloseModal}
        productSlug={productInfo.slug}  
      />
      <ImageSlider 
        isOpen={isImageSliderOpen} 
        onClose={handleCloseImageSlider} 
        images={safeImages}
      />
    </>
  ) : null;
}
