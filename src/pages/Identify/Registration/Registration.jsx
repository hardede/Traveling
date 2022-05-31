import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { dayData } from "../../../components/BirthDate/constants/day";
import { monthData } from "../../../components/BirthDate/constants/month";
import { yearData } from "../../../components/BirthDate/constants/year";
import MyInput from "../../../components/UI/input/MyInput";
import { Context } from "../../../index";

const Registration = () => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = data => {
    store.registration(
      email,
      firstName,
      lastName,
      // getValueDay,
      // getValueMonth,
      // getValueYear,
      password
    );
    navigate(from, { replace: true });
    reset();
  };

  const getValueDay = value => {
    return value ? dayData.find(d => d.value === value) : "";
  };

  const getValueMonth = value => {
    return value ? monthData.find(d => d.value === value) : "";
  };

  const getValueYear = value => {
    return value ? yearData.find(d => d.value === value) : "";
  };

  return (
    <div className="px-40 md:px-0 md:w-330 md:mx-auto xs:w-[290px] xs:px-3 xss:w-[280px] xss:px-2">
      <form className="pb-10" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col uppercase text-[#777] font-bold mb-3 xs:w-[300px]">
          email address:
        </label>
        <MyInput
          {...register("email", {
            required: "email is require field!",
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: "Please enter valid Email",
            },
          })}
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        {errors?.email && (
          <div className="text-red-500">
            {errors?.email?.message || "Error!"}
          </div>
        )}

        <label className="flex flex-col uppercase text-[#777] font-bold mt-5 mb-3 xs:w-[300px]">
          first name:
        </label>
        <MyInput
          {...register("firstName", {
            required: "Name is require field!",
            minLength: {
              value: 3,
              message: "must be at least 3 letters",
            },
          })}
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
        />
        {errors?.firstName && (
          <div className="text-red-500">{errors.firstName.message}</div>
        )}
        <label className="flex flex-col uppercase text-[#777] font-bold mb-3 mt-5 xs:w-[300px]">
          last name:
        </label>
        <MyInput
          {...register("lastName", {
            required: "lastName is require field!",
          })}
          onChange={e => setLastName(e.target.value)}
          value={lastName}
        />
        {errors?.lastName && (
          <div className="text-red-500">{errors.lastName.message}</div>
        )}
        <label className="flex flex-col uppercase text-[#777] font-bold mb-3 mt-5 xs:w-[300px]">
          password:
        </label>
        <MyInput
          {...register("password", {
            required: "Password is require field!",
            minLength: {
              value: 6,
              message: "There must be at least 6 letters in your characters",
            },
            maxLength: {
              value: 15,
              message: "Password cannot be more than 15 characters",
            },
          })}
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        {errors?.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <div>
          <p className="uppercase text-[#777] font-bold mb-3 mt-5">
            date of birth:
          </p>
          <div className="mb-10 flex xs:block">
            <div>
              <Controller
                control={control}
                name="birth.day"
                // rules={{
                //   required: "Day is required!",
                // }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <Select
                      classNamePrefix="custom-selectAccount"
                      // default={selectedOption}
                      onChange={newValue => onChange(newValue.value)}
                      value={getValueDay(value)}
                      options={dayData}
                      // menuIsOpen={true}
                      isSearchable={false}
                      placeholder="Day"
                      className="w-22 transition-all ease-in"
                    />
                    {error && (
                      <div className="text-red-500 text-xs text-center xs:text-left xs:mb-3">
                        {error.message}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="birth.month"
                // rules={{
                //   required: "Month is required!",
                // }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <Select
                      classNamePrefix="custom-selectAccount"
                      // default={selectedOption}
                      onChange={newValue => onChange(newValue.value)}
                      value={getValueMonth(value)}
                      options={monthData}
                      isSearchable={false}
                      placeholder="Month"
                      className="w-32 mx-3 xs:mx-0"
                    />
                    {error && (
                      <div className="text-red-500 text-xs text-center xs:text-left xs:mb-3">
                        {error.message}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="birth.year"
                // rules={{
                //   required: "Year is required!",
                // }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <Select
                      classNamePrefix="custom-selectAccount"
                      // default={selectedOption}
                      onChange={newValue => onChange(newValue.value)}
                      value={getValueYear(value)}
                      options={yearData}
                      isSearchable={false}
                      placeholder="Year"
                      className="w-24"
                    />
                    {error && (
                      <div className="text-red-500 text-xs text-center xs:text-left">
                        {error.message}
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="join revel"
          className="bg-[#FF715B] mt-4 w-full py-3 uppercase text-white font-bold hover:bg-opacity-80 disabled:bg-opacity-60 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default observer(Registration);
