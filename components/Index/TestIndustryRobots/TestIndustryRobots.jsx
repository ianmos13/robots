import React from "react";
import styles from "./TestIndustryRobots.module.scss";

const TestIndustryRobots = () => {
  return (
    <section className={styles.container}>
      <div className={styles.testIndustryRobots}>
        {" "}
        <div className={styles.textContent}>
          <div className={styles.title}>
            {" "}
            <h1>
              Испытайте
              <br />
              промышленных
              <br />
              роботов в действии
            </h1>
          </div>
          <div className={styles.description}>
            {" "}
            <p>
              Пройдите тест-драйв и убедитесь в их эффективности для вашего
              производства.
            </p>
            <p>
              Реальные задачи, персональная настройка и профессиональная
              консультация. Оцените возможности промышленных роботов на
              практике!
            </p>
          </div>
          <div>
            {" "}
            <button>Взять на тест-драйв</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestIndustryRobots;
