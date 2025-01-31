import React, { useState, useEffect } from "react";
import styles from "./FiltersModal.module.scss";
import Filters from "../Filters/Filters";

export default function FiltersModal({
  isOpen,
  onClose,
  selectedFilters,
  onApply,
}) {
  const [tempFilters, setTempFilters] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setTempFilters(selectedFilters);
    }
  }, [isOpen, selectedFilters]);

  const removeFilter = (filter) => {
    setTempFilters((prev) => prev.filter((item) => item !== filter));
  };

  const clearFilters = () => {
    setTempFilters([]);
  };

  const handleApply = () => {
    onApply(tempFilters);
  };

  return isOpen ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Все Фильтры</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            <img src="/images/icons/x.svg" alt="Close" />
          </button>
        </div>

        <div className={styles.modalBody}>
          <Filters
            selectedFilters={tempFilters}
            onChangeFilters={setTempFilters}
          />
        </div>

        <div className={styles.modalFooter}>
          <div className={styles.category}>
            {tempFilters.length > 0 ? (
              <>
                {tempFilters.map((filter, index) => (
                  <div
                    key={index}
                    className={styles.active}
                    onClick={() => removeFilter(filter)}>
                    {filter}
                    <img src="/images/icons/x-blue.svg" alt="Удалить" />
                  </div>
                ))}
                <div className={styles.default} onClick={clearFilters}>
                  Очистить всё
                  <img src="/images/icons/x.svg" alt="Очистить все" />
                </div>
              </>
            ) : (
              <div className={styles.default}>Нет активных фильтров</div>
            )}
          </div>
          <button className={styles.applyButton} onClick={handleApply}>
            Показать
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
