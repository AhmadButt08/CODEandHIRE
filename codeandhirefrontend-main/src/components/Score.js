import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';

export default function Score() {
  const [progress, setProgress] =useState(0);



 

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress.submissionScore} />
    </Box>
  );
}