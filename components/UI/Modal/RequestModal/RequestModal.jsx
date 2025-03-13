import { useState, useEffect } from "react";
import CheckBox from "@/components/UI/CustomCheckBox/CheckBox";
import CustomInput from "@/components/UI/CustomInput/CustomInput";
import styles from "./RequestModal.module.scss";

const RequestModal = ({ isOpen, onClose, text, productSlug }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [formReady, setFormReady] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isSubmittedPage =
  typeof window !== "undefined" && window.location.pathname.endsWith("/submitted/");


  useEffect(() => {
    if (isSubmittedPage) {
      setFormSubmitted(true);
    }
  }, [isSubmittedPage]);

  if (!isOpen) return null;

  const stopPropagation = (e) => e.stopPropagation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormReady(true);
    setError("");

    if (!validatePhone(phone)) {
      setError("Введите корректный номер телефона.");
      return;
    }
    if (!agreement) {
      setError("Подтвердите согласие на обработку данных.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          messageFormat: "modal",
          productSlug,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Ошибка при отправке формы.");
      }

      if (typeof window !== "undefined" && window.ym) {
        window.ym(62154340, "reachGoal", "B24_FORM_5_END");
      }

      setFormSubmitted(true);

      const currentPath =
      typeof window !== "undefined" ? window.location.pathname : "";
    const newUrl = currentPath.includes("/submitted")
      ? currentPath
      : currentPath.replace(/\/$/, "") + "/submitted";
    
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", newUrl);
    }

      setTimeout(handleClose, 2000);
    } catch (err) {
      setError(err.message || "Ошибка соединения. Попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
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

        {formSubmitted || isSubmittedPage ? (
          <div className={styles.header}>
            <div className={styles.title}>ВАША ЗАЯВКА ОТПРАВЛЕНА</div>
            <div className={styles.desciption}>
              В ближайшее время <br /> наш специалист свяжется с вами
            </div>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.title}>{text}</div>
              <div className={styles.desciption}>Заполните поля данных</div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <CustomInput
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                validate={() => {}}
              />
              <CustomInput
                type="tel"
                placeholder="Номер телефона*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                errorMessage={"Пожалуйста, корректно заполните поле!"}
                validate={validatePhone}
                checkForm={formReady}
              />
              <CustomInput
                type="email"
                placeholder="Электронная почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage={"Пожалуйста, корректно заполните поле!"}
                validate={validateEmail}
              />
              <div className={styles.checkBoxWrapper}>
                <CheckBox
                  value={agreement}
                  onChange={setAgreement}
                  checkForm={formReady}
                />
              </div>
              {error && <p className={styles.error}>{error}</p>}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isLoading}>
                {isLoading ? "Отправка..." : "Отправить"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestModal;

function validateName(name) {
  return name.trim().length > 0;
}

function validatePhone(phone) {
  const regex =
    /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  return regex.test(phone);
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
