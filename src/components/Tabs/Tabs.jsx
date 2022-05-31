import React from "react";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive
    ? "w-1/2 text-center  pt-5 pb-4 border-b-2 border-b-[#FF715B]"
    : "w-1/2 text-center  pt-5 pb-4 ";

const Tabs = () => {
  return (
    <div className="flex pt-6 px-5 pb-4 text-[#767676] font-bold text-sm uppercase">
      <NavLink to="/identify/login" className={setActive}>
        log in
      </NavLink>
      <NavLink to="/identify/registration" className={setActive}>
        sign up
      </NavLink>
    </div>
  );
};

export default Tabs;
