import styles from "./CompareTable.module.scss";
import ProductCategory from "@/public/data/products-catgories.json";

const CompareTable = ({ data, tableRef }) => {
  if (!data.length) return null;

  const getCategoryName = (categoryKey) => {
    const category = ProductCategory.find((cat) => cat.key === categoryKey);
    return category ? category.name : categoryKey;
  };

  const extractValues = (category, label) => {
    return data.map((product) =>
      product.technicalInfo[category]?.table.find((row) => row.label === label)?.values || "-"
    );
  };

  const techSpecs = {
    "ID": data.map((product) => product.id || "-"),
    "Название": data.map((product) => product.title || "-"),
    "Категория": data.map((product) =>
      product.category ? getCategoryName(product.category) : "-"
    ),
    "Применение": data.map((product) => product.application || "-"),
    "Количество осей": data.map((product) => product.axes || "-"),
    "Длина руки": data.map((product) =>
      product.armLength ? `${product.armLength} мм` : "-"
    ),
    "Радиус досягаемости": data.map((product) =>
      product.reachRange ? `${product.reachRange} мм` : "-"
    ),
    "Макс. нагрузка": data.map((product) =>
      product.payloadRange ? `${product.payloadRange} кг` : "-"
    ),
    "Вес": data.map((product) =>
      product.weight ? `${product.weight} кг` : "-"
    ),
    "Модель": extractValues("axes", "Модель"),
    "Степень подвижности": extractValues("axes", "Степень подвижности"),
    "Ось 1": extractValues("axes", "Ось 1"),
    "Ось 2": extractValues("axes", "Ось 2"),
    "Ось 3": extractValues("axes", "Ось 3"),
    "Ось 4": extractValues("axes", "Ось 4"),
    "Макс. скорость движения по осям": extractValues("axes", "Максимальная скорость движения по Осям"),
    "Ширина базы": extractValues("bases", "Ширина"),
    "Длина базы": extractValues("bases", "Длина"),
    "Высота базы": extractValues("bases", "Высота"),
    "Диаметр фланца": extractValues("flange", "Диаметр фланца"),
    "Количество отверстий": extractValues("flange", "Количество отверстий"),
  };

  return (
    <div className={styles.tableWrapper} ref={tableRef}>
      <table className={styles.techTable}>
        <tbody>
          {Object.keys(techSpecs).map((key, idx) => (
            <tr key={idx}>
              <td className={styles.fieldLabel}>
                <span className={styles.grayText}>{key}</span>
                <br />
                {techSpecs[key][0] || "-"}
              </td>
              {techSpecs[key].slice(1).map((value, i) => (
                <td key={i} className={styles.bottomAlign}>
                  {value || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
