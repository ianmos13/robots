import React from "react";
import styles from "./Sidebar.module.scss";
import CollaborationCard from "../CollaborationCard/CollaborationCard";

export default function Sidebar() {
  return (
    <div className={styles.rightContainer}>
      <CollaborationCard />
    </div>
  );
}
