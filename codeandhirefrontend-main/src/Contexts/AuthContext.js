import React, { useState } from "react";
import { createContext } from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null
  );

  const setToken = (token) => {
    setAuthToken(token);
  };

  const setAuthUser = (user) => {
    setUser(user);
  };

  const logOut = () => {
    let config = {
      method: "post",
      url: `localhost:8080/api/v1/auth/logout`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios(config)
      .then((res) => {})
      .catch((error) => console.log(error));

    localStorage.removeItem("token");
    setAuthToken(null);
    setUser(null);
    Navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authToken, setToken, user, setAuthUser, logOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
