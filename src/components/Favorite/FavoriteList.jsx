import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { AppContext } from "../AppContext";
import StarRating from "../Tour/TourList/StarRating";

const FavoriteList = ({ favorite }) => {
  const { deleteItemsFavorite, onAddToBag } = useContext(AppContext);
  const {placeImg, placeAlt, placePrice, placeName, placeReviews } = favorite;

  const moveToBag = item => {
    onAddToBag(item);
    deleteItemsFavorite(favorite);
  };

  return (
    <div className="bg-white px-5 pb-7.5 mx-9 mb-10">
      <div className="w-96 xs:w-300">
        <div
          className="relative w-8 h-8 top-14 right-6 float-right "
          onClick={() => deleteItemsFavorite(favorite)}
        >
          <RiDeleteBinLine className="fill-white text-3xl my_transition hover:fill-orange-600 hover:scale-125" />
        </div>
        <img src={placeImg} alt={placeAlt} draggable="false" />
        <div className="mt-2.5">
          <h4 className="font-noto text-lg">{placeName}</h4>
          <span className="block font-bold text-[#FF715B] text-2xl pt-5">
            ${placePrice}
          </span>
          <div className="flex pt-2.5">
            <div className="pt-1.5 mr-2">
              <StarRating />
            </div>
            <p className="text-lg text-[#A79997]">{placeReviews}</p>
          </div>
        </div>
        <button
          className="block mt-5 uppercase w-full px-3 py-3 font-bold text-xl border-2 border-[#FF715B] text-black hover:bg-[#ffe1dc] my_transition hover:translate-y-1"
          onClick={() => moveToBag(favorite)}
        >
          move to bag
        </button>
      </div>
    </div>
  );
};

export default FavoriteList;
