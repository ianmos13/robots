"use client";

import React from "react";
import { useIsFetching } from "@tanstack/react-query";
import Loader from "@/components/UI/Loader/Loader";
import Header from "@/components/Header/Header";
import CookieModal from "@/components/UI/CookieModal/CookieModal";
import Footer from "@/components/Footer/Footer";

export default function AppTransition({ children }) {
  const isFetching = useIsFetching();


  if (isFetching > 0) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <section className="container">{children}</section>
      <CookieModal />
      <Footer />
    </>
  );
}
