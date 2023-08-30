import React from "react";
import { useContext } from "react";
import TestCaseTab from "./TestCaseTab";
import { ProblemIdContext } from "../Contexts/ProblemContext.js";
import CodeMirror from "@uiw/react-codemirror";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { StreamLanguage } from "@codemirror/language";
import { java } from "@codemirror/legacy-modes/mode/clike";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

//import {python} from "@codemirror/legacy-modes/mode/python"

// import {javascript} from "@codemirror/legacy-modes/mode/javascript"

import { useState } from "react";
//import TestCaseDetail from './TestCaseDetail';
import Loading from "./Loading";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toast";
import { AuthContext } from "../Contexts/AuthContext";

export default function Codemirror() {
  // const {proId} = useContext(ProblemIdContext);
  // console.log(proId);

  let { id } = useParams();
  console.log(id);

  const [showToast, setToast] = useState(false);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [testCaseId, setTestCaseId] = useState();
  //const [testCase, setTestCase] = useState(false);
  const [input, setinput] = useState();
  const [ourOutPut, setOurOutPut] = useState();
  const [expectedOutPut, setExpectedOutPut] = useState();
  const [language, setlanguage] = useState("java");
  const [code, setcode] = useState(
    'public class Hello{\n\tpublic static void main(String[] args){\n\tSystem.out.println("hello World");\n\t}\n}'
  );
  function Compile() {
    console.log(code);
    setLoading(true);
    setShow(false);
    let data = JSON.stringify({
      code: code,
      language: language,
      input: input,
      problemId: id,
    });
    let config = {
      method: "post",
      url: "http://localhost:8080/api/v1/candidate/compiles",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        //setoutcode((response.data.output));
        //seterr(response.data.error);
        setAnswer(response.data.success);
        setTestCaseId(response.data.testCaseId);
        setinput(response.data.input);
        setOurOutPut(response.data.ourOutPut);
        setExpectedOutPut(response.data.expectedOutPut);
        setLoading(false);
        setShow(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function submitCode() {
    console.log("code submitted ");

    if (answer === true) {
      let data = JSON.stringify({
        submittedCode: code,
        problemId: id,
        userId: user.userId,
      });
      let config = {
        method: "post",
        url: "http://localhost:8080/api/v1/candidate/submissions",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          if (response.status === 201 && answer === true) {
            return toast("Code Submitted SuccessFully", {
              backgroundColor: "white",
              color: "green",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (answer === false) {
      return toast("Code Compilation error", {
        backgroundColor: "white",
        color: "red",
      });
    } else {
      return toast("Compile code first", {
        backgroundColor: "white",
        color: "red",
      });
    }
  }

  //console.log(input);
  console.log(language);
  //console.log(data);
  //console.log(testCaseId);
  const MenuProps = {
    PaperProps: {
      style: {
        background: "white",
      },
    },
  };

  return (
    <div className="shadow-2xl border-solid	m-5 p-5 bg-blue-gray-900 rounded-lg w-auto  border-[1px] border-gray-800">
      <div className="flex  mt-5 mb-5">
        <div className="ml-auto px-2 py-2 bg-pro-black-1 text-white w-48">
          <FormControl fullWidth color="secondary">
            <InputLabel id="demo-multiple-checkbox-label">Languages</InputLabel>
            <Select
              label="Languages"
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              onChange={(e) => setlanguage(e.target.value)}
            >
              <MenuItem value={"java"}>Java</MenuItem>
              <MenuItem value={"cpp17"}>C++</MenuItem>
              <MenuItem value={"python3"}>Python</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className=" m-0 p-0">
        <CodeMirror
          value={code}
          theme={sublime}
          width="670px"
          height="500px"
          extensions={[StreamLanguage.define(java)]}
          onChange={(value) => setcode(value)}
        />
      </div>

      <div className="flex mt-5">
        <div className="ml-auto mr-10 flex space-x-2">
          <div>
            <Button onClick={Compile} variant="outlined" color="secondary">
              Compile and Run
            </Button>
          </div>
          <div>
            <Button onClick={submitCode} variant="contained" color="secondary">
              Submit Code
            </Button>
            <ToastContainer delay={1000} position="top-right" />
          </div>
        </div>
      </div>

      {/* <div className='flex ml-5'>
      <div >
        <h3 className='text-xl font-bold'>OutPut</h3>
        <textarea  
            value = {[outcode , err]}
            rows ={20}
            cols = {40} 
            disabled
        />
      </div>
      <div>
          <h3 className='text-xl font-bold'>Input</h3>
          
          <textarea
              rows ={20}
              cols = {40}
              onChange = { (e) => setinput(e.target.value)} 
          />
      </div>


    </div> */}

      <div className=" py-10 mt-5">
        {loading ? <Loading /> : null}
        {show ? (
          <h1
            className="bg-gray-100 rounded-xl h-16 text-xl font-bold py-2 pl-5 pt-4"
            style={{ color: answer ? "green" : "red" }}
          >
            {answer ? (
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span> Correct Answer </span>
              </div>
            ) : (
              <div className="flex  space-x-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Wrong Answer</span>
              </div>
            )}
          </h1>
        ) : null}
      </div>

      <div>
        {show ? (
          <TestCaseTab
            answer={answer}
            testCaseId={testCaseId}
            input={input}
            ourOutPut={ourOutPut}
            expectedOutPut={expectedOutPut}
          />
        ) : null}
      </div>
      {/* <TestCaseTab/> */}
    </div>
  );
}
