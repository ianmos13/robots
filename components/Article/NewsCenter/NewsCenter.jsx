"use client";

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
import useConvertedDate from "@/hooks/useConvertedDate";
import {isValidSubData} from "@/utils/validation";

export default function NewsCenter({ data }) {

  return (
    <div className={styles.centerContainer}>
      <NewsInfo date={useConvertedDate(data?.date)} author={data?.author} />
      <h1>{data?.title}</h1>
      { data?.videoUrl && (<Banner videoUrl={data.videoUrl} />) }

      { data?.detailsH2 && isValidSubData(data.detailsH2) && (
          <div className={styles.newsContent} style={{order: data.detailsH2.sort}}>
              { data.detailsH2?.substance && isValidSubData(data.detailsH2?.substance) && (<Substance substance={data?.detailsH2?.substance} />) }
              { data.detailsH2?.takeOfferText && (<OfferSection text={data.detailsH2.takeOfferText} />) }
              { data.imagesSlider && isValidSubData(data?.imagesSlider) && (<ImageSection imgSrc={data.imagesSlider} />) }
          </div>
      )}
      { data?.detailsH3 && isValidSubData(data?.detailsH3) && (
          <div className={styles.newsContent} style={{order: data.detailsH3.sort}}>
            <DetailsH3 details={data.detailsH3} />
          </div>
      )}
      { data?.quotationText && (<Quotation text={data.quotationText} />) }
      { data?.rows && (<SameRobotSlider robots={data.rows}/>) }
      { data?.detailsH4 && isValidSubData(data?.detailsH4) && (
          <div className={styles.newsContent} style={{order: data.detailsH4.sort}}>
            <DetailsH4 details={data.detailsH4} />
          </div>
      ) }
      <div className={styles.newsContent}>
        <LeaveRequestBanner size={'news'}/>
      </div>
      { data?.technicalVideoUrl && (<VideoSection src={data.technicalVideoUrl}/> )}
      { data?.technicalTable && (<ScrollableTable data={data.technicalTable} /> )}
      <SubscribeAndShare />
    </div>
  );
}
