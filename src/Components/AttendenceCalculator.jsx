import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
function AttendenceCalculator() {
  useGSAP(() => {
    gsap.from(".headding", {
      opacity: 0,
      
      duration: 1,
     
    });
    
  });
  return (
    <div className='w-full h-full bg-white'>
      <h1 className='headding text-center text-red-600 font-bold font-[oswald] text-4xl  mt-6 tracking-wide'>Attendence Calculator</h1>
    </div>
  )
}

export default AttendenceCalculator
