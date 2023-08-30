import { useState } from "react";
import Score from "./Score";
import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../Images/logo.png";

import { useEffect } from "react";
import axios from "axios";
import { Link } from "@mui/material";

import { NavLink } from "react-router-dom";
import Submission from "../Pages/Submission";
import CurrentUser from "./CurrentUser";
import { AuthContext } from "../Contexts/AuthContext";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState();
  //   React.useEffect(() => {
  //     const timer = setInterval(() => {
  //       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //     }, 800);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);
}

export function NavBar() {
  const { user } = React.useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    getScore();
  }, []);

  const getScore = () => {
    const id = user.userId;

    let config = {
      method: "post",
      url: "http://localhost:8080/api/v1/candidate/Score",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
      },
      data: id,
    };
    axios(config)
      .then((res) => {
        setProgress(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    // <nav className="w-full bg-purple-500 shadow">
    //     <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
    //         <div>
    //             <div className="flex items-center justify-between py-3 md:py-5 md:block">
    //                 <a href="javascript:void(0)">
    //                    <h1 className="text-2xl font-bold text-black">Code&Hire</h1>
    //                 </a>
    //                 <div className="md:hidden">
    //                     <button
    //                         className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
    //                         onClick={() => setNavbar(!navbar)}
    //                     >
    //                         {navbar ? (
    //                             <svg
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 className="w-6 h-6 text-white"
    //                                 viewBox="0 0 20 20"
    //                                 fill="currentColor"
    //                             >
    //                                 <path
    //                                     fillRule="evenodd"
    //                                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                                     clipRule="evenodd"
    //                                 />
    //                             </svg>
    //                         ) : (
    //                             <svg
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 className="w-6 h-6 text-white"
    //                                 fill="none"
    //                                 viewBox="0 0 24 24"
    //                                 stroke="currentColor"
    //                                 strokeWidth={2}
    //                             >
    //                                 <path
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                     d="M4 6h16M4 12h16M4 18h16"
    //                                 />
    //                             </svg>
    //                         )}
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //         <div>
    //             <div
    //                 className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
    //                     navbar ? "block" : "hidden"
    //                 }`}
    //             >
    //                 <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
    //                     <li className="text-white hover:text-indigo-200">
    //                         <a href="javascript:void(0)">Problems</a>
    //                     </li>
    //                     <li className="text-white hover:text-indigo-200">
    //                         <a href="javascript:void(0)">Submissions</a>
    //                     </li>
    //                     <li className="text-white hover:text-indigo-200">
    //                         <a href="javascript:void(0)">Create Room</a>
    //                     </li>
    //                     <li className="text-white hover:text-indigo-200">
    //                     <div>{<Score/>}</div>
    //                     </li>
    //                 </ul>

    //                 <div className="mt-3 space-y-2 lg:hidden md:inline-block">
    //             <a
    //                 href="javascript:void(0)"
    //                 className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
    //             >
    //                 Sign in
    //             </a>
    //             <a
    //                 href="javascript:void(0)"
    //                 className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
    //             >
    //                 Sign up
    //             </a>
    //         </div>
    //             </div>
    //         </div>
    //         <div className="hidden space-x-2 md:inline-block">
    //             <a
    //                 href="javascript:void(0)"
    //                 className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
    //             >
    //                 Sign in
    //             </a>
    //             <a
    //                 href="javascript:void(0)"
    //                 className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
    //             >
    //                 Sign up
    //             </a>

    //         </div>

    //     </div>

    // </nav>
    <div>
      <div className="flex bg-neutral-900 shadow-sm shadow-purple-300 border-b-0 h-20 justify-between px-32 items-center">
        <div>
          <img src={logo} className="object-cover h-44 w-40"></img>
        </div>
        <div className="flex space justify-end space-x-5">
          <NavLink to="/problems">Problems</NavLink>
          <NavLink to="/submissions">submission</NavLink>
          {/* <NavLink to= "/room">Room</NavLink> */}
        </div>
        <div className=" flex place-content-center">
          <div className="mr-8 mt-4 items-center">
            <CurrentUser />
          </div>
          <div className="w-48 ">
            <span>Score </span>
            <Box sx={{ width: "100%" }}>
              <LinearProgressWithLabel
                color="secondary"
                value={progress.submissionScore}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
