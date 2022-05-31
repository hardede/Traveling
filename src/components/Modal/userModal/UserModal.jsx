import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { Context } from "../../../index";
import { headerModal } from "../../Header/constants/headerModal";

const UserModal = ({ setActive }) => {
   const { store } = useContext(Context)

  return (
    <div
      className="absolute right-0 mt-6 bg-white border border-[#A79997] transition-all animate-dropDown before:absolute before:border-r-15 before:border"
      onMouseLeave={() => setActive(false)}
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
        <ImCross
          className="text-[#948684] hover:text-[#746f6f] my_transition"
          onClick={() => setActive(false)}
        />
      </div>
      <div className="py-5 px-10">
        {headerModal.map(item => (
          <Link
            to={item.linkUrl}
            key={item.id}
            className="flex hover:fill-[#FF715B] hover:text-[#FF715B] items-center px-1.5 py-2 focus:border border-[#FF715B] my_transition"
          >
            {item.imgUrl}
            <p className="pl-2.5 pr-5">{item.linkName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserModal;
