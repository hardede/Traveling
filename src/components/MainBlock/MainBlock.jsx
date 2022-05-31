import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Left from "./LeftSight/Left";

const MainBlock = () => {
 useScrollToTop("account");

  return (
    <div className="flex md:block">
      <Left />
      <div className="relative bg-hero-img w-620 bg-right-bottom">
        <div className="absolute top-20 left-12 md:hidden">
          <h4 className="w-44 bg-[#FF715B] text-white text-2xl px-2 mb-4 leading-8 ">
            WELCOME TO
          </h4>
          <h4 className="bg-[#FF715B] text-white text-2xl px-2">
            YOUR ACCOUNT
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
