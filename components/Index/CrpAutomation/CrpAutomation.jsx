import React from "react";
import styles from "./CrpAutomation.module.scss";

const CrpAutomation = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>CRP AUTOMATION RUSSIA</div>
        <div className={styles.category}>O Компании</div>
      </div>

      <div className={styles.description}>
        Мы являемся представителем и официальным дистрибьютором завода
        промышленных роботов CRP на территории России, Беларуссии, Казахстана,
        Кыргызстана и Армении. Роботы CRP используются в различных отраслях
        промышленности, включая мебельное производство, нефтегазовую отрасль,
        электронику, машиностроение, пищевую промышленность и многое другое.
      </div>

      <div className={styles.crpAutomation}>
        <div className={styles.leftColumn}>
          <img
            src="/images/CrpAutomation.svg"
            className={styles.image}
            alt="CRP Automation"
          />
        </div>

        <div className={styles.centerBlock}>
          <div className={styles.videoWrapper}>
            <video autoPlay muted loop controls={false} style={{ width: "100%" }}>
              <source
                src="https://s3-figma-videos-production-sig.figma.com/video/1026790075068458266/TEAM/a4c9/e0ac/-db43-44cb-830e-b496539a502f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2QmQh1iCp-t7~rWg6ar3BW~eQhkMZHp7nPq5g7mO69zyYdB~Mjc8mWJejLMN5qXL1baSM-f~cG08b1hnBvFPHxaIA8AOhUgG7Y6KGdHIkwrXat8GpiTVdKXFJsbBhP-ezf5lKRLbCDLo8Sh36TOPkdNzLiKMd~HDwYIgtsuRF2yxvR1UNspMmwPYfnxBenLPvpAzIT0EJkjxrZNDzWnOA~9bwBOBKUfnM65LyzZbwHkVJ-baQtKtKA3W~~BcYe6zRVEq~vF1eMyFfvb55uVvxa7zKLoJFysjs401zL14FUlj77aM4cujrJE0wCCPHRspVRGFctJPe7AgewJY1-P0w__"
                type="video/mp4"
              />
            </video>
            {/* <div className={styles.playIcon}>
              <img src="/images/icons/play.svg" alt="play" />
            </div> */}
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.feature}>
            <img src="/images/icons/garanty.svg" alt="Гарантия" />
            <div className={styles.featureDescription}>
              Гарантия 2 года с момента запуска у вас на производстве
            </div>
          </div>

          <div className={styles.feature}>
            <img src="/images/icons/garanty24_7.png" alt="Сервис" />
            <div className={styles.featureDescription}>
              Гарантийное и постгарантийное обслуживание 24/7
            </div>
          </div>

          <div className={styles.feature}>
            <img src="/images/icons/best_price.svg" alt="Цена-качество" />
            <div className={styles.featureDescription}>
              Оптимальное соотношение «цена-качество». Короткий период
              окупаемости
            </div>
          </div>

          <div className={styles.feature}>
            <img src="/images/icons/high-speed.svg" alt="Скорость" />
            <div className={styles.featureDescription}>
              Высокая скорость обработки заказов
            </div>
          </div>
        </div>
      </div>

      <button className={styles.ctaButton}>
        Получить бесплатную консультацию
      </button>
    </section>
  );
};

export default CrpAutomation;
