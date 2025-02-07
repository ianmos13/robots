import React from "react";
import styles from "./NewsCenter.module.scss";
import NewsInfo from "../NewsInfo/NewsInfo";
import Banner from "../Banner/Banner";
import Substance from "../Substance/Substance";
import OfferSection from "../OfferSection/OfferSection";
import ImageSection from "../ImageSection/ImageSection";
import DetailsH3 from "../DetailsH3/DetailsH3";
import Quotation from "../Quotation/Quotation";
import SameRobotSlider from "../SameRobotSlider/SameRobotSlider";
import DetailsH4 from "../DetailsH4/DetailsH4";
import VideoSection from "../VideoSection/VideoSection";
import LeaveRequestBanner from "@/components/UI/LeaveRequestBanner/LeaveRequestBanner";
import ScrollableTable from "../ScrollableTable/ScrollableTable";
import SubscribeAndShare from "@/components/UI/SubscribeAndShare/SubscribeAndShare";

export default function NewsCenter({ data }) {
  return (
    <div className={styles.centerContainer}>
      <NewsInfo date={data?.date} author={data?.author} />
      <div className={styles.newsContent}>
        <h2>{data?.title}</h2>
        { data?.videoUrl && (<Banner videoUrl={data.videoUrl} />) }
        { data?.substance && (<Substance substance={data.substance} />) }
        { data?.takeOfferText && (<OfferSection text={data.takeOfferText} />) }
        { data?.imgBeforeH2 && (<ImageSection imgSrc={data.imgBeforeH2} />) }
        { data?.detailsH3 && (<DetailsH3 details={data.detailsH3} />) }
      </div>
      <Quotation />
      <SameRobotSlider />
      <div className={styles.newsContent}>
          { data?.detailsH4 && (<DetailsH4 details={data?.detailsH4} />) }
      </div>
      <LeaveRequestBanner />
      <VideoSection />
      <ScrollableTable />
      <SubscribeAndShare />
    </div>
  );
}
