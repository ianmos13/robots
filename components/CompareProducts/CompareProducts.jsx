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

  const getImageBase64 = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result.split(",")[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Ошибка получения изображения:", error);
      return null;
    }
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


    const allLabelsSet = new Set();
    productSpecs.forEach((specObj) => {
      Object.keys(specObj).forEach((label) => allLabelsSet.add(label));
    });
    const allLabels = Array.from(allLabelsSet);

    const productImages = [];
    for (let i = 0; i < exportData.length; i++) {
      const product = exportData[i];
      if (product.image) {
        const base64 = await getImageBase64(product.image);
        productImages.push(base64);
      } else {
        productImages.push(null);
      }
    }

    worksheet.getRow(1).height = 80;
    for (let i = 0; i < productImages.length; i++) {
      if (productImages[i]) {
        const imageId = workbook.addImage({
          base64: "data:image/png;base64," + productImages[i],
          extension: "png",
        });

        worksheet.addImage(imageId, {
          tl: { col: i + 1, row: 0 },
          ext: { width: 80, height: 80 },
        });
      }
    }


    const wsData = [];
    const headerRow = [""];
    exportData.forEach((product) => {
      headerRow.push(product.title || "-");
    });
    wsData.push(headerRow);

    allLabels.forEach((label) => {
      const row = [label];
      productSpecs.forEach((specObj) => {
        row.push(specObj[label] || "-");
      });
      wsData.push(row);
    });

    wsData.forEach((rowData) => {
      worksheet.addRow(rowData);
    });

    const numCols = wsData[0].length;
    for (let i = 1; i <= numCols; i++) {
      let maxLength = 10;
      worksheet.getColumn(i).eachCell({ includeEmpty: true }, (cell) => {
        if (cell.value) {
          const cellValue = cell.value.toString();
          maxLength = Math.max(maxLength, cellValue.length);
        }
      });
      worksheet.getColumn(i).width = maxLength + 2;
    }

    const buf = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buf], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
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
