"use client";
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
import VideoPlayer from '@/components/UI/VideoPlayer/VideoPlayer'

export default function MoreInfo({ productInfo }) {
  if (!productInfo) return null;

  const [activeInfoTab, setActiveInfoTab] = useState("description");
  const [activeTechnicalTab, setActiveTechnicalTab] = useState("axes");
  const [showAllRows, setShowAllRows] = useState(false);
  const MAX_VISIBLE_ROWS = 9;

  const getCurrentImage = () => {
    switch (activeTechnicalTab) {
      case "axes":
        return productInfo?.technicalTabs?.axesImage;
      case "bases":
        return productInfo?.technicalTabs?.basesImage;
      case "flange":
        return productInfo?.technicalTabs?.flangeImage;
      default:
        return null;
    }
  };

 
  const normalizeTableData = (data) => {
    if (!data) return [];
   
    if (Array.isArray(data) && data.length && Array.isArray(data[0])) {
      return data[0];
    }
    
    return data;
  };

  const renderTable = (data) => {
    const rows = normalizeTableData(data);
    if (!rows || rows.length === 0) return null;
    const visibleRows = showAllRows ? rows : rows.slice(0, MAX_VISIBLE_ROWS);

    return (
      <div className={styles.tableWrapper}>
        <table className={styles.techTable}>
          <tbody>
            {visibleRows.map((row, idx) => (
              <tr key={idx}>
                <td>{row.label || ""}</td>
                <td>{row.value || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length > MAX_VISIBLE_ROWS && (
          <div
            className={`${!showAllRows ? styles.showMoreDown : styles.showMoreUp}`}
            onClick={() => setShowAllRows(!showAllRows)}>
            {showAllRows ? "Скрыть" : "Раскрыть таблицу"}
          </div>
        )}
      </div>
    );
  };

  const addInfo = productInfo?.addInfo?.[0] || { description: [], equipment: [] };

  return (
    <div className={styles.moreInfo}>
      <div className={styles.moreInfoContainer}>
      
      { productInfo?.files?.length > 0 && (
        <div className={styles.sidebar}>
          <div className={styles.title}>Файлы робота:</div>

          <div className={styles.btnContainer}>
            {(productInfo?.files || []).map((btn, index) => (
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
              }}>
              {(productInfo?.files || []).map((btn, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <DownloadRobotInfoButton {...btn} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.requestButton}>Оставить заявку</div>
        </div>
      )}
        <div className={styles.rightSection}>
          <div className={styles.info}>
            <h4>Информация</h4>
            <div className={styles.btnContainer}>
              {addInfo.description?.length > 0 && (
                <div
                  className={`${styles.btn} ${
                    activeInfoTab === "description" ? styles.active : ""
                  }`}
                  onClick={() => setActiveInfoTab("description")}>
                  Описание
                </div>
              )}
              {addInfo.equipment?.length > 0 && (
                <div
                  className={`${styles.btn} ${
                    activeInfoTab === "equipment" ? styles.active : ""
                  }`}
                  onClick={() => setActiveInfoTab("equipment")}>
                  Комплектация
                </div>
              )}
            </div>
            <div className={styles.addInfoList}>
              {activeInfoTab === "description" &&
                addInfo.description?.length > 0 && (
                  <>
                    {addInfo.description.map((htmlStr, i) => (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: htmlStr }}
                      />
                    ))}
                  </>
                )}
              {activeInfoTab === "equipment" &&
                addInfo.equipment?.length > 0 && (
                  <>
                    {addInfo.equipment.map((htmlStr, i) => (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: htmlStr }}
                      />
                    ))}
                  </>
                )}
            </div>
          </div>
          {productInfo?.technicalTabs && (
            <div className={styles.technicalInfo}>
              <h4>Технические характеристики {productInfo?.title}</h4>
              <div className={styles.btnContainer}>
                <div
                  className={`${styles.btn} ${
                    activeTechnicalTab === "axes" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTechnicalTab("axes")}>
                  Диапазон движения по осям
                </div>
                <div
                  className={`${styles.btn} ${
                    activeTechnicalTab === "bases" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTechnicalTab("bases")}>
                  Размеры основания
                </div>
                <div
                  className={`${styles.btn} ${
                    activeTechnicalTab === "flange" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTechnicalTab("flange")}>
                  Размеры фланца
                </div>
              </div>

              <div className={styles.btnContainerMobile}>
                <Swiper slidesPerView={1.5} spaceBetween={10} freeMode={true}>
                  <SwiperSlide className={styles.swiperSlide}>
                    <div
                      className={`${styles.btn} ${
                        activeTechnicalTab === "axes" ? styles.active : ""
                      }`}
                      onClick={() => setActiveTechnicalTab("axes")}>
                      Диапазон движения по осям
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <div
                      className={`${styles.btn} ${
                        activeTechnicalTab === "bases" ? styles.active : ""
                      }`}
                      onClick={() => setActiveTechnicalTab("bases")}>
                      Размеры основания
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlide}>
                    <div
                      className={`${styles.btn} ${
                        activeTechnicalTab === "flange" ? styles.active : ""
                      }`}
                      onClick={() => setActiveTechnicalTab("flange")}>
                      Размеры фланца
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              {getCurrentImage() && (
                <div className={styles.imageContainer}>
                  <img src={getCurrentImage()} alt={activeTechnicalTab} />
                </div>
              )}
              {renderTable(productInfo?.technicalTable)}
            </div>
          )}
          

          {productInfo?.technicalTable && (
            <div className={styles.downloadContainer}
              onClick={()=> window.open(productInfo?.technicalInfoFile)}
            >
              <div className={styles.downladCharacter}>
                <img src="/images/icons/Union.svg" alt="download-icon" />
                <span className={styles.longText}>
                  Скачать технические характеристики
                </span>
                <span className={styles.shortText}>Тех.характеристики</span>
              </div>
              <div className={styles.downloadIcon}>
                <img
                  src="/images/icons/download-icon-blue.svg"
                  alt="download-icon-blue"
                />
              </div>
            </div>
          )}
          
          <div className={styles.howItWorks}>
            <h4>Посмотрите как это работает</h4>
            <VideoPlayer videoPath='/test_video_2.webm'/>
          </div>
          {productInfo?.containInfo && (
            <div className={styles.robotContains}>
              <h4>Из чего состоит наш робот:</h4>
              <div className={styles.robotContainsSlider}>
                <RobotContainSlider info={productInfo?.containInfo || []} />
              </div>
            </div>
          )}
          
        </div>
      </div>
      <div className={styles.gridContainer}>
        <ProductCategoryGridPagination
            title="Дополнительное оборудование"
            ids={productInfo?.sameProductsIds || []} />
      </div>

      <ContactUs theme={'products'}/>
    </div>
  );
}
