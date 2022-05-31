import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const LayoutBL = () => {
  return (
    <div className="bg-[#e9e9e9] h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutBL;
