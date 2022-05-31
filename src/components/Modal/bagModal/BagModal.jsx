import React from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const BagModal = ({ bagModal, setBagModal }) => {
  return (
    <div
      className={
        bagModal
          ? "h-screen w-screen flex items-center justify-center bg-black bg-opacity-40 fixed top-0 left-0 opacity-100 z-50 transition ease-in duration-1000"
          : "h-screen w-screen flex items-center justify-center bg-black bg-opacity-40 fixed top-0 left-0 opacity-0 transition ease-in duration-1000"
      }
      onClick={() => setBagModal(false)}
    >
      <div
        className={
          bagModal
            ? "p-8 w-100 bg-white relative scale-100 transition-all ease-in-out duration-1000"
            : "p-8 w-100 bg-white relative scale-50"
        }
        onClick={e => e.stopPropagation()}
      >
        <ImCross
          onClick={() => setBagModal(false)}
          className="absolute right-5 top-5 text-[#948684] hover:text-[#746f6f] transition ease-in-out duration-500 cursor-pointer"
        />
        <h3 className="pt-5 uppercase font-bold text-lg text-[#2d2d2d]">
          items in your bag
        </h3>
        <p className="text-sm text-left pt-4">
          Items are reserved for you in the bag for 60 minutes and are then
          moved to your Saved Items.
        </p>
        <p className="text-sm text-left py-2.5">
          This means they’re no longer reserved and other customers can buy
          them, but don’t worry – you can easily find them again and add them
          back into your bag.
        </p>
        <button
          className="px-31 mt-2.5 mb-2.5 bg-[#FF715B] text-white font-bold uppercase py-2.5 bg-opacity-80 hover:bg-opacity-100 my_transition xs:px-20"
          onClick={() => setBagModal(false)}
        >
          ok, got it
        </button>
        <Link
          to="/saved"
          className="text-[#2d2d2d] inline-block uppercase font-bold text-sm py-3 px-21.5 border-2 border-[#FF715B] hover:bg-[#FF715B] hover:bg-opacity-20 my_transition xs:px-10"
        >
          view all saved items
        </Link>
      </div>
    </div>
  );
};

export default BagModal;
