import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import MyInput from "../../../components/UI/input/MyInput";
import { Context } from "../../../index";

const Login = () => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    store.isAuth && navigate(-1)
  },)

  const onClickLogin = event => {
    store.login(email, password);
    navigate(from, { replace: true });
    reset();
  };

  return (
    <div className="mt-4 px-40 md:px-0 md:w-330 md:mx-auto xs:w-[290px] xs:px-3 xss:w-[280px] xss:px-2">
      <form className="pb-10" onSubmit={handleSubmit(onClickLogin)}>
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
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        {errors?.email && (
          <div className="text-red-500">
            {errors?.email?.message || "Error!"}
          </div>
        )}
        {store.isError ? (
          <div className="text-red-500">
            Email or password entered incorrectly
          </div>
        ) : (
          ""
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
        <input
          type="submit"
          value="log in"
          className="bg-[#FF715B]  mt-4 w-full py-3 uppercase text-white font-bold hover:bg-opacity-80 "
        />
      </form>
    </div>
  );
};

export default observer(Login);
