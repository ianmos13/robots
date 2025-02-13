"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/UI/Loader/Loader";
import Header from "@/components/Header/Header";
import FloatingIcons from "@/components/UI/FloatingIcons/FloatingIcons";
import CookieModal from "@/components/UI/CookieModal/CookieModal";
import Footer from "@/components/Footer/Footer";

export default function AppTransition({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700); 
    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <FloatingIcons />
      <section className="container">{children}</section>
      <CookieModal />
      <Footer />
    </>
  );
}
