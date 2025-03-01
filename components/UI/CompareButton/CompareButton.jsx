"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCompare, removeFromCompare } from "@/redux/features/compareSlice";
import styles from "./CompareButton.module.scss";

export default function CompareButton({ robot }) {
  const dispatch = useDispatch();
  const comparisons = useSelector((state) => state.compare);
  const isCompared = comparisons.some((item) => item.id === robot.id);
  const [isHovered, setIsHovered] = useState(false)

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleCompareClick = (e) => {
    e.preventDefault();
    if (isCompared) {
      dispatch(removeFromCompare(robot.id));
    } else {
      dispatch(addToCompare(robot));
    }
  };
  const onHover = () => {
    setIsHovered(true)
  }

  const onLeave = () => {
    setIsHovered(false)
  }
  return (
    <button
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className={styles.iconBtn}
        onClick={handleCompareClick}
    >
      <img
        src={
          isCompared
            ? "/images/icons/compare-new-blue.svg"
            : isHovered
            ? "/images/icons/compare-new-blue.svg"
            : "/images/icons/compare-new.svg"
        }
        alt="Сравнить"
      />
    </button>
  );
}
