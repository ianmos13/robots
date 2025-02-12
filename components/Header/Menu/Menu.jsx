"use client";

import styles from './Menu.module.scss';
import {useEffect, useRef, useState} from "react";
import MenuElement from "@/components/Header/MenuElement/MenuElement";
import {useMediaQuery} from "react-responsive";
import Link from "next/link";

export default function Menu(props) {
  const { scrolled, menuElements } = props
  const menuContainerRef = useRef(null)
  const hiddenMenuContainerRef = useRef(null)
  const isRemoveLastElements = useMediaQuery({ query: '(max-width: 1200px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const [visibleLinks, setVisibleLinks] = useState(menuElements);
  const [hiddenLinks, setHiddenLinks] = useState([]);

  const refs = {"resize": false, ...(menuElements.reduce((acc, el) => {
    acc[el.ref] = false
    return acc
  }, {}))}
  const [isOpen, setIsOpen] = useState(refs)
  const hiddenElements = [].concat(menuElements).sort((a, b) => a.order < b.order ? 1 : -1)
  const [hiddenMenuElements, setHiddenMenuElements] = useState(hiddenElements);

  useEffect(() => {
    setHiddenMenuElements(isRemoveLastElements ? hiddenElements.slice(1) : hiddenElements)
  }, [isRemoveLastElements]);

  const handleResize = () => {
    if (isTablet) return;
    if (!menuContainerRef.current) return;
    if (!hiddenMenuContainerRef.current) return;

    let maxMenuWidth = hiddenMenuContainerRef.current.offsetWidth;
    let visible = [];
    let hidden = [];
    let hiddenRefs = [hiddenElements[0].ref];
    const mainOffsetWight = menuContainerRef.current.offsetWidth;
    if (menuContainerRef.current.offsetWidth >= hiddenMenuContainerRef.current.offsetWidth) {
      setVisibleLinks(menuElements);
      setHiddenLinks([]);
      return;
    }
    Array.from(hiddenMenuContainerRef.current.children).forEach((child) => {
      const linkWidth = child.offsetWidth;
      if (maxMenuWidth + 50 > mainOffsetWight) {
        maxMenuWidth -= (linkWidth + 20);
        hiddenRefs.push(child.id)
      }
    });
    for (let i = 0; i < menuElements.length; i++) {
      if (hiddenRefs.indexOf(menuElements[i].ref) === -1) {
        visible.push(menuElements[i])
      } else {
        hidden.push(menuElements[i])
      }
    }
    setVisibleLinks(visible);
    setHiddenLinks(hidden);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickMenu = async refName => {
    setIsOpen({ ...refs, [refName]: !isOpen[refName] })
  }

  return (
    <>
      <div
        ref={hiddenMenuContainerRef}
        className={styles.hiddenContainer}
      >
        {hiddenMenuElements && hiddenMenuElements.map((element, idx) => (
          <div
            id={element.ref}
            key={idx}
            className={styles.link}
          >
            {element.title}
          </div>
        ))}
      </div>
      <div
        className={styles.container}
        ref={menuContainerRef}
      >
        {visibleLinks.map((element, idx) => (
          <MenuElement
            scrolled={scrolled}
            key={idx}
            element={element}
            isOpen={isOpen[element.ref]}
            handleClickMenu={handleClickMenu}
          />
        ))}
        {hiddenLinks.length > 0 && (
          <div
            className={`${styles.ellipsis} ${isOpen["resize"] ? styles.ellipsisActive : ""}`}
            onClick={() => handleClickMenu("resize")}
          >
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            {isOpen["resize"] && (
              <div className={styles.menuPopup}>
                <div className={styles.popupContent}>
                  {hiddenLinks.map((element, index) => (
                      <Link
                          key={index}
                          id={element.ref}
                          href={element.link}
                          className={styles.link}
                      >
                        {element.title}
                      </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
