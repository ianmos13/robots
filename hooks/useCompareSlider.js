import { useRef, useState, useEffect } from "react";

const useCompareSlider = (items) => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(items.length > 4);

  const updateScroll = () => {
    if (!sliderRef.current) return;
    setCanScrollLeft(sliderRef.current.scrollLeft > 0);
    setCanScrollRight(
      sliderRef.current.scrollLeft < sliderRef.current.scrollWidth - sliderRef.current.clientWidth
    );
  };

  useEffect(() => {
    updateScroll();
  }, [items]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
      updateScroll();
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
      updateScroll();
    }
  };

  return { sliderRef, scrollLeft, scrollRight, canScrollLeft, canScrollRight };
};

export default useCompareSlider;
