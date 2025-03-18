"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loader.module.scss";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.Loader}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.img
            src="/images/Logo.svg"
            alt="logo"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
