import React from "react";

const Hero = () => {
  return (
    <div className="mt-30 bg-hero-img bg-100 h-1000 bg-cover" id="hero">
      <div className="max-w-8xl mx-auto px-5">
        <div className="pl-17.5 sm:pl-2">
          <h1 className="pt-285 text-7xl font-noto font-bold text-[#2C2C2C] whitespace-pre-wrap leading-110 mb-12 mdd:text-5xl smm:text-3xl">
            {"It’s Time To\nExplore The World"}
          </h1>
          <button className="py-4.5 px-9 homePageBtn">Plan Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
