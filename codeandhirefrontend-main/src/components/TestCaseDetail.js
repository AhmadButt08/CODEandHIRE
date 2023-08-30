
import React from 'react'

const TestCaseDetail = (props) => {
 const {answer,input,ourOutPut,expectedOutPut} = props;
 console.log(expectedOutPut);
  return (
    <div className='w-{570px} ml-0 bg-blue-gray-50 rounded-lg bg-opacity-100'>
        <div className=' w-{570px} h-48 flex flex-col overflow-y-scroll   mr-4 h-screen'>
    <div className='ml-5'>
      Compiler Message
      <div className='bg-white h-12 pt-3 pl-2 text-black'>
      {answer ? 'Success ' : 'Wrong Answer'}
      </div>
    </div>
    <div className='ml-5 mt-5 h-16 '>
      Input
      <div className='bg-white pt-3 pl-2 text-black'>
      <code >
        {input}
      </code>
      </div>
    </div>

    <div className='ml-5 mt-5'>
      Your Output
      <div className='bg-white pt-3 pl-2 h-16 text-black'>
      <code >
        {ourOutPut}
      </code>
      </div>
    </div>
    <div className='ml-5 mt-5 mb-5'>
      Expected OutPut
      <div className='bg-white pt-3 pl-2 h-16 text-black'>
      <code >
        {expectedOutPut}
      </code>
      </div>
      

    </div> 
  </div>
    </div>
  )
}

export default TestCaseDetail
