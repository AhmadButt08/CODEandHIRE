// import React, { useMemo, useState } from 'react'
// import { createContext,useReducer } from 'react';
// import Codemirror from '../components/Codemirror'
// import AllProblems from '../Pages/AllProblems';

// export const ProblemIdContext = createContext({
//   proId:null,
//   setProId:()=>{}
// });
// const ProblemContext = () => {
//     const [proId,setProId] = useState(0);

//     const value = {
//       proId: proId,
//       setProId:setProId
//     }
//     // const value = useMemo(
//     //   ()=>({proId,setProId}),
//     //   [proId]
//     // );
//   return (
//     <div>
//     <ProblemIdContext.Provider value={value} >
//       <AllProblems/>
//       <Codemirror/>
//     </ProblemIdContext.Provider>

//     </div>
//   )
// }

// export default ProblemContext
