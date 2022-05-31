import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Bag from "../pages/Bag/Bag";
import Home from "../pages/Home";
import Login from "../pages/Identify/Login/Login";
import Registration from "../pages/Identify/Registration/Registration";
import Offers from "../pages/Offers/Offers";
import Saved from "../pages/Saved/Saved";
import Layout from "./Layout/Layout";
import LayoutAcc from "./Layout/LayoutAcc";
import LayoutBL from "./Layout/LayoutBL";
import LayoutIdentify from "./Layout/LayoutInd";
import LayoutOffer from "./Layout/LayoutOffer";
import PrivateRoutes from "./PrivateRoutes";
import { privateRoutes } from "./routes/accountRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<LayoutBL />}>
          <Route path="saved" element={<Saved />} />
          <Route path="bag" element={<Bag />} />
        </Route>
        <Route path="account" element={<LayoutAcc />}>
          {privateRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          ))}
        </Route>
        <Route path="offers" element={<LayoutOffer />}>
          <Route index element={<Offers />} />
        </Route>
      </Route>
      <Route path="identify" element={<LayoutIdentify />}>
        <Route path="/identify/login" element={<Login />} />
        <Route path="/identify/registration" element={<Registration />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
