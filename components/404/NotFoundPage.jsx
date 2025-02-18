"use client"
import styles from "./NotFoundPage.module.scss";
import ContactUs from "../UI/ContactUs/ContactUs";
import { useRouter } from "next/navigation";
export default function NotFoundPage() {
    const router = useRouter();
    const handleBack = () => {
        router.push("/");
      };
  return (
    <>
      <div className={styles.NotFoundPageContainer}>
        <div className={styles.NotFoundPageContainerInner}>
          <div className={styles.titleBlue}>404</div>
          <div className={styles.titleBlack}>Страница&nbsp;не&nbsp;найдена</div>
          <div className={styles.description}>
            Возможно, она устарела, была удалена, или был введен неверный адрес
            в адресной строке.
          </div>
        </div>
        <div className={styles.btn} onClick={handleBack}>
          Перейти на главную
          <img src="/images/icons/next-arrow-white.svg" alt="" />
        </div>
      </div>
      <ContactUs />
    </>
  );
}
