"use client";
import NewsCard from "@/components/UI/NewsCard/NewsCard";
import { useState, useEffect } from "react";
import useDeviceType from "@/hooks/useDeviceType";
import styles from "./News.module.scss";
import newsData from "@/public/data/news.json";
import Pagination from "@/components/UI/Pagination/Pagination";
import ContactUs from "../UI/ContactUs/ContactUs";

export default function News() {
  const { isTabletView, isMobileView } = useDeviceType();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = isMobileView ? 3 : isTabletView ? 6 : 9;
  const totalPages = Math.ceil(newsData.length / productsPerPage);


  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleNews = newsData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className={styles.container}>
      <div className={styles.newsContainer}>
        <h3>Новости</h3>
        <div className={styles.newsList}>
          {visibleNews.map((news) => (
            <NewsCard
              key={news.id}
              id={news.id}
              image={news.image}
              title={news.title}
              date={news.date}
              slug={news.slug}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
      <ContactUs />
    </section>
  );
}