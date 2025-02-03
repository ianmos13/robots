import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [isTabletView, setIsTabletView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isDesktopView, setIsDesktopView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth > 1024 );
      setIsTabletView(window.innerWidth > 640 && window.innerWidth <= 1024);
      setIsMobileView(window.innerWidth <= 640);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isTabletView, isMobileView, isDesktopView };
};

export default useDeviceType;