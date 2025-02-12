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
export default function Home() {
  return (
    <>
      <MainBanner />
      <ProductCategories />
      <TestIndustryRobots />
      <CrpAutomation />
      <Projects />
      <div className={`${styles.leaveRequestBannerContainer} ${styles.leaveWhiteRequestBannerContainer}`}>
        <LeaveRequestBanner />
      </div>
      <ProductCategoryGridSlider />
      <div className={styles.productPaginationGridContainer}>
        <ProductCategoryGridPagination />
      </div>
      <div className={styles.leaveRequestBannerContainer}>
        <LeaveRequestBanner />
      </div>
      <LeasingPartners />
      <NewsIndex />
      <ContactUs />
    </>
  );
}
