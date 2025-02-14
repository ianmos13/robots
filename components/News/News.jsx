"use client";
import NewsCard from "@/components/UI/NewsCard/NewsCard";
import { useState } from "react";
import useDeviceType from "@/hooks/useDeviceType";
import styles from "./News.module.scss";
import Pagination from "@/components/UI/Pagination/Pagination";
import useApi from "@/hooks/useApi";
// import newsData from "@/public/data/news.json"; //static data

export default function News() {
  const { isTabletView, isMobileView } = useDeviceType();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = isMobileView ? 3 : isTabletView ? 6 : 9;

  const { data, error, loading } = useApi("news", "GET");
  const newsData = data && data.data ? data.data : [];

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
        {/* {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error.message}</p>} */}
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
            newsPageTheme={true}
          />
        )}
      </div>
    </section>
  );
}
