import styles from "./ScrollableTable.module.scss";
import { useEffect, useRef } from "react";
const ScrollableTable = () => {
    const tableContainerRef = useRef(null);

    useEffect(() => {
      const table = tableContainerRef.current.querySelector("table");
      const columnCount = table.querySelector("thead tr").children.length;
  
      if (columnCount >= 3) {
        tableContainerRef.current.style.overflowX = "auto";
      }
    }, []);
  
    return (
        <><h4 className={styles.title}>ТАБЛИЦА ХАРАКТЕРИСТИК</h4>
        <div className={styles.tableWrapper}>
          
          <div className={styles.tableContainer} ref={tableContainerRef}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Модель</th>
                  <th>CRP-RH14-10</th>
                  <th>CRP-RH14-10-W</th>
                  <th>Дополнительный столбец</th>
                  <th>Дополнительный столбец</th>
                  <th>Дополнительный столбец</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Степень подвижности</td>
                  <td>Вертикальный узловой шарнир</td>
                  <td>Вертикальный узловой шарнир</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                </tr>
                <tr>
                  <td>Ось 1</td>
                  <td>Крепление к полу или потолку -167°~167°, настенное крепление -30°~30°</td>
                  <td>Крепление к полу или потолку -167°~167°, настенное крепление -30°~30°</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                </tr>
                <tr>
                  <td>Ось 2</td>
                  <td>CRP-RH14-10</td>
                  <td>CRP-RH14-10-W</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                </tr>
                <tr>
                  <td>Ось 1</td>
                  <td>Крепление к полу или потолку -167°~167°, настенное крепление -30°~30°</td>
                  <td>Крепление к полу или потолку -167°~167°, настенное крепление -30°~30°</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                </tr>
                <tr>
                  <td>Ось 2</td>
                  <td>CRP-RH14-10</td>
                  <td>CRP-RH14-10-W</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                </tr>
                <tr>
                  <td>Ось 1</td>
                  <td>Крепление к полу или потолку -167°~167°, настенное крепление -30°~30°</td>
                  <td>Крепление к полу или потолку -167°~167°, настенное крепление -30°~30°</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                </tr>
                <tr>
                  <td>Ось 2</td>
                  <td>CRP-RH14-10</td>
                  <td>CRP-RH14-10-W</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                </tr>
                <tr>
                  <td>Ось 1</td>
                  <td>Крепление к полу или потолку -167°~167°, настенное крепление -30°~30°</td>
                  <td>Крепление к полу или потолку -167°~167°, настенное крепление -30°~30°</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                </tr>
                <tr>
                  <td>Ось 2</td>
                  <td>CRP-RH14-10</td>
                  <td>CRP-RH14-10-W</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                  <td>Пример данных</td>
                </tr>
  
              </tbody>
            </table>
          </div>
        </div>
        </>
    );
  };
  

export default ScrollableTable;
