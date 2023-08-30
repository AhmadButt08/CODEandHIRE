import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavBar } from "../components/NavBar.js";
import { AuthContext } from "../Contexts/AuthContext.js";
import axios from "axios";

export default function Submission() {
  const [submissions, setSubmissions] = useState([]);
  // function createData(submissionId, submissionScore, submissionDate) {
  //   return { submissionId, submissionScore, submissionDate };
  // }

  // const rows = [
  //   createData(3, 2, "2022-12-18 21:43:45"),
  //   createData(4, 2, "2022-12-20 00:39:16"),
  //   createData(5, 3, "2023-01-17 21:33:50"),
  // ];

  const { user } = useContext(AuthContext);
  const { authToken } = useContext(AuthContext);
  const id = user.userId;

  const getSubmissions = () => {
    const config = {
      method: "post",
      url: "http://localhost:8080/api/v1/candidate/submission/users",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      data: id,
    };
    axios(config).then((response) => {
      console.log("sumbissions data====", response.data);

      setSubmissions(response.data);
    });
  };

  useEffect(() => {
    getSubmissions();
  }, []);

  return (
    <TableContainer>
      <NavBar />
      <div className=" mt-20 flex justify-center items-center">
        <div>
          <Table sx={{ minWidth: 400 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Submission Id</TableCell>
                <TableCell align="right">Submission score</TableCell>
                <TableCell align="right">Submission date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {submissions.map((data) => (
                <TableRow key={data.submissionId}>
                  <TableCell component="th" scope="row">
                    {data.submissionId}
                  </TableCell>
                  <TableCell>{data.submissonScore}</TableCell>
                  <TableCell>{data.submittedDate}</TableCell>
                  {/* <TableCell align="right">{rowsubmissionCode}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </TableContainer>
  );
}
