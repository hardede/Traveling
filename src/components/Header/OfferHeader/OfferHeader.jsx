import React from "react";
import { Link } from "react-router-dom";
import travelLogo from "../../assets/image/homePage/travelLogo.svg";
import IconsRight from "../IconsRight";

const OfferHeader = () => {

  return (
    <header className="absolute left-0 top-0 w-full z-10 py-7.5 px-4 transition-all">
      <div className="flex justify-between items-center font-noto text-lg">
        <div className="flex items-center">
          <Link to="/">
            <img src={travelLogo} alt="site logo" />
          </Link>
          <div className="pl-8 sm:hidden">
            <h3 className="text-xl font-bold text-[#FF715B]">Travel agency</h3>
            <p className="text-lg text-[#4b4747]">
              Here are the best deals for you
            </p>
          </div>
        </div>
        <IconsRight />
      </div>
    </header>
  );
};

export default OfferHeader;
