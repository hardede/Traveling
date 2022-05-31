import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import useTotalPrice from "../../../helpers/useTotalPrice";
import { AppContext } from "../../AppContext";
import BagItemsList from "./BagItemsList/BagItemsList";

const BagItems = () => {
  const { bagItems } = useContext(AppContext);

  const { totalSum } = useTotalPrice();

  const renderBagList = bagItems.map(bag => {
    return <BagItemsList bag={bag} key={bag.id} />;
  });

  return (
    <CSSTransition timeout={5000} classNames="fade">
      <div className="w-144 mt-10 mr-2 sm:w-full">
        <div className="flex items-center justify-between bg-white px-7.5 py-6 smm:px-2 xs:block">
          <h3 className="text-3xl font-bold uppercase smm:text-xl xs:mb-3">
            my bag
          </h3>
          <p className="font-mono text-sm text-[#502c25] opacity-90">
            Items are reserved for 60 minutes
          </p>
        </div>
        <div className="mt-2.5 flex flex-col">{renderBagList}</div>
        <div className="flex items-center justify-end bg-white px-7.5 py-6">
          <h3 className="text-base font-bold uppercase pr-10">sub-total</h3>
          <p className="text-[#FF715B] text-lg font-bold font-noto border-b border-[#FF715B]">
            ${totalSum}
          </p>
        </div>
      </div>
    </CSSTransition>
  );
};

export default BagItems;
