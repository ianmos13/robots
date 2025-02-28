'use client'
import Pagination from '@/components/UI/Pagination/Pagination'
import useCategories from '@/hooks/useCategories'
import useDeviceType from '@/hooks/useDeviceType'
import useProducts from '@/hooks/useProducts'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import CategoryTags from '../UI/CategoryTags/CategoryTags'
import ContactUs from '../UI/ContactUs/ContactUs'
import LeaveRequestBanner from '../UI/LeaveRequestBanner/LeaveRequestBanner'
import ProductCard from '../UI/ProductCard/ProductCard'
import ProductCardLong from '../UI/ProductCardLong/ProductCardLong'
import Question from '../UI/Question/Question'
import styles from './Catalog.module.scss'
import CompletedProjectsSlider from './CompletedProjectsSlider/CompletedProjectsSlider'
import Filters from './Filters/Filters'
import FiltersModal from './FiltersModal/FiltersModal'
import catalogData from '@/public/data/catalogData.json'
import {sanitizeData} from "@/utils/sanitizeHtmlText";
import {makeAllCategories} from "@/utils/makeAllCategories";

export default function Catalog() {
  const { categories, loading } = useCategories();
  const { products } = useProducts();
  const [selectedType, setSelectedType] = useState('promyshlennyeRoboty');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [activeView, setActiveView] = useState('cardView');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isTabletView, isMobileView, isDesktopView } = useDeviceType();
  const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);
  const [title, setTitle] = useState("Категории роботов");
  const [currentCatalogData, setCurrentCatalogData] = useState(catalogData.promyshlennyeRoboty);
  const searchParams = useSearchParams();

  useEffect(() => {
    const catalogTypeParam = searchParams.get('type');
    if (catalogTypeParam) setSelectedType(catalogTypeParam);
    const categoryParam = searchParams.get('category');
    setSelectedCategory(categoryParam ? categoryParam : 'all');

    let filterParams = [];
    const axesParam = searchParams.get('axes');
    if (axesParam) {
      filterParams = [...filterParams, `Кол-во осей: ${axesParam}`];
    }
    const scopeParam = searchParams.get('scopes');
    if (scopeParam) {
      filterParams = [
        ...filterParams,
        `Область применения: ${applicationFilters[scopeParam]}`,
      ];
    }
    const uniqueFilterParams = Array.from(new Set(filterParams));
    setSelectedFilters(uniqueFilterParams);
  }, [searchParams]);

  useEffect(() => {
    setFilteredCategories(makeAllCategories(categories[selectedType]))
    setTitle(selectedType === 'promyshlennyeRoboty' ? "Категории промышленных роботов" : selectedType ==='pozitsionery' ? "Категории позиционеров" : "Категории роботов")
    setCurrentCatalogData(catalogData[`${selectedType}${selectedCategory}`])
  },[loading, selectedCategory, selectedType])

  const filteredRobots = useMemo(() => {
    let filtered = products || [];

    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(robot => robot.category === selectedCategory);
    }

    selectedFilters.forEach(filter => {
      if (filter.startsWith('Область применения: ')) {
        const application = filter.replace('Область применения: ', '');
        filtered = filtered.filter(r => r.application === application);
      }
      if (filter.startsWith('Кол-во осей: ')) {
        const axes = parseInt(filter.replace('Кол-во осей: ', ''), 10);
        filtered = filtered.filter(r => r.axes === axes);
      }
      if (filter.startsWith('Грузоподъёмность: ')) {
        const [min, max] = filter
          .replace('Грузоподъёмность: ', '')
          .replace(' кг', '')
          .split('-')
          .map(Number);
        filtered = filtered.filter(
          r => r.payloadRange >= min && r.payloadRange <= max
        );
      }
      if (filter.startsWith('Охват: ')) {
        const [min, max] = filter
          .replace('Охват: ', '')
          .replace(' мм', '')
          .split('-')
          .map(Number);
        filtered = filtered.filter(
          r => r.reachRange >= min && r.reachRange <= max
        );
      }
      if (filter.startsWith('Вес: ')) {
        const weight = parseInt(
          filter.replace('Вес: ', '').replace(' кг', ''),
          10
        );
        filtered = filtered.filter(r => r.weight === weight);
      }
    });
    return filtered;
  }, [selectedCategory, selectedFilters, products]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredRobots]);

  const productsPerPage = isMobileView ? 6 : isTabletView ? 8 : 12;
  const totalPages = Math.ceil(filteredRobots.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredRobots.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleViewChange = view => {
    setActiveView(view);
  };

  const removeFilter = filter => {
    setSelectedFilters(prev => prev.filter(item => item !== filter));
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const renderProducts = () => {
    return currentProducts.map((robot, index) => (
      <React.Fragment key={robot.id}>
        {activeView === 'cardView' ? (
          <ProductCard robot={robot} theme={'catalog'} />
        ) : (
          <ProductCardLong robot={robot} />
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
            <LeaveRequestBanner size={'medium'} />
          </div>
        )}
      </React.Fragment>
    ));
  };

  // Вычисление максимального охвата среди всех продуктов
  const maxReach = useMemo(() => {
    if (!products || products.length === 0) return 1000;
    return Math.max(...products.map(product => product.reachRange));
  }, [products]);

  return (
    <section className={styles.container}>
      {filteredCategories.length > 0 && products.length > 0 && (
        <div className={styles.categoryContainer}>
          <h3>{title}</h3>
          <CategoryTags
            categories={filteredCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      )}
      {products.length > 0 && (
        <div className={styles.productContainer}>
          <div className={styles.header}>
            <h3>Каталог роботов</h3>
            <div className={styles.selectViewContainer}>
              <div
                className={`${styles.cardView} ${
                  activeView === 'cardView' ? styles.active : ''
                }`}
                onClick={() => handleViewChange('cardView')}
              >
                <img
                  src={
                    activeView === 'cardView'
                      ? '/images/icons/card-view-active.svg'
                      : '/images/icons/card-view-inactive.svg'
                  }
                  alt='Card View'
                />
              </div>
              <div
                className={`${styles.rowView} ${
                  activeView === 'rowView' ? styles.active : ''
                }`}
                onClick={() => handleViewChange('rowView')}
              >
                <img
                  src={
                    activeView === 'rowView'
                      ? '/images/icons/row-view-active.svg'
                      : '/images/icons/row-view-inactive.svg'
                  }
                  alt='Row View'
                />
              </div>
            </div>
          </div>

          <div className={styles.selectedFillterContainer}>
            {(isTabletView || isMobileView) && (
              <div
                className={styles.filterButton}
                onClick={() => setFiltersModalOpen(true)}
              >
                <img src='/images/icons/mobile-filters.svg' alt='Фильтры' />
              </div>
            )}
            {selectedFilters.length > 0 ? (
              <>
                {selectedFilters.map((filter, index) => (
                  <div
                    key={index}
                    className={styles.active}
                    onClick={() => removeFilter(filter)}
                  >
                    {filter}
                    <img src='/images/icons/x-blue.svg' alt='Удалить' />
                  </div>
                ))}
                <div className={styles.default} onClick={clearFilters}>
                  Очистить всё
                  <img src='/images/icons/x.svg' alt='Очистить все' />
                </div>
              </>
            ) : (
              <div className={styles.default}>Нет активных фильтров</div>
            )}
          </div>
          <Swiper
            className={styles.selectedFilterSwiperContainer}
            direction='horizontal'
            slidesPerView='auto'
            spaceBetween={10}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <div
                className={styles.filterButton}
                onClick={() => setFiltersModalOpen(true)}
              >
                <img src='/images/icons/mobile-filters.svg' alt='Фильтры' />
              </div>
            </SwiperSlide>
            {selectedFilters.length > 0 ? (
              <>
                {selectedFilters.map((filter, index) => (
                  <SwiperSlide className={styles.swiperSlide} key={index}>
                    <div
                      className={styles.active}
                      onClick={() => removeFilter(filter)}
                    >
                      {filter}
                      <img src='/images/icons/x-blue.svg' alt='Удалить' />
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperSlide className={styles.swiperSlide}>
                  <div className={styles.default} onClick={clearFilters}>
                    Очистить всё
                    <img src='/images/icons/x.svg' alt='Очистить все' />
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
              {isDesktopView && (
                <Filters
                  selectedFilters={selectedFilters}
                  onChangeFilters={setSelectedFilters}
                  maxReach={maxReach}
                />
              )}
              {!isDesktopView && (
                <FiltersModal
                  isOpen={isFiltersModalOpen}
                  onClose={() => setFiltersModalOpen(false)}
                  selectedFilters={selectedFilters}
                  onApply={newFilters => {
                    setSelectedFilters(newFilters);
                    setFiltersModalOpen(false);
                  }}
                />
              )}
            </div>
            <div className={styles.productContainerInner}>
              <div
                className={`${styles.products} ${
                  activeView === 'rowView' ? styles.rowView : ''
                }`}
              >
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
                />
              )}
              { currentCatalogData?.about && (
                  <div
                      className={styles.addInfoContainer}
                      dangerouslySetInnerHTML={{ __html: sanitizeData(currentCatalogData.about) }}
                  />
              )}
            </div>
          </div>
        </div>
      )}
      <CompletedProjectsSlider />
      {currentCatalogData?.questions && (<Question faqData={currentCatalogData?.questions} />)}
      <ContactUs theme={'catalog'} />
    </section>
  );
}

const applicationFilters = {
  welding: 'Сварка',
  laserCutting: 'Лазерная резка',
  plasmaWaterjet: 'Плазменная и гидроабразивная резка',
  contactWelding: 'Контактная сварка',
  palletizing: 'Паллетирование',
  cnc: 'Обслуживание станков с ЧПУ',
  injection: 'Обслуживание ТПА',
  bendingStampingPress: 'Обслуживание гибочного и штамповочного пресса',
  conveyorLine: 'Обслуживание конвейерной линии',
  milling: 'Фрезеровка',
  polishing: 'Полировка',
  metalBending: 'Гибка металла',
  scara: 'SCARA',
};
