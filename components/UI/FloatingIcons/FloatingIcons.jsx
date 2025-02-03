"use client";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "./FloatingIcons.module.scss";

export default function FloatingIcons() {
  const favorites = useSelector((state) => state.favorite || []);
  const comparisons = useSelector((state) => state.compare || []);

  const favoritesCount = favorites.length;
  const comparisonsCount = comparisons.length;

  return (
    <div className={styles.floatingIconsContainer}>
      <Link href="/favorites">
        <div className={styles.iconWrapper}>
          <img
            src="/images/icons/favorite-blue.svg"
            alt="Favorites"
            className={styles.icon}
          />
          {favoritesCount > 0 && (
            <span className={styles.badge}>{favoritesCount}</span>
          )}
        </div>
      </Link>
      <Link href="/compare-products">
        <div className={styles.iconWrapper}>
          <img
            src="/images/icons/compare-blue.svg"
            alt="Compare"
            className={styles.icon}
          />
          {comparisonsCount > 0 && (
            <span className={styles.badge}>{comparisonsCount}</span>
          )}
        </div>
      </Link>
    </div>
  );
}
