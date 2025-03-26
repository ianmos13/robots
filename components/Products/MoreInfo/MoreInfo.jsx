"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import RobotContainSlider from "@/components/Products/RobotContainSlider/RobotContainSlider";
import DownloadRobotInfoButton from "@/components/UI/Buttons/DownloadRobotInfoButton/DownloadRobotInfoButton";
import ProductCategoryGridPagination from "@/components/UI/ProductCategoryGridPagination/ProductCategoryGridPagination";
import VideoPlayer from "@/components/UI/VideoPlayer/VideoPlayer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MoreInfo.module.scss";
import { isValidSubData } from "@/utils/validation";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";

export default function MoreInfo({ productInfo, parentCategory }) {
  if (!productInfo) return null;

  let addInfo = productInfo?.addInfo?.[0] || { description: [], equipment: [] };
  if (!addInfo.description[0]) addInfo.description = [];
  if (!addInfo.equipment[0]) addInfo.equipment = [];

  const defaultTab =
    addInfo.description.length > 0 ? "description" : "equipment";
  const [activeInfoTab, setActiveInfoTab] = useState(defaultTab);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTechnicalTab, setActiveTechnicalTab] = useState("axes");
  const [showAllRows, setShowAllRows] = useState(false);
  const MAX_VISIBLE_ROWS = 9;

  const pathname = usePathname();
  const isPozicionery = pathname.includes("pozicionery");

  const getCurrentImage = () => {
    switch (activeTechnicalTab) {
      case "axes":
        return {
          url: productInfo?.technicalInfo?.axes?.image2?.url,
          alt: productInfo?.technicalInfo?.axes?.image2?.alt || "Диапазон движения по осям",
          title: productInfo?.technicalInfo?.axes?.image2?.title || "Диапазон движения по осям",
        };
      case "bases":
        return {
          url: productInfo?.technicalInfo?.bases?.image2?.url,
          alt: productInfo?.technicalInfo?.bases?.image2?.alt || "Размеры основания",
          title: productInfo?.technicalInfo?.bases?.image2?.title || "Размеры основания",
        };
      case "flange":
        return {
          url: productInfo?.technicalInfo?.flange?.image2?.url,
          alt: productInfo?.technicalInfo?.flange?.image2?.alt || "Размеры фланца",
          title: productInfo?.technicalInfo?.flange?.image2?.title || "Размеры фланца",
        };
      default:
        return null;
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const mergeTechnicalRows = (data) => {
    if (
      !data ||
      !data.axes ||
      !Array.isArray(data.axes.table) ||
      data.axes.table.length === 0
    ) {
      return [];
    }

    const firstTableArray = data.axes.table[0];
    if (!Array.isArray(firstTableArray)) return [];

    const column = {};
    firstTableArray.forEach((row) => {
      if (row.label && row.value !== undefined && row.value !== null) {
        column[row.label] = row.value;
      }
    });

    return [column];
  };

  const renderTable = (data) => {
    const columns = mergeTechnicalRows(data);
    if (!columns || columns.length === 0) return null;

    const groupedRows = {};
    const conditionsGroup = [
      "Средняя температура",
      "Относительная влажность",
      "Вибрации",
      "Другие",
      "Уровень IP",
    ];

    const allLabels = new Set();
    columns.forEach((column) => {
      Object.keys(column).forEach((label) => allLabels.add(label));
    });

    Array.from(allLabels).forEach((label) => {
      let subheading = "";
      let cleanedLabel = label
        .replace("ДДПО:", "")
        .replace("МСДПО:", "")
        .replace("ДКМ:", "")
        .replace("ДМИ:", "")
        .replace("Преимущества:", "")
        .replace("Применение:", "")
        .trim();

      if (label.startsWith("ДДПО:")) {
        subheading = "Диапазон движения по осям";
      } else if (label.startsWith("МСДПО:")) {
        subheading = "Максимальная скорость движения по осям";
      } else if (label.startsWith("ДКМ:")) {
        subheading = "Допустимый крутящий момент";
      } else if (label.startsWith("ДМИ:")) {
        subheading = "Допустимый момент инерции";
      } else if (label.startsWith("Преимущества:")) {
        subheading = "Преимущества";
      } else if (label.startsWith("Применение:")) {
        subheading = "Применение";
      } else if (
        conditionsGroup.includes(label) ||
        label.startsWith("Требования к условиям:")
      ) {
        subheading = "Требования к условиям";
      }

      if (!groupedRows[subheading]) {
        groupedRows[subheading] = [];
      }

      const values = columns.map((col) => col[label] || "-");
      groupedRows[subheading].push({ label: cleanedLabel, values });
    });

    const groupedEntries = Object.entries(groupedRows);
    let items = [];
    groupedEntries.forEach(([subheading, rows]) => {
      items.push({ type: "subheading", subheading });
      rows.forEach((row) => {
        items.push({ type: "row", row });
      });
    });

    const totalItems = items.length;
    const visibleItems = showAllRows ? items : items.slice(0, MAX_VISIBLE_ROWS);

    return (
      <div className={styles.tableWrapper}>
        <table className={styles.techTable}>
          <tbody>
            {visibleItems.map((item, idx) => {
              if (item.type === "subheading") {
                return (
                  <tr key={"sh-" + idx} className={styles.subheadingRow}>
                    <td colSpan={columns.length + 1}>{item.subheading}</td>
                  </tr>
                );
              } else {
                const { label, values } = item.row;
                return (
                  <tr key={"row-" + idx}>
                    <td>{label}</td>
                    {values.map((value, colIdx) => (
                      <td key={colIdx}>{value}</td>
                    ))}
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        {totalItems > MAX_VISIBLE_ROWS && (
          <div
            className={!showAllRows ? styles.showMoreDown : styles.showMoreUp}
            onClick={() => setShowAllRows(!showAllRows)}>
            {showAllRows ? "Скрыть" : "Раскрыть таблицу"}
          </div>
        )}
      </div>
    );
  };

  let technicalInfo = productInfo?.technicalInfo;

  return (
    <div className={styles.moreInfo}>
      <div className={styles.moreInfoContainer}>
        {productInfo?.files?.length > 0 && (
          <div className={styles.sidebar}>
            <div className={styles.title}>
              {isPozicionery ? "Файлы позиционера:" : "Файлы робота:"}
            </div>
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
            <div className={styles.requestButton} onClick={handleOpenModal}>
              Оставить заявку
            </div>
          </div>
        )}

        <div className={styles.rightSection}>
          {(addInfo.description?.length > 0 ||
            addInfo.equipment?.length > 0) && (
            <div className={styles.info}>
              <h2>Информация</h2>
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
                  addInfo.description.map((htmlStr, i) => (
                    <div
                      key={i}
                      dangerouslySetInnerHTML={{ __html: htmlStr }}
                    />
                  ))}
                {activeInfoTab === "equipment" &&
                  addInfo.equipment.map((htmlStr, i) => (
                    <div
                      key={i}
                      dangerouslySetInnerHTML={{ __html: htmlStr }}
                    />
                  ))}
              </div>
            </div>
          )}

          {technicalInfo && (
            <div className={styles.technicalInfo}>
              <h2>Технические характеристики {productInfo?.title}</h2>
              <div className={styles.btnContainer}>
                {technicalInfo.axes && (
                  <div
                    className={`${styles.btn} ${
                      activeTechnicalTab === "axes" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTechnicalTab("axes")}>
                    Диапазон движения по осям
                  </div>
                )}
                {technicalInfo.bases && (
                  <div
                    className={`${styles.btn} ${
                      activeTechnicalTab === "bases" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTechnicalTab("bases")}>
                    Размеры основания
                  </div>
                )}
                {technicalInfo.flange && (
                  <div
                    className={`${styles.btn} ${
                      activeTechnicalTab === "flange" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTechnicalTab("flange")}>
                    Размеры фланца
                  </div>
                )}
              </div>

              {getCurrentImage() && (
                <div className={styles.imageContainer}>
                  <img
                    loading="lazy"
                    src={getCurrentImage().url}
                    alt={getCurrentImage().alt}
                    title={getCurrentImage().title}
                  />
                </div>
              )}
              {renderTable(technicalInfo)}
            </div>
          )}

          {productInfo.technicalInfoFile && (
            <div
              className={styles.downloadContainer}
              onClick={async () => {
                try {
                  const response = await fetch(productInfo.technicalInfoFile);
                  if (!response.ok) {
                    throw new Error("Ошибка при загрузке файла");
                  }
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                 
                  a.download = productInfo.title;
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                  window.URL.revokeObjectURL(url);
                } catch (error) {
                  console.error("Ошибка при загрузке файла:", error);
                }
              }}>
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

          {productInfo?.howItWorksVideo && (
            <div className={styles.howItWorks}>
              <h2>Посмотрите как это работает</h2>
              <VideoPlayer
                theme={"products"}
                videoPath={productInfo.howItWorksVideo}
              />
            </div>
          )}

          {productInfo?.containInfo &&
            isValidSubData(productInfo?.containInfo) && (
              <div className={styles.robotContains}>
                <h2>Из чего состоит наш робот:</h2>
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
