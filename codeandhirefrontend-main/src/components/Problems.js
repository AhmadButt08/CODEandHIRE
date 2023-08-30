import Button from "@mui/material/Button";
import { NavBar } from "./NavBar";

const Problems = (props) => {
  const {
    problemId,
    problemTitle,
    problemStatus,
    problemDifficultyLevel,
    problemScore,
  } = props;

  return (
    <div className=" bg-blue-gray-900 shadow-sm  w-[700px] p-5 rounded-md cursor-pointer  bg-opacity-1 mt-4  border-[1px] border-gray-600">
      <div className="">
        <h1 className="text-2xl text-[#7ee787] font-semibold font-serif">
          {problemTitle}
        </h1>
      </div>
      <div className="flex ">
        <div className="ml-1 font-serif text-white">
          Problem Status:{" "}
          <span style={{ color: problemStatus ? "#7ee787" : "white" }}>
            {problemStatus ? "Solved" : "Un-Solved"}
          </span>
          ,
        </div>
        <div className="ml-1 font-serif text-white">
          Difficulty Level: {problemDifficultyLevel},
        </div>
        <div className="ml-1 font-serif text-white">
          Max score: {problemScore}
        </div>
        <div className="ml-auto font-serif">
          <Button color="secondary" variant="outlined">
            {"Slove Problem"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Problems;
