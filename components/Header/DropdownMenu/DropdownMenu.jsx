"use client";

import styles from './DropdownMenu.module.scss';
import Link from "next/link";
import DefaultButton from "@/components/UI/Buttons/DefaultButton/DefaultButton";

export default function DropdownMenu(props) {
  const { menuElements } = props

  return (
    <div className={styles.container} >
      <div className={styles.menuContainer}>
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
      <div className={styles.buttonContainer}>
        <DefaultButton
            onClick={()=>{}}
            text={'Оставить заявку'}
        />
      </div>
    </div>
  );
}
