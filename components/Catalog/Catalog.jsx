import dynamic from "next/dynamic";
import Pagination from "@/components/UI/Pagination/Pagination";
import useDeviceType from "@/hooks/useDeviceType";
import useProducts from "@/hooks/useProducts";
import { useSearchParams, usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryTags from "../UI/CategoryTags/CategoryTags";
import ContactUs from "../UI/ContactUs/ContactUs";
import LeaveRequestBanner from "../UI/LeaveRequestBanner/LeaveRequestBanner";
import ProductCard from "../UI/ProductCard/ProductCard";
import ProductCardLong from "../UI/ProductCardLong/ProductCardLong";
import Question from "../UI/Question/Question";
import styles from "./Catalog.module.scss";
import Filters from "./Filters/Filters";
import FiltersModal from "./FiltersModal/FiltersModal";
import catalogData from "@/public/data/catalogData.json";
import { sanitizeData } from "@/utils/sanitizeHtmlText";
import Image from "next/image";
import useBanner from "@/hooks/useBanner";
import useBlocks from "@/hooks/useBlocks"; 

const CompletedProjectsSlider = dynamic(
  () => import("./CompletedProjectsSlider/CompletedProjectsSlider"),
  { ssr: false, loading: () => <p>Загрузка проектов...</p> }
);

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const buildRootCategoryMapping = (categories) => {
  const mapping = {};
  categories.forEach((cat) => {
    if (cat.parent) {
      let current = cat;
      while (current.parent) {
        const parent = categories.find((c) => c.key === current.parent);
        if (!parent) break;
        current = parent;
      }
      const rootKey = current.key;
      if (!mapping[rootKey]) mapping[rootKey] = [];
      if (cat.key !== rootKey) mapping[rootKey].push(cat.key);
    }
  });
  return mapping;
};

const subtitles = {
  "/promyshlennye-roboty": null,
  "/promyshlennye-roboty/roboty-dlya-obsluzhivaniya-stankov":
    "Каталог роботов для обслуживания станков",
  "/promyshlennye-roboty/koboty": "Каталог коллаборативных роботов",
  "/promyshlennye-roboty/scara": "Каталог роботов SCARA",
  "/promyshlennye-roboty/roboty-manipulyatory": "Каталог роботов манипуляторов",
  "/promyshlennye-roboty/roboty-dlya-paletirovaniya":
    "Каталог роботов для паллетирования",
  "/promyshlennye-roboty/frezernye-roboty": "Каталог роботов для фрезеровки",
  "/promyshlennye-roboty/polirovochnye-roboty": "Каталог роботов для полировки",
  "/promyshlennye-roboty/svarochnye-roboty": "Каталог сварочных роботов",
  "/pozicionery": null,
  "/pozicionery/povorotnye": "Каталог поворотных позиционеров",
  "/pozicionery/tryohosevye": "Каталог трёхосевых позиционеров",
  "/pozicionery/dvuhosevye": "Каталог двухосевых позиционеров",
  "/pozicionery/odnoosevye": "Каталог одноосевых позиционеров",
};

export default function Catalog({ categories, title }) {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeView, setActiveView] = useState("cardView");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isTabletView, isMobileView, isDesktopView } = useDeviceType();
  const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { banner, error, loading } = useBanner();
  const { blocks, error: blocksError, loading: blocksLoading } = useBlocks(); 
  console.log(blocks)
  const selectedBanner = useMemo(() => {
    if (banner && banner.length > 0) {
      const bannerForCategory = banner.find(b => b.category === selectedCategory);
      return bannerForCategory || banner.find(b => !b.category);
    }
    return null;
  }, [banner, selectedCategory]);

  const rootCategoryMapping = useMemo(
    () => buildRootCategoryMapping(categories),
    [categories]
  );
  const currentCatalogData = catalogData[pathname];


  const aboutData = useMemo(() => {
    if (blocks && blocks.length > 0) {
      const block = blocks.find((item) =>
        Object.keys(item).includes(selectedCategory)
      );
      if (block && block[selectedCategory] && block[selectedCategory].about) {
        return block[selectedCategory].about;
      }
    }
    const fallbackData = catalogData[pathname.toLowerCase()];
    return fallbackData && fallbackData.about ? fallbackData.about : null;
  }, [blocks, selectedCategory, pathname]);

  const faqData = useMemo(() => {
    if (blocks && blocks.length > 0) {
      const block = blocks.find((item) =>
        Object.keys(item).includes(selectedCategory)
      );
      if (
        block &&
        block[selectedCategory] &&
        block[selectedCategory].questions &&
        block[selectedCategory].questions.length > 0
      ) {
        return block[selectedCategory].questions;
      }
    }
    const fallbackData = catalogData[pathname.toLowerCase()];
    return fallbackData && fallbackData.questions ? fallbackData.questions : null;
  }, [blocks, selectedCategory, pathname]);

  const visibleCategories = useMemo(() => {
    const lowerPath = pathname.toLowerCase();
    if (
      lowerPath.includes("pozicionery") ||
      lowerPath.includes("pozitsionery")
    ) {
      return categories.filter((cat) => cat.parent === "2");
    }
    if (lowerPath.includes("promyshlennye-roboty")) {
      return categories.filter((cat) => cat.parent === "1");
    }
    return categories.filter(
      (cat) => !["15", "16", "19", "18", "17"].includes(cat.key)
    );
  }, [categories, pathname]);

  useEffect(() => {
    let newCategory = "all";
    if (categories && categories.length > 0) {
      const segments = pathname.split("/").filter(Boolean);
      const slug = segments[segments.length - 1].toLowerCase();
      const foundCategory = categories.find((cat) => {
        if (cat.link) {
          const linkSegments = cat.link.split("/").filter(Boolean);
          const linkSlug = linkSegments[linkSegments.length - 1].toLowerCase();
          return linkSlug === slug;
        }
        return false;
      });
      if (foundCategory) newCategory = foundCategory.key;
    }
    if (newCategory !== selectedCategory) setSelectedCategory(newCategory);
  }, [searchParams, pathname, categories, selectedCategory]);

  const partiallyFilteredRobots = useMemo(() => {
    if (!products) return [];
    let filtered = [...products];
    if (selectedCategory && selectedCategory !== "all") {
      if (selectedCategory === "1" || selectedCategory === "2") {
        const allowed = [selectedCategory, ...rootCategoryMapping[selectedCategory]] || [selectedCategory];
        filtered = filtered.filter((robot) => allowed.includes(robot.category));
      } else {
        if (selectedCategory === "6")
          filtered = filtered.filter((robot) => ["6", "5", "4", "3"].includes(robot.category))
        else
          filtered = filtered.filter((robot) => robot.category === selectedCategory);
      }
    }
    const payloadFilter = selectedFilters.find((f) =>
      f.startsWith("Грузоподъёмность: ")
    );
    if (payloadFilter) {
      const [min, max] = payloadFilter
        .replace("Грузоподъёмность: ", "")
        .replace(" кг", "")
        .split("-")
        .map(Number);
      filtered = filtered.filter(
        (r) => r.payloadRange >= min && r.payloadRange <= max
      );
    }
    const reachFilter = selectedFilters.find((f) => f.startsWith("Охват: "));
    if (reachFilter) {
      const [min, max] = reachFilter
        .replace("Охват: ", "")
        .replace(" мм", "")
        .split("-")
        .map(Number);
      filtered = filtered.filter(
        (r) => r.reachRange >= min && r.reachRange <= max
      );
    }
    const weightFilter = selectedFilters.find((f) => f.startsWith("Вес: "));
    if (weightFilter) {
      const weight = parseInt(
        weightFilter.replace("Вес: ", "").replace(" кг", ""),
        10
      );
      filtered = filtered.filter((r) => r.weight === weight);
    }
    const voltageFilter = selectedFilters.find((f) =>
      f.startsWith("Напряжение: ")
    );
    if (voltageFilter) {
      const voltage = voltageFilter
        .replace("Напряжение: ", "")
        .replace(" В", "");
      filtered = filtered.filter((r) => r.voltage === voltage);
    }
    return filtered;
  }, [products, selectedCategory, selectedFilters, rootCategoryMapping]);

  const uniqueApplications = useMemo(() => {
    const apps = new Set();
    partiallyFilteredRobots.forEach((product) => {
      if (product.application) {
        if (Array.isArray(product.application)) {
          product.application.forEach((app) => apps.add(app));
        } else {
          apps.add(product.application);
        }
      }
    });
    return Array.from(apps);
  }, [partiallyFilteredRobots]);

  const uniqueVoltages = useMemo(() => {
    const voltagesSet = new Set();
    partiallyFilteredRobots.forEach((product) => {
      if (product.voltage) voltagesSet.add(product.voltage);
    });
    return Array.from(voltagesSet).sort();
  }, [partiallyFilteredRobots]);

  const uniqueAxes = useMemo(() => {
    const axesSet = new Set();
    partiallyFilteredRobots.forEach((product) => {
      if (product.axes) axesSet.add(product.axes);
    });
    return Array.from(axesSet).sort((a, b) => a - b);
  }, [partiallyFilteredRobots]);

  const prevFilters = usePrevious(selectedFilters);
  useEffect(() => {
    if (
      prevFilters !== undefined &&
      JSON.stringify(prevFilters) !== JSON.stringify(selectedFilters)
    ) {
      setCurrentPage(1);
      sessionStorage.setItem("catalogPage", "1");
    }
  }, [selectedFilters, prevFilters]);

  useEffect(() => {
    const storedPage = sessionStorage.getItem("catalogPage");
    if (storedPage) {
      setCurrentPage(Number(storedPage));
    }
  }, []);

  const productsPerPage = isMobileView ? 6 : isTabletView ? 8 : 12;
  const totalPages = Math.ceil(
    partiallyFilteredRobots.length / productsPerPage
  );
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = partiallyFilteredRobots.slice(
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    sessionStorage.setItem("catalogPage", page.toString());
  };

  const renderProducts = () => {
    return currentProducts.map((robot, index) => (
      <React.Fragment key={robot.id}>
        {activeView === "cardView" ? (
          <ProductCard
            robot={robot}
            categories={categories}
            theme={"catalog"}
          />
        ) : (
          <ProductCardLong robot={robot} categories={categories} />
        )}
        {((isMobileView &&
          (index === 2 ||
            (index === currentProducts.length - 1 && index < 2))) ||
          (isTabletView &&
            (index === 3 ||
              (index === currentProducts.length - 1 && index < 3))) ||
          (isDesktopView &&
            (index === 5 ||
              (index === currentProducts.length - 1 && index < 5)))) && (
          <div className={styles.bannerContainer}>
              <LeaveRequestBanner size="medium" data={selectedBanner} />
          </div>
        )}
      </React.Fragment>
    ));
  };

  const maxReach = useMemo(() => {
    if (!products || products.length === 0) return 1000;
    return Math.max(...products.map((product) => product.reachRange));
  }, [products]);

  const maxPayload = useMemo(() => {
    if (!products || products.length === 0) return 2500;
    return Math.max(...products.map((product) => product.payloadRange));
  }, [products]);

  const isDisplayCategories = [
    "/promyshlennye-roboty",
    "/pozicionery",
  ].includes(pathname.toLowerCase());
  const subTitle = subtitles[pathname.toLowerCase()];
  const headerStyle =
    pathname.toLowerCase() === "/promyshlennye-roboty" ||
    pathname.toLowerCase() === "/pozicionery"
      ? { justifyContent: "flex-end" }
      : {};

  return (
    <section className={styles.container} id="paginationScroll">
      {isDisplayCategories &&
        categories &&
        categories.length > 0 &&
        products.length > 0 && (
          <div className={styles.categoryContainer}>
            <h1>{title}</h1>
            <CategoryTags
              categories={visibleCategories}
              selectedCategory={selectedCategory}
            />
          </div>
        )}
      {products.length > 0 && (
        <div className={styles.productContainer}>
          <div className={styles.header} style={headerStyle}>
            {subTitle && <h1>{subTitle}</h1>}
            <div className={styles.selectViewContainer}>
              <div
                className={`${styles.cardView} ${
                  activeView === "cardView" ? styles.active : ""
                }`}
                onClick={() => handleViewChange("cardView")}>
                <Image
                  src={
                    activeView === "cardView"
                      ? "/images/icons/card-view-active.svg"
                      : "/images/icons/card-view-inactive.svg"
                  }
                  alt="Card View"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className={`${styles.rowView} ${
                  activeView === "rowView" ? styles.active : ""
                }`}
                onClick={() => handleViewChange("rowView")}>
                <Image
                  src={
                    activeView === "rowView"
                      ? "/images/icons/row-view-active.svg"
                      : "/images/icons/row-view-inactive.svg"
                  }
                  alt="Row View"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className={styles.selectedFillterContainer}>
            {(isTabletView || isMobileView) && (
              <div
                className={styles.filterButton}
                onClick={() => setFiltersModalOpen(true)}>
                <Image
                  src="/images/icons/mobile-filters.svg"
                  alt="Фильтры"
                  width={24}
                  height={24}
                />
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
                    <Image
                      src="/images/icons/x-blue.svg"
                      alt="Удалить"
                      width={16}
                      height={16}
                    />
                  </div>
                ))}
                <div className={styles.default} onClick={clearFilters}>
                  Очистить всё
                  <Image
                    src="/images/icons/x.svg"
                    alt="Очистить все"
                    width={16}
                    height={16}
                  />
                </div>
              </>
            ) : (
              <div className={styles.default}>Нет активных фильтров</div>
            )}
          </div>
          <Swiper
            className={styles.selectedFilterSwiperContainer}
            direction="horizontal"
            slidesPerView="auto"
            spaceBetween={10}>
            <SwiperSlide className={styles.swiperSlide}>
              <div
                className={styles.filterButton}
                onClick={() => setFiltersModalOpen(true)}>
                <Image
                  src="/images/icons/mobile-filters.svg"
                  alt="Фильтры"
                  width={24}
                  height={24}
                />
              </div>
            </SwiperSlide>
            {selectedFilters.length > 0 ? (
              <>
                {selectedFilters.map((filter, index) => (
                  <SwiperSlide className={styles.swiperSlide} key={index}>
                    <div
                      className={styles.active}
                      onClick={() => removeFilter(filter)}>
                      {filter}
                      <Image
                        src="/images/icons/x-blue.svg"
                        alt="Удалить"
                        width={16}
                        height={16}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperSlide className={styles.swiperSlide}>
                  <div className={styles.default} onClick={clearFilters}>
                    Очистить всё
                    <Image
                      src="/images/icons/x.svg"
                      alt="Очистить все"
                      width={16}
                      height={16}
                    />
                  </div>
                </SwiperSlide>
              </>
            ) : (
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.default}>Нет активных фильтров</div>
              </SwiperSlide>
            )}
          </Swiper>
          <div className={styles.productContainer}>
            <div className={styles.filterContainer}>
              {isDesktopView ? (
                <Filters
                  selectedFilters={selectedFilters}
                  onChangeFilters={setSelectedFilters}
                  maxReach={maxReach}
                  maxPayload={maxPayload}
                  applications={uniqueApplications}
                  axes={uniqueAxes}
                  voltages={uniqueVoltages}
                />
              ) : (
                <FiltersModal
                  isOpen={isFiltersModalOpen}
                  onClose={() => setFiltersModalOpen(false)}
                  selectedFilters={selectedFilters}
                  onApply={(newFilters) => {
                    setSelectedFilters(newFilters);
                    setFiltersModalOpen(false);
                  }}
                  maxReach={maxReach}
                  maxPayload={maxPayload}
                  applications={uniqueApplications}
                  axes={uniqueAxes}
                  voltages={uniqueVoltages}
                />
              )}
            </div>
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
                  catalogPageTheme={true}
                  scrollToId="paginationScroll"
                />
              )}
             
              {aboutData && (
                <div
                  className={styles.addInfoContainer}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeData(aboutData),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
      <CompletedProjectsSlider />
      {faqData && <Question faqData={faqData} />}
      <ContactUs theme={"catalog"} />
    </section>
  );
}
