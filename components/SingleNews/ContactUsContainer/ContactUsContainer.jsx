import React from "react";
import styles from "./ContactUsContainer.module.scss";
import ContactUs from "@/components/UI/ContactUs/ContactUs";

export default function ContactUsContainer() {
  return (
    <div className={styles.contactUsContainer}>
      <ContactUs />
    </div>
  );
}
