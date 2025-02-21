"use client";
import {useEffect, useRef, useState} from "react";
import styles from "./ProductCategoryGridPagination.module.scss";
import TitleWithSeparator from "../TitleWithSeparator/TitleWithSeparator";
import ProductCard from "@/components/UI/ProductCard/ProductCard";
import Pagination from "@/components/UI/Pagination/Pagination";
import useDeviceType from "@/hooks/useDeviceType";
import { useRouter } from "next/navigation";
import {useMediaQuery} from "react-responsive";
import useProducts from '@/hooks/useProducts';
import Slider from "@/components/UI/Slider/Slider";

export default function ProductCategoryGridPagination({ title, ids }) {
  const [currentPage, setCurrentPage] = useState(1);
  const isThreeElements = useMediaQuery({ query: '(max-width: 1280px)' });
  const isTwoElements = useMediaQuery({ query: '(max-width: 1024px)' });
  const isOneElement = useMediaQuery({ query: '(max-width: 799px)' });
  const [productsPerPage, setIsProductsPerPage] = useState(4);
  const { products, error, loading } = useProducts();
  const swiperRef = useRef()

  const selectedProducts = ids && ids.length > 0 ? products.filter((p) =>
    ids.some(e => e.toString() === p.id.toString())
  ) : products
  const totalPages = Math.ceil(selectedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = selectedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const router = useRouter();
  const [isHoveredCard, setIsHoveredCard] = useState(false);

  useEffect(() => {
    if(isOneElement) return setIsProductsPerPage(1)
    if(isTwoElements) return setIsProductsPerPage(2)
    if(isThreeElements) return setIsProductsPerPage(3)
    return setIsProductsPerPage(4)

  }, [isThreeElements]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if(isTwoElements || isOneElement){
      const swiper = swiperRef.current
      const activeIndex = swiper.realIndex;

      const newIndex = (page - 1) * productsPerPage
      console.log("handlePageChange", newIndex, activeIndex)
      if (activeIndex > newIndex) {
        for(let i = 0; i < activeIndex - newIndex ; i+=1)
          swiper.slidePrev();
      } else if (activeIndex < newIndex) {
        for(let i = 0; i < newIndex - activeIndex ; i+=1)
          swiper.slideNext();
      }
    }
  };

  const hoverCard = (value) => {
    setIsHoveredCard(value)
  }

  const handleSwiperChange = () => {
    if(isTwoElements || isOneElement){
      const newPage = Math.floor(swiperRef.current.realIndex / productsPerPage) + 1
      setCurrentPage(newPage);
    }
  }

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
      <div className={styles.slider}>
        <Slider
            swiperRef={swiperRef}
            items={selectedProducts}
            hoverCard={hoverCard}
            onChangeSlider={handleSwiperChange}
        />
      </div>
      {totalPages > 1 && (
        <div className={`${styles.pagination} ${isHoveredCard ? styles.paginationInactive : ''}`}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </section>
  );
}