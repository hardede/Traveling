import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import AccountHeader from "../Header/AccountHeader/AccountHeader";

const LayoutAcc = () => {
  return (
    <div className="bg-[#e9e9e9] h-full">
      <Container>
        <AccountHeader />
        <Outlet />
      </Container>
    </div>
  );
};

export default LayoutAcc;
