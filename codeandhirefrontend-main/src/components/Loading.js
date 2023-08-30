// import React from 'react'

// const Loading = () => {
//   return (
//     <div className='flex space-x-5'>
//       <div className='font-bold text-lg'>Processing.....</div>
//       <div className="w-8 h-8 rounded-full animate-ping border-4  bg-deep-orange-300 "></div>
//        {/* <div className="w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-700 border-t-transparent"></div>
//        <div className="w-8 h-8 rounded-full animate-ping border-4  bg-purple-700 "></div> */}
       
  
//     </div>
//   )
// }

// export default Loading
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearBuffer() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" color='secondary' value={progress} valueBuffer={buffer} />
    </Box>
  );
}

