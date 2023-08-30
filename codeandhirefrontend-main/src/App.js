import Codemirror from "./components/Codemirror";
import ProblemDetailAndEditor from "./components/ProblemDetailAndEditor";
import Problems from "./components/Problems";
import TextEditor from "./components/TextEditor";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllProblems from "./Pages/AllProblems";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NavBar } from "./components/NavBar";
import Submission from "./Pages/Submission";
import Room from "./Pages/Room";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import AuthProvider from "./Contexts/AuthContext";
import Profile from "./components/Profile";
import PrivateRouteCandidate from "./uitls/PrivateRouteCandidate";
import PrivateRouteCompany from "./uitls/PrivateRouteCompany";
import CandidateProfile from "./Pages/CandidateProfile";
import Candidates from "./Pages/Candidates";
import CandidateDetail from "./Pages/CandidateDetail";
import AddProblems from "./components/AddProblems";
import DeleteUser from "./components/DeleteUser";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  // typography:{
  //   fontSize:12,
  // }
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <NavBar/> */}

        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/problems" element={<PrivateRouteCandidate />} exact>
                <Route path="/problems" element={<AllProblems />}></Route>
              </Route>

              <Route
                path="/problems/:id"
                element={<PrivateRouteCandidate />}
                exact
              >
                <Route
                  path="/problems/:id"
                  element={<ProblemDetailAndEditor />}
                />
              </Route>

              <Route path="/profile" element={<PrivateRouteCandidate />} exact>
                <Route path="/profile" element={<Profile />}></Route>
              </Route>
              <Route path="/candidates" element={<PrivateRouteCompany />} exact>
                <Route path="/candidates" element={<Candidates />}></Route>
              </Route>

              <Route
                path="/candidates/detail"
                element={<PrivateRouteCompany />}
                exact
              >
                <Route
                  path="/candidates/detail"
                  element={<CandidateDetail />}
                ></Route>
              </Route>

              {/* <Route
                path="/candidateprofile"
                element={<PrivateRouteCompany />}
                exact
              >
                <Route
                  path="/candidateprofile"
                  element={<CandidateProfile />}
                ></Route>
              </Route> */}

              <Route path="/add" element={<AddProblems />} />
              <Route path="/deleteUser" element={<DeleteUser />} />
              <Route path="/submissions" element={<Submission />} />
              <Route path="/room" element={<Room />} />
              <Route path="/" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
