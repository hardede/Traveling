import React, { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { AppContext } from "../../AppContext";
import StarRating from "./StarRating";

const TourList = ({ favor = false, ...items }) => {
  const { onAddToBag, onAddToFavorite } = useContext(AppContext);
  const { place, placeImg, placeAlt, placeName, placePrice, placeReviews } =
    items;
  const [isFav, setIsFav] = useState(favor);
  const onClickPlus = item => {
    onAddToBag(item);
  };
  const onClickFav = item => {
    onAddToFavorite(item);
    setIsFav(!isFav);
  };

  return (
    <>
      <div
        className={
          place === "odd"
            ? "mr-7.5 pt-44 xl:pt-0 xl:mx-auto"
            : "xl:mx-auto mr-7.5"
        }
      >
        <div
          className="relative w-8 h-8 top-12 left-4 bg-white rounded-full"
          onClick={() => onClickFav(items)}
        >
          {isFav ? (
            <AiFillHeart className="fillHeart" />
          ) : (
            <AiOutlineHeart className="outlineHeart" />
          )}
        </div>
        <img src={placeImg} alt={placeAlt} draggable="false" />
        <div className="flex  items-center py-5 px-9 bg-white relative bottom-12.125 shadow-3xxl xl:w-112.5 smm:w-full xs:px-3 xss:px-1">
          <div className="mr-5 xss:mr-2">
            <h4 className="font-noto font-bold text-xl xs:text-lg">
              {placeName}
            </h4>
            <div className="flex items-center">
              <span className="font-bold text-[#FF715B] text-lg mr-7.5 xs:text-base xs:mr-3">
                ${placePrice}
              </span>
              <div className="pt-1.5 mr-2 xs:pt-0 xss:mr-2">
                <StarRating />
              </div>
              <p className="text-lg text-[#A79997] xs:text-sm">
                {placeReviews}
              </p>
            </div>
          </div>
          <button
            className="px-3 py-3 font-bold text-2xl homePageBtn"
            onClick={() => onClickPlus(items)}
          >
            <TiPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default TourList;
