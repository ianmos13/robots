import React from "react";
import styles from "./OfferSection.module.scss";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";
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
      <div className={styles.takeOfferText}>{text}</div>
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
