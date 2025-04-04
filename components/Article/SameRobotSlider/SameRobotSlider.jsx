import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./SameRobotSlider.module.scss";
import ProductCard from "@/components/UI/ProductCard/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import useProducts from '@/hooks/useProducts';
import SwitchButtons from "@/components/UI/Buttons/SwitchButtons/SwitchButtons";
import {isValidSubData} from "@/utils/validation";
import useCategories from "@/hooks/useCategories";

export default function SameRobotSlider({ robots }) {
  const swiperRef = useRef()
  const [activeButton, setActiveButton] = useState("");
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const { products, error, loading } = useProducts();
  const { categories } = useCategories(true);

  const selectedProducts = robots && isValidSubData(robots) ? products.filter((p) =>
    robots.some((e) => e?.toString() === p.id.toString())
  ) : []

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
    setActiveButton("prev");
    setTimeout(() => setActiveButton(""), 300);
  };

  const hoverCard = (value) => {
      setIsHoveredCard(value)
  }

  const handleNext = () => {
    swiperRef.current?.slideNext();
    setActiveButton("next");
    setTimeout(() => setActiveButton(""), 300);
  };

  return (
    <div className={styles.sameRobotContainer}>
      {/*<h4>Какие роботы для этого подойдут:</h4>*/}
      {selectedProducts && isValidSubData(selectedProducts) && (
        <div className={styles.slider}>
          <Swiper
            onSwiper={swiper => (swiperRef.current = swiper)}
            spaceBetween={0}
            slidesPerView={"auto"}
            modules={[Navigation]}
            breakpoints={{
              1601: {
                spaceBetween: 20,
              },
              1025: {
                spaceBetween: 10,
              },
            }}
          >
            {selectedProducts.map((robot, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <ProductCard
                    theme={'news'}
                    robot={robot}
                    categories={categories}
                    hoverCard={hoverCard}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
              className={`${styles.containerButton} ${isHoveredCard ? styles.containerButtonInactive : '' }`}
          >
            <SwitchButtons
                activeButton={activeButton}
                handlePrev={handlePrev}
                handleNext={handleNext}
            />
          </div>
        </div>
      )}
    </div>
  );
}
