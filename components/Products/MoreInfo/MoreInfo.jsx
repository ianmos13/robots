"use client";
import RobotContainSlider from "@/components/Products/RobotContainSlider/RobotContainSlider";
import DownloadRobotInfoButton from "@/components/UI/Buttons/DownloadRobotInfoButton/DownloadRobotInfoButton";
import ProductCategoryGridPagination from "@/components/UI/ProductCategoryGridPagination/ProductCategoryGridPagination";
import VideoPlayer from "@/components/UI/VideoPlayer/VideoPlayer";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MoreInfo.module.scss";
import {isValidSubData} from "@/utils/validation";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";

export default function MoreInfo({ productInfo, parentCategory }) {
  if (!productInfo) return null;

  const [activeInfoTab, setActiveInfoTab] = useState("description");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTechnicalTab, setActiveTechnicalTab] = useState("axes");
  const [showAllRows, setShowAllRows] = useState(false);
  const MAX_VISIBLE_ROWS = 9;

  const getCurrentImage = () => {
    switch (activeTechnicalTab) {
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const mergeTechnicalRows = (data) => {
    if (!data) return [];
    let rows = [];
    ["axes", "bases", "flange"].forEach((key) => {
      if (data[key] && Array.isArray(data[key].table)) {
        rows.push(...data[key].table);
      }
    });

    return rows.filter(
      (row) =>
        row.value !== undefined &&
        row.value !== null &&
        row.value.toString().trim() !== ""
    );
  };


  const renderTable = (data) => {
    const rows = mergeTechnicalRows(data);
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
            className={!showAllRows ? styles.showMoreDown : styles.showMoreUp}
            onClick={() => setShowAllRows(!showAllRows)}
          >
            {showAllRows ? "Скрыть" : "Раскрыть таблицу"}
          </div>
        )}
      </div>
    );
  };

  let addInfo =
    productInfo?.addInfo?.[0] || { description: [], equipment: [] };
  !addInfo.description[0] && (addInfo.description = []);
  !addInfo.equipment[0] && (addInfo.equipment = []);

  let technicalInfo = productInfo?.technicalInfo;

  return (
    <div className={styles.moreInfo}>
      <div className={styles.moreInfoContainer}>
        {productInfo?.files?.length > 0 && (
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
                }}
              >
                {(productInfo?.files || []).map((btn, index) => (
                  <SwiperSlide key={index} className={styles.swiperSlide}>
                    <DownloadRobotInfoButton {...btn} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
                className={styles.requestButton}
                onClick={handleOpenModal}
            >
              Оставить заявку
            </div>
          </div>
        )}
        <div className={styles.rightSection}>
          {(addInfo.description?.length > 0 ||
            addInfo.equipment?.length > 0) && (
            <div className={styles.info}>
              <h4>Информация</h4>
              <div className={styles.btnContainer}>
                {addInfo.description?.length > 0 && (
                  <div
                    className={`${styles.btn} ${
                      activeInfoTab === "description" ? styles.active : ""
                    }`}
                    onClick={() => setActiveInfoTab("description")}
                  >
                    Описание
                  </div>
                )}
                {addInfo.equipment?.length > 0 && (
                  <div
                    className={`${styles.btn} ${
                      activeInfoTab === "equipment" ? styles.active : ""
                    }`}
                    onClick={() => setActiveInfoTab("equipment")}
                  >
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
          )}

          {technicalInfo && (
            <div className={styles.technicalInfo}>
              <h4>
                Технические характеристики {productInfo?.title}
              </h4>
              <div className={styles.btnContainer}>
                {technicalInfo.axes && (
                  <div
                    className={`${styles.btn} ${
                      activeTechnicalTab === "axes" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTechnicalTab("axes")}
                  >
                    Диапазон движения по осям
                  </div>
                )}
                {technicalInfo.bases && (
                  <div
                    className={`${styles.btn} ${
                      activeTechnicalTab === "bases" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTechnicalTab("bases")}
                  >
                    Размеры основания
                  </div>
                )}
                {technicalInfo.flange && (
                  <div
                    className={`${styles.btn} ${
                      activeTechnicalTab === "flange" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTechnicalTab("flange")}
                  >
                    Размеры фланца
                  </div>
                )}
              </div>

              <div className={styles.btnContainerMobile}>
                <Swiper slidesPerView={"auto"} spaceBetween={10} freeMode={true}>
                  {technicalInfo.axes && (
                    <SwiperSlide className={styles.swiperSlide}>
                      <div
                        className={`${styles.btn} ${
                          activeTechnicalTab === "axes" ? styles.active : ""
                        }`}
                        onClick={() => setActiveTechnicalTab("axes")}
                      >
                        Диапазон движения по осям
                      </div>
                    </SwiperSlide>
                  )}
                  {technicalInfo.bases && (
                    <SwiperSlide className={styles.swiperSlide}>
                      <div
                        className={`${styles.btn} ${
                          activeTechnicalTab === "bases" ? styles.active : ""
                        }`}
                        onClick={() => setActiveTechnicalTab("bases")}
                      >
                        Размеры основания
                      </div>
                    </SwiperSlide>
                  )}
                  {technicalInfo.flange && (
                    <SwiperSlide className={styles.swiperSlide}>
                      <div
                        className={`${styles.btn} ${
                          activeTechnicalTab === "flange" ? styles.active : ""
                        }`}
                        onClick={() => setActiveTechnicalTab("flange")}
                      >
                        Размеры фланца
                      </div>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
              {getCurrentImage() && (
                <div className={styles.imageContainer}>
                  <img
                    src={getCurrentImage()}
                    alt={activeTechnicalTab}
                  />
                </div>
              )}
              {renderTable(technicalInfo)}
            </div>
          )}

          {productInfo.technicalInfoFile && (
            <div
              className={styles.downloadContainer}
              onClick={() => window.open(productInfo?.technicalInfoFile)}
            >
              <div className={styles.downladCharacter}>
                <img src="/images/icons/Union.svg" alt="download-icon" />
                <span className={styles.longText}>
                  Скачать технические характеристики
                </span>
                <span className={styles.shortText}>
                  Тех.характеристики
                </span>
              </div>
              <div className={styles.downloadIcon}>
                <img
                  src="/images/icons/download-icon-blue.svg"
                  alt="download-icon-blue"
                />
              </div>
            </div>
          )}

          {productInfo?.howItWorksVideo && (
              <div className={styles.howItWorks}>
                <h4>Посмотрите как это работает</h4>
                <VideoPlayer
                    theme={"products"}
                    videoPath={productInfo.howItWorksVideo} />
              </div>
          )}
          {productInfo?.containInfo && isValidSubData(productInfo?.containInfo) && (
            <div className={styles.robotContains}>
              <h4>Из чего состоит наш робот:</h4>
              <div className={styles.robotContainsSlider}>
                <RobotContainSlider info={productInfo?.containInfo || []} />
              </div>
            </div>
          )}
        </div>
      </div>
      {productInfo?.sameRobots && isValidSubData(productInfo?.sameRobots) && (
        <div className={styles.gridContainer}>
          <ProductCategoryGridPagination
            title="Дополнительное оборудование"
            typeLink={parentCategory.link}
            ids={productInfo.sameRobots || []}
          />
        </div>
      )}
      <RequestModal
          isOpen={isModalOpen}
          text={"Оставить заявку"}
          onClose={handleCloseModal}
      />
    </div>
  );
}
