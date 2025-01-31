"use client";
import { useState } from "react";
import styles from "./ProductCategoryGridPagination.module.scss";
import TitleWithSeparator from "../TitleWithSeparator/TitleWithSeparator";
import ProductCard from "@/components/UI/ProductCard/ProductCard";
import Pagination from "@/components/UI/Pagination/Pagination";
import robotsList from "@/public/data/products.json";
import useDeviceType from "@/hooks/useDeviceType";
import { useRouter } from "next/navigation";

export default function ProductCategoryGridPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const { isTabletView, isMobileView } = useDeviceType();

  const productsPerPage = isMobileView ? 1 : isTabletView ? 2 : 4;

  const totalPages = Math.ceil(robotsList.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = robotsList.slice(indexOfFirstProduct, indexOfLastProduct);
  const router = useRouter();
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleShowAll = () => {
    router.push('/catalog');
  };

  return (
    <section className={styles.container}>
      <TitleWithSeparator
        title="Категории продукции"
        addButton="Посмотреть все модели"
        onClick={handleShowAll} 
      />

      <div className={styles.grid}>
        {currentProducts.map((robot) => (
          <ProductCard key={robot.id} robot={robot} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
}