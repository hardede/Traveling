import React, { useState } from "react";
import { store } from "../../..";
import ArrowBackAcc from "../../../components/ArrowBackAcc/ArrowBackAcc";
import detail from "../../../components/assets/image/accPage/details1.svg";
import DaySelect from "../../../components/BirthDate/DaySelect";
import MonthSelect from "../../../components/BirthDate/MonthSelect";
import YearSelect from "../../../components/BirthDate/YearSelect";
import Left from "../../../components/MainBlock/LeftSight/Left";
import MyInput from "../../../components/UI/input/MyInput";

const Details = () => {
  const [firstInput, setFirstInput] = useState();
  const [lastInput, setLastInput] = useState();
  const [emailInput, setEmailInput] = useState();

  const handleUpdateForm = () => {};

  return (
    <div className="flex">
      <Left />
      <div className="w-620 md:mx-auto xs:w-[310px] xss:w-[280px]">
        <div className="px-6 pt-6 pb-10 bg-white xs:px-2">
          <div className="md:flex items-center md:mb-4">
            <ArrowBackAcc />
            <div className="md:flex md:mx-auto ">
              <img
                src={detail}
                alt="detail svg"
                className="w-10 h-10 md:w-8 md:h-8"
              />
              <h2 className="uppercase my-3 text-4xl font-bold md:my-0 md:ml-3 md:text-center md:text-2xl">
                my details
              </h2>
            </div>
          </div>
          <p className="text-base opacity-70 mb-8 xs:text-sm">
            Feel free to edit any of your details below so your Ravel account is
            totally up to date.
          </p>
          <form className="" onClick={handleUpdateForm()}>
            <label className="flex flex-col uppercase text-[#777] font-bold mb-3 xs:w-[270px]">
              first name:
            </label>
            <MyInput
              defaultValue={store.user.firstName}
              value={firstInput}
              onChange={() => setFirstInput(firstInput)}
            />
            <label className="flex flex-col uppercase text-[#777] font-bold mb-3 mt-5">
              last name:
            </label>
            <MyInput
              defaultValue={
                store.user.lastName.length <= 0 ? "" : store.user.lastName
              }
              value={lastInput}
              onChange={() => setLastInput(lastInput)}
            />
            <label className="flex flex-col uppercase text-[#777] font-bold mb-3 mt-5">
              email address:
            </label>
            <MyInput
              defaultValue={
                store.user.email.length <= 0 ? "" : store.user.email
              }
              value={emailInput}
              onChange={() => setEmailInput(emailInput)}
            />
          </form>
          <div>
            <p className="uppercase text-[#777] font-bold mb-3 mt-5">
              date of birth:
            </p>
            <div className="flex mb-10 xs:block">
              <DaySelect />
              <MonthSelect />
              <YearSelect />
            </div>
            <button
              className="uppercase bg-[#FF715B] text-white text-lg font-medium px-25 py-2.5 bg-opacity-80 hover:bg-opacity-100 shadow_transition xs:px-20 xss:px-[66px] "
              // onClick={() => handleUpdateForm()}
            >
              save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
