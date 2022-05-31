import React, { useState } from "react";
import arrowOrange from "../assets/image/homePage/arrow_right.svg";
import arrowWhite from "../assets/image/homePage/arrow_left.svg";

const HeroBtn = ({direction}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="px-5 py-4 border-2 border-[#e0d6d4] hover:bg-[#FF715B] mx-2.5  my_transition"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <img
          src={arrowWhite}
          alt="arrow_left"
          className={direction === "next" ? "" : "rotate-180"}
        />
      ) : (
        <img
          src={arrowOrange}
          alt="arrow_left"
          className={direction === "next" ? "rotate-180" : ""}
        />
      )}
    </button>
  );
};

export default HeroBtn;
