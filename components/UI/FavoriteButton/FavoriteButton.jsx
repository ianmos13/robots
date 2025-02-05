"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "@/redux/features/favoriteSlice";
import styles from "./FavoriteButton.module.scss";

export default function FavoriteButton({ robot, isHovered, small }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);
  const isFavorited = favorites.some((item) => item.id === robot.id);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleFavoriteClick = () => {
    if (isFavorited) {
      dispatch(removeFromFavorite(robot.id));
    } else {
      dispatch(addToFavorite(robot));
    }
  };

  return (
    <button className={styles.iconBtn} onClick={handleFavoriteClick}>
      <img
        src={
          isFavorited
            ? "/images/icons/favorite-blue.svg"
            : isHovered
            ? "/images/icons/favorite-white.svg"
            : "/images/icons/favorite.svg"
        }
        alt="Избранное"
      />
    </button>
  );
}
