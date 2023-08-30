import React, { useContext } from "react";
import { useState } from "react";
import logo from "../Images/logo.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";

const SignUp = () => {
  const { user, setAuthUser, setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const [firstName, setfirstName] = useState({
    value: "",
    isEmpty: true,
  });
  const [lastName, setLastName] = useState({
    value: "",
    isEmpty: true,
  });
  const [email, setEmail] = useState({
    value: "",
    hasError: false,
    isEmpty: true,
  });
  const [password, setPassword] = useState({
    value: "",
    hasError: false,
    isEmpty: true,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    hasError: false,
    isEmpty: true,
  });

  const [roleName, setroleName] = React.useState({
    value: "",
    isChecked: false,
  });
  const [flag, setFlag] = useState(false);

  const handleAccountType = (event) => {
    setroleName((currentValue) => ({
      ...currentValue,
      value: event.target.value,
      isChecked: true,
    }));
  };

  const handelFirstName = (event) => {
    // setfirstName(event.target.value);

    setfirstName((currentValue) => ({
      ...currentValue,
      value: event.target.value,
      isEmpty: false,
    }));
  };

  const handleLastName = (event) => {
    //setLastName(event.target.value);
    setLastName((currentValue) => ({
      ...currentValue,
      value: event.target.value,
      isEmpty: false,
    }));
  };

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
        isEmpty: false,
      }));
    } else {
      setEmail((currentValue) => ({
        ...currentValue,
        value: event.target.value,
        hasError: false,
        isEmpty: false,
      }));
    }
    //setIsEmpty(false);
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
        isEmpty: false,
      }));
    } else {
      setPassword((currentValue) => ({
        ...currentValue,
        value: event.target.value,
        hasError: false,
        isEmpty: false,
      }));
    }
    //setFlag(false);
    //setIsEmpty(false);
  };

  const handleConfirmedPassword = (event) => {
    if (password.value !== event.target.value) {
      setConfirmPassword((currentValue) => ({
        ...currentValue,
        value: event.target.value,
        hasError: true,
        isEmpty: false,
      }));
    } else {
      setConfirmPassword((currentValue) => ({
        ...currentValue,
        value: event.target.value,
        hasError: false,
        isEmpty: false,
      }));
    }
  };

  const handleSingUp = () => {
    setFlag(true);

    // && (!password.hasError && !password.isEmpty) && (!accountType.isChecked)

    if (
      !email.hasError &&
      !email.isEmpty &&
      !password.hasError &&
      !password.isEmpty &&
      roleName.isChecked
    ) {
      let data = JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        roleName: roleName.value,
      });
      console.log(data);

      let config = {
        method: "post",
        url: "http://localhost:8080/api/v1/auth/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            localStorage.setItem("token", JSON.stringify(response.data.token));
            setToken(JSON.stringify(response.data.token));
            setAuthUser(jwtDecode(localStorage.getItem("token")));
            // const role = user.role[0].authority;
            // console.log(user.role[0].authority);
            navigate("/");

            // if(user){
            //   if(role === "CandidateUser"){
            //     navigate("/problems");

            //   }
            //   else{
            //     navigate("/profile");
            //   }
            // }

            //setFlag(false);
            // Navigate("/problems");
            // console.log(localStorage);
          }
        })
        .catch((error) => {
          console.log(error);

          //  if(error.response.status === 403){
          //   console.log("email password fail");

          //   return toast('email password is incorrect',{
          //     backgroundColor:'white',
          //     color: "red"
          //   });
          // }
        });
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="">
        <div className="w-60 ml-32 mb-[-30px] flex items-center justify-center">
          <img src={logo} alt="logo" className="items-center"></img>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" p-8 rounded-lg shadow-lg border-1 border-[1px] border-gray-600"
        >
          <h2 className="text-2xl mb-6">Sign up</h2>
          <div className="flex">
            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                First Name
              </label>
              <input
                className="border-2 rounded-lg py-2 px-3 w-full text-black"
                type="text"
                id="text"
                value={firstName.value}
                onChange={handelFirstName}
                style={{ borderColor: firstName.hasError ? "red" : "green" }}
              />
              {flag && firstName.isEmpty ? (
                <div className="mt-1 text-red-500 text-xs">Enter firstName</div>
              ) : (
                ""
              )}
            </div>
            <div className="mb-4 ml-4">
              <label className="block text-white font-bold mb-2">
                Last Name
              </label>
              <input
                className="border-2 rounded-lg py-2 px-3 w-full text-black"
                type="text"
                id="text"
                value={lastName.value}
                onChange={handleLastName}
                style={{ borderColor: lastName.hasError ? "red" : "green" }}
              />
              {flag && lastName.isEmpty ? (
                <div className="mt-1 text-red-500 text-xs">Enter LastName</div>
              ) : (
                ""
              )}
            </div>
          </div>

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
            {flag && email.isEmpty ? (
              <div className="mt-1 text-red-500 text-xs">Enter Email</div>
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
                <div>Password has a minimum of 6 characters</div>
                <div>at least 1 uppercase letter</div>
                <div>1 lowercase letter</div>
                <div>and 1 number with no spaces</div>{" "}
              </div>
            ) : (
              ""
            )}
            {flag && password.isEmpty ? (
              <div className="mt-1 text-red-500 text-xs">Enter Password</div>
            ) : (
              ""
            )}
          </div>
          <div className="mb-6">
            <label className="block text-white font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="border-2 rounded-lg py-2 px-3 w-full text-black"
              type="password"
              id="confirmPassword"
              value={confirmPassword.value}
              onChange={handleConfirmedPassword}
              style={{ borderColor: password.hasError ? "red" : "green" }}
            />
            {confirmPassword.hasError ? (
              <div className="mt-1 text-red-500 text-xs">
                Password and Confirmed Password not Matched
              </div>
            ) : (
              ""
            )}
            {flag && password.isEmpty ? (
              <div className="mt-1 text-red-500 text-xs">
                Enter confirmPassword
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex">
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
              >
                Account Type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={roleName.value}
                onChange={handleAccountType}
              >
                <div className="flex">
                  <FormControlLabel
                    value="CandidateUser"
                    control={<Radio color="success" />}
                    label="Candidate"
                  />
                  <FormControlLabel
                    value="CompanyUser"
                    control={<Radio color="success" />}
                    label="Company"
                  />
                </div>
              </RadioGroup>
              {flag && !roleName.isChecked ? (
                <div className="mt-1 text-red-500 text-xs">
                  Please Select accountType
                </div>
              ) : (
                ""
              )}
            </FormControl>
          </div>

          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4"
            type="submit"
            onClick={handleSingUp}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
