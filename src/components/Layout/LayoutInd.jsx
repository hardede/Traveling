import React from "react";
import { Outlet } from "react-router-dom";
import IdentifyHeader from "../Header/IdentifyHeader/IdentifyHeader";
import Tabs from "../Tabs/Tabs";

const LayoutInd = () => {
  return (
    <div className="bg-[#e9e9e9] h-screen">
      <div className="mx-auto max-w-2.5xl px-5">
        <IdentifyHeader />
        <div className="bg-white">
          <Tabs />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutInd;
