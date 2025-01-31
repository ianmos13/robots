"use client";
import styles from "./Pagination.module.scss";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 2;
    const pagesAfterEllipsis = 3;

    if (currentPage > maxPagesToShow + 1) {
      pageNumbers.push(1);
      if (currentPage > maxPagesToShow + 2) {
        pageNumbers.push("...");
      }
    }

    for (
      let i = Math.max(1, currentPage - maxPagesToShow);
      i <= Math.min(totalPages, currentPage + maxPagesToShow);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (currentPage + maxPagesToShow < totalPages) {
      if (currentPage + maxPagesToShow + 1 < totalPages) {
        pageNumbers.push("...");
      }

      for (
        let i = Math.max(
          totalPages - pagesAfterEllipsis + 1,
          currentPage + maxPagesToShow + 1
        );
        i <= totalPages;
        i++
      ) {
        if (!pageNumbers.includes(i)) {
          pageNumbers.push(i);
        }
      }
    }

    return pageNumbers.map((number, index) =>
      number === "..." ? (
        <span key={index} className={styles.ellipsis}>
          {number}
        </span>
      ) : (
        <button
          key={index}
          onClick={() => handlePageChange(number)}
          className={`${styles.pageButton} ${
            currentPage === number ? styles.active : ""
          }`}>
          {number}
        </button>
      )
    );
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.arrowButton}>
        <img src={"/images/icons/prev.svg"} alt="Previous" />
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.arrowButton}>
        <img src={"/images/icons/next.svg"} alt="next" />
      </button>
    </div>
  );
}
