import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const ProfileModal = ({ onClose }) => {
  const [image, setImage] = useState(null);
  const { authToken } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  console.log("user=== ", user);
  const file = new FormData();
  file.append("file", image);

  const userId = user.userId;

  const handleImage = () => {
    console.log("FIlleeee", image);
    let config = {
      method: "put",
      url: `http://localhost:8080/api/v1/image/upload/${userId}`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${authToken}`,
        "Access-Control-Allow-Origin": "*",
      },
      data: file,
    };

    axios(config)
      .then((response) => {
        onClose();
        if (response.status === 201) {
          alert("image upload successfuly");
        } else {
          alert("image not uploaded");
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
            <h2 className="text-2xl font-bold mb-4">Upload Profile Picture</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="image"
              >
                Choose an image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className=" border-[1px] border-gray-600 rounded-lg py-2 px-3 w-full"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-200 text-red-900  font-bold py-2 px-4 rounded mr-2"
                onClick={handleImage}
              >
                Upload
              </button>
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={onClose}
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

export default ProfileModal;
