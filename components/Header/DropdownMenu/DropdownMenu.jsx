"use client";

import styles from './DropdownMenu.module.scss';
import Link from "next/link";
import DefaultButton from "@/components/UI/Buttons/DefaultButton/DefaultButton";
import DropdownElement from "@/components/UI/DropdownElement/DropdownElement";
import React, {useState} from "react";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";

export default function DropdownMenu(props) {
  const { menuElements, catalogElements } = props
  const catalogElement = {
    name: "Каталог роботов",
    ref: 'catalog',
    children: [...catalogElements, {
        allLink: true,
        name: "Все промышленные роботы",
        link: "/catalog",
        image: "/images/icons/menu-blue.svg"
    }]
  }
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickDropdown = (el) =>{
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.container} >
      <div className={styles.menuContainer}>
        <div className={styles.catalogElements}>
            <DropdownElement
                theme={'white'}
                element={catalogElement}
                isOpen={isOpen}
                handleClick={handleClickDropdown}
            />
        </div>
        <div className={styles.menuElements}>
            {menuElements.map((element, idx) => (
                <div key={idx} className={styles.elementContainer}>
                  {element.children ? (
                      <div className={styles.childrenContainer}>
                      { element.children.map((child, idxx) => (
                          <Link
                              key={idxx}
                              href={child.link}
                              className={styles.link}
                          >
                              {child.title}
                          </Link>
                      ))}
                      </div>
                  ) : (
                      <Link
                          className={styles.link}
                          href={element.link}
                      >
                          {element.title}
                      </Link>
                  ) }
                </div>
            ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <DefaultButton
            onClick={handleClickModal}
            text={'Оставить заявку'}
        />
      </div>
      <RequestModal
        isOpen={isModalOpen}
        text={"Оставьте заявку"}
        onClose={handleClickModal}
      />
    </div>
  );
}
