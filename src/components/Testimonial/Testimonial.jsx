import React from "react";
import Slider from "./Slider/Slider";

const Testimonial = () => {

  return (
    <div className="mt-37.5" id="testimonial">
      <div className="max-w-8xl mx-auto px-5">
        <h1 className="font-noto font-extrabold text-xxll text-[#2C2C2C] whitespace-pre-wrap text-center smm:text-2xl">
          {"What Our Happy Customers\nSay About Us"}
        </h1>
        <div className="mt-25 bg-testimonial_bg bg-center bg-no-repeat bg-contain md:bg-none">
          {/* <div className="w-690 mx-auto h-3 bg-[#FF715B] block"></div> */}
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
