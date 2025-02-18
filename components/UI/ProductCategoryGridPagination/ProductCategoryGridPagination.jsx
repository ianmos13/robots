"use client";
import {useEffect, useState} from "react";
import styles from "./ProductCategoryGridPagination.module.scss";
import TitleWithSeparator from "../TitleWithSeparator/TitleWithSeparator";
import ProductCard from "@/components/UI/ProductCard/ProductCard";
import Pagination from "@/components/UI/Pagination/Pagination";
import useDeviceType from "@/hooks/useDeviceType";
import { useRouter } from "next/navigation";
import {useMediaQuery} from "react-responsive";
import useProducts from '@/hooks/useProducts';
export default function ProductCategoryGridPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const isThreeElements = useMediaQuery({ query: '(max-width: 1440px)' });
  const isTwoElements = useMediaQuery({ query: '(max-width: 1099px)' });
  const isOneElement = useMediaQuery({ query: '(max-width: 799px)' });
  const { isTabletView, isMobileView } = useDeviceType();
  const [productsPerPage, setIsProductsPerPage] = useState(4);
  const { products, error, loading } = useProducts();
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const router = useRouter();

  useEffect(() => {
    if(isOneElement) return setIsProductsPerPage(1)
    if(isTwoElements) return setIsProductsPerPage(2)
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