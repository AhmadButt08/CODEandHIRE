import React from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";

const PrivateRouteCompany = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    if (user.role[0].authority === "CompanyUser") {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRouteCompany;
