import React, { useState } from "react";
import styles from "./RequestModal.module.scss";

const RequestModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreement, setAgreement] = useState(false);


  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isOpen) return null;

  
  const stopPropagation = (e) => e.stopPropagation();

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!name.trim()) {
      alert("Пожалуйста, введите ваше имя");
      return;
    }
    if (!phone.trim()) {
      alert("Пожалуйста, введите номер телефона");
      return;
    }
    if (!email.trim()) {
      alert("Пожалуйста, введите электронную почту");
      return;
    }
    if (!agreement) {
      alert("Необходимо согласиться с политикой");
      return;
    }

  
    console.log("Форма отправлена:", {
      name,
      phone,
      email,
      agreement,
    });

    
    setFormSubmitted(true);
  };

 
  const handleClose = () => {
   
    setName("");
    setPhone("");
    setEmail("");
    setAgreement(false);
    setFormSubmitted(false);

    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={stopPropagation}>
        <button className={styles.closeBtn} onClick={handleClose}>
          <img src="/images/icons/x.svg" alt="Close" />
        </button>

        {formSubmitted ? (
          <div className={styles.header}>
             <div className={styles.title}>ВАША ЗАЯВКА ОТПРАВЛЕНА</div>
             <div className={styles.desciption}>В ближайшее время наш<br></br> специалист свяжется с вами</div>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.title}>Оставьте заявку</div>
              <div className={styles.desciption}>Заполните поля данных</div>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ваше имя*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Электронная почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className={styles.agreement}>
                <input
                  type="checkbox"
                  checked={agreement}
                  onChange={(e) => setAgreement(e.target.checked)}
                  required
                />
                <div className={styles.info}>
                  Заполняя форму, вы соглашаетесь на{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    обработку персональных данных
                  </a>
                </div>
              </label>
              <button type="submit" className={styles.submitBtn}>
                Отправить
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestModal;
