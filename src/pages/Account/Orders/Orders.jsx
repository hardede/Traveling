import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../../../components/AppContext";
import ArrowBackAcc from "../../../components/ArrowBackAcc/ArrowBackAcc";
import cart from "../../../components/assets/image/accPage/cart.svg";
import { IoIosAirplane } from "react-icons/io";
import Left from "../../../components/MainBlock/LeftSight/Left";

const Orders = () => {
  const { orderItems = [] } = useContext(AppContext);

  return (
    <div className="flex">
      <Left />
      <div className="w-620 md:mx-auto">
        <div className="px-6 pt-6 pb-10 bg-white items-center md:flex smm:py-5 xs:px-2 ">
          <ArrowBackAcc />
          <div className="md:flex md:mx-auto">
            <img
              src={cart}
              alt="cart"
              className="w-10 h-10 md:w-8 md:h-8 xs:w-6 "
            />
            <h2 className="uppercase mt-3 text-4xl font-bold md:mt-0 md:ml-3 md:text-center md:text-2xl">
              my orders
            </h2>
          </div>
        </div>
        {orderItems.length <= 0 ? (
          <div className="mt-2.5 text-center bg-white py-9">
            <IoIosAirplane className="w-16 h-16 -rotate-[30deg] mx-auto mb-3 fill-[#120f0fbe]" />
            <div className="uppercase text-lg font-bold xss:text-base">
              you currently have no orders
            </div>
            <p className="text-bas mb-4">Best get shopping RAVEL pronto…</p>
            <Link
              to="/"
              className="text-white inline-block bg-[#FF715B] font-bold uppercase px-22.5 py-2.5 bg-opacity-80 hover:bg-opacity-100 shadow_transition xs:px-20 xss:px-16"
            >
              start shopping
            </Link>
          </div>
        ) : (
          <div className="mt-2.5 px-2.5 bg-white flex py-9 flex-wrap sm:grid sm:grid-cols-2 smm:grid-cols-1">
            {orderItems.map(order => (
              <div
                className="w-50 p-5 my_transition hover:shadow-lg hover:shadow-slate-600 hover:translate-y-1 hover:translate-x-1 sm:mx-auto"
                key={uuidv4()}
              >
                <img src={order.placeImg} alt={order.placeAlt} />
                <h4 className="font-bold pt-3">{order.placeName}</h4>
                <p className="font-bold text-[#FF715B]">
                  Price: ${order.placePrice}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
