import React, { useState } from "react";
import { sliderInfo } from "../sliderInfo";
import Dots from "./Dots";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className=" w-690 mx-auto before:h-3 before:bg-[#FF715B] before:block overflow-hidden  mdd:w-144 sm:w-100 smm:w-300 xss:w-64 ">
      <div className="flex transition-all">
        {sliderInfo.map((slide, index) => (
          <div
            key={slide.id}
            className={
              index === current
                ? "pt-17.5 pb-12.125 px-15 inline-block sm:px-2 smm:py-7"
                : "pt-17.5 pb-12.125 px-15 hidden sm:px-2"
            }
          >
            <div className="flex justify-center items-center pb-12.125 smm:pb-7">
              <img
                src={slide.clientUrl}
                alt="client"
                className="mr-5"
                draggable="false"
              />
              <div>
                <h3 className="font-noto font-bold text-2xl mdd:text-xl sm:text-lg smm:text-base">
                  {slide.clientName}
                </h3>
                <p className="font-mono font-bold text-lg text-[#FF715B]">
                  {slide.clientWork}
                </p>
              </div>
            </div>
            <p className="text-2xl text-[#A79997] text-center font-normal h-40 overflow-y-auto mdd:text-xl sm:text-lg smm:text-base">
              {slide.clientText}
            </p>
          </div>
        ))}
      </div>
      <Dots active={current} onActive={current => setCurrent(current)} />
    </div>
  );
};

export default Slider;
