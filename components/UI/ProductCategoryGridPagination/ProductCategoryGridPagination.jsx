"use client";
import {useEffect, useState} from "react";
import styles from "./ProductCategoryGridPagination.module.scss";
import TitleWithSeparator from "../TitleWithSeparator/TitleWithSeparator";
import ProductCard from "@/components/UI/ProductCard/ProductCard";
import Pagination from "@/components/UI/Pagination/Pagination";
import robotsList from "@/public/data/products.json";
import useDeviceType from "@/hooks/useDeviceType";
import { useRouter } from "next/navigation";
import {useMediaQuery} from "react-responsive";

export default function ProductCategoryGridPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const isThreeElements = useMediaQuery({ query: '(max-width: 1280px)' });
  const { isTabletView, isMobileView } = useDeviceType();
  const [productsPerPage, setIsProductsPerPage] = useState(4);

  const totalPages = Math.ceil(robotsList.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = robotsList.slice(indexOfFirstProduct, indexOfLastProduct);
  const router = useRouter();

  useEffect(() => {
    if(isMobileView) return setIsProductsPerPage(1)
    if(isTabletView) return setIsProductsPerPage(2)
    if(isThreeElements) return setIsProductsPerPage(3)
    return setIsProductsPerPage(4)

  }, [isThreeElements]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleShowAll = () => {
    router.push('/catalog');
  };

  return (
    <section className={styles.container}>
      <TitleWithSeparator
        theme="uniq"
        title="Категории продукции"
        addButton="Посмотреть все модели"
        onClick={handleShowAll}
      />

      <div className={styles.grid}>
        {currentProducts.map((robot, index) => (
          <ProductCard key={index} robot={robot} />
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