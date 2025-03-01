"use client";
import BlogCard from "@/components/UI/BlogCard/BlogCard";
import { useState } from "react";
import useDeviceType from "@/hooks/useDeviceType";
import styles from "./Blog.module.scss";
import Pagination from "@/components/UI/Pagination/Pagination";
import useBlog from "@/hooks/useBlog";
import useConvertedDate from "@/hooks/useConvertedDate";

export default function Blog({ title }) {
  const { isTabletView, isMobileView } = useDeviceType();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = isMobileView ? 3 : isTabletView ? 6 : 9;

  const { blog, error, loading } = useBlog();

  const totalPages = Math.ceil(blog.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleItems = blog.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className={styles.container}>
      <div className={styles.blogContainer}>
        <h1>{title}</h1>
        {/* {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error.message}</p>} */}
        {blog?.length > 0 && (
          <>
            <div className={styles.blogList}>
              {visibleItems.map((item, index) => (
                <BlogCard
                  key={index}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  date={useConvertedDate(item.date)}
                  slug={item.slug}
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
          </>
        )}
      </div>
    </section>
  );
}
