"use client";
import NewsCard from "@/components/UI/NewsCard/NewsCard";
import { useState, useEffect } from "react";
import useDeviceType from "@/hooks/useDeviceType";
import styles from "./Articles.module.scss";
import Pagination from "@/components/UI/Pagination/Pagination";
import useNews from "@/hooks/useNews";
import useConvertedDate from "@/hooks/useConvertedDate";

export default function Articles({ title }) {
  const { isTabletView, isMobileView } = useDeviceType();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = isMobileView ? 3 : isTabletView ? 6 : 9;

  const { news, error, loading } = useNews();

  const totalPages = Math.ceil(news.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleNews = news.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    sessionStorage.setItem("articlesPage", page.toString());
  };


  useEffect(() => {
    const storedPage = sessionStorage.getItem("articlesPage");
    if (storedPage) {
      setCurrentPage(Number(storedPage));
    }
  }, []);

  return (
    <section className={styles.container} id="paginationScroll">
      <div className={styles.newsContainer}>
        <h1>{title}</h1>
        {news?.length > 0 && (
          <>
            <div className={styles.newsList}>
              {visibleNews.map((newsItem, index) => (
                <NewsCard
                  key={index}
                  id={newsItem.id}
                  image={newsItem.image}
                  title={newsItem.title}
                  description={newsItem.description}
                  date={useConvertedDate(newsItem.date)}
                  slug={newsItem.slug}
                />
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                newsPageTheme={true}
                scrollToId="paginationScroll"
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
