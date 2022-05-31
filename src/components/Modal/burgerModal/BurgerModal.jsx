import React, { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { ImAirplane } from "react-icons/im";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Context } from "../../..";
import { headerLink } from "../../Header/constants/headerLink";
import { headerModal } from "../../Header/constants/headerModal";

const BurgerModal = ({ burgerShow, setBurgerShow }) => {
  const { store } = useContext(Context);
  const [homeList, setHomeList] = useState(false);
  const [accList, setAccList] = useState(false);

  return (
    <div
      className={
        burgerShow
          ? "fixed w-full h-full top-0 right-0 translate-x-0 animate-show z-0 block"
          : "fixed w-full h-full top-0 right-0 translate-x-60 z-0 hidden"
      }
      onClick={() => setBurgerShow(false)}
    >
      <div className="w-screen h-screen backdrop-blur-xs absolute">
        <div
          className="absolute pt-24 pb-10 w-60 top-0 right-0 bg-white my_transition"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between bg-gray-200 px-4 py-3">
            <div className="flex items-center text-sm">
              {store.isAuth ? (
                <div className="flex items-center">
                  <p className="font-bold">Hi {store.user.firstName}</p>
                  <div className="block w-0.5 h-4 bg-[#A79997] mx-3" />
                  <Link
                    to="/"
                    className="underline hover:text-[#FF715B]"
                    onClick={() => store.logout()}
                  >
                    Sign out
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    to="/identify/login"
                    className="underline hover:text-[#FF715B] my_transition"
                  >
                    Log in
                  </Link>
                  <div className="block w-0.5 h-3/4 bg-[#A79997] mx-3" />
                  <Link
                    to="/identify/registration"
                    className="underline hover:text-[#FF715B] my_transition"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="px-4">
            <h3
              className="text-[#FF715B] py-4 text-xl after:w-full after:bg-[#FF715B] after:h-0.5 after:block"
              onClick={() => setHomeList(!homeList)}
            >
              Home Navigation
            </h3>
            <div
              className={
                homeList
                  ? "flex flex-col animate-dropDown my_transition"
                  : "hidden"
              }
            >
              {headerLink.map(name => (
                <HashLink
                  smooth={true}
                  offset={name.offset}
                  duration={1000}
                  key={name.id}
                  to={name.url}
                  className="flex text-2xl hover:fill-[#FF715B] hover:text-[#FF715B] items-center px-1.5 py-2 focus:border border-[#FF715B] my_transition"
                  onClick={() => setBurgerShow(false)}
                >
                  {name.imgUrl}
                  <p className="pl-2.5 pr-5 text-lg">{name.nameLink}</p>
                </HashLink>
              ))}
            </div>
          </div>
          <div className="px-4">
            <h3
              className="text-[#FF715B] text-xl py-4 after:w-full after:bg-[#FF715B] after:h-0.5 after:block"
              onClick={() => setAccList(!accList)}
            >
              Account
            </h3>
            <div
              className={
                accList
                  ? "flex flex-col animate-dropDown my_transition"
                  : "hidden"
              }
            >
              {headerModal.map(item => (
                <Link
                  to={item.linkUrl}
                  key={item.id}
                  className="flex hover:fill-[#FF715B] hover:text-[#FF715B] items-center px-1.5 py-2 focus:border border-[#FF715B] my_transition"
                  onClick={() => setBurgerShow(false)}
                >
                  <div className="w-5 h-5">{item.imgUrl}</div>
                  <p className="pl-2.5 pr-5">{item.linkName}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="px-4 pt-2 pb-4">
            <Link
              to="/offers"
              className="flex hover:fill-[#FF715B] hover:text-[#FF715B] items-center px-1.5 py-2 focus:border border-[#FF715B] my_transition"
              onClick={() => setBurgerShow(false)}
            >
              <ImAirplane className="text-2xl" />
              <p className="pl-2.5 pr-5 text-2xl">All offers</p>
            </Link>
            <div className="flex items-center">
              <Link
                to="/saved"
                className="mr-5"
                onClick={() => setBurgerShow(false)}
              >
                <h3 className="text-[#FF715B]">Favorites</h3>
                <AiOutlineHeart className="text-3xl cursor-pointer hover:fill-red-500 hover:scale-125 transition ease-in-out duration-500" />
              </Link>
              <Link to="/bag">
                <h3
                  className="text-[#FF715B]"
                  onClick={() => setBurgerShow(false)}
                >
                  Bag
                </h3>
                <BsBag className="text-3xl cursor-pointer hover:fill-[#FF715B] hover:scale-125 transition ease-in-out duration-500" />
              </Link>
              {/* <img src={search} alt="search" className="cursor-pointer pl-5" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerModal;
