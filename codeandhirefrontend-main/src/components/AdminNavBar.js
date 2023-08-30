import React from "react";
import logo from "../Images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const AdminNavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className="flex bg-neutral-900 shadow-sm shadow-purple-300 border-b-0 h-20  px-32 items-center">
        <div>
          <img src={logo} className="object-cover h-44 w-40"></img>
        </div>
        <div className="flex ml-24">
          <div className="font-bold text-lg p-1 text-slate-300 cursor-pointer">
            <Link to="/add">Problems</Link>
          </div>
          <div className="font-bold text-lg p-1 text-slate-300 ml-10 cursor-pointer">
            <Link to="/deleteUser">users</Link>
          </div>
          <div
            className="font-bold text-lg p-1 text-slate-300 ml-10 cursor-pointer"
            onClick={handleLogout}
          >
            log out
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
