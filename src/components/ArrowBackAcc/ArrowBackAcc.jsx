import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ArrowBackAcc = () => {
  const navigate = useNavigate();

  const goBack = () => navigate('/account');
  return (
    <div className="hidden md:flex" onClick={goBack}>
      {" "}
      <IoIosArrowBack />
      <FaRegUser />
    </div>
  );
};

export default ArrowBackAcc;
