import React, { useState } from "react";
import headset from "../assets/image/homePage/headset.svg";
import house from "../assets/image/homePage/lighthouse.png";
import user2 from "../assets/image/homePage/user2.svg";
import world from "../assets/image/homePage/world.svg";

const Offer = () => {
  const [benefitOpen1, setBenefitOpen1] = useState(false);
  const [benefitOpen2, setBenefitOpen2] = useState(false);
  const [benefitOpen3, setBenefitOpen3] = useState(false);

  return (
    <div className="mt-67.5 mdd:mt-30" id="offer">
      <div className="">
        <div className="max-w-8xl mx-auto px-5 flex justify-end lg:justify-center">
          <img
            src={house}
            alt="house"
            className="relative w-192.5 h-207.5 xxll:w-100 xxll:h-[460px] lg:hidden"
            draggable="false"
          />
          <div className="pt-25 w-172.5">
            <h2 className="font-noto font-extrabold text-[#2C2C2C] text-xxll mb-16 smm:text-2xl smm:text-center">
              We Offering In Total 793 Tours Out The World
            </h2>
            <div>
              <div
                className="flex items-start cursor-pointer transition-all"
                onClick={() => setBenefitOpen1(!benefitOpen1)}
              >
                <img
                  src={user2}
                  alt="user2"
                  className={
                    benefitOpen1
                      ? "bg-[#FF715B] benefit"
                      : " bg-[#a59d9a] benefit"
                  }
                  draggable="false"
                />
                <div className="pt-3 after:w-full after:mt-12 after:h-0.5 after:bg-[#e0d6d4] after:block md:after:mt-6">
                  <h4 className="font-noto font-semibold text-2xl smm:text-lg">
                    Best Travel Guide Always For Your Services
                  </h4>
                  <p
                    className={
                      benefitOpen1
                        ? "pt-6 text-lg text-[#A79997] animate-dropDown smm:text-base"
                        : "hidden"
                    }
                  >
                    Travel has helped us to understands the meaning of life and
                    it has helped us become better people. Each time we travel,
                    we see the world with new eyes. Travel has helped us to
                    understand the meaning of life
                  </p>
                </div>
              </div>
              <div
                className="mt-11 flex items-start cursor-pointer transition-all"
                onClick={() => setBenefitOpen2(!benefitOpen2)}
              >
                <img
                  src={world}
                  alt="world"
                  className={
                    benefitOpen2
                      ? " bg-[#FF715B] benefit"
                      : " bg-[#a59d9a] benefit"
                  }
                  draggable="false"
                />
                <div className="pt-3 after:w-full after:mt-12 after:h-0.5 after:bg-[#e0d6d4] after:block md:after:mt-6">
                  <h4 className="font-noto font-semibold text-2xl smm:text-lg">
                    World Class Services Provide For You
                  </h4>
                  <p
                    className={
                      benefitOpen2
                        ? "pt-6 text-lg text-[#A79997] animate-dropDown smm:text-base"
                        : "hidden "
                    }
                  >
                    Travel has helped us to understands the meaning of life and
                    it has helped us become better people. Each time we travel,
                    we see the world with new eyes. Travel has helped us to
                    understand the meaning of life
                  </p>
                </div>
              </div>
              <div
                className="mt-11 flex items-start cursor-pointer transition-all"
                onClick={() => setBenefitOpen3(!benefitOpen3)}
              >
                <img
                  src={headset}
                  alt="world"
                  className={
                    benefitOpen3
                      ? " bg-[#FF715B] benefit"
                      : " bg-[#a59d9a] benefit"
                  }
                  draggable="false"
                />
                <div className="pt-3 after:w-full after:mt-12 after:h-0.5 after:bg-[#e0d6d4] after:block md:after:mt-6">
                  <h4 className="font-noto font-semibold text-2xl smm:text-lg">
                    24/7 Strong Customer Support
                  </h4>
                  <p
                    className={
                      benefitOpen3
                        ? "pt-6 text-lg text-[#A79997] animate-dropDown smm:text-base"
                        : "hidden"
                    }
                  >
                    Travel has helped us to understands the meaning of life and
                    it has helped us become better people. Each time we travel,
                    we see the world with new eyes. Travel has helped us to
                    understand the meaning of life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
