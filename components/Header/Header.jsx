"use client"

import React, {useEffect, useState} from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import DownloadButton from "@/components/Header/Buttons/DownloadButton/DownloadButton";
import CatalogButton from "@/components/Header/Buttons/CatalogButton/CatalogButton";
import Menu from "@/components/Header/Menu/Menu";
import {usePathname} from "next/navigation";
import ContactUsButtons from "@/components/UI/ContactUsButtons/ContactUsButtons";
import CatalogPopup from "@/components/Header/CatalogPopup/CatalogPopup";
import MenuButton from "@/components/Header/Buttons/MenuButton/MenuButton";
import DropdownMenu from "@/components/Header/DropdownMenu/DropdownMenu";
import Location from "@/components/Header/Location/Location";

const Header = () => {
  const pathname = usePathname();
  const [oldLink, setOldLink] = useState(null);
  const [openCatalog, setIsOpenCatalog] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (pathname !== oldLink) {
        setOldLink(pathname);
        setIsOpenCatalog(false);
        setOpenMobileMenu(false);
    }
  }, [pathname]);

  const openCatalogPopup = () => {
      setIsOpenCatalog(!openCatalog)
  }

  const openMenuPopup = () => {
    setOpenMobileMenu(!openMobileMenu)
  }

  return (
      <header className={`${styles.container} ${openCatalog || openMobileMenu ? styles.whiteContainer : ''}`}>
          <div className={styles.headerBody}>
              <Link href="/" className={styles.logoContainer}>
                  <img
                      className={styles.image}
                      src="/images/logo.svg"
                      alt="Logo"
                  />
              </Link>
              <div className={`${styles.catalogButton} ${openMobileMenu ? styles.hiddenElement : ''}`}>
                  <CatalogButton
                      isOpenCatalog={openCatalog}
                      openCatalog={openCatalogPopup}
                  />
              </div>
              <div className={`${styles.downloadButton} ${openMobileMenu ? styles.hiddenElement : ''}`}>
                  <DownloadButton />
              </div>
              <Menu menuElements={menuElements} />
              <div className={`${styles.mobileMenu} ${openCatalog ? styles.hiddenElement : ''}`}>
                  <MenuButton isOpen={openMobileMenu} setOpen={openMenuPopup} />
                  <div
                      className={`${styles.dropdownMenu} ${
                          openMobileMenu ? styles.active : ""
                      }`}>
                      <DropdownMenu
                          menuElements={menuElements}
                          catalogElements={catalogElements}
                      />
                  </div>
              </div>
              <div className={`${styles.contactUsButtons} ${openCatalog || openMobileMenu ? styles.hiddenElement : ''}`}>
                <ContactUsButtons theme="header" />
              </div>
          </div>
          <div className={`${styles.location} ${openCatalog || openMobileMenu ? styles.hiddenElement : ''}`}>
            <Location />
          </div>
          <div className={`${styles.catalogPopup} ${openCatalog ? styles.active : '' }`}>
            <CatalogPopup catalogElements={catalogElements} />
          </div>
      </header>
  );
};

export default Header;

const menuElements = [
    {
        id: 1,
        title: "Позиционеры",
        ref: "positioners",
        link: "/",
        order: 1,
    },
    {
        id: 2,
        title: "Комплексные\u00A0решения",
        ref: "integratedSolutions",
        link: "/",
        order: 4,
    },
    {
        id: 3,
        title: "Реализованные\u00A0проекты",
        ref: "completedProjects",
        link: "/",
        order: 5,
    },
    {
        id: 4,
        title: "Периферийное\u00A0оборудование",
        ref: "peripheralEquipment",
        link: "/",
        order: 6,
    },
    {
        id: 5,
        title: "О\u00A0компании",
        ref: "aboutCompany",
        link: "",
        order: 2,
        children: [
            {
                id: 50,
                title: "Блог",
                link: "/",
            },
            {
                id: 51,
                title: "Новости",
                link: "/",
            },
            {
                id: 52,
                title: "О компании",
                link: "/",
            },
        ],
    },
    {
        id: 6,
        title: "Лизинг\u00A0и\u00A0рассрочка",
        ref: "leasingInstallments",
        link: "/",
        order: 7,
    },
    {
        id: 7,
        title: "Контакты",
        ref: "contacts",
        link: "/contacts",
        order: 3,
    },
]

const catalogElements = [
    {
        id: 1,
        title: "Сварочные роботы, серия RH",
        imageUrl: "/images/ventilation.webp",
        link: "/",
    },
    {
        id: 2,
        title: "Фрезерные роботы",
        imageUrl: "/images/projects.svg",
        link: "/",
    },
    {
        id: 3,
        title: "Роботы для обслуживания станков",
        imageUrl: "/images/ventilation.webp",
        link: "/",
    },
    {
        id: 4,
        title: "Полировочные роботы",
        imageUrl: "/images/projects.svg",
        link: "/",
    },
    {
        id: 5,
        title: "Роботы манипуляторы",
        imageUrl: "/images/ventilation.webp",
        link: "/",
    },
    {
        id: 6,
        title: "Scara",
        imageUrl: "/images/projects.svg",
        link: "/",
    },
    {
        id: 7,
        title: "Коллаборативные роботы",
        imageUrl: "/images/ventilation.webp",
        link: "/",
    },
    {
        id: 8,
        title: "Роботы для паллетирования",
        imageUrl: "/images/projects.svg",
        link: "/",
    },
]