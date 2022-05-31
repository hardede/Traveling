import React from 'react'

const Burger = ({ burgerShow, setBurgerShow }) => {

  const burgerActive =
    "absolute top-5 block w-6 h-1 bg-white transition easy-in-out duration-500 after:absolute after:bottom-2 after:block after:w-6 after:h-1 after:bg-white before:absolute before:top-2 before:block before:w-6 before:h-1 before:bg-white";
  const burgerDisabled =
    "absolute top-5 block w-6 h-1 bg-transparent transition easy-in-out duration-500 after:absolute after:bottom-0 after:block after:w-6 after:h-1 after:bg-white after:rotate-45 before:absolute before:top-0 before:block before:w-6 before:h-1 before:bg-white before:-rotate-45";

  return (
    <div
      className="bg-orange-500 pl-2.5 relative w-11 h-11 rounded-full z-40"
      onClick={() => setBurgerShow(!burgerShow)}
    >
      <span className={burgerShow ? burgerDisabled : burgerActive} />
    </div>
  );
};

export default Burger