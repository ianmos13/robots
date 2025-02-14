import React from "react";
import { useRouter } from "next/navigation";
import styles from "./SingleNews.module.scss";
import BackButton from "./BackButton/BackButton";
import NewsCenter from "./NewsCenter/NewsCenter";

import CollaborationCard from "@/components/SingleNews/CollaborationCard/CollaborationCard";

export default function SingleNews({ data }) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/news");
  };

  return (
    <section className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.buttonContainer}>
            <BackButton onBack={handleBack} />
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
