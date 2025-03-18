"use client";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useRef, useEffect } from "react";
import useDeviceType from "@/hooks/useDeviceType";
import CompareTable from "./CompareTable/CompareTable";
import CompareHeader from "./CompareHeader";
import CompareSticky from "./CompareSticky";
import ConfirmModal from "@/components/UI/ConfirmModal/ConfirmModal";
import {
  clearComparison,
  removeFromCompare,
} from "@/redux/features/compareSlice";
import styles from "./CompareProducts.module.scss";
import useCategories from "@/hooks/useCategories";
import CategoriesFilter from "@/components/UI/CategoriesFilter/CategoriesFilter";
import {useRouter} from "next/navigation";

export default function CompareProducts() {
  const router = useRouter();
  const dispatch = useDispatch();
  const comparisons = useSelector((state) => state.compare);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const tableRef = useRef(null);
  const stopStickyRef = useRef(null);
  const headerRef = useRef(null);
  const [compareHeaderWidth, setCompareHeaderWidth] = useState(null);
  const [compareStickyLeft, setCompareStickyLeft] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [hideSticky, setHideSticky] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const { categories } = useCategories(true);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categoryKeys = new Set(comparisons.map((item) => item.category));
  const uniqueCategories = categories.filter((category) =>
      categoryKeys.has(category.key)
  );

  const goToCatalogPage = () => {
    router.push("/promyshlennye-roboty");
  };

  let maxVisibleItems;
  if (windowWidth <= 767) {
    maxVisibleItems = comparisons.length;
  } else if (windowWidth <= 1024) {
    maxVisibleItems = 2;
  } else if (windowWidth <= 1400) {
    maxVisibleItems = 3;
  } else {
    maxVisibleItems = 4;
  }

  const scrollLeft = () => {
    if(windowWidth > 767)
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    if(windowWidth > 767)
      setCurrentIndex((prev) =>
        Math.min(prev + 1, comparisons.length - maxVisibleItems)
      );
  };

  const handleClearComparison = () => {
    dispatch(clearComparison());
    setCurrentIndex(0);
  };

  const handleRemoveFromCompare = (id) => {
    dispatch(removeFromCompare(id));
  };

  const handleRemoveCategory = (categoryKey) => {
    comparisons.forEach((item) => {
      if (item.category === categoryKey) {
        dispatch(removeFromCompare(item.id));
      }
    });
  };

  const fixExcelValue = (val) => {
    if (typeof val === "string" && val.trim().startsWith("=")) {
      return "'" + val;
    }
    return val;
  };



  const handleDownloadExcel = async () => {
    const ExcelJSModule = await import("exceljs");
    const ExcelJS = ExcelJSModule.default || ExcelJSModule;
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Сравнение товаров");
  
   
    const exportData = comparisons.slice(
      currentIndex,
      currentIndex + maxVisibleItems
    );
  
   
    const productSpecs = exportData.map((product) => {
      let specObj = {};
      if (
        product.technicalInfo &&
        product.technicalInfo.axes &&
        Array.isArray(product.technicalInfo.axes.table) &&
        product.technicalInfo.axes.table.length > 0
      ) {
        const firstTable = product.technicalInfo.axes.table[0];
        if (Array.isArray(firstTable)) {
          firstTable.forEach((row) => {
            if (row.label && row.value !== undefined && row.value !== null) {
              specObj[row.label] = row.value;
            }
          });
        }
      }
      return specObj;
    });
  
   
    const groupedRows = {};
    const conditionsGroup = [
      "Средняя температура",
      "Относительная влажность",
      "Вибрации",
      "Другие",
      "Уровень IP",
    ];
  
    const allLabelsSet = new Set();
    productSpecs.forEach((specObj) => {
      Object.keys(specObj).forEach((label) => allLabelsSet.add(label));
    });
    const allLabels = Array.from(allLabelsSet);
  
    allLabels.forEach((label) => {
      let cleanedLabel = label
        .replace("ДДПО:", "")
        .replace("МСДПО:", "")
        .replace("ДКМ:", "")
        .replace("ДМИ:", "")
        .replace("Преимущества:", "")
        .replace("Применение:", "")
        .trim();
  
      let subheading = "";
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
  
      const values = productSpecs.map((specObj) => specObj[label] || "-");
      groupedRows[subheading].push({ label: cleanedLabel, values });
    });
  
   
    const numProducts = productSpecs.length;
    const totalColumns = numProducts + 1;
  
   
    const headerRow = worksheet.getRow(1);
    headerRow.getCell(1).value = "Характеристика";
    exportData.forEach((product, index) => {
      headerRow.getCell(index + 2).value = product.title || "-";
    });
    headerRow.commit();
    let rowIndex = 2;
  
   
    for (const [subheading, rows] of Object.entries(groupedRows)) {
     
      if (subheading) {
        const subRow = worksheet.getRow(rowIndex);
        subRow.getCell(1).value = subheading;
        subRow.commit();
        rowIndex++;
      }
      
      rows.forEach((rowItem) => {
        const row = worksheet.getRow(rowIndex);
        row.getCell(1).value = rowItem.label;
        rowItem.values.forEach((value, colIndex) => {
          row.getCell(colIndex + 2).value = value;
        });
        row.commit();
        rowIndex++;
      });
    }
  
   
    rowIndex++;
    const contactHeaderRow = worksheet.getRow(rowIndex);
    contactHeaderRow.getCell(1).value = "Контакты:";
    contactHeaderRow.commit();
    rowIndex++;
  
    const contacts = [
      {
        label: "Телефон",
        text: "84992885394",
        hyperlink: "tel:84992885394",
      },
      {
        label: "Почта",
        text: "info@crp-robot.ru",
        hyperlink: "mailto:info@crp-robot.ru",
      },
      {
        label: "Telegram",
        text: "crprobot_manager",
        hyperlink: "https://t.me/crprobot_manager",
      },
      {
        label: "WhatsApp",
        text: "79850920638",
        hyperlink:
          "https://wa.me/79850920638?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82...",
      },
    ];
  
    contacts.forEach((contact) => {
      const row = worksheet.getRow(rowIndex);
      row.getCell(1).value = contact.label;
      row.getCell(2).value = { text: contact.text, hyperlink: contact.hyperlink };
      row.commit();
      rowIndex++;
    });
  
    
    for (let i = 1; i <= totalColumns; i++) {
      let maxLength = 10;
      worksheet.getColumn(i).eachCell({ includeEmpty: true }, (cell) => {
        if (cell.value) {
          let cellText = "";
          if (typeof cell.value === "object" && cell.value.text) {
            cellText = cell.value.text.toString();
          } else {
            cellText = cell.value.toString();
          }
          maxLength = Math.max(maxLength, cellText.length);
        }
      });
      worksheet.getColumn(i).width = maxLength + 2;
    }
  
    const buf = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buf], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "compare_table.xlsx";
    a.click();
    URL.revokeObjectURL(url);
  };
  
  useEffect(() => {
    if (
      sliderRef.current &&
      sliderRef.current.children.length > currentIndex
    ) {
      const activeCard = sliderRef.current.children[currentIndex];
      sliderRef.current.scrollTo({
        left: activeCard.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [currentIndex, windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !stopStickyRef.current) return;
      if(windowWidth <= 767) {
        setCompareHeaderWidth(headerRef.current.offsetWidth)
        tableRef.current.style.width = `${headerRef.current.offsetWidth}px`
      }
      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      const stopStickyTop = stopStickyRef.current.getBoundingClientRect().top;
      setIsSticky(headerBottom <= 130);
      setHideSticky(stopStickyTop <= 180);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollCompareProductsContainer = (event) => {
    if(windowWidth <= 767) {
      const headerLeft = headerRef.current.getBoundingClientRect().left - 20;
      setCompareStickyLeft(headerLeft)
    }
  };

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const cancelClear = () => {
    setIsConfirmModalOpen(false);
  };

  const confirmClear = () => {
    handleClearComparison();
    setIsConfirmModalOpen(false);
  };

  return (
    <div className={styles.container}>
      {(!hasMounted || comparisons.length === 0) ? (
        <div className={styles.emptyState}>
          {hasMounted && <p>Нет товаров для сравнения</p>}
        </div>
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.topContainer}>
              <h1>Сравнение товаров</h1>
              <div className={styles.btnContainer}>
                {comparisons?.length > 0 && (
                    <button className={styles.downloadButton} onClick={handleDownloadExcel}>
                      <img src="/images/icons/download.svg" alt="download" />
                      <span>Скачать таблицу</span>
                    </button>
                )}
                <button className={styles.addButton} onClick={goToCatalogPage}>
                  <img
                      src="/images/icons/plus.svg"
                      alt="add"

                  />{" "}
                  <span>Добавить товар</span>
                </button>
                {comparisons.length > 0 && (
                    <button
                        className={styles.clearButton}
                        onClick={openConfirmModal}
                    >
                      <img src="/images/icons/trash.svg" alt="trash" />
                      <span>Удалить все </span>
                    </button>
                )}
              </div>
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.categoriesFilter}>
                <CategoriesFilter
                    categories={uniqueCategories}
                    onDelete={handleRemoveCategory}
                />
                {comparisons.length > maxVisibleItems && (
                    <div className={styles.navControls}>
                      <div className={styles.containerButton}>
                        <button
                            className={styles.arrowLeft}
                            onClick={scrollLeft}
                            disabled={currentIndex === 0}
                        >
                          <svg className={styles.icon} />
                        </button>
                        <button
                            className={styles.arrowRight}
                            onClick={scrollRight}
                            disabled={
                                currentIndex + maxVisibleItems >= comparisons.length
                            }
                        >
                          <svg className={styles.icon} />
                        </button>
                      </div>
                    </div>
                )}
              </div>
              <div className={styles.btnContainerMobile}>
                <button className={styles.downloadButton} onClick={handleDownloadExcel}>
                  <img src="/images/icons/download.svg" alt="download" />
                  <span>Скачать таблицу</span>
                </button>
                <button className={styles.addButton}>
                  <img
                      src="/images/icons/plus.svg"
                      alt="add"
                      onClick={goToCatalogPage}
                  />{" "}
                  <span>Добавить товар</span>
                </button>
                {comparisons.length > 0 && (
                    <button
                        className={styles.clearButton}
                        onClick={openConfirmModal}
                    >
                      <img src="/images/icons/trash.svg" alt="trash" />
                      <span>Удалить все </span>
                    </button>
                )}
              </div>
            </div>
          </div>
          <div
              className={styles.compareProductsContainer}
              onScroll={handleScrollCompareProductsContainer}
          >
            <div className={styles.compareHeaderContainer} ref={headerRef}>
              <CompareHeader
                comparisons={comparisons}
                currentIndex={currentIndex}
                maxVisibleItems={maxVisibleItems}
                onScrollLeft={scrollLeft}
                onScrollRight={scrollRight}
                sliderRef={sliderRef}
                onRemoveItem={handleRemoveFromCompare}
                categoryList={categories}
              />
            </div>

            {isSticky && !hideSticky && (
              <CompareSticky
                comparisons={comparisons}
                currentIndex={currentIndex}
                maxVisibleItems={maxVisibleItems}
                onScrollLeft={scrollLeft}
                onScrollRight={scrollRight}
                onClearComparison={openConfirmModal}
                sliderRef={sliderRef}
                categoryList={categories}
                onRemoveItem={handleRemoveFromCompare}
                onDownloadExcel={handleDownloadExcel}
                compareHeaderWidth={compareHeaderWidth}
                compareStickyLeft={compareStickyLeft}
              />
            )}

            <CompareTable
              data={comparisons.slice(
                currentIndex,
                currentIndex + maxVisibleItems
              )}
              tableRef={tableRef}
            />
          </div>
          <div ref={stopStickyRef} className={styles.stopSticky}></div>
          <ConfirmModal
            isOpen={isConfirmModalOpen}
            message="ВЫ действительно хотите удалить товары?"
            onConfirm={confirmClear}
            onCancel={cancelClear}
          />
        </>
      )}
    </div>
  );
}
