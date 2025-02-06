'use client'

import React, {useEffect, useState} from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import ContactUsButtons from "@/components/UI/ContactUsButtons/ContactUsButtons";
import DefaultButton from "@/components/UI/Buttons/DefaultButton/DefaultButton";
import DropdownElement from "@/components/UI/DropdownElement/DropdownElement";
import {usePathname} from "next/navigation";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";

const Footer = () => {
    const pathname = usePathname();
    const [oldLink, setOldLink] = useState(null);

    const refs = footerFilterElements.reduce((acc, el) => {
        acc[el.ref] = false
        return acc
    }, {})
    const [isOpen, setIsOpen] = useState(refs)
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (pathname !== oldLink) {
            setOldLink(pathname);
            setIsOpen(refs)
        }
    }, [pathname]);

    const handleClickDropdown = async (refName) =>{
        setIsOpen({ ...refs, [refName]: !isOpen[refName] })
    }

    const handleClickModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
      <>
        <footer className={`${styles.container} ${isModalOpen ? "blurred" : ""}`}>
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
                              <div className={styles.desktopElement} >
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
                              <div className={styles.mobileElement}>
                                  <DropdownElement
                                      theme='blue'
                                      element={element}
                                      isOpen={isOpen[element.ref]}
                                      handleClick={handleClickDropdown}
                                  />
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
                            onClick={handleClickModal}
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
                  <div className={styles.footerContactsLinksTablet}>
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
                      <div className={styles.companyInfoText}>
                          ИНН: 7751180991
                      </div>
                      <div className={styles.companyInfoText}>
                          ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «СМТ»
                      </div>
                      <div className={styles.companyInfoText}>
                          Все права защищены
                      </div>
                  </div>
              </div>
          </div>
        </footer>
        <RequestModal
          isOpen={isModalOpen}
          text={"Оставьте заявку"}
          onClose={handleClickModal}
        />
      </>
    );
};

export default Footer;

const footerFilterElements = [
    {
        id: 1,
        title: "Промышленные роботы",
        ref: 'industrial',
        children: [
            {
                id: 10,
                title: "Все промышленные роботы",
                link: "/catalog",
            },
            {
                id: 11,
                title: "Сварочные роботы",
                link: "/catalog?category=welding",
            },
            {
                id: 12,
                title: "Роботы для обслуживания станков",
                link: "/catalog?category=maintenance",
            },
            {
                id: 13,
                title: "Роботы для палетирования",
                link: "/catalog?category=palletizing",
            },
            {
              id: 14,
              title: "Полировочные роботы",
              link: "/catalog?category=polishing",
            },
            {
                id: 15,
                title: "Фрезерные роботы",
                link: "/catalog?category=milling",
            },
            {
                id: 16,
                title: "Scara",
                link: "/catalog?category=scara",
            },
            {
                id: 17,
                title: "Коллаборативные роботы",
                link: "/catalog?category=collaborative",
            },
            {
                id: 18,
                title: "Роботы манипуляторы",
                link: "/catalog?category=manipulator",
            },
        ],
    },
    {
        id: 2,
        title: "Позиционеры",
        ref: 'positioners',
        children: [
            {
                id: 20,
                title: "Все позиционеры",
                link: "/catalog",
            },
            {
                id: 21,
                title: "Одноосевые",
                link: "/catalog?axes=1",
            },
            {
                id: 22,
                title: "Двухосевые",
                link: "/catalog?axes=2",
            },
            {
                id: 23,
                title: "Трёхосевые",
                link: "/catalog?axes=3",
            },
            {
                id: 24,
                title: "Поворотные",
                link: "/catalog",
            },
            {
                id: 25,
                title: "Трек для робота",
                link: "/catalog",
            },
            {
                id: 26,
                title: "Портал для робота",
                link: "/catalog",
            }
        ],
    },
    {
        id: 3,
        title: "Комплексные решения",
        ref: 'integrated',
        children: [

            {
                id: 30,
                title: "Сварочные решения",
                link: "/catalog?scopes=welding",
            },
            {
                id: 31,
                title: "Обслуживание станков",
                link: "/catalog?scopes=cnc",
            },
            {
                id: 32,
                title: "Шлифовка и полировка",
                link: "/catalog?scopes=polishing",
            },
            {
                id: 33,
                title: "Лазерная и плазменная резка",
                link: "/catalog?scopes=laserCutting",
            },
            {
                id: 34,
                title: "Обслуживание конвейерных систем",
                link: "/catalog?scopes=conveyorLine",
            },
            {
                id: 35,
                title: "Паллетирование",
                link: "/catalog?scopes=palletizing",
            },
            {
                id: 36,
                title: "Маркировка",
                link: "/catalog?scopes=bendingStampingPress",
            },
            {
                id: 37,
                title: "Фрезеровка",
                link: "/catalog?scopes=milling",
            },
            {
                id: 38,
                title: "Укладка и паллетирование",
                link: "/catalog?scopes=palletizing",
            },
            {
                id: 39,
                title: "Производство поддонов",
                link: "/catalog?scopes=metalBending",
            }
        ],
    },
    {
        id: 4,
        title: "Проекты автоматизации",
        ref: 'automation',
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
        link: "/catalog",
    },
    {
        id: 2,
        title: "О компании",
        link: "/contacts",
    },
    {
        id: 3,
        title: "Блог",
        link: "/news",
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