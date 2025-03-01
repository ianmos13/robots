'use client'

import React, {useEffect, useState} from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import ContactUsButtons from "@/components/UI/ContactUsButtons/ContactUsButtons";
import DefaultButton from "@/components/UI/Buttons/DefaultButton/DefaultButton";
import DropdownElement from "@/components/UI/DropdownElement/DropdownElement";
import {usePathname} from "next/navigation";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";
import useCategories from "@/hooks/useCategories";
import {makeAllCategories} from "@/utils/makeAllCategories";

const Footer = () => {
    const pathname = usePathname();
    const [oldLink, setOldLink] = useState(null);
    const { categories } = useCategories();
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

    const renderFilterElement = (el, idx) => {
        const categoriesNames = ['promyshlennyeRoboty', 'pozitsionery']
        const element = (categoriesNames.includes(el.ref)) ?
            { ...el, children: makeAllCategories(categories[el.ref]) } :
            el
        return (
            <>
                <div className={styles.desktopElement} >
                    <div className={styles.headerLink}>
                        {element.name}
                    </div>
                    <div key={idx} className={styles.filterChildrenElements} >
                        {element.children.map((link, idx) => (
                            <div key={idx} className={styles.linkElement} >
                                <Link
                                    href={link.link}
                                    className={styles.link}
                                >
                                    {link.name}
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
            </>
        )
    }
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
                              {renderFilterElement(element, idx)}
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
                                  {link.name}
                              </Link>
                          </div>
                      ))}
                  </div>
              </div>
              <div className={styles.footerInfo}>
                  <div className={styles.footerContacts}>
                      <div className={styles.footerContactsInfo}>
                          <ContactUsButtons theme="footer" />
                          <a href="mailto:info@crp-robot.ru" className={styles.footerContactsEmail}>
                              info<span>@</span>crp-robot.ru
                          </a>
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
        name: "Промышленные роботы",
        ref: 'promyshlennyeRoboty',
    },
    {
        id: 2,
        name: "Позиционеры",
        ref: 'pozitsionery',
    },
    // {
    //     id: 3,
    //     name: "Комплексные решения",
    //     ref: 'integrated',
    //     children: [
    //
    //         {
    //             id: 30,
    //             name: "Сварочные решения",
    //             link: "/catalog?scopes=welding",
    //         },
    //         {
    //             id: 31,
    //             name: "Обслуживание станков",
    //             link: "/catalog?scopes=cnc",
    //         },
    //         {
    //             id: 32,
    //             name: "Шлифовка и полировка",
    //             link: "/catalog?scopes=polishing",
    //         },
    //         {
    //             id: 33,
    //             name: "Лазерная и плазменная резка",
    //             link: "/catalog?scopes=laserCutting",
    //         },
    //         {
    //             id: 34,
    //             name: "Обслуживание конвейерных систем",
    //             link: "/catalog?scopes=conveyorLine",
    //         },
    //         {
    //             id: 35,
    //             name: "Паллетирование",
    //             link: "/catalog?scopes=palletizing",
    //         },
    //         {
    //             id: 36,
    //             name: "Маркировка",
    //             link: "/catalog?scopes=bendingStampingPress",
    //         },
    //         {
    //             id: 37,
    //             name: "Фрезеровка",
    //             link: "/catalog?scopes=milling",
    //         },
    //         {
    //             id: 38,
    //             name: "Укладка и паллетирование",
    //             link: "/catalog?scopes=palletizing",
    //         },
    //         {
    //             id: 39,
    //             name: "Производство поддонов",
    //             link: "/catalog?scopes=metalBending",
    //         }
    //     ],
    // },
    // {
    //     id: 4,
    //     name: "Проекты автоматизации",
    //     ref: 'automation',
    //     children: [
    //         {
    //             id: 40,
    //             name: "Машиностроение и металлообработка",
    //             link: "/",
    //         },
    //         {
    //             id: 41,
    //             name: "Пищевая промышленность",
    //             link: "/",
    //         },
    //         {
    //             id: 42,
    //             name: "Деревообрабатывающая промышленность",
    //             link: "/",
    //         },
    //         {
    //             id: 43,
    //             name: "Пластиковая промышленность",
    //             link: "/",
    //         },
    //     ],
    // },
];
const footerLinks = [
    // {
    //     id: 1,
    //     name: "Периферийное оборудование",
    //     link: "/peripheral-equipment",
    // },
    // {
    //     id: 2,
    //     name: "О компании",
    //     link: "/about",
    // },
    {
        id: 3,
        name: "Блог",
        link: "/blog",
    },
    {
        id: 4,
        name: "Новости",
        link: "/articles",
    },
    {
        id: 5,
        name: "Контакты",
        link: "/contacts",
    },
];