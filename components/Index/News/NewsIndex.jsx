"use client";
import styles from "./NewsIndex.module.scss";
import { useState, useEffect } from "react";
import TitleWithSeparator from "@/components/UI/TitleWithSeparator/TitleWithSeparator";
import LoadMoreButton from "@/components/UI/Buttons/LoadMoreButton/LoadMoreButton";
import NewsCard from "@/components/UI/NewsCard/NewsCard";
import useDeviceType from "@/hooks/useDeviceType";
import { useRouter } from "next/navigation";
import useNews from "@/hooks/useNews";
import useConvertedDate from "@/hooks/useConvertedDate";

export default function NewsIndex() {
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isClient, setIsClient] = useState(false); // Добавляем проверку для клиента
  const { isTabletView, isMobileView } = useDeviceType();
  const router = useRouter();
  const { news, error, loading } = useNews();

  useEffect(() => {
    setIsClient(true); // Устанавливаем в true, когда компонент загружается на клиенте
  }, []);

  // Переход от серверного рендера к клиентскому
  useEffect(() => {
    if (isClient) {
      setItemsToShow(isMobileView ? 2 : isTabletView ? 2 : 3);
    }
  }, [isMobileView, isTabletView, isClient]);

  const visibleNews = news.slice(0, itemsToShow);

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + (isMobileView ? 1 : isTabletView ? 2 : 3));
  };

  const handleShowAll = () => {
    router.push("/articles");
  };

  // Рендер только после того, как компонент загружен на клиенте
  if (!isClient) {
    return null; // Пока не в браузере, не рендерим компонент
  }

  if (news.length > 0) {
    return (
      <section className={styles.container}>
        <TitleWithSeparator
          theme={"news"}
          title="Новости"
          addButton="Все новости"
          onClick={handleShowAll}
        />
        <div className={styles.newsList}>
          {visibleNews.map((news, index) => (
            <NewsCard
              key={index}
              id={news.id}
              image={news.image}
              title={news.title}
              date={useConvertedDate(news.date)}
              slug={news.slug}
            />
          ))}
        </div>
        {itemsToShow < news.length && (
          <div className={styles.loadButtonContainer}>
            <div className={styles.loadButton}>
              <LoadMoreButton onClick={handleShowMore} theme={"gray"} />
            </div>
          </div>
        )}
      </section>
    );
  }

  return <p>No news available.</p>;
}
