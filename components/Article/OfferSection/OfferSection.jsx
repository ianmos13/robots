import React, {useState} from "react";
import styles from "./OfferSection.module.scss";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";
import DOMPurify from "isomorphic-dompurify";
import he from "he";

export default function OfferSection({ text }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const decodedTakeOfferText = he.decode(text);
  const sanitizedTakeOfferText = DOMPurify.sanitize(decodedTakeOfferText);

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
          dangerouslySetInnerHTML={{ __html: sanitizedTakeOfferText }}
      />
      <button className={styles.ctaButton} onClick={handleOpenModal}>Получить предложение</button>
    </div>
    <RequestModal
        isOpen={isModalOpen}
        text={"Оставьте заявку"}
        onClose={handleCloseModal}
      />
    </>
  );
}
