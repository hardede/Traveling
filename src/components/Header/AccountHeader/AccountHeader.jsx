import React from "react";
import { Link, Link as Links } from "react-router-dom";
import digicert from "../../assets/image/accPage/digicert.png";
import travelLogo from "../../assets/image/homePage/travelLogo.svg";

const AccountHeader = () => {
  return (
    <header className="z-10 py-9">
      <div className="flex text-center items-center justify-between">
        <Links to="/">
          <img
            src={travelLogo}
            alt="site logo"
            className="md:w-40 md:h-40 smm:w-30 smm:h-30 xs:w-20 xs:h-10"
          />
        </Links>
        <Link
          to={"/account"}
          className="text-[#2d2d2d] text-3xl font-bold hover:opacity-70 md:text-2xl smm:text-lg"
        >
          MY ACCOUNT
        </Link>
        <img src={digicert} alt="digicert" className="w-20 xs:w-16 xs:h-7" />
      </div>
    </header>
  );
};

export default AccountHeader;
