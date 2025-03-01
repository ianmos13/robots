import React, {useState} from "react";
import styles from "./OfferSection.module.scss";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";
import {sanitizeData} from "@/utils/sanitizeHtmlText";


export default function OfferSection({ text }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (

    <>
    <div className={styles.takeOfferContainer}>
      <div
          className={styles.takeOfferText}
          dangerouslySetInnerHTML={{ __html: sanitizeData(text) }}
      />
      <button className={styles.ctaButton} onClick={handleOpenModal}>Получить предложение</button>
    </div>
    <RequestModal
        isOpen={isModalOpen}
        text={"Получить предложение"}
        onClose={handleCloseModal}
      />
    </>
  );
}
