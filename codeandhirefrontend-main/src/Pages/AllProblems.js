import React from "react";
import { ProblemIdContext } from "../Contexts/ProblemContext.js";
import { useContext } from "react";
import Problems from "../components/Problems";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { NavBar } from "../components/NavBar.js";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../Contexts/AuthContext.js";
import { Box, CircularProgress } from "@mui/material";

const AllProblems = () => {
  const { authToken } = useContext(AuthContext);
  const [problems, setProblems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [pageNo, setPageNo] = useState(0);
  const [diffi, setDiffi] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const pageSize = 4;

  useEffect(() => {
    getProblmes();
  }, [pageNo, diffi]);

  const getProblmes = () => {
    setLoading(true);
    let config = {
      method: "get",
      url: `http://localhost:8080/api/v1/candidate/problems?pageNo=${pageNo}&pageSize=${pageSize}&difficultyLevel=${diffi}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios(config)
      .then((res) => {
        setProblems(res.data.problems);
        setPageCount(res.data.totalPages);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const getSearchProblem = () => {
    let config = {
      method: "get",
      url: `http://localhost:8080/api/v1/candidate/search?query=${query}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios(config)
      .then((res) => {
        console.log(res.data);
        setProblems(res.data);
        //setPageCount(res.data.totalPages);
      })
      .catch((error) => console.log(error));
  };

  const setProblemId = (problemId) => {
    // setProId(problemId);
    console.log(problemId);
  };

  const handleChange = (e, pageNo) => {
    setPageNo(pageNo - 1);
    // console.log(pageNo-1);
  };
  // console.log(proId);
  const handleEasy = (e) => {
    if (e.target.checked) {
      setDiffi("Easy");
    } else {
      setDiffi("");
    }
  };

  const handleMedium = (e) => {
    if (e.target.checked) {
      setDiffi("Medium");
    } else {
      setDiffi("");
    }
  };

  const handleHard = (e) => {
    if (e.target.checked) {
      setDiffi("Hard");
    } else {
      setDiffi("");
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    console.log(query);

    if (query !== "") {
      getSearchProblem();
    }
  };

  return (
    <div>
      <NavBar />
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
      <div className="flex justify-between px-32 ">
        <div></div>
        <div className="mt-10  flex flex-col  justify-center items-center">
          <div className="">
            {problems.map((problem) => {
              return (
                <div
                  onClick={() => setProblemId(problem.problemId)}
                  key={problem.problemId}
                >
                  <Link
                    to={`/problems/${problem.problemId}`}
                    state={{
                      problemDes: problem.problemDescription,
                      problemSol: problem.problemSolution,
                      problemStatus: problem.problemStatus,
                    }}
                  >
                    {
                      <Problems
                        key={problem.problemId}
                        problemId={problem.problemId}
                        problemTitle={problem.problemTitle}
                        problemStatus={problem.problemStatus}
                        problemDifficultyLevel={problem.difficultyLevel}
                        problemScore={problem.maxScore}
                      />
                    }
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-14">
            <Stack spacing={2}>
              <Pagination
                count={pageCount}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </Stack>
          </div>
        </div>

        <div className="ml-0  mr-40 mt-16  border-[1px] border-gray-600 p-5 mb-20 rounded-lg">
          <div className="m-0 h-10">
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              color="secondary"
              onChange={handleSearch}
            />
          </div>

          <div className="mt-8">
            <FormGroup>
              <FormLabel component="legend">Filter</FormLabel>
              <FormControlLabel
                control={<Checkbox color="secondary" onChange={handleEasy} />}
                label="Easy"
              />
              <FormControlLabel
                control={<Checkbox color="secondary" onChange={handleMedium} />}
                label="Medium"
              />
              <FormControlLabel
                control={<Checkbox color="secondary" onChange={handleHard} />}
                label="Hard"
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProblems;
