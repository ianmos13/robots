import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SingleNews.module.scss";
import BackButton from "./BackButton/BackButton";
import NewsCenter from "./NewsCenter/NewsCenter";
import Sidebar from "./Sidebar/Sidebar";
import ContactUsContainer from "./ContactUsContainer/ContactUsContainer";

export default function SingleNews({ data }) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/news");
  };

  return (
    <section className={styles.container}>
      <div className={styles.containerInner}>
        <BackButton onBack={handleBack} />
        <NewsCenter data={data} />
        <Sidebar />
      </div>
      <ContactUsContainer />
    </section>
  );
}
