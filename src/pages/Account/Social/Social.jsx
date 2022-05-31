import React from "react";
import { v4 as uuidv4 } from "uuid";
import ArrowBackAcc from "../../../components/ArrowBackAcc/ArrowBackAcc";
import facebook from "../../../components/assets/image/accPage/facebook.svg";
import instagram from "../../../components/assets/image/accPage/instagram.svg";
import social1 from "../../../components/assets/image/accPage/social1.svg";
import twitter from "../../../components/assets/image/accPage/twitter.svg";
import Left from "../../../components/MainBlock/LeftSight/Left";

const socialsData = [
  {
    id: uuidv4(),
    name: "Instagram",
    imgUrl: instagram,
    imgAlt: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    id: uuidv4(),
    name: "Facebook",
    imgUrl: facebook,
    imgAlt: "Facebook",
    link: "https://www.facebook.com/watch",
  },
  {
    id: uuidv4(),
    name: "Twitter",
    imgUrl: twitter,
    imgAlt: "Twitter",
    link: "https://www.facebook.com/watch",
  },
];

const Social = () => {
  return (
    <div className="flex">
      <Left />
      <div className="w-620 mx-auto">
        <div className="px-6 pt-6 pb-10 bg-white  smm:py-5 xs:px-2 ">
          <div className="items-center md:flex mb-4">
            <ArrowBackAcc />
            <div className="md:flex md:mx-auto md:items-center ">
              <img
                src={social1}
                alt="social"
                className="w-10 h-10 md:w-8 md:h-8 xs:w-6 xs:h-6"
              />
              <h2 className="uppercase mt-3 text-4xl font-bold md:mt-0 md:ml-3 md:text-center md:text-2xl xs:text-xl xss:text-base xss:ml-1">
                social accounts
              </h2>
            </div>
          </div>
          <p className="text-base opacity-70 xs:text-sm">
            Use your social media accounts to make it even easier to log in.
          </p>
        </div>
        {/* <div className="px-6 pt-6 pb-7 bg-white">
          <img src={social1} alt="social" className="w-10 h-10" />
          <h2 className="uppercase my-3 text-4xl font-bold">social accounts</h2>
          <p className="text-base opacity-70">
            Use your social media accounts to make it even easier to log in.
          </p>
        </div> */}
        <div className="ml- mt-2.5 text-center bg-white py-9">
          <div className="flex items-center px-6 smm:flex-col smm:items-start">
            {socialsData.map(social => (
              <a
                href={social.link}
                key={social.id}
                target="__blank"
                className="flex items-center mr-4 last:mr-0 cursor-pointer opacity-70 hover:opacity-100 my_transition hover:translate-y-1 smm:mb-5"
              >
                <div className="bg-[#FF715B] p-0.5 mr-2.5 rounded-md">
                  <img
                    src={social.imgUrl}
                    alt={social.imgAlt}
                    className="w-8"
                  />
                </div>
                <p className="opacity-100 text-lg">{social.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
