import React from "react";
import { choice } from "./constants/choice";
import HeroBtn from "./HeroBtn";

const HeroBar = () => {
  return (
    <div>
      <div className="max-w-8xl mx-auto px-5">
        <div className="flex lgg:block">
          <div className="mt-7.5 mr-15 xxll:mr-8">
            <div className="flex items-center">
              <HeroBtn direction={"next"} />
              <HeroBtn direction={"prev"} />
              <div className="mx-7.5 w-52 h-0.5 bg-[#e0d6d4] xxll:w-30 xxll:mx-4"></div>
              <div className="text-[#FF715B] text-2xl font-noto font-medium">
                03
              </div>
            </div>
          </div>
          <div className="p-11 relative -top-19.5 bg-white xxl:p-2 xxll:top-0">
            <div className="flex flex-nowrap mdd:block mdd:mx-auto">
              {choice.map(item => (
                <div
                  key={item.id}
                  className="mr-7 after:w-full after:mt-1 after:h-0.5 after:bg-[#e0d6d4] after:block xxl:mr-2 mdd:after:w-52"
                >
                  <p className="text-base text-[#A79997] font-mono">
                    {item.name}
                  </p>
                  <div>{item.choiceName}</div>
                </div>
              ))}
              <button className="w-50 py-4.5 px-9 homePageBtn xxl:w-40 xxl:px-5 mdd:mt-5">
                Discover Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBar;
