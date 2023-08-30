import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";

const ProfileContactModal = (props) => {
  const [fullName, setFullName] = useState("");
  const [headLine, setHeadLine] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const { authToken } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const userId = user.userId;

  const handelSubmit = () => {
    const data = JSON.stringify({
      fullName: fullName,
      headLine: headLine,
      location: location,
      number: phone,
    });

    console.log("data=== ", data);
    let config = {
      method: "put",
      url: `http://localhost:8080/api/v1/profile/user/${userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        props.onClose();
        if (response.status === 201) {
          alert("data upload successfuly");
        } else {
          alert("data not uploaded");
        }
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-neutral-900 w-96 border-[1px] border-gray-600 rounded-lg shadow-lg">
          <form className="p-6" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-2xl font-bold mb-4">Contact Detail</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="border rounded-lg py-2 px-3 w-full text-black"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="head-line"
              >
                Head Line
              </label>
              <input
                type="text"
                id="head-line"
                name="head-line"
                className="border rounded-lg py-2 px-3 w-full text-black"
                onChange={(e) => setHeadLine(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded-lg py-2 px-3 w-full text-black"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone-number"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone-number"
                name="phone-number"
                className="border rounded-lg py-2 px-3 w-full text-black"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-200 text-red-900 font-bold py-2 px-4 rounded mr-2"
                onClick={handelSubmit}
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={props.onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileContactModal;
