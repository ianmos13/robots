import styles from "./SingleNews.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import product from "@/public/data/products.json";
import LeaveRequestBanner from "../UI/LeaveRequestBanner/LeaveRequestBanner";
import ContactUs from "../UI/ContactUs/ContactUs";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "@/components/UI/ProductCard/ProductCard";
import ScrollableTable from "./ScrollableTable/ScrollableTable";
import SubscribeAndShare from "../UI/SubscribeAndShare/SubscribeAndShare";
export default function SingleNews({ data }) {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("");

  const handlePrevClick = () => {
    setActiveButton("prev");
    setTimeout(() => setActiveButton(""), 300);
  };

  const handleNextClick = () => {
    setActiveButton("next");
    setTimeout(() => setActiveButton(""), 300);
  };

  const handleBack = () => {
    router.push("/news");
  };

  return (
    <section className={styles.container}>
    <div className={styles.containerInner}>
    <div className={styles.leftContainer} onClick={handleBack}>
        <img src="/images/icons/back-arrow.svg" alt="" />
        Вернуться к новостям
      </div>
      <div className={styles.centerContainer}>
        <div className={styles.newsInfo}>
          <div className={styles.newsDate}>{data.date}</div>
          <div className={styles.author}>
            <span>Автор: </span>
            {data.author}
          </div>
        </div>
        <div className={styles.newsContent}>
          <h2>{data.title}</h2>
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <div className={styles.tag}>Промышленные роботы</div>
              <div className={styles.title}>
                Повышение эффективности и точности: Роль роботов в промышленной
                автоматизации
              </div>
            </div>
            <video
              className={styles.videoBackground}
              src={data.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%" }}
            />
          </div>
          <div className={styles.substance}>
            <div className={styles.title}>Содержание</div>
            <ul>
              {data.substance.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.takeOfferContainer}>
            <div className={styles.takeOfferText}>{data.takeOfferText}</div>
            <button className={styles.ctaButton}>Получить предложение</button>
          </div>
          <div className={styles.imgContainer}>
            <img src={data.imgBeforeH2} />
          </div>
          <div className={styles.h3Container}>
            <h3>{data.detailsH3.title}</h3>
            <div className={styles.h3Content}>
              {data.detailsH3.description}
              <ul>
                {data.detailsH3.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.quotation}>
          <img src="/images/icons/quotation.svg" />
          <div className={styles.quotationText}>
            Выбор правильного робота зависит от конкретных требований
            производства. Необходимо учитывать такие факторы, как тип
            выполняемых операций, грузоподъемность, рабочая область и
            необходимость сотрудничества с персоналом.
          </div>
        </div>
        <div className={styles.sameRobotContainer}>
          <h4>Какие роботы для этого подойдут:</h4>
          <div className={styles.slider}>
            <Swiper
              spaceBetween={20}
              slidesPerView={2.3}
              navigation={{
                nextEl: `.${styles.nextButton}`,
                prevEl: `.${styles.prevButton}`,
              }}
              modules={[Navigation]}>
              {product.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductCard robot={product} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.containerButton}>
              <button
                className={`${styles.prevButton} ${styles.navButton} ${
                  activeButton === "prev" ? styles.active : ""
                }`}
                onClick={handlePrevClick}>
                <img
                  src={
                    activeButton === "prev"
                      ? "/images/icons/active-prev.svg"
                      : "/images/icons/prev.svg"
                  }
                  alt="Previous"
                />
              </button>
              <button
                className={`${styles.nextButton} ${styles.navButton} ${
                  activeButton === "next" ? styles.active : ""
                }`}
                onClick={handleNextClick}>
                <img
                  src={
                    activeButton === "next"
                      ? "/images/icons/active-next.svg"
                      : "/images/icons/next.svg"
                  }
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.h4Container}>
          <h4>{data.detailsH4.title}</h4>
          <div className={styles.h4Content}>
            <ul>
              {data.detailsH4.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className={styles.conclusion}>{data.detailsH4.conclusion}</div>
          </div>
        </div>
        {/* <LeaveRequestBanner /> */}
        <div className={styles.videoWrapper}>
          <video autoPlay muted loop controls={false} style={{ width: "100%", height: "100%"}}>
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/1026790075068458266/TEAM/a4c9/e0ac/-db43-44cb-830e-b496539a502f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2QmQh1iCp-t7~rWg6ar3BW~eQhkMZHp7nPq5g7mO69zyYdB~Mjc8mWJejLMN5qXL1baSM-f~cG08b1hnBvFPHxaIA8AOhUgG7Y6KGdHIkwrXat8GpiTVdKXFJsbBhP-ezf5lKRLbCDLo8Sh36TOPkdNzLiKMd~HDwYIgtsuRF2yxvR1UNspMmwPYfnxBenLPvpAzIT0EJkjxrZNDzWnOA~9bwBOBKUfnM65LyzZbwHkVJ-baQtKtKA3W~~BcYe6zRVEq~vF1eMyFfvb55uVvxa7zKLoJFysjs401zL14FUlj77aM4cujrJE0wCCPHRspVRGFctJPe7AgewJY1-P0w__"
              type="video/mp4"
            />
          </video>
      
          {/* <div className={styles.playIcon}>
              <img src="/images/icons/play.svg" alt="play" />
            </div> */}
        </div>
        <ScrollableTable />
        <SubscribeAndShare />
      </div>
     
      <div className={styles.rightContainer}>
        {/* <div>
          <div>Приглашаем к сотрудничеству</div>
          <div>
            Упрощаем и ускоряем производственные процессы в самых разных сферах,
            от электроники до пищевой промышленности
          </div>
          <div>Оставить заявку</div>
        </div> */}
      </div>
    </div>
      <ContactUs />
    
    </section>
  );
}
