import React, { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { Context } from "../../../..";
import { AppContext } from "../../../AppContext";
import StarRating from "../../TourList/StarRating";
import ContentLoader from "react-content-loader";

const ToursOfferList = ({ onClickPlus, favor = false, ...offers }) => {
  const [isFav, setIsFav] = useState(favor);
  const { store } = useContext(Context);
  const { onAddToFavorite } = useContext(AppContext);
  const { placeImg, placeAlt, placeName, placePrice, placeReviews } = offers;

  const onClickFav = item => {
    onAddToFavorite(item);
    setIsFav(!isFav);
  };

  return store.isLoading ? (
    <ContentLoader
      speed={3}
      width={425}
      height={555}
      viewBox="0 0 425 555"
      backgroundColor="#8f5a28"
      foregroundColor="#9c3b07"
    >
      <rect x="0" y="0" rx="2" ry="2" width="425" height="440" />
      <rect x="40" y="470" rx="13" ry="13" width="250" height="30" />
      <rect x="40" y="515" rx="4" ry="4" width="60" height="15" />
      <rect x="120" y="515" rx="4" ry="4" width="90" height="15" />
      <rect x="225" y="515" rx="4" ry="4" width="100" height="15" />
      <rect x="350" y="475" rx="0" ry="0" width="50" height="50" />
    </ContentLoader>
  ) : (
    <div className="w-96 mx-4 md:mx-0">
      <div
        className="relative w-8 h-8 top-12 left-4 bg-white rounded-full"
        onClick={() => onClickFav(offers)}
      >
        {isFav ? (
          <AiFillHeart className="fillHeart" />
        ) : (
          <AiOutlineHeart className="outlineHeart" />
        )}
      </div>
      <img src={placeImg} alt={placeAlt} draggable="false" />
      <div className="flex items-center py-5 px-9 bg-white relative bottom-12.125 shadow-3xxl smm:w-full xs:px-3 xss:px-1">
        <div className="mr-5 xss:mr-2">
          <h4 className="font-noto font-bold text-xl xs:text-lg">
            {placeName}
          </h4>
          <div className="flex">
            <span className="font-bold text-[#FF715B] text-lg mr-4 xs:text-base xs:mr-3">
              ${placePrice}
            </span>
            <div className="pt-1.5 mr-2 xs:pt-0 xss:mr-2">
              <StarRating />
            </div>
            <p className="text-lg text-[#A79997] xs:text-sm">{placeReviews}</p>
          </div>
        </div>
        <button
          className="px-3 py-3 font-bold text-2xl bg-[#FF715B] text-white hover:bg-[#f6bdb4] hover:text-[#fa573e] shadow_transition"
          onClick={() => onClickPlus(offers)}
        >
          <TiPlus />
        </button>
      </div>
    </div>
  );
};

export default ToursOfferList;
