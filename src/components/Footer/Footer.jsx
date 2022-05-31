import React from "react";

import logo from "../assets/image/homePage/travelLogo.svg";
import { contactsFooter } from "./constants/contactsFooter";
import { linksQuick } from "./constants/linksQuik";
import { linksSupport } from "./constants/linksSupport";

const Footer = () => {
  return (
    <div className="mt-45">
      <div className="max-w-8xl mx-auto px-5">
        <div className="grid grid-cols-4 pb-22.5 sm:grid sm:grid-cols-1 lg:grid-cols-2">
          <div className="lg:mb-10">
            <img src={logo} alt="logo" />
            <p className="py-7.5 text-[#A79997] text-lg xl:text-base lg:text-lg">
              You can dream, create, design, and buildsa the most wonderful
              place.
            </p>
            {contactsFooter.map(contact => (
              <div key={contact.id} className="flex pb-4 ">
                <img
                  src={contact.imgUrl}
                  alt={contact.alt}
                  className="pr-4.5 w-10"
                />
                <a
                  href="/g"
                  className="text-[#A79997] text-lg hover:text-[#FF715B] cursor-pointer my_transition xl:text-base lgg:text-sm lg:text-lg"
                >
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
          <div className="mx-auto sm:mx-0 sm:mb-10">
            <h4 className="font-noto text-xxll pb-7.5 font-bold">
              Quick Links
            </h4>
            {linksQuick.map(quick => (
              <div
                key={quick.id}
                className="text-[#9c9999] hover:text-[#FF715B] pb-5 my_transition"
              >
                <span className="mr-4">-</span>
                <a href={quick.link} className="text-lg">
                  {quick.text}
                </a>
              </div>
            ))}
          </div>
          <div className="sm:mb-10">
            <h4 className="font-noto text-xxll pb-7.5 font-bold">Support</h4>
            {linksSupport.map(support => (
              <div
                key={support.id}
                className="text-[#9c9999] hover:text-[#FF715B] pb-5"
              >
                <span className="mr-4">-</span>
                <a href={support.link} className="text-lg">
                  {support.text}
                </a>
              </div>
            ))}
          </div>
          <div>
            <h4 className="pb-30 font-noto font-bold text-xxll lg:pb-10">Newsletter</h4>
            <button className="py-5 px-8 homePageBtn">Subscribe Now</button>
          </div>
        </div>
        <div className="before:w-full before:h-0.5 before:block before:bg-[#e0d6d4] text-center">
          <p className="text-[#A79997] py-7.5 text-lg">
            Copyright @2020 Ravel. Designed By{" "}
            <span className="text-[#FF715B]">Md Shamim Hossain</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
