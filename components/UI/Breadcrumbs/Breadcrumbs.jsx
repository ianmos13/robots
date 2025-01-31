"use client"
import React from 'react';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ items }) => {
  return (
    <section className={styles.container}>
      <nav aria-label="breadcrumb">
        <div className={styles.breadcrumb}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <button
                className={`${styles.breadcrumbButton} ${
                  index === items.length - 1 ? styles.active : ''
                }`}
                onClick={() => window.location.href = item.link}
                disabled={index === items.length - 1}
              >
                {item.label}
              </button>
             
            </React.Fragment>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Breadcrumbs;