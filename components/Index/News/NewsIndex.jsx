"use client";
import styles from "./NewsIndex.module.scss";
import { useState, useEffect } from "react";
import TitleWithSeparator from "@/components/UI/TitleWithSeparator/TitleWithSeparator";
import LoadMoreButton from "@/components/UI/Buttons/LoadMoreButton/LoadMoreButton";
import NewsCard from "@/components/UI/NewsCard/NewsCard";
import useDeviceType from "@/hooks/useDeviceType";
import newsData from "@/public/data/news.json";
import { useRouter } from "next/navigation";

export default function NewsIndex() {
  const [itemsToShow, setItemsToShow] = useState(3);
  const { isTabletView, isMobileView } = useDeviceType();
  const router = useRouter();

  useEffect(() => {
    setItemsToShow(isMobileView ? 2 : isTabletView ? 2 : 3);
  }, [isTabletView, isMobileView]);

  const visibleNews = newsData.slice(0, itemsToShow);

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + (isMobileView ? 1 : isTabletView ? 2 : 3));
  };

  const handleShowAll = () => {
    router.push("/news");
  };

  return (
    <section className={styles.container}>
      <TitleWithSeparator
        theme={'news'}
        title="Новости"
        addButton="Все новости"
        onClick={handleShowAll}
      />
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
      {itemsToShow < newsData.length && (
        <div className={styles.loadButtonContainer}>
          <div className={styles.loadButton}>
            <LoadMoreButton onClick={handleShowMore} />
          </div>
        </div>
      )}
    </section>
  );
}
