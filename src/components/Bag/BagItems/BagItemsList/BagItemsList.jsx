import React, { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { AppContext } from "../../../AppContext";
import StarRating from "../../../Tour/TourList/StarRating";

const BagItemsList = ({ favor = false, bag = [] }) => {
  const [isFav, setIsFav] = useState(favor);
  const {
    deleteItemsBag,
    onAddToFavorite,
    bagItems,
    setBagItems,
    onAddToFavoriteTimeOut,
  } = useContext(AppContext);
  const { placeImg, placePrice, placeName, placeReviews } = bag;

  const onClickFav = item => {
    onAddToFavorite(item);
    deleteItemsBag(item)
    setIsFav(!isFav);
  };


  const timeOut = () => {
    setBagItems([])
    onAddToFavoriteTimeOut(bagItems);
  }

  setTimeout(timeOut, 3600000);

  return (
    <div className="relative bg-white px-7.5 py-5 mb-2.5 smm:px-2">
      <div className="flex xss:block xss:mx-auto">
        <div className="w-30 xss:mb-3">
          <img src={placeImg} alt="pic" draggable="false" />
        </div>
        <div className="pl-8 xs:pl-2">
          <span className="font-bold text-[#FF715B] text-xl mr-4 font-noto">
            ${placePrice}
          </span>
          <h4 className="font-noto font-bold text-lg my-2 xs:text-base">{placeName}</h4>
          <div className="flex mb-2 xs:block xss:flex">
            <div className="pt-1.5 mr-2">
              <StarRating />
            </div>
            <p className="text-lg text-[#A79997]">{placeReviews}</p>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onClickFav(bag)}
          >
            {isFav ? (
              <AiFillHeart className="fillHeart" />
            ) : (
              <AiOutlineHeart className="outlineHeart" />
            )}
            <p className="pl-2">Save for later</p>
          </div>
        </div>
      </div>
      <div className="absolute right-4 top-4">
        <ImCross
          className="text-[#948684] hover:text-[#746f6f] cursor-pointer my_transition"
          onClick={() => deleteItemsBag(bag)}
        />
      </div>
    </div>
  );
};

export default BagItemsList;
