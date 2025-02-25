import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Article.module.scss";
import BackButton from "./BackButton/BackButton";
import NewsCenter from "./NewsCenter/NewsCenter";

import CollaborationCard from "@/components/Article/CollaborationCard/CollaborationCard";

export default function Article({ data, backButtonOptions }) {
  const router = useRouter();

  const handleBack = () => {
    router.push(backButtonOptions.link);
  };

  return (
    <section className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.buttonContainer}>
            <BackButton onBack={handleBack} title={backButtonOptions.title} />
        </div>
        <div className={styles.newsContainer}>
            <NewsCenter data={data} />
        </div>
        <div className={styles.sidebarContainer}>
            <CollaborationCard />
        </div>
      </div>
    </section>
  );
}
