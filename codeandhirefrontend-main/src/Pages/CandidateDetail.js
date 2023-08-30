import React from "react";
import CompanyNavBar from "../components/CompanyNavBar";
import { useLocation } from "react-router-dom";

const CandidateDetail = () => {
  let location = useLocation();
  const { candidate } = location.state;

  console.log("candidate details ======", candidate);

  return (
    <div>
      <CompanyNavBar />
      <div class="flex justify-center items-center  mt-0">
        <div className="w-4/5 min-h-fit border-[1px] border-gray-800 rounded-lg m-5">
          <h1 className="font-bold text-3xl p-1 text-slate-300">
            Candidate Details
          </h1>
          <div className="flex mt-8 ">
            <div className="ml-4">
              <div>
                <img
                  src={candidate.image.imageUrl}
                  className="object-cover w-60 h-60 rounded-full content-center"
                ></img>
              </div>
            </div>

            <div className="ml-4">
              <h1 className="font-bold text-lg p-1 text-slate-300">Profile</h1>
              <div className="font-bold py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900">
                {candidate.profile.fullName}
              </div>
              <div className="font-bold py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900">
                {candidate.profile.headLine}
              </div>
              <div className="font-bold py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900">
                {candidate.profile.location}
              </div>
              <div className="font-bold py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900">
                {candidate.profile.number}
              </div>
              <div className="font-bold py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900">
                <div>{candidate.email}</div>
              </div>
            </div>

            <div className="ml-4">
              <h1 className="font-bold text-lg p-1 text-slate-300">
                Certification
              </h1>
              {candidate.certification.map((cert, index) => {
                return (
                  <div
                    key={index}
                    className="font-bold py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900"
                  >
                    {cert.certificationName}
                  </div>
                );
              })}
            </div>

            <div className="ml-4">
              <h1 className="font-bold text-lg p-1 text-slate-300">Skills</h1>
              {candidate.skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="font-bold py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900"
                  >
                    {skill.skillName}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
