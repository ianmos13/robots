"use client";
import styles from "./ConfirmModal.module.scss";

export default function ConfirmModal({ isOpen, message, onConfirm, onCancel }) {
  if (!isOpen) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onCancel} className={styles.closeBtn}>
          <img src="/images/icons/x.svg" alt="Close" />
        </button>
        <div className={styles.message}>{message}</div>
        <div className={styles.buttonContainer}>
          <button onClick={onConfirm} className={styles.confirmButton}>
            Да хочу
          </button>
          <button onClick={onCancel} className={styles.cancelButton}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}
