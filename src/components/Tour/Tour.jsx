import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import TourList from "./TourList/TourList";


const Tour = () => {
  const { items } = useContext(AppContext);

  const renderTourList = items.map(item => {
    return <TourList {...item} key={item.id} />;
  })

  return (
    <div className="mt-45" id="tour">
      <div className="max-w-8xl mx-auto px-5">
        <h1 className="text-center font-extrabold font-noto text-xxll text-[#2C2C2C] pb-25 mdd:pb-10 smm:pb-5 smm:text-2xl">
          Choose Your Destination
        </h1>
        <div className="grid grid-cols-3 xl:grid-cols-1 ">{renderTourList}</div>
        <div className="relative text-center bottom-20 xl:bottom-0">
          <Link to="/offers" className="py-5 inline-block px-10 homePageBtn">
            View All Places
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tour;
