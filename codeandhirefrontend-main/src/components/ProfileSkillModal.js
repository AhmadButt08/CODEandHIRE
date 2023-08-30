import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";

const ProfileSkillModal = (props) => {
  const [skill, setSkill] = useState("");
  const { authToken } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const userId = user.userId;

  const handelSubmit = () => {
    console.log("skill submitted");

    const data = JSON.stringify({
      skillName: skill,
    });

    console.log("data=== ", data);
    let config = {
      method: "post",
      url: `http://localhost:8080/api/v1/skill/user/${userId}`,
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
            <h2 className="text-2xl font-bold mb-4">Add Skills</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Skill Name
              </label>
              <input
                type="text"
                id="skill-name"
                name="skill-name"
                className="border rounded-lg py-2 px-3 w-full text-black"
                onChange={(e) => setSkill(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-200 text-green-900 font-bold py-2 px-4 rounded mr-2"
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

export default ProfileSkillModal;
