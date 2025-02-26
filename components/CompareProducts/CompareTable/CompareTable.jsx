import React, { useState, useEffect } from "react";
import styles from "./CompareTable.module.scss";
import useDeviceType from "@/hooks/useDeviceType";
import useCategories from '@/hooks/useCategories';

const CompareTable = ({ data, tableRef }) => {
  const { isTabletView, isMobileView } = useDeviceType();
  const { categories, error, loading } = useCategories();
  if (!data?.length) return null;

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let chunkSize, cellWidth;
  if (windowWidth <= 640) {
    chunkSize = 2;
  } else if (windowWidth <= 1024) {
    chunkSize = 2;
    cellWidth = "49%";
  } else if (windowWidth <= 1400) {
    chunkSize = 3;
    cellWidth = "33%";
  } else {
    chunkSize = 4;
    cellWidth = "24%";
  }

  const displayedData =
    data.length > chunkSize ? data.slice(0, chunkSize) : data;

  const getCategoryName = (categoryKey) => {
    const category = categories.find((cat) => cat.key === categoryKey);
    return category ? category.name : categoryKey;
  };

  const extractValues = (label) => {
    return displayedData.map((product) => {
      const row = product?.technicalTable?.find(
        (row) => row.label === label
      );
      if (!row || !Array.isArray(row.values) || row.values.length === 0) {
        return "-";
      }
      return row.values;
    });
  };

  const techSpecs = {
    ID: displayedData.map((product) => (product.id ? product.id : "-")),
    Название: displayedData.map((product) =>
      product.title ? product.title : "-"
    ),
    Категория: displayedData.map((product) =>
      product.category ? getCategoryName(product.category) : "-"
    ),
    Применение: displayedData.map((product) =>
      product.application ? product.application : "-"
    ),
    "Количество осей": displayedData.map((product) =>
      product.axes ? product.axes : "-"
    ),
    "Длина руки": displayedData.map((product) =>
      product.armLength ? `${product.armLength} мм` : "-"
    ),
    "Радиус досягаемости": displayedData.map((product) =>
      product.reachRange ? `${product.reachRange} мм` : "-"
    ),
    "Макс. нагрузка": displayedData.map((product) =>
      product.payloadRange ? `${product.payloadRange} кг` : "-"
    ),
    Вес: displayedData.map((product) =>
      product.weight ? `${product.weight} кг` : "-"
    ),
    Модель: extractValues("Модель"),
    "Степень подвижности": extractValues("Степень подвижности"),
    "Ось 1": extractValues("Ось 1"),
    "Ось 2": extractValues("Ось 2"),
    "Ось 3": extractValues("Ось 3"),
    "Ось 4": extractValues("Ось 4"),
    "Макс. скорость движения по осям": extractValues(
        "Максимальная скорость движения по Осям"
    ),
    "Ширина базы": extractValues("Ширина"),
    "Длина базы": extractValues( "Длина"),
    "Высота базы": extractValues("Высота"),
    "Диаметр фланца": extractValues("Диаметр фланца"),
    "Количество отверстий": extractValues("Количество отверстий"),
  };

  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div className={styles.tableWrapper} ref={tableRef}>
      <table className={styles.techTable}>
        <tbody>
          {Object.keys(techSpecs).map((specKey) => {
            const values = techSpecs[specKey];
            const chunks = chunkArray(values, chunkSize);
            return chunks.map((chunk, idx) => (
              <tr key={`${specKey}-${idx}`}>
                {chunk.map((value, i) => {
                  let width;
                  if (windowWidth <= 640) {
                    width = i === 0 ? "calc(100% - 20px)" : "20px";
                  } else {
                    width = cellWidth;
                  }
                  return (
                    <td key={i} className={styles.fieldLabel} style={{ width }}>
                      <div className={styles.cellContent}>
                        <span className={styles.grayText}>{specKey}</span>
                        <span className={styles.valueText}>{value || "-"}</span>
                      </div>
                    </td>
                  );
                })}
                {chunk.length < chunkSize &&
                  Array.from({ length: chunkSize - chunk.length }).map(
                    (_, i) => {
                      let width;
                      if (windowWidth <= 640) {
                        width = "20px";
                      } else {
                        width = cellWidth;
                      }
                      return (
                        <td
                          key={`empty-${i}`}
                          className={styles.fieldLabel}
                          style={{ width }}></td>
                      );
                    }
                  )}
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
