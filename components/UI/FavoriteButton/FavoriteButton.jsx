"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "@/redux/features/favoriteSlice";
import styles from "./FavoriteButton.module.scss";

export default function FavoriteButton({ robot, small }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);
  const isFavorited = favorites.some((item) => item.id === robot.id);
  const [isHovered, setIsHovered] = useState(false)

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (isFavorited) {
      dispatch(removeFromFavorite(robot.id));
    } else {
      dispatch(addToFavorite(robot));
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
        className={`${styles.iconBtn} ${small ? `${styles.smallIconBtn}` : ''}`}
        onClick={handleFavoriteClick}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
    >
      <img
        src={
          isFavorited
            ? "/images/icons/favorite-new-blue.svg"
            : isHovered
            ? "/images/icons/favorite-new-blue.svg"
            : "/images/icons/favorite-new.svg"
        }
        alt="Избранное"
      />
    </button>
  );
}
