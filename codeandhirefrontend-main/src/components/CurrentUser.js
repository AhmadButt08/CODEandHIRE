import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";
import images from "../Images/images.png";

const CurrentUser = () => {
  const [image, setImage] = useState(null);
  const { authToken } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const { logOut } = useContext(AuthContext);

  const userId = user.userId;

  const getImage = () => {
    const config = {
      url: `http://localhost:8080/api/v1/image/user/${userId}`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${authToken}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios(config)
      .then((response) => {
        console.log("image data ", response);
        const image = response.data;
        setImage(image);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getImage();
  }, []);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="relative cursor-pointer">
      <div onClick={handleClick}>
        {image ? (
          <img
            src={`${image.imageUrl}`}
            alt="Profile Picture"
            className="object-cover w-10 h-10 rounded-full"
          />
        ) : (
          <img
            src={images}
            alt="Profile Picture"
            className="object-cover w-10 h-10 rounded-full"
          />
        )}
        {showMenu && (
          <ul className="absolute top-full right-0  bg-gray-700 text-white rounded-md shadow-lg p-2 ">
            <li>
              <Link to={"/profile"} className="hover:bg-gray-700 px-3 py-2">
                Profile
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="hover:bg-gray-700 px-3 py-2"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CurrentUser;
