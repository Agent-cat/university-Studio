import React from 'react'
import { Link } from 'react-router-dom'
import { FirstYearSubjects } from '../constants/constants'
const FirstYear = () => {
  return (
    <div className=' w-full h-screen overflow-scroll'>
       <div className=" mt-10 mx-10">
        
          <div className=" flex flex-col  ">
            <ul>
              {
                FirstYearSubjects.map((subject,index)=>(
                  <li><Link to={subject.to}className="bg-gray-200 flex justify-center items-center rounded-lg mt-10 p-4 w-[60%] text-2xl min-h-7 font-bold">{subject.lable}</Link></li>
                ))
               
              }
              
            </ul>
            
          </div>
       
      </div>
    </div>
  )
}

export default FirstYear
