"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCompare, removeFromCompare } from "@/redux/features/compareSlice";
import styles from "./CompareButton.module.scss";

export default function CompareButton({ robot, isHovered }) {
  const dispatch = useDispatch();
  const comparisons = useSelector((state) => state.compare);
  const isCompared = comparisons.some((item) => item.id === robot.id);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleCompareClick = () => {
    if (isCompared) {
      dispatch(removeFromCompare(robot.id));
    } else {
      dispatch(addToCompare(robot));
    }
  };

  return (
    <button className={styles.iconBtn} onClick={handleCompareClick}>
      <img
        src={
          isCompared
            ? "/images/icons/compare-blue.svg"
            : isHovered
            ? "/images/icons/compare-white.svg"
            : "/images/icons/compare.svg"
        }
        alt="Сравнить"
      />
    </button>
  );
}
