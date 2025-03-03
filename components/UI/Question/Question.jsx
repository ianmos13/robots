'use client'
import styles from "./Question.module.scss";
import TitleWithSeparator from "../TitleWithSeparator/TitleWithSeparator";
import React, { useState } from "react";
import {sanitizeData} from "@/utils/sanitizeHtmlText";

export default function Question({faqData, theme}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (faqData.length > 0) return (
    <div className={`${styles.container} ${ styles[`${theme}Theme`]}`}>
      <TitleWithSeparator title="Ответы на вопросы" theme='catalog'/>
      <div className={styles.questionsList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.questionItem}>
            <div className={styles.questionHeader} onClick={() => toggleQuestion(index)}>
              <span>{item.question}</span>
              <button className={styles.toggleButton}>
                <img
                  src='/images/icons/plus-white.svg'
                  alt="Toggle"
                  className={`${styles.plusIcon} ${openIndex === index ? styles.rotated : ""}`}
                />
              </button>
            </div>
            <div className={`${styles.answer} ${openIndex === index ? styles.show : ""}`}
                 dangerouslySetInnerHTML={{ __html: sanitizeData(item.answer) }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
