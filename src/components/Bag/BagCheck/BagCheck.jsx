import React, { useContext } from "react";
import useTotalPrice from "../../../helpers/useTotalPrice";
import { AppContext } from "../../AppContext";

const BagCheck = () => {
  const {bagItems, setBagItems, onAddToOrders} = useContext(AppContext)
  const { totalSum } = useTotalPrice();

  const onClickCheck = (item) => {
    onAddToOrders(item)
    setBagItems([])
  }

  return (
    <div className="w-90 h-50 px-7.5 py-6 bg-white mt-10 sm:w-full">
      <h4 className="text-xl font-bold uppercase">Total</h4>
      <div className="flex justify-between mt-5">
        <p className="text-lg font-bold xs:text-base">Sub-Total</p>
        <div className="border-b border-[#b2b2b2] w-1/2 xss:w-24"></div>
        <p className="text-[#FF715B] font-bold font-noto">$ {totalSum}</p>
      </div>
      <button
        className="mt-5 uppercase bg-[#FF715B] w-full text-white font-bold py-2 font-noto text-lg  shadow-3xxl bg-opacity-80 hover:bg-opacity-100 transition ease-in-out duration-300 hover:translate-y-1 hover:shadow-3xxll"
        onClick={() => onClickCheck(bagItems)}
      >
        checkout
      </button>
    </div>
  );
};

export default BagCheck;
