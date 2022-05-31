import React from "react";
import { sliderInfo } from "../sliderInfo";

const Dots = ({ active, onActive }) => {
  return (
    <div className="flex justify-center  my-1">
      {sliderInfo.map((dot, index) => (
        <span
          key={index}
          className={
            active === index
              ? "bg-[#FF715B] rounded-full mr-5 last:mr-0  p-1.5 transition ease-in-out duration-300 scale-125"
              : "bg-[#C4C4C4] rounded-full mr-5 last:mr-0 hover:bg-[#FF715B] p-1.5 hover:scale-125 transition ease-in-out duration-300"
          }
          onClick={() => onActive(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
