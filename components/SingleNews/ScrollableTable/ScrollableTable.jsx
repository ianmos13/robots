import React, { useEffect, useRef } from "react";
import styles from "./ScrollableTable.module.scss";

const ScrollableTable = ({ data }) => {

  const productSet = new Set();
  data?.sections?.forEach((section) => {
    section.fields.forEach((field) => {
      Object.keys(field.values).forEach((key) => productSet.add(key));
    });
  });
  const productKeys = Array.from(productSet);

  const tableContainerRef = useRef(null);

  useEffect(() => {
    const tableContainer = tableContainerRef.current;
    if (!tableContainer) return;
    const table = tableContainer.querySelector("table");
    if (!table) return;

    const columnCount = table.querySelector("thead tr").children.length;
    if (columnCount >= 3) {
      tableContainer.style.overflowX = "auto";
      tableContainer.scrollLeft = tableContainer.scrollWidth;
    }
  }, [data]);

  return (
    <>
      <h4 className={styles.title}>ТАБЛИЦА ХАРАКТЕРИСТИК</h4>
      <div className={styles.tableWrapper}>
        <div className={styles.tableContainer} ref={tableContainerRef}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                {productKeys.map((productKey, index) => (
                  <th key={index}>{productKey}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.sections?.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
               
                  <tr className={styles.sectionRow}>
                    <td colSpan={productKeys.length + 1} className={styles.sectionTitle}>
                      {section.title}
                    </td>
                  </tr>
               
                  {section.fields.map((field, fieldIndex) => (
                    <tr key={fieldIndex}>
                      <td className={styles.fieldLabel}>{field.label}</td>
                      {productKeys.map((productKey, colIndex) => (
                        <td key={colIndex} className={styles.fieldValue}>
                          {field.values[productKey] ?? "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ScrollableTable;
