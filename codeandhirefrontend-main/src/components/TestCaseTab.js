import TestCaseDetail from './TestCaseDetail';
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

 
export default function Example(props) {
  const {testCaseId,answer,input,ourOutPut,expectedOutPut} = props;

  const data = [
    {
      label: `Test case ${testCaseId} `,
      value: "case 1",
      desc: <TestCaseDetail answer={answer} input={input} ourOutPut={ourOutPut} expectedOutPut={expectedOutPut}/>,
    },
    
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 222 }}
    >
      <Tabs
        orientation="vertical"
        textColor='secondary'
        indicatorColor='secondary'
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="TestCase" {...a11yProps(0)} />

      </Tabs>
      <TabPanel value={value} index={testCaseId}>
      <TestCaseDetail answer={answer} input={input} ourOutPut={ourOutPut} expectedOutPut={expectedOutPut}/>
      </TabPanel>
    </Box>
    
  );
}