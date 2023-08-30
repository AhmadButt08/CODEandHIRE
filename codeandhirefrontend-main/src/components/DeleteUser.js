import AdminNavBar from "./AdminNavBar";
import { useContext, useEffect, useState } from "react";
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
import { Box } from "@mui/material";

const DeleteUser = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const { authToken } = useContext(AuthContext);
  const handleDelete = (id) => {
    console.log("delteeteee ===", id);

    const config = {
      method: "delete",
      url: "http://localhost:8080/api/v1/deleteUser",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      data: id,
    };
    axios(config).then((response) => {
      if (response.status) {
        alert("User deleted Successfully");
        window.location.reload();
      }
    });
  };
  const getUsers = () => {
    const config = {
      method: "get",
      url: "http://localhost:8080/api/v1/users",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };
    axios(config).then((response) => {
      console.log("sumbissions data====", response.data);

      setUsers(response.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <TableContainer>
      <AdminNavBar />
      <div className=" mt-20 flex justify-center items-center">
        <div>
          <Table sx={{ minWidth: 400 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>User Id</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Roles</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((data) => (
                <TableRow key={data.s}>
                  <TableCell component="th" scope="row">
                    {data.id}
                  </TableCell>
                  <TableCell>{data.firstName}</TableCell>
                  <TableCell>{data.lastName}</TableCell>
                  <TableCell align="right">{data.email}</TableCell>
                  <TableCell align="right">
                    {data.authorities[0].authority}
                  </TableCell>

                  <TableCell align="right">
                    <div
                      onClick={() => handleDelete(data.id)}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </TableContainer>
  );
};

export default DeleteUser;
