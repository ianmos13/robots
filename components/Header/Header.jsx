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
// import Location from "@/components/Header/Location/Location";
import useCategories from "@/hooks/useCategories";
import FloatingIcons from "@/components/UI/FloatingIcons/FloatingIcons";

const Header = () => {
  const pathname = usePathname();
  const [oldLink, setOldLink] = useState(null);
  const [openCatalog, setIsOpenCatalog] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { categories } = useCategories();
  const robotsCategories = categories?.promyshlennyeRoboty?.children || []

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== oldLink) {
        setOldLink(pathname);
        closeAllPopups();
    }
  }, [pathname]);

  const openCatalogPopup = () => {
      setIsOpenCatalog(!openCatalog)
  }

  const closeAllPopups = () => {
      setOpenMobileMenu(false)
      setIsOpenCatalog(false)
  }

  const openMenuPopup = () => {
    setOpenMobileMenu(!openMobileMenu)
  }

  return (
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
          <div className={`${styles.container} ${openCatalog || openMobileMenu ? styles.whiteContainer : ''}`}>
              <div className={styles.headerBody}>
                  <Link href="/" className={styles.logoContainer}>
                      <img
                          className={styles.image}
                          src="/images/Logo.svg"
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
                  <Menu scrolled={scrolled} menuElements={menuElements} />
                  <div className={`${styles.mobileMenu} ${openCatalog ? styles.hiddenElement : ''}`}>
                      <MenuButton isOpen={openMobileMenu} setOpen={openMenuPopup} />
                      <div
                          className={`${styles.dropdownMenu} ${
                              openMobileMenu ? styles.active : ""
                          } ${scrolled ? styles.scrolledDropdownMenu : ''}`}>
                          <DropdownMenu
                              menuElements={menuElements}
                              catalogElements={robotsCategories}
                          />
                      </div>
                  </div>
                  <div className={`${styles.contactUsButtons} ${openCatalog || openMobileMenu ? styles.hiddenElement : ''}`}>
                    <ContactUsButtons theme="header" />
                  </div>
              </div>
              <div className={`${styles.locationWithIcons} ${openCatalog || openMobileMenu ? styles.hiddenElement : ''}`}>
                <div className={styles.location}>
                  {/*<Location />*/}
                </div>
                <div className={styles.floatingIcons}>
                    <FloatingIcons />
                </div>
              </div>
              <div className={`${styles.catalogPopup} ${openCatalog ? styles.active : '' }  ${scrolled ? styles.activeScrolled : ''}`}>
                <CatalogPopup catalogElements={robotsCategories} openCatalog={openCatalogPopup} />
              </div>
              {openCatalog && (<div
                    className={styles.closeArea}
                    onClick={openCatalogPopup}
              ></div>)}
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
        link: "/pozicionery",
        order: 1,
    },
    // {
    //     id: 2,
    //     title: "Комплексные\u00A0решения",
    //     ref: "integratedSolutions",
    //     link: "/integrated-solutions",
    //     order: 4,
    // },
    {
        id: 3,
        title: "Реализованные\u00A0проекты",
        ref: "completedProjects",
        link: "/our-projects",
        order: 4,
    },
    // {
    //     id: 4,
    //     title: "Периферийное\u00A0оборудование",
    //     ref: "peripheralEquipment",
    //     link: "/peripheral-equipment",
    //     order: 6,
    // },
    {
        id: 4,
        title: "Новости",
        ref: "articles",
        link: "/articles",
        order: 3,
    },
    {
        id: 5,
        title: "Блог",
        ref: "blog",
        link: "/blog",
        order: 5,
    },
    // {
    //     id: 5,
    //     title: "О\u00A0компании",
    //     ref: "aboutCompany",
    //     link: "",
    //     order: 2,
    //     children: [
    //         {
    //             id: 50,
    //             title: "Блог",
    //             link: "/blog",
    //         },
    //         {
    //             id: 51,
    //             title: "Новости",
    //             link: "/articles",
    //         },
            // {
            //     id: 52,
            //     title: "О компании",
            //     link: "/about",
            // },
        // ],
    // },
    // {
    //     id: 6,
    //     title: "Лизинг\u00A0и\u00A0рассрочка",
    //     ref: "leasingInstallments",
    //     link: "/leasing-installments",
    //     order: 7,
    // },
    {
        id: 7,
        title: "Контакты",
        ref: "contacts",
        link: "/contacts",
        order: 2,
    },
]
