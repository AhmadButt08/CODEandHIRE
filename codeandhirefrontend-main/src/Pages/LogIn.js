import React from "react";

import logo from "../Images/logo.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toast";
import { borderColor } from "@mui/system";
import axios from "axios";
import { Link, redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";

import jwtDecode from "jwt-decode";
import { Button, CircularProgress } from "@mui/material";
const LogIn = () => {
  const { user, setAuthUser, setToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();
  const [email, setEmail] = useState({
    value: "",
    hasError: false,
  });

  const [password, setPassword] = useState({
    value: "",
    hasError: false,
  });

  const [flag, setFlag] = useState(false);
  const [isEmailEmpty, setEmailEmpty] = useState(true);
  const [isPasswordEmpty, setPasswordEmpty] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  const handleEmail = (event) => {
    const regexTwo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const inputValue = event.target.value.trim().toLowerCase();
    if (!regexTwo.test(String(inputValue))) {
      setEmail((currentValue) => ({
        ...currentValue,
        value: event.target.value,
        hasError: true,
      }));
    } else {
      setEmail((currentValue) => ({
        ...currentValue,
        value: event.target.value,
        hasError: false,
      }));
    }
    setEmailEmpty(false);
  };

  const handlePassword = (event) => {
    const regexPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    const inputValue = event.target.value;
    if (!regexPassword.test(inputValue)) {
      //alert(" password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.")
      setPassword((currentValue) => ({
        ...currentValue,
        value: event.target.value,
        hasError: true,
      }));
    } else {
      setPassword((currentValue) => ({
        ...currentValue,
        value: event.target.value,
        hasError: false,
      }));
    }
    setFlag(false);
    setPasswordEmpty(false);
  };

  const handleSignIn = () => {
    setFlag(true);
    // setLoading(true);

    if (
      !email.hasError &&
      !isEmailEmpty &&
      !password.hasError &&
      !isPasswordEmpty
    ) {
      setLoading(true);
      //console.log("Log in Successfully");
      let data = JSON.stringify({
        email: email.value,
        password: password.value,
      });

      //console.log(data);

      let config = {
        method: "post",
        url: "http://localhost:8080/api/v1/auth/authenticate",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", JSON.stringify(response.data.token));
            setToken(JSON.stringify(response.data.token));
            setLoading(false);
            setAuthUser(jwtDecode(localStorage.getItem("token")));

            const role = user.role[0].authority;

            if (role === "CandidateUser") {
              Navigate("/problems");
            } else if (role === "CompanyUser") {
              Navigate("/candidates");
            } else if (role === "Admin") {
              Navigate("/add");
            }

            setFlag(false);
            // Navigate("/problems");
            // console.log(localStorage);
          }
        })
        .catch((error) => {
          console.log(error);

          if (error.response.status === 403) {
            return toast("email password is incorrect", {
              backgroundColor: "white",
              color: "red",
            });
          }
        });
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="w-96 h-56 ">
        <div className=" w-64 ml-16 mb-[-60px] flex items-center justify-cente ">
          <img src={logo} alt="logo" className="items-center"></img>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" p-8 rounded-lg shadow-lg border-1 border-[1px] border-gray-600"
        >
          <h2 className="text-2xl mb-6">Sign In</h2>

          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Email</label>
            <input
              className="border-2 rounded-lg py-2 px-3 w-full text-black"
              type="email"
              id="email"
              value={email.value}
              onChange={handleEmail}
              style={{ borderColor: email.hasError ? "red" : "green" }}
            />
            {email.hasError ? (
              <div className="mt-1 text-red-500 text-xs">
                Please enter a valid email
              </div>
            ) : (
              ""
            )}
            {flag && isEmailEmpty ? (
              <div className="mt-1 text-red-500 text-xs"> Enter Email</div>
            ) : (
              ""
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Password</label>
            <input
              className="border-2 rounded-lg py-2 px-3 w-full text-black"
              type="password"
              id="password"
              value={password.value}
              onChange={handlePassword}
              style={{ borderColor: password.hasError ? "red" : "green" }}
            />
            {password.hasError ? (
              <div className="text-red-500 mt-1 text-xs">
                Password has a minimum of 6 characters, at least 1 uppercase
                letter, 1 lowercase letter, and 1 number with no spaces
              </div>
            ) : (
              ""
            )}
            {flag && isPasswordEmpty ? (
              <div className="mt-1 text-red-500 text-xs"> Enter Password</div>
            ) : (
              ""
            )}
          </div>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            loading={true}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <div className="mt-2">
            <Link to={"/signup"}>Don't have Acoount sign up</Link>
          </div>
        </form>
        <ToastContainer delay={2000} position="top-right" />
      </div>
    </div>
  );
};

export default LogIn;
