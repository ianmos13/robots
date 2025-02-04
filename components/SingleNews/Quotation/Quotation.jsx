import React from "react";
import styles from "./Quotation.module.scss";

export default function Quotation() {
  return (
    <div className={styles.quotation}>
      <img src="/images/icons/quotation.svg" alt="quotation" />
      <div className={styles.quotationText}>
        Выбор правильного робота зависит от конкретных требований
        производства. Необходимо учитывать такие факторы, как тип
        выполняемых операций, грузоподъемность, рабочая область и
        необходимость сотрудничества с персоналом.
      </div>
    </div>
  );
}
