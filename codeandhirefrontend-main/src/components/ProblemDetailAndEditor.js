import React from "react";
import { useState } from "react";
import Codemirror from "./Codemirror";
import parse from "html-react-parser";
import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProblemDetailAndEditor = () => {
  let location = useLocation();
  const { problemDes, problemSol } = location.state;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(location.state);

  return (
    <div>
      <div className=" flex flex-row  justify-between">
        <div className="w-[17rem] overflow-y-scroll w-1/2 h-screen ">
          <div className="border-solid  m-5 p-5 shadow-2xl  bg-blue-gray-700 rounded-lg text-white  border-[1px] border-gray-800">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab label="Problem Statement" {...a11yProps(0)} />
                  <Tab label="Problem Solution" {...a11yProps(1)} />
                  {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                {parse(problemDes)}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {problemSol}
              </TabPanel>
              {/* <TabPanel value={value} index={2}>
            Item Three
          </TabPanel> */}
            </Box>
          </div>
        </div>

        <div className="overflow-y-scroll h-screen">
          <Codemirror />
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailAndEditor;
