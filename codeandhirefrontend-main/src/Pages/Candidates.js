import images from "../Images/images.png";
import ehsan from "../Images/ehsan.jpg";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import CandidateProfile from "./CandidateProfile";
import CompanyNavBar from "../components/CompanyNavBar";
import { Link } from "react-router-dom";

const Candidates = () => {
  const [candidateData, setCandidateData] = useState([]);
  const { authToken } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const getCandidatesProfile = () => {
    setLoading(true);
    let config = {
      method: "get",
      url: `http://localhost:8080/api/v1/candidateProfile`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          setCandidateData(res.data);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCandidatesProfile();
  }, []);

  console.log(" candidateProfile ", candidateData);

  return (
    <div>
      <CompanyNavBar />
      <div className="mt-3  ">
        <div className="flex m-10">
          {candidateData &&
            candidateData.map((candidate, index) => {
              return (
                <Link to="/candidates/detail" state={{ candidate: candidate }}>
                  <div
                    className="w-96 min-h-fit border-[1px] border-gray-800 rounded-lg m-5"
                    key={index}
                  >
                    <div className="p-7">
                      <div className="flex justify-center">
                        <h1 className="font-bold text-lg p-1 text-slate-300 justify-center">
                          {candidate.profile.fullName}
                        </h1>
                      </div>
                      <div className="flex justify-center">
                        <img
                          src={`${candidate.image.imageUrl}`}
                          alt="Profile Picture"
                          className="object-cover w-28 h-28 rounded-full content-center"
                        />
                      </div>
                      <div className="flex justify-center">
                        <div className="flex flex-wrap mt-2 justify-center">
                          <h1 className="font-bold py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900">
                            {candidate.profile.headLine}
                          </h1>
                          <h1 className=" font-bold py-3 px-2 ml-2 rounded-xl mb-3 bg-red-200 text-red-900">
                            {candidate.profile.location}
                          </h1>
                          <h1 className="font-bold ml-2 py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900">
                            {candidate.profile.number}
                          </h1>
                          {/* <h1 className="font-bold py-3 px-2 ml-2 rounded-xl mb-3 bg-red-200 text-red-900">
                      49034834u3
                    </h1> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        {loading && (
          <Box
            color="secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="secondary"></CircularProgress>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Candidates;
