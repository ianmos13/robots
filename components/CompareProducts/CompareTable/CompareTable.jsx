import React, { useState, useEffect } from "react";
import styles from "./CompareTable.module.scss";

const CompareTable = ({ data, tableRef }) => {
  if (!data?.length) return null;

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const productSpecs = data.map((product) => {
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


  const numColumns = productSpecs.length;


  const getColumnWidth = () => {
    if (numColumns === 2) return "50%";
    if (numColumns === 3) return "30%";
    if (numColumns === 4) return "25%";
    return `${100 / numColumns}%`;
  };

  return (
    <div className={styles.tableWrapper} ref={tableRef}>
      <table className={styles.techTable}>
        <tbody>
          {Object.entries(groupedRows).map(([subheading, rows], idx) => (
            <React.Fragment key={idx}>
              {subheading && (
                <tr className={styles.subheadingRow}>
                  <td colSpan={numColumns}>{subheading}</td>
                </tr>
              )}
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.values.map((value, colIdx) => (
                    <td
                      key={colIdx}
                      className={styles.cell}
                      style={{ width: getColumnWidth() }}
                    >
                      <div className={`${styles.fieldLabel} ${styles.grayText}`}>
                        {row.label}
                      </div>
                      <div className={styles.fieldValue}>{value}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
