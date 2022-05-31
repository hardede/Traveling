import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Context } from "..";

const PrivateRoutes = () => {
  const { store } = useContext(Context);
  const location = useLocation()

  return store.isAuth ? <Outlet /> : <Navigate to="/identify/login" state={{from: location}} replace/>;
};

export default PrivateRoutes;
