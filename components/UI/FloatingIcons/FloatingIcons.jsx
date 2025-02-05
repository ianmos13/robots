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

  const favorites = useSelector((state) => state.favorite || []);
  const comparisons = useSelector((state) => state.compare || []);

  const favoritesCount = favorites.length;
  const comparisonsCount = comparisons.length;

  if (!mounted) return null;

  return (
    <div className={styles.floatingIconsContainer}>
      {favoritesCount > 0 && (
        <Link href="/favorites">
          <div className={styles.iconWrapper}>
            <img
              src="/images/icons/favorite-blue.svg"
              alt="Favorites"
              className={styles.icon}
            />
            <span className={styles.badge}>{favoritesCount}</span>
          </div>
        </Link>
      )}
      {comparisonsCount > 0 && (
        <Link href="/compare-products">
          <div className={styles.iconWrapper}>
            <img
              src="/images/icons/compare-blue.svg"
              alt="Compare"
              className={styles.icon}
            />
            <span className={styles.badge}>{comparisonsCount}</span>
          </div>
        </Link>
      )}
    </div>
  );
}
