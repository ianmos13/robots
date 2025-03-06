"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Article.module.scss";
import BackButton from "./BackButton/BackButton";
import NewsCenter from "./NewsCenter/NewsCenter";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal"

import CollaborationCard from "@/components/Article/CollaborationCard/CollaborationCard";

export default function Article({ data, backButtonOptions }) {
  const router = useRouter();

  const handleBack = () => {
    router.push(backButtonOptions.link);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
      <>
    <section className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.buttonContainer}>
            <BackButton onBack={handleBack} title={backButtonOptions.title} />
        </div>
        <div className={styles.newsContainer}>
            <NewsCenter data={data} />
        </div>
        <div className={styles.sidebarContainer}>
            <CollaborationCard handleOpenModal={handleOpenModal} />
        </div>
      </div>
    </section>
    
    <RequestModal
       isOpen={isModalOpen}
       text={"Получить бесплатную консультацию"}
       onClose={handleCloseModal}
     />
    </>
  );
}
