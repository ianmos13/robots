"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "./FloatingIcons.module.scss";

export default function FloatingIcons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const favorites = useSelector((state) => state.favorite || []);
  const comparisons = useSelector((state) => state.compare || []);

  const favoritesCount = favorites.length;
  const comparisonsCount = comparisons.length;

  if (!mounted) return null;

  return (
    <div
      className={`${styles.floatingIconsContainer} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      {favoritesCount > 0 && (
       
          <a  href="/favorites">
            <div className={styles.iconWrapper}>
              <img
                src="/images/icons/favorite-blue.svg"
                alt="Favorites"
                className={styles.icon}
              />
              <span className={styles.badge}>{favoritesCount}</span>
              <span className={styles.text}>Избранное</span>
            </div>
          </a>
     
      )}
      {comparisonsCount > 0 && (
       
          <a href="/compare-products">
            <div className={styles.iconWrapper}>
              <img
                src="/images/icons/compare-blue.svg"
                alt="Compare"
                className={styles.icon}
              />
              <span className={styles.badge}>{comparisonsCount}</span>
              <span className={styles.text}>Сравнение товаров</span>
            </div>
          </a>
        
      )}
    </div>
  );
}
