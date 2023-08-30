import React, { useContext, useEffect } from "react";
import { NavBar } from "./NavBar";
import ehsan from "../Images/ehsan.jpg";
import images from "../Images/images.png";
import ProfileModal from "./ProfilePictureModal";
import { useState } from "react";
import ProfileContactModal from "./ProfileContactModal";
import ProfileSkillModal from "./ProfileSkillModal";
import ProfileHoobiesModal from "./ProfileCertificationModal";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";
import ProfileCertificationModal from "./ProfileCertificationModal";
const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenSkill, setIsOpenSkill] = useState(false);
  const [isOpenHoobies, setIsOpenHoobies] = useState(false);

  const [imageData, setImageData] = useState("");
  const [fullName, setFullName] = useState("");
  const [headLine, setHeadLine] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");

  const [skill, setSkill] = useState([]);

  const [certification, setCertification] = useState([]);

  const { user, authToken } = useContext(AuthContext);
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
        setImageData(image);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("image data", imageData.imageUrl);
  const getUserProfile = () => {
    const config = {
      method: "get",
      url: `http://localhost:8080/api/v1/profile/byuser/${userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios(config)
      .then((response) => {
        console.log("Profile data===", response.data);

        setFullName(response.data.fullName);
        setHeadLine(response.data.headLine);
        setLocation(response.data.location);
        setNumber(response.data.number);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSkill = () => {
    const config = {
      method: "get",
      url: `http://localhost:8080/api/v1/skill/user/${userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios(config)
      .then((response) => {
        console.log("Skill  data===", response.data);
        setSkill(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCertification = () => {
    const config = {
      method: "get",
      url: `http://localhost:8080/api/v1/certification/user/${userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios(config)
      .then((response) => {
        console.log("certification data===", response.data);
        setCertification(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getImage();
    getUserProfile();
    getSkill();
    getCertification();
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenContact = () => {
    setIsOpenContact(true);
  };

  const handleCloseContact = () => {
    console.log("close Contact");
    setIsOpenContact(false);
  };

  const handleOpenSkill = () => {
    setIsOpenSkill(true);
  };

  const handleCloseSkill = () => {
    console.log("close Contact");
    setIsOpenSkill(false);
  };
  const handleOpenHoobies = () => {
    setIsOpenHoobies(true);
  };

  const handleCloseHoobies = () => {
    console.log("close Contact");
    setIsOpenHoobies(false);
  };

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="flex  mt-10 ml-40 ">
          <div className="w-96 min-h-80 border-[1px] border-gray-800 rounded-lg">
            <div className="p-7">
              <div className="flex justify-between">
                <h1 className="font-bold text-lg p-1 text-slate-300">
                  Profile
                </h1>
                <div>
                  <button onClick={handleOpenContact}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                  {isOpenContact && (
                    <ProfileContactModal onClose={handleCloseContact} />
                  )}
                </div>
              </div>
              <button onClick={handleOpen}>
                <div className="relative ">
                  {imageData ? (
                    <img
                      src={`${imageData.imageUrl}`}
                      alt="Profile Picture"
                      className="object-cover w-20 h-20 rounded-full"
                    />
                  ) : (
                    <img
                      src={images}
                      alt="Profile Picture"
                      className="object-cover w-20 h-20 rounded-full"
                    />
                  )}
                  {/* <img
                    src={images}
                    alt="Profile Picture"
                    className="object-cover w-20 h-20 rounded-full"
                  ></img> */}
                  <div className="absolute inset-0 w-20 h-20 flex items-center justify-center opacity-10 hover:opacity-100 rounded-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              {isOpen && <ProfileModal onClose={handleClose} />}

              <div className="flex flex-wrap mt-2">
                <h1 className="font-bold py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900">
                  {fullName}
                </h1>
                <h1 className=" font-bold py-3 px-2 ml-2 rounded-xl mb-3 bg-red-200 text-red-900">
                  {headLine}
                </h1>
                <h1 className="font-bold ml-2 py-3 px-2 rounded-xl mb-3 bg-red-200 text-red-900">
                  {location}
                </h1>
                <h1 className="font-bold py-3 px-2 ml-2 rounded-xl mb-3 bg-red-200 text-red-900">
                  {number}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-96 min-h-80 ml-4 border-[1px] border-gray-800  rounded-lg">
            <div className="p-7">
              <div className="flex justify-between">
                <h1 className="font-bold text-lg p-1 text-slate-300">Skills</h1>
                <div>
                  <button onClick={handleOpenSkill}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                  {isOpenSkill && (
                    <ProfileSkillModal onClose={handleCloseSkill} />
                  )}
                </div>
              </div>

              <div className="flex flex-wrap">
                {skill.map((sk) => {
                  return (
                    <div className="font-bold py-3 px-2 rounded-xl ml-2 mb-3 bg-green-200 text-green-900">
                      {sk.skillName}
                    </div>
                  );
                })}

                {/* <div className="font-bold py-3 px-2 rounded-xl mb-3 ml-2 bg-green-200 text-green-900">
                  AI
                </div>
                <div className="font-bold py-3 px-2 rounded-xl mb-3 bg-green-200 text-green-900">
                  Digital Marketing
                </div>
                <div className="font-bold py-3 px-2 rounded-xl mb-3 ml-2 bg-green-200 text-green-900">
                  Cyber Security
                </div>
                <div className="font-bold py-3 ml-2 px-2 rounded-xl mb-3 bg-green-200 text-green-900">
                  Back-end Development
                </div>
                <div className="font-bold py-3 ml-2 px-2 rounded-xl mb-3 bg-green-200 text-green-900">
                  IOT
                </div> */}
              </div>
            </div>
          </div>
          <div className="w-96 ml-4 min-h-60 border-[1px] border-gray-800  rounded-lg">
            <div className="p-7">
              <div className="flex justify-between">
                <h1 className="font-bold text-lg p-1 text-slate-300">
                  Certification Name
                </h1>
                <div>
                  <button onClick={handleOpenHoobies}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                  {isOpenHoobies && (
                    <ProfileCertificationModal onClose={handleCloseHoobies} />
                  )}
                </div>
              </div>

              <div className="flex flex-wrap">
                {certification.map((certi) => {
                  return (
                    <div className="font-bold py-3 px-2 rounded-xl mb-3 ml-2 bg-blue-200 text-blue-900">
                      {certi.certificationName}
                    </div>
                  );
                })}

                {/* <div className="font-bold py-3 px-2 rounded-xl mb-3 ml-2 bg-blue-200 text-blue-900">
                  Football
                </div>
                <div className="font-bold py-3 px-2 rounded-xl mb-3 ml-2 bg-blue-200 text-blue-900">
                  Boxing
                </div>
                <div className="font-bold py-3 px-2 rounded-xl mb-3 ml-2 bg-blue-200 text-blue-900">
                  Coding
                </div>
                <div className="font-bold py-3 px-2  rounded-xl mb-3 ml-2 bg-blue-200 text-blue-900">
                  Hacking
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-[900px] h-[1000px] border-[1px] border-gray-800 rounded-lg mt-10 ml-14">
          <form className="p-6" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-2xl font-bold mb-4">Profile Detail</h2>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="border rounded-lg py-2 px-3 w-full text-black"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="head-line"
              >
                Head Line
              </label>
              <input
                type="text"
                id="head-line"
                name="head-line"
                className="border rounded-lg py-2 px-3 w-full text-black"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded-lg py-2 px-3 w-full text-black"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="phone-number"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone-number"
                name="phone-number"
                className="border rounded-lg py-2 px-3 w-full text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Skill Name
              </label>
              <input
                type="text"
                id="skill-name"
                name="skill-name"
                className="border rounded-lg py-2 px-3 w-full text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Hoobie Name
              </label>
              <input
                type="text"
                id="skill-name"
                name="skill-name"
                className="border rounded-lg py-2 px-3 w-full text-black"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-200 text-red-900 font-bold py-2 px-4 rounded mr-2"
                // onClick={handelSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
