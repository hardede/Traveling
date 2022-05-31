import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AppContext } from "../../components/AppContext";
import FavoriteList from "../../components/Favorite/FavoriteList";
import { v4 as uuidv4 } from "uuid";
import useScrollToTop from "../../hooks/useScrollToTop";

const Saved = () => {
  const { favoriteItems } = useContext(AppContext);
  useScrollToTop("saved");

  const renderFavoriteList = favoriteItems.map(favorite => {
    return <FavoriteList favorite={favorite} key={uuidv4()} />;
  });

  return (
    <div className="container mx-auto px-4">
      <div className="pt-30">
        {favoriteItems.length <= 0 ? (
          <div className="bg-white w-620 mx-auto text-center p-5 mt-20 animate-show sm:w-full xs:p-2">
            <AiOutlineHeart className="text-3xl cursor-pointer mx-auto" />
            <h4 className="pt-5 font-bold text-lg">You have no Saved Items</h4>
            <p className="pt-5 mb-4 whitespace-pre-wrap text-sm font-noto">
              {
                "Start saving as you shop by selecting the little heart.\nWe'll sync your items across all your devices. Easy."
              }
            </p>
            <Link
              to="/offers"
              className="uppercase inline-block bg-[#FF715B] font-bold text-white py-2.5 px-16  bg-opacity-80 hover:bg-opacity-100 shadow_transition xs:px-12"
            >
              start shopping
            </Link>
          </div>
        ) : (
          <div className="flex justify-center flex-wrap">
            {renderFavoriteList}
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;
