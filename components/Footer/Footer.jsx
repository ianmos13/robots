'use client'

import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import ContactUsButtons from "@/components/UI/ContactUsButtons/ContactUsButtons";
import DefaultButton from "@/components/UI/Buttons/DefaultButton/DefaultButton";

const Footer = () => {
  return (
      <footer className={styles.container}>
          <div className={styles.footerBody}>
              <div className={styles.footerLogo}>
                  <Link href="/" className={styles.logoContainer}>
                      <img
                          className={styles.image}
                          src="/images/logo-white.svg"
                          alt="Logo"
                      />
                  </Link>
              </div>
              <div className={styles.linksBox}>
                  <div className={styles.filterElements}>
                      {footerFilterElements.map((element, idx) => (
                          <div key={idx} className={styles.filterElement} >
                              <div className={styles.headerLink}>
                                  {element.title}
                              </div>
                              <div key={idx} className={styles.filterChildrenElements} >
                                  {element.children.map((link, idx) => (
                                      <div key={idx} className={styles.linkElement} >
                                          <Link
                                              href={link.link}
                                              className={styles.link}
                                          >
                                              {link.title}
                                          </Link>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className={styles.linkElements}>
                      {footerLinks.map((link, idx) => (
                          <div key={idx} className={styles.linkElement} >
                              <Link
                                  href={link.link}
                                  className={styles.headerLink}
                              >
                                  {link.title}
                              </Link>
                          </div>
                      ))}
                  </div>
              </div>
              <div className={styles.footerInfo}>
                  <div className={styles.footerContacts}>
                      <div className={styles.footerContactsInfo}>
                          <ContactUsButtons theme="footer" />
                          <div className={styles.footerContactsEmail}>
                              info<span>@</span>crp-robot.ru
                          </div>
                      </div>
                      <div className={styles.footerContactsButton}>
                        <DefaultButton
                            theme={'white'}
                            onClick={()=>{}}
                            text={'Оставить заявку'} />
                      </div>
                  </div>
                  <div className={styles.footerContactsLinks}>
                      <div className={styles.companyInfo}>
                          <div className={styles.companyInfoText}>
                              Все права защищены
                          </div>
                          <div className={styles.companyInfoText}>
                              ИНН: 7751180991
                          </div>
                      </div>
                      <div className={styles.linksInfo}>
                          <div className={styles.linksBlock}>
                              <Link
                                  href="/privacy-policy"
                                  className={styles.link}
                              >
                                  Политика конфиденциальности
                              </Link>
                              <Link
                                  href="/return-policy"
                                  className={styles.link}
                              >
                                  Политика возврата товаров и возврата средств
                              </Link>
                          </div>
                          <div className={styles.companyInfoText}>
                              ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «СМТ»
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  );
};

export default Footer;

const footerFilterElements = [
    {
        id: 1,
        title: "Промышленные роботы",
        children: [
            {
                id: 10,
                title: "Все промышленные роботы",
                link: "/",
            },
            {
                id: 11,
                title: "Сварочные роботы",
                link: "/",
            },
            {
                id: 12,
                title: "Роботы для обслуживания станков",
                link: "/",
            },
            {
                id: 13,
                title: "Роботы для палетирования",
                link: "/",
            },
            {
              id: 14,
              title: "Полировочные роботы",
              link: "/",
            },
            {
                id: 15,
                title: "Фрезерные роботы",
                link: "/",
            },
            {
                id: 16,
                title: "Scara",
                link: "/",
            },
            {
                id: 17,
                title: "Коллаборативные роботы",
                link: "/",
            },
            {
                id: 18,
                title: "Роботы манипуяторы",
                link: "/",
            },
        ],
    },
    {
        id: 2,
        title: "Позиционеры",
        children: [
            {
                id: 20,
                title: "Все позиционеры",
                link: "/",
            },
            {
                id: 21,
                title: "Одноосевые",
                link: "/",
            },
            {
                id: 22,
                title: "Двухосевые",
                link: "/",
            },
            {
                id: 23,
                title: "Трёхосевые",
                link: "/",
            },
            {
                id: 24,
                title: "Поворотные",
                link: "/",
            },
            {
                id: 25,
                title: "Трек для робота",
                link: "/",
            },
            {
                id: 26,
                title: "Портал для робота",
                link: "/",
            }
        ],
    },
    {
        id: 3,
        title: "Комплексные решения",
        children: [

            {
                id: 30,
                title: "Сварочные решения",
                link: "/",
            },
            {
                id: 31,
                title: "Обслуживание станков",
                link: "/",
            },
            {
                id: 32,
                title: "Шлифовка и полировка",
                link: "/",
            },
            {
                id: 33,
                title: "Лазерная и плазменная резка",
                link: "/",
            },
            {
                id: 34,
                title: "Обслуживание конвейерных систем",
                link: "/",
            },
            {
                id: 35,
                title: "Паллетирование",
                link: "/",
            },
            {
                id: 36,
                title: "Маркировка",
                link: "/",
            },
            {
                id: 37,
                title: "Фрезеровка",
                link: "/",
            },
            {
                id: 38,
                title: "Укладка и паллетирование",
                link: "/",
            },
            {
                id: 39,
                title: "Производство поддонов",
                link: "/",
            }
        ],
    },
    {
        id: 4,
        title: "Проекты автоматизации",
        children: [
            {
                id: 40,
                title: "Машиностроение и металлообработка",
                link: "/",
            },
            {
                id: 41,
                title: "Пищевая промышленность",
                link: "/",
            },
            {
                id: 42,
                title: "Деревообрабатывающая промышленность",
                link: "/",
            },
            {
                id: 43,
                title: "Пластиковая промышленность",
                link: "/",
            },
        ],
    },
];
const footerLinks = [
    {
        id: 1,
        title: "Периферийное оборудование",
        link: "/",
    },
    {
        id: 2,
        title: "О компании",
        link: "/",
    },
    {
        id: 3,
        title: "Блог",
        link: "/",
    },
    {
        id: 4,
        title: "Новости",
        link: "/news",
    },
    {
        id: 5,
        title: "Контакты",
        link: "/contacts",
    },
];