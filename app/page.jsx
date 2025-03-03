import MainBanner from "@/components/Index/MainBanner/MainBanner";
import ProductCategories from "@/components/Index/ProductCategories/ProductCategories";
import TestIndustryRobots from "@/components/Index/TestIndustryRobots/TestIndustryRobots";
import CrpAutomation from "@/components/Index/CrpAutomation/CrpAutomation";
import Projects from "@/components/Index/Projects/Projects";
import LeaveRequestBanner from "@/components/UI/LeaveRequestBanner/LeaveRequestBanner";
import ProductCategoryGridSlider from "@/components/UI/ProductCategoryGridSlider/ProductCategoryGridSlider"
import ProductCategoryGridPagination from "@/components/UI/ProductCategoryGridPagination/ProductCategoryGridPagination";
import LeasingPartners from "@/components/Index/LeasingPartners/LeasingPartners";
import NewsIndex from "@/components/Index/News/NewsIndex";
import ContactUs from "@/components/UI/ContactUs/ContactUs";
import styles from "@/styles/Home.module.scss"
import Question from '@/components/UI/Question/Question'
import catalogData  from '@/public/data/catalogData.json';

export default function Home() {
  return (
    <>
      <MainBanner />
      <ProductCategories />
      <TestIndustryRobots />
      <CrpAutomation />
      <Projects />
      <div className={`${styles.leaveRequestBannerContainer} ${styles.leaveWhiteRequestBannerContainer}`}>
        <LeaveRequestBanner data={bannerData} />
      </div>
      <ProductCategoryGridSlider />
      {/*<div className={styles.productPaginationGridContainer}>*/}
      {/*  <ProductCategoryGridPagination*/}
      {/*      title="Категории продукции"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={styles.leaveRequestBannerContainer}>
        <LeaveRequestBanner data={secondBannerData} />
      </div>
      <LeasingPartners />
      <NewsIndex />
      <Question faqData={catalogData['/index']?.questions} theme={'index'}/>
      <ContactUs />
    </>
  );
}

const bannerData = {
    title: "Робот приедет на ваше предприятие бесплатно",
    text: "Наш робот и технические специалисты приезжают на Вашу территорию и проводят выездную демонстрацию работы на Вашем предприятии",
    buttonText: "Заказать выездную демонстрацию"
}

const secondBannerData = {
    title: "Приглашаем на тестовую сварку ваших изделий нашим роботом",
    text: "Тестовая сварка (MIG/MAG, TIG, лазер) и другие виды обработки (фрезеровка, резка) ваших деталей в нашем демо-зале",
    buttonText: "Тестировать робота"
}