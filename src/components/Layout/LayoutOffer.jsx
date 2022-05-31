import React from "react";
import { Outlet } from "react-router-dom";
import OfferHeader from "../Header/OfferHeader/OfferHeader";

const LayoutOffer = () => {
  return (
    <div>
      <OfferHeader />
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutOffer;
