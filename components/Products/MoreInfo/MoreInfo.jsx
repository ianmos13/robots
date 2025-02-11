import { useState } from "react";
import styles from "./MoreInfo.module.scss";
import DownloadRobotInfoButton from "@/components/UI/Buttons/DownloadRobotInfoButton/DownloadRobotInfoButton";
import ProductCategoryGridPagination from "@/components/UI/ProductCategoryGridPagination/ProductCategoryGridPagination";
import ContactUs from "@/components/UI/ContactUs/ContactUs";
import RobotContainSlider from "@/components/Products/RobotContainSlider/RobotContainSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MoreInfo({ productInfo }) {
  const [activeInfoTab, setActiveInfoTab] = useState("description");
  const [activeTechincalTab, setActiveTechincalTab] = useState("axes");
  const [showAllRows, setShowAllRows] = useState(false);
  const MAX_VISIBLE_ROWS = 9;

  const buttonsData = [
    {
      defaultText: "3D модель RH14-10",
      activeText: "Скачать",
      defaultIcon: "/images/icons/Union.svg",
      activeIcon: "/images/icons/download-white.svg",
      url: "/files/RH14-10_3d_model_one.stp",
    },
    {
      defaultText: "3D модель RH14-10",
      activeText: "Скачать",
      defaultIcon: "/images/icons/Union.svg",
      activeIcon: "/images/icons/download-white.svg",
      url: "/files/RH14-10_3d_model_two.stp",
    },
    {
      defaultText: "3D модель RH14-10",
      activeText: "Скачать",
      defaultIcon: "/images/icons/Union.svg",
      activeIcon: "/images/icons/download-white.svg",
      url: "/files/RH14-10_specs.pdf",
    },
  ];

  const getCurrentImage = () => {
    switch (activeTechincalTab) {
      case "axes":
        return productInfo?.technicalInfo?.axes?.image;
      case "bases":
        return productInfo?.technicalInfo?.bases?.image;
      case "flange":
        return productInfo?.technicalInfo?.flange?.image;
      default:
        return null;
    }
  };

  const renderTable = (data) => {
    if (!data) return null;
    const visibleRows = showAllRows ? data : data.slice(0, MAX_VISIBLE_ROWS);
    return (
      <div className={styles.tableWrapper}>
        <table className={styles.techTable}>
          <tbody>
            {visibleRows.map((row, idx) => (
              <tr key={idx}>
                <td>{row.label}</td>
                {row.values.map((val, i) => (
                  <td key={i}>{val || ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data.length > MAX_VISIBLE_ROWS && (
          <div
            className={styles.showMore}
            onClick={() => setShowAllRows(!showAllRows)}
          >
            {showAllRows ? "Скрыть ▲" : "Раскрыть таблицу ▼"}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.moreInfo}>
      <div className={styles.moreInfoContainer}>
        <div className={styles.sidebar}>
          <div className={styles.title}>Файлы робота:</div>

          <div className={styles.btnContainer}>
            {buttonsData.map((btn, index) => (
              <DownloadRobotInfoButton key={index} {...btn} />
            ))}
          </div>
          <div className={styles.swiper}>
            <Swiper
              className={styles.btnContainerTablet}
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                700: {
                  slidesPerView: 1.7,
                },
                740: {
                  slidesPerView: 1.9,
                },
                840: {
                  slidesPerView: 2.3,
                },
              }}
            >
              {buttonsData.map((btn, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <DownloadRobotInfoButton {...btn} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.requestButton}>Оставить заявку</div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.info}>
            <h4>Информация</h4>
            <div className={styles.btnContainer}>
              <div
                className={`${styles.btn} ${
                  activeInfoTab === "description" ? styles.active : ""
                }`}
                onClick={() => setActiveInfoTab("description")}
              >
                Описание
              </div>
              <div
                className={`${styles.btn} ${
                  activeInfoTab === "equipment" ? styles.active : ""
                }`}
                onClick={() => setActiveInfoTab("equipment")}
              >
                Комплектация
              </div>
            </div>
            <div className={styles.addInfoList}>
              {activeInfoTab === "description" && (
                <ul>
                  {productInfo.addInfo[0].description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {activeInfoTab === "equipment" && (
                <ul>
                  {productInfo.addInfo[0].equipment.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className={styles.technicalInfo}>
            <h4>Технические характеристики {productInfo.title}</h4>
            <div className={styles.btnContainer}>
              <div
                className={`${styles.btn} ${
                  activeTechincalTab === "axes" ? styles.active : ""
                }`}
                onClick={() => setActiveTechincalTab("axes")}
              >
                Диапазон движения по осям
              </div>
              <div
                className={`${styles.btn} ${
                  activeTechincalTab === "bases" ? styles.active : ""
                }`}
                onClick={() => setActiveTechincalTab("bases")}
              >
                Размеры основания
              </div>
              <div
                className={`${styles.btn} ${
                  activeTechincalTab === "flange" ? styles.active : ""
                }`}
                onClick={() => setActiveTechincalTab("flange")}
              >
                Размеры фланца
              </div>
            </div>

            
            <div className={styles.btnContainerMobile}>
              <Swiper
                slidesPerView={1.5}
                spaceBetween={10}
                freeMode={true}
              >
                <SwiperSlide className={styles.swiperSlide}>
                  <div
                    className={`${styles.btn} ${
                      activeTechincalTab === "axes" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTechincalTab("axes")}
                  >
                    Диапазон движения по осям
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div
                    className={`${styles.btn} ${
                      activeTechincalTab === "bases" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTechincalTab("bases")}
                  >
                    Размеры основания
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div
                    className={`${styles.btn} ${
                      activeTechincalTab === "flange" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTechincalTab("flange")}
                  >
                    Размеры фланца
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {getCurrentImage() && (
              <div className={styles.imageContainer}>
                <img src={getCurrentImage()} alt={activeTechincalTab} />
              </div>
            )}
            {activeTechincalTab === "axes" &&
              renderTable(productInfo?.technicalInfo?.axes?.table)}
            {activeTechincalTab === "bases" &&
              renderTable(productInfo?.technicalInfo?.bases?.table)}
            {activeTechincalTab === "flange" &&
              renderTable(productInfo?.technicalInfo?.flange?.table)}
          </div>
          <div className={styles.downloadContainer}>
            <div className={styles.downladCharacter}>
              <img src="/images/icons/Union.svg" alt="download-icon" />
              Скачать технические характеристики
            </div>

            <div className={styles.downloadIcon}>
              <img
                src="/images/icons/download-icon-blue.svg"
                alt="download-icon-blue"
              />
            </div>
          </div>

          <div className={styles.howItWorks}>
            <h4>Посмотрите как это работает</h4>
            <div className={styles.videoWrapper}>
              <video
                autoPlay
                muted
                loop
                controls={false}
                style={{ width: "100%" }}
              >
                <source
                  src="https://s3-figma-videos-production-sig.figma.com/video/1026790075068458266/TEAM/a4c9/e0ac/-db43-44cb-830e-b496539a502f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2QmQh1iCp-t7~rWg6ar3BW~eQhkMZHp7nPq5g7mO69zyYdB~Mjc8mWJejLMN5qXL1baSM-f~cG08b1hnBvFPHxaIA8AOhUgG7Y6KGdHIkwrXat8GpiTVdKXFJsbBhP-ezf5lKRLbCDLo8Sh36TOPkdNzLiKMd~HDwYIgtsuRF2yxvR1UNspMmwPYfnxBenLPvpAzIT0EJkjxrZNDzWnOA~9bwBOBKUfnM65LyzZbwHkVJ-baQtKtKA3W~~BcYe6zRVEq~vF1eMyFfvb55uVvxa7zKLoJFysjs401zL14FUlj77aM4cujrJE0wCCPHRspVRGFctJPe7AgewJY1-P0w__"
                  type="video/mp4"
                />
              </video>
              <div className={styles.playIcon}>
                <img src="/images/icons/play.svg" alt="play" />
              </div>
            </div>
          </div>

          <div className={styles.robotContains}>
            <h4>Из чего состоит наш робот:</h4>
            <div className={styles.robotContainsSlider}>
              <RobotContainSlider />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gridContainer}>
        <ProductCategoryGridPagination />
      </div>
      <ContactUs />
    </div>
  );
}
