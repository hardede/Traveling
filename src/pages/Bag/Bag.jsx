import React, { useContext, useState } from "react";
import { AppContext } from "../../components/AppContext";
import { BsBag } from "react-icons/bs";
import BagItems from "../../components/Bag/BagItems/BagItems";
import BagCheck from "../../components/Bag/BagCheck/BagCheck";
import BagModal from "../../components/Modal/bagModal/BagModal";
import useScrollToTop from "../../hooks/useScrollToTop";

const Bag = () => {
  const { bagItems } = useContext(AppContext);
  const [bagModal, setBagModal] = useState(false);
  useScrollToTop("bag");

  return (
    <div className="max-w-4xxl mx-auto px-5">
      <div className="pt-30">
        {bagItems.length <= 0 ? (
          <div className="bg-white w-620 mx-auto text-center p-5 mt-20 animate-show sm:w-full xs:p-2">
            <BsBag className="text-2xl mx-auto" />
            <h4 className="pt-5 font-bold text-lg">Your bag is empty</h4>
            <p className="pt-5 whitespace-pre-wrap text-sm font-noto">
              {
                "But the items added before have been moved to the Saved Items list - \n so you can buy them again if you want!"
              }
              <span
                className="underline cursor-pointer"
                onClick={() => setBagModal(!bagModal)}
              >
                {" "}
                Why?
              </span>
            </p>
            {bagModal && (
              <BagModal bagModal={bagModal} setBagModal={setBagModal} />
            )}
          </div>
        ) : (
          <div className="flex justify-center mdd:block">
            <BagItems />
            <BagCheck />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;
