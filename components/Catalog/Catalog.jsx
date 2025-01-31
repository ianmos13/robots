"use client";
import React, { useState, useEffect } from "react";
import styles from "./Catalog.module.scss";
import categories from "@/public/data/products-catgories.json";
import robotsList from "@/public/data/products.json";
import CategoryTags from "../UI/CategoryTags/CategoryTags";
import Filters from "./Filters/Filters";
import ProductCard from "../UI/ProductCard/ProductCard";
import ProductCardLong from "../UI/ProductCardLong/ProductCardLong";
import Pagination from "@/components/UI/Pagination/Pagination";
import useDeviceType from "@/hooks/useDeviceType";
import LeaveRequestBanner from "../UI/LeaveRequestBanner/LeaveRequestBanner";
import Question from "../UI/Question/Question";
import ContactUs from "../UI/ContactUs/ContactUs";
import FiltersModal from "./FiltersModal/FiltersModal";
import CompletedProjectsSlider from "./CompletedProjectsSlider/CompletedProjectsSlider";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeView, setActiveView] = useState("cardView");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robotsList);
  const [currentPage, setCurrentPage] = useState(1);
  const { isTabletView, isMobileView, isDescktopView } = useDeviceType();
  const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);

  const allCategories = [{ key: "all", name: "Все роботы" }, ...categories];

  const productsPerPage = isMobileView ? 6 : isTabletView ? 8 : 12;
  const totalPages = Math.ceil(filteredRobots.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredRobots.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const removeFilter = (filter) => {
    setSelectedFilters((prev) => prev.filter((item) => item !== filter));
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  useEffect(() => {
    let filtered = robotsList;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (robot) => robot.category === selectedCategory
      );
    }

    selectedFilters.forEach((filter) => {
      if (filter.startsWith("Область применения: ")) {
        const application = filter.replace("Область применения: ", "");
        filtered = filtered.filter((r) => r.application === application);
      }
      if (filter.startsWith("Кол-во осей: ")) {
        const axes = parseInt(filter.replace("Кол-во осей: ", ""), 10);
        filtered = filtered.filter((r) => r.axes === axes);
      }
      if (filter.startsWith("Грузоподъёмность: ")) {
        const [min, max] = filter
          .replace("Грузоподъёмность: ", "")
          .replace(" кг", "")
          .split("-")
          .map(Number);
        filtered = filtered.filter(
          (r) => r.payloadRange >= min && r.payloadRange <= max
        );
      }
      if (filter.startsWith("Охват: ")) {
        const [min, max] = filter
          .replace("Охват: ", "")
          .replace(" мм", "")
          .split("-")
          .map(Number);
        filtered = filtered.filter(
          (r) => r.reachRange >= min && r.reachRange <= max
        );
      }
      if (filter.startsWith("Вес: ")) {
        const weight = parseInt(
          filter.replace("Вес: ", "").replace(" кг", ""),
          10
        );
        filtered = filtered.filter((r) => r.weight === weight);
      }
    });

    setFilteredRobots(filtered);
    setCurrentPage(1);
  }, [selectedCategory, selectedFilters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderProducts = () => {
    return currentProducts.map((robot, index) => (
      <React.Fragment key={robot.id}>
        {activeView === "cardView" ? (
          <ProductCard robot={robot} />
        ) : (
          <ProductCardLong robot={robot} />
        )}

        {((isMobileView &&
          (index === 2 ||
            (index === currentProducts.length - 1 && index < 2))) ||
          (isTabletView &&
            (index === 3 ||
              (index === currentProducts.length - 1 && index < 3))) ||
          (isDescktopView &&
            (index === 5 ||
              (index === currentProducts.length - 1 && index < 5)))) && (
          <div className={styles.bannerContainer}>
            <LeaveRequestBanner />
          </div>
        )}
      </React.Fragment>
    ));
  };

  return (
    <section className={styles.container}>
      <div className={styles.categoryContainer}>
        <h3>Категории роботов</h3>
        <div className={styles.tagsConainer}>
          <CategoryTags
            categories={allCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </div>

      <div className={styles.productContainer}>
        <div className={styles.header}>
          <h3>Каталог роботов</h3>
          <div className={styles.selectViewContainer}>
            <div
              className={`${styles.cardView} ${
                activeView === "cardView" ? styles.active : ""
              }`}
              onClick={() => handleViewChange("cardView")}>
              <img
                src={
                  activeView === "cardView"
                    ? "/images/icons/card-view-active.svg"
                    : "/images/icons/card-view-inactive.svg"
                }
                alt="Card View"
              />
            </div>
            <div
              className={`${styles.rowView} ${
                activeView === "rowView" ? styles.active : ""
              }`}
              onClick={() => handleViewChange("rowView")}>
              <img
                src={
                  activeView === "rowView"
                    ? "/images/icons/row-view-active.svg"
                    : "/images/icons/row-view-inactive.svg"
                }
                alt="Row View"
              />
            </div>
          </div>
        </div>

        <div className={styles.selectedFillterContainer}>
          {(isTabletView || isMobileView) && (
            <div
              className={styles.filterButton}
              onClick={() => setFiltersModalOpen(true)}>
              <img src="/images/icons/mobile-filters.svg" alt="Фильтры" />
            </div>
          )}
          {selectedFilters.length > 0 ? (
            <>
              {selectedFilters.map((filter, index) => (
                <div
                  key={index}
                  className={styles.active}
                  onClick={() => removeFilter(filter)}>
                  {filter}
                  <img src="/images/icons/x-blue.svg" alt="Удалить" />
                </div>
              ))}
              <div className={styles.default} onClick={clearFilters}>
                Очистить всё
                <img src="/images/icons/x.svg" alt="Очистить все" />
              </div>
            </>
          ) : (
            <div className={styles.default}>Нет активных фильтров</div>
          )}
        </div>

        <div className={styles.productContainer}>
          {isDescktopView && (
            <Filters
              selectedFilters={selectedFilters}
              onChangeFilters={setSelectedFilters}
            />
          )}

          {!isDescktopView && (
            <FiltersModal
              isOpen={isFiltersModalOpen}
              onClose={() => setFiltersModalOpen(false)}
              selectedFilters={selectedFilters}
              onApply={(newFilters) => {
                setSelectedFilters(newFilters);
                setFiltersModalOpen(false);
              }}
            />
          )}

          <div className={styles.productContainerInner}>
            <div
              className={`${styles.products} ${
                activeView === "rowView" ? styles.rowView : ""
              }`}>
              {currentProducts.length > 0 ? (
                renderProducts()
              ) : (
                <p className={styles.noProducts}>Продукты не найдены</p>
              )}
            </div>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}

            <div className={styles.addInfoContainer}>
              <div className={styles.addInfo}>
                Функция мгновенной коррекции сварочных параметров может
                использоваться для сварки сложных изделий, где требуется
                мгновенное изменение тока и напряжения непосредственно во врем
                сварочного процесса. Необходимо лишь задать новые сварочные
                параметры в требуемой точке и во время сварочного процесса
                именно в этом месте произойдет мгновенное изменение тока и
                напряжения.
              </div>
              <div className={styles.addInfoList}>
                <ul>
                  <li>Высокое качество и эстетику лицевых сварочных швов;</li>
                  <li>Высокую производительность и скорость сварки;</li>
                  <li>На устранение дефектов сварочных швов;</li>
                  <li>Сварка листов 1,0 мм проволокой диаметром 1,2 мм;</li>
                  <li>
                    Улучшенная ремонтопригодность позволяет смазывать оси робота
                    без съема горелки;
                  </li>
                  <li>Быстрый, легкий в обслуживании дизайн;</li>
                </ul>
              </div>
              <div className={styles.addInfoСonclusion}>
                Бескомпромиссное качество роботизированной сварки и разработки
                компании в области робототехники, сварочных технологий и
                оборудования привели к появлению новейших технологий, которые
                перевели роботизированную сварку на качественно новый уровень и
                обеспечила:
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompletedProjectsSlider />
      <Question faqData={faqData} />
      <ContactUs />
    </section>
  );
}

const faqData = [
  {
    question: "Почему промышленная автоматизация важна",
    answer:
      "Промышленная автоматизация позволяет повысить производительность...",
  },
  {
    question: "Область применения систем автоматизации",
    answer: "Системы автоматизации используются в автомобилестроении...",
  },
  {
    question: "Развитие сферы роботизации",
    answer:
      "Роботизация активно развивается благодаря внедрению искусственного интеллекта...",
  },
  {
    question: "Какие преимущества даёт автоматизация?",
    answer:
      "Снижение затрат, повышение качества продукции, ускорение процессов...",
  },
];
