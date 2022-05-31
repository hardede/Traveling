import React from "react";
import ToursOffer from "../../components/Tour/ToursOffer/ToursOffer";
import useScrollToTop from "../../hooks/useScrollToTop";

const Offers = () => {

  useScrollToTop("offers")

  return (
    <div className="mt-30">
      <h3 className="text-3xl font-bold mb-2">All offers</h3>
      <div className="hidden sm:block">
        {/* <h3 className="text-xl font-bold text-[#FF715B]">Travel agency</h3> */}
        <p className="text-lg text-[#4b4747]">
          Here are the best deals for you
        </p>
      </div>
      <ToursOffer />
    </div>
  );
};

export default Offers;
