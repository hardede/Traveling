import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { store } from "../../..";
import useWindowSize from "../../../hooks/useWindowSize";
import exit from "../../assets/image/accPage/exit.svg";
import { accountPages } from "../constants/accountPages";

const setActive = ({ isActive }) =>
  isActive
    ? "flex items-center bg-white mt-2.5 h-16 hover:underline before:block before:w-1 before:h-full before:bg-[#FF715B] md:first:hidden"
    : "flex items-center bg-white mt-2.5 h-16 hover:underline md:first:hidden";

const Left = () => {
  const [leftShow, setLeftShow] = useState(false);
  const location = useLocation();
  const size = useWindowSize();

  useEffect(() => {
    if (location.pathname === "/account") {
      setLeftShow(true);
    } else if (size.width > 767) {
      setLeftShow(true);
    }
  }, [location.pathname, size.width]);

  return (
    leftShow && (
      <div className="w-300 mr-10 md:w-full">
        <div className="flex items-center py-11 bg-white">
          <div className="w-20 h-20 bg-[#2d2d2d] rounded-full mr-4">
            <span className="text-white flex justify-center items-center h-20 text-4xl font-bold">
              {store.user.firstName[0] + store.user.lastName[0]}
            </span>
          </div>
          <div>
            <span className="">Hi,</span>
            <h3 className="font-bold text-lg">
              {store.user.firstName + " " + store.user.lastName}
            </h3>
          </div>
        </div>
        <div>
          <div>
            {accountPages.map(page => (
              <NavLink to={page.link} key={page.id} className={setActive} end>
                <div className="w-5 mx-6">
                  <img src={page.icon} alt={page.alt} />
                </div>
                <div>{page.name}</div>
              </NavLink>
            ))}
          </div>
          <NavLink
            to="/"
            className="flex items-center bg-white mt-2.5 h-16 hover:underline"
            onClick={() => store.logout()}
          >
            <div className="w-5 mx-6">
              <img src={exit} alt="exit" />
            </div>
            <div>Sign out</div>
          </NavLink>
        </div>
      </div>
    )
  );
};

export default Left;
