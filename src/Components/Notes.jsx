import React from 'react'
  import { useGSAP } from '@gsap/react';
  import gsap from 'gsap';
 
  import { NavLink } from 'react-router-dom';

const Notes = () => {
  
  useGSAP(() => {
    gsap.from(".headding", {
      opacity: 0,
      
      duration: 1,
     
    });
    
  });
  return (
    <div className='w-full h-screen bg-white  overflow-hidden ' >
      
      <h1 className='headding text-center text-red-600 font-bold font-[oswald] text-4xl  mt-6 tracking-wide'>Notes</h1>
      <div className=" mt-10 mx-10 h-[350px]  md:h-[50%]  w-auto   " >
         <p className="text-center font-bold text-4xl text-black p-5  tracking-wide  "> Select Your Year </p>
         <div>
            <ul className="flex flex-col justify-center items-center">
              <NavLink to="/Notes/First-Year" className="bg-black hover:scale-105 text-white duration-100 px-4 py-6 w-[40%] md:w-[20%] h-10 flex justify-center items-center rounded-lg my-2">1st Year</NavLink>
              <NavLink to="/Notes/Second-Year" className="bg-black hover:scale-105 text-white duration-100 font-bold px-4 py-6 w-[40%] md:w-[20%] h-10 flex justify-center items-center rounded-lg my-2">2nd Year</NavLink>
              <NavLink to="/Notes/Third-Year" className="bg-black hover:scale-105 text-white duration-100 font-bold px-4 py-6 w-[40%] md:w-[20%] h-10 flex justify-center items-center rounded-lg my-2">3rd Year</NavLink>
              <NavLink to="/Notes/Fourth-Year" className="bg-black text-white hover:scale-105 duration-100 font-bold px-4 py-6 w-[40%] md:w-[20%] h-10 flex justify-center items-center rounded-lg my-2">4th Year</NavLink>
            </ul>
         </div>
      </div>
     
    </div>
  )
  
}

export default Notes


