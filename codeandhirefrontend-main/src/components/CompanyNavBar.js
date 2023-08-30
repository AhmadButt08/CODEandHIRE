import React from "react";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";

const CompanyNavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className="flex bg-neutral-900 shadow-sm shadow-purple-300 border-b-0 h-20 justify-between px-32 items-center">
        <div>
          <img src={logo} className="object-cover h-44 w-40"></img>
        </div>
        <div className="font-bold text-lg p-1 text-slate-300">
          Hire the Candidates
        </div>
        <div
          className="font-bold text-lg p-1 text-slate-300 ml-10 cursor-pointer"
          onClick={handleLogout}
        >
          log out
        </div>
        <div className="flex space justify-end space-x-5"></div>
        <div className=" flex place-content-center">
          <div className="mr-8 mt-4 items-center"></div>
          <div className="mr-8 mt-4 items-center">{/* <CurrentUser /> */}</div>
          <div className="w-48 "></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyNavBar;
