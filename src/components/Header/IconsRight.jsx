import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
import { FaRegUser } from "react-icons/fa";
import UserModal from '../Modal/userModal/UserModal';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";


const IconsRight = () => {
  const { modalAcc, setModalAcc } = useContext(AppContext);

  return (
    <div className="flex items-center">
      <div
        className="cursor-pointer mr-5 xss:mr-2"
        onClick={() => setModalAcc(!modalAcc)}
      >
        <FaRegUser className="text-xl cursor-pointer  hover:fill-[#555555] hover:scale-125 transition ease-in-out duration-500" />
        {modalAcc && <UserModal setActive={setModalAcc} />}
      </div>
      <Link to="/saved" className="mr-5 xss:mr-2">
        <AiOutlineHeart className="text-2xl cursor-pointer hover:fill-red-500 hover:scale-125 transition ease-in-out duration-500" />
      </Link>
      <Link to="/bag">
        <BsBag className="text-2xl cursor-pointer hover:fill-[#FF715B] hover:scale-125 transition ease-in-out duration-500" />
      </Link>
      {/* <img src={search} alt="search" className="cursor-pointer pl-5" /> */}
    </div>
  );
}

export default IconsRight