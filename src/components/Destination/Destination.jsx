import React from "react";
import PictureData from "./PictureData/PictureData";

const Destination = () => {
  return (
    <div className="mt-67.5 mdd:mt-30" id="destination">
      <div className="max-w-8xl mx-auto px-5">
        <div className="flex lgg:flex-col ">
          <div className="w-[26.25rem] mr-16 lgg:mb-10 lgg:w-144 lgg:text-center lgg:mx-auto sm:w-full">
            <h2 className="text-[#2C2C2C] font-noto font-extrabold text-4xl leading-65 xxll:leading-10 xl:text-3xl lgg:text-center smm:text-2xl">
              Top <span className="text-[#FF715B]">Destinations</span> In The
              World
            </h2>
            <p className="text-[#A79997] text-lg mb-12 mt-8 smm:text-base">
              It is a long established fact that a reader will be the distracted
              by the readable content of a page when looking at its layout from
              it.
            </p>
            <button className="py-5 px-11 homePageBtn">Discover More</button>
          </div>
          <PictureData />
        </div>
      </div>
    </div>
  );
};

export default Destination;
