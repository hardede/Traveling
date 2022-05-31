import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import ToursOfferList from "./ToursOfferList/ToursOfferList";


const ToursOffer = () => {
  const { offers, onAddToBag } = useContext(AppContext);

  const onClickPlus = item => {
    onAddToBag(item);
  };

  const renderTourOfferList = offers.map(offer => {
    return (
      <ToursOfferList {...offer} key={offer.id} onClickPlus={onClickPlus} />
    );
  });


  return (
    <div className="mt-20 flex justify-center mx-auto flex-wrap sm:mt-10">
      {renderTourOfferList}
    </div>
  );
};

export default ToursOffer;
