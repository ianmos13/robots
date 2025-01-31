"use client";

import styles from "./CategoryTags.module.scss";

export default function CategoryTags({ categories, selectedCategory, onSelectCategory }) {
  return (
    <nav className={styles.tags}>
      {categories.map((cat) => (
        <button
          key={cat.key}
          className={selectedCategory === cat.key ? styles.activeTag : ""}
          onClick={() => onSelectCategory(cat.key)}
        >
          {cat.name}
        </button>
      ))}
    </nav>
  );
}