import React, { useContext, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import "../CustomCss/joditlink.css";
import axios from "axios";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { AuthContext } from "../Contexts/AuthContext";
import AdminNavBar from "./AdminNavBar";
const TextEditor = () => {
  const { authToken } = useContext(AuthContext);
  const [description, setDescription] = useState();
  const [problemTitle, setProblemTitle] = useState();
  const [problemSolution, setProblemSolution] = useState();
  const [sampleInput, setSampleInput] = useState();
  const [sampleOutPut, setSampleOutPut] = useState();
  const [difficultyLevel, setdifficultyLevel] = useState("");
  const [maximumScore, setMaximumScore] = useState();
  const getValue = (description) => {
    setDescription(description);
  };

  console.log(difficultyLevel);
  console.log(problemSolution);
  const submit = () => {
    let data = JSON.stringify({
      problemTitle: problemTitle,
      problemSolution: problemSolution,
      problemDescription: description,
      problemScore: maximumScore,
      problemDifficultyLevel: difficultyLevel,

      sampleInput: sampleInput,
      sampleOutPut: sampleOutPut,
    });
    let config = {
      method: "post",
      url: "http://localhost:8080/api/v1/candidate/problems",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      data: data,
    };
    console.log(data);

    axios(config)
      .then((response) => {
        console.log(response);
        alert("Problem Added");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <AdminNavBar />
      <div className="flex flex-col gap-4 justify-center items-center J">
        <div className="w-1/2 mt-5  text-white">
          <TextField
            sx={{
              width: { sm: 200, md: 750 },
            }}
            label="Problem Title"
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setProblemTitle(e.target.value)}
            color="secondary"
          />
        </div>

        <div className="w-1/2">
          <TextField
            sx={{
              width: { sm: 200, md: 750 },
            }}
            label="Problem Solution"
            id="outlined-multiline-flexible"
            multiline
            onChange={(e) => setProblemSolution(e.target.value)}
            color="secondary"
          />
        </div>

        <div className="w-1/2">
          <RichTextEditor getValue={getValue} />
        </div>

        <div className="w-1/2">
          <TextField
            sx={{
              width: { sm: 200, md: 750 },
            }}
            label="Sample Input"
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setSampleInput(e.target.value)}
            color="secondary"
          />
        </div>

        <div className="w-1/2">
          <TextField
            sx={{
              width: { sm: 200, md: 750 },
            }}
            label="Sample OutPut"
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setSampleOutPut(e.target.value)}
            color="secondary"
          />
        </div>
        <div className="flex space-x-5">
          <div className="w-40">
            {/* <Select label="Difficulty Level"   onChange={(e)=>setdifficultyLevel(e)} color="purple">
				<Option value="Easy" >Easy</Option>
				<Option value="Medium" >Medium</Option>
				<Option value="Hard" >Hard</Option>
			</Select> */}
            <FormControl fullWidth color="secondary">
              <InputLabel id="demo-multiple-checkbox-label">
                Difficulty Level
              </InputLabel>
              <Select
                label="Languages"
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                onChange={(e) => setdifficultyLevel(e.target.value)}
              >
                <MenuItem value={"Easy"}>Easy</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Hard"}>Hard</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField
              label="Maximum Score"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => setMaximumScore(e.target.value)}
              color="secondary"
            />
          </div>
        </div>

        <div>
          <Button onClick={submit} color="secondary" variant="outlined">
            Save Problem
          </Button>
        </div>
        {/* 
      {description}
      {problemTitle}
      {problemSolution}
      {sampleInput}
      {sampleOutPut}
      {difficultyLevel}
      {maximumScore} */}
      </div>
    </div>
  );
};

export default TextEditor;
