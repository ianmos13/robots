"use client";
import styles from "./Pagination.module.scss";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const delta = 1;
    const start = Math.max(2, currentPage - delta);
    const end = Math.min(totalPages - 1, currentPage + delta);

  
    pageNumbers.push(1);


    if (start > 2) {
      pageNumbers.push("ellipsis-start");
    }

   
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    if (end < totalPages - 1) {
      pageNumbers.push("ellipsis-end");
    }

    
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((item, index) => {
      if (typeof item === "string") {
        return (
          <span key={index} className={styles.ellipsis}>
            ...
          </span>
        );
      }
      return (
        <button
          key={index}
          onClick={() => handlePageChange(item)}
          className={`${styles.pageButton} ${currentPage === item ? styles.active : ""}`}
        >
          {item}
        </button>
      );
    });
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.arrowButton}
      >
        <img src={"/images/icons/prev.svg"} alt="Previous" />
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.arrowButton}
      >
        <img src={"/images/icons/next.svg"} alt="Next" />
      </button>
    </div>
  );
}
