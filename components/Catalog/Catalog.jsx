'use client'
import Pagination from '@/components/UI/Pagination/Pagination'
import useDeviceType from '@/hooks/useDeviceType'
import useProducts from '@/hooks/useProducts'
import { useSearchParams, usePathname } from 'next/navigation'
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
import { sanitizeData } from '@/utils/sanitizeHtmlText'


const buildRootCategoryMapping = (categories) => {
  const mapping = {}
  categories.forEach(cat => {
    if (cat.parent) {
      let current = cat
      while (current.parent) {
        const parent = categories.find(c => c.key === current.parent)
        if (!parent) break
        current = parent
      }
      const rootKey = current.key
      if (!mapping[rootKey]) mapping[rootKey] = []
      if (cat.key !== rootKey) {
        mapping[rootKey].push(cat.key)
      }
    }
  })
  return mapping
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
}

export default function Catalog({ categories, title }) {
  const { products } = useProducts()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeView, setActiveView] = useState('cardView')
  const [selectedFilters, setSelectedFilters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const { isTabletView, isMobileView, isDesktopView } = useDeviceType()
  const [isFiltersModalOpen, setFiltersModalOpen] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const rootCategoryMapping = useMemo(() => buildRootCategoryMapping(categories), [categories])
  const currentCatalogData = catalogData[pathname]

  const visibleCategories = useMemo(() => {
    const lowerPath = pathname.toLowerCase()
    if (lowerPath.includes('pozicionery') || lowerPath.includes('pozitsionery')) {
      return categories.filter(cat => cat.parent === "2")
    }
    if (lowerPath.includes('promyshlennye-roboty')) {
      return categories.filter(cat => cat.parent === "1")
    }
    return categories.filter(cat => !["15", "16", "19", "18", "17"].includes(cat.key))
  }, [categories, pathname])

  useEffect(() => {
    let newCategory = "all"
    if (categories && categories.length > 0) {
      const segments = pathname.split('/').filter(Boolean)
      const slug = segments[segments.length - 1].toLowerCase()
      const foundCategory = categories.find(cat => {
        if (cat.link) {
          const linkSegments = cat.link.split('/').filter(Boolean)
          const linkSlug = linkSegments[linkSegments.length - 1].toLowerCase()
          return linkSlug === slug
        }
        return false
      })
      if (foundCategory) {
        newCategory = foundCategory.key
      }
    }
    if (newCategory !== selectedCategory) {
      setSelectedCategory(newCategory)
    }
  }, [searchParams, pathname, categories, selectedCategory])

  const filteredRobots = useMemo(() => {
    let filtered = products || []
    if (selectedCategory && selectedCategory !== 'all') {
   
      if (selectedCategory === "1" || selectedCategory === "2") {
        const allowed = rootCategoryMapping[selectedCategory] || []
        filtered = filtered.filter(robot => allowed.includes(robot.category))
      } else {
        filtered = filtered.filter(robot => robot.category === selectedCategory)
      }
     
    }
   
    selectedFilters.forEach(filter => {
      if (filter.startsWith('Область применения: ')) {
        const application = filter.replace('Область применения: ', '')
        filtered = filtered.filter(r =>
          Array.isArray(r.assignment) ? r.assignment.includes(application) : r.assignment === application )
      }
      if (filter.startsWith('Кол-во осей: ')) {
        const axes = parseInt(filter.replace('Кол-во осей: ', ''), 10)
        filtered = filtered.filter(r => r.axes === axes)
      }
      if (filter.startsWith('Грузоподъёмность: ')) {
        const [min, max] = filter
          .replace('Грузоподъёмность: ', '')
          .replace(' кг', '')
          .split('-')
          .map(Number)
        filtered = filtered.filter(r => r.payloadRange >= min && r.payloadRange <= max)
      }
      if (filter.startsWith('Охват: ')) {
        const [min, max] = filter
          .replace('Охват: ', '')
          .replace(' мм', '')
          .split('-')
          .map(Number)
        filtered = filtered.filter(r => r.reachRange >= min && r.reachRange <= max)
      }
      if (filter.startsWith('Вес: ')) {
        const weight = parseInt(filter.replace('Вес: ', '').replace(' кг', ''), 10)
        filtered = filtered.filter(r => r.weight === weight)
      }
    })
    return filtered
  }, [selectedCategory, selectedFilters, products, rootCategoryMapping])

  useEffect(() => {
    setCurrentPage(1)
    console.log(filteredRobots)
  }, [filteredRobots])

  const productsPerPage = isMobileView ? 6 : isTabletView ? 8 : 12
  const totalPages = Math.ceil(filteredRobots.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredRobots.slice(indexOfFirstProduct, indexOfLastProduct)

  const handleViewChange = view => {
    setActiveView(view)
  }

  const removeFilter = filter => {
    setSelectedFilters(prev => prev.filter(item => item !== filter))
  }

  const clearFilters = () => {
    setSelectedFilters([])
  }

  const handlePageChange = page => {
    setCurrentPage(page)
  }

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
    ))
  }

  const maxReach = useMemo(() => {
    if (!products || products.length === 0) return 1000
    return Math.max(...products.map(product => product.reachRange))
  }, [products])

  const maxPayload = useMemo(() => {
    if (!products || products.length === 0) return 2500
    return Math.max(...products.map(product => product.payloadRange))
  }, [products])
  const isDisplayCategories = pathname.toLowerCase() === "/promyshlennye-roboty/roboty-manipulyatory"
  const subTitle = subtitles[pathname.toLowerCase()]
  return (
    <section className={styles.container}>
      {isDisplayCategories && categories && categories.length > 0 && products.length > 0 && (
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
          <div className={styles.header}>
            {subTitle && (<h3>{subTitle}</h3>)}
            <div className={styles.selectViewContainer}>
              <div
                className={`${styles.cardView} ${activeView === 'cardView' ? styles.active : ''}`}
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
                className={`${styles.rowView} ${activeView === 'rowView' ? styles.active : ''}`}
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
                  <div key={index} className={styles.active} onClick={() => removeFilter(filter)}>
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
              <div className={styles.filterButton} onClick={() => setFiltersModalOpen(true)}>
                <img src='/images/icons/mobile-filters.svg' alt='Фильтры' />
              </div>
            </SwiperSlide>
            {selectedFilters.length > 0 ? (
              <>
                {selectedFilters.map((filter, index) => (
                  <SwiperSlide className={styles.swiperSlide} key={index}>
                    <div className={styles.active} onClick={() => removeFilter(filter)}>
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
              {isDesktopView ? (
                <Filters
                  selectedFilters={selectedFilters}
                  onChangeFilters={setSelectedFilters}
                  maxReach={maxReach}
                  maxPayload={maxPayload}
                />
              ) : (
                <FiltersModal
                  isOpen={isFiltersModalOpen}
                  onClose={() => setFiltersModalOpen(false)}
                  selectedFilters={selectedFilters}
                  onApply={newFilters => {
                    setSelectedFilters(newFilters)
                    setFiltersModalOpen(false)
                  }}
                  maxReach={maxReach}
                  maxPayload={maxPayload}
                />
              )}
            </div>
            <div className={styles.productContainerInner}>
              <div className={`${styles.products} ${activeView === 'rowView' ? styles.rowView : ''}`}>
                {currentProducts.length > 0 ? renderProducts() : <p className={styles.noProducts}>Продукты не найдены</p>}
              </div>
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  catalogPageTheme={true}
                />
              )}
              {currentCatalogData?.about && (
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
      {currentCatalogData?.questions && <Question faqData={currentCatalogData?.questions} />}
      <ContactUs theme={'catalog'} />
    </section>
  )
}

const subtitles = {
  "/promyshlennye-roboty": "Каталог промышленных роботов",
  "/promyshlennye-roboty/roboty-dlya-obsluzhivaniya-stankov": "Каталог роботов для обслуживания станков",
  "/promyshlennye-roboty/koboty": "Каталог коллаборативных роботов",
  "/promyshlennye-roboty/scara": "Каталог роботов SCARA",
  "/promyshlennye-roboty/roboty-manipulyatory": "Каталог роботов манипуляторов",
  "/promyshlennye-roboty/roboty-dlya-paletirovaniya": "Каталог роботов для паллетирования",
  "/promyshlennye-roboty/frezernye-roboty": "Каталог роботов для фрезеровки",
  "/promyshlennye-roboty/polirovochnye-roboty": "Каталог роботов для полировки",
  "/promyshlennye-roboty/svarochnye-roboty": "Каталог сварочных роботов",
  "/pozicionery": "Каталог позиционеров",
  "/pozicionery/povorotnye": "Каталог поворотных позиционеров",
  "/pozicionery/tryohosevye": "Каталог трёхосевых позиционеров",
  "/pozicionery/dvuhosevye": "Каталог двухосевых позиционеров",
  "/pozicionery/odnoosevye": "Каталог одноосевых позиционеров",
}