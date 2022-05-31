import React from "react";
import google from "../assets/image/homePage/Google.svg";
import apple from "../assets/image/homePage/Apple.svg";
import phone from "../assets/image/homePage/phone.png";
import phone2 from "../assets/image/homePage/phone2.png";

const Download = () => {
  return (
    <div className="mt-50 bg-download_bg bg-center bg-no-repeat bg-cover xs:hidden">
      <div className="max-w-8xl mx-auto px-5 flex justify-between lgg:block">
        <div>
          <h2 className="pt-40 pb-15 font-noto font-extrabold text-xxll text-[#2C2C2C] whitespace-pre-wrap">
            {"Download Now Travel\nCommunity Apps"}
          </h2>
          <div className="flex pb-40">
            <div className="mr-7.5 px-3 py-2 flex items-center text-[white] bg-[#2C2C2C] rounded-lg cursor-pointer">
              <img src={google} alt="google" />
              <div className="ml-3">
                <p className="uppercase text-xs">get it on</p>
                <h5 className="font-bold text-xl">Google Play</h5>
              </div>
            </div>
            <div className="px-3 py-2 flex items-center text-[white] bg-[#FF715B] rounded-lg cursor-pointer">
              <img src={apple} alt="apple" />
              <div className="ml-3">
                <p className="text-xs">Available on the</p>
                <h5 className="font-bold text-xl">App Store</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img
              src={phone}
              alt="phone"
              className="relative top-24 left-32 z-30 lgg:hidden"
            />
          </div>
          <div>
            <img
              src={phone2}
              alt="phone2"
              className="relative top-4 shadow-phoneShadow rounded-3xl lgg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
