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

export default function ProductCategoryGridPagination({ title, ids }) {
  const [currentPage, setCurrentPage] = useState(1);
  const isThreeElements = useMediaQuery({ query: '(max-width: 1280px)' });
  const isTwoElements = useMediaQuery({ query: '(max-width: 1099px)' });
  const isOneElement = useMediaQuery({ query: '(max-width: 799px)' });
  const { isTabletView, isMobileView } = useDeviceType();
  const [productsPerPage, setIsProductsPerPage] = useState(4);
  const { products, error, loading } = useProducts();

  const selectedProducts = ids && ids.length > 0 ? products.filter((p) =>
    ids.some(e => e.toString() === p.id.toString())
  ) : products
  const totalPages = Math.ceil(selectedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = selectedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
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
        title={title}
        addButton="Посмотреть все модели"
        onClick={handleShowAll}
      />

      <div className={styles.grid}>
        {currentProducts.map((robot, index) => (
          <div key={index} className={styles.productCard}>
            <ProductCard robot={robot} />
          </div>
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