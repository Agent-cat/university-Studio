import React from 'react'
  import { useGSAP } from '@gsap/react';
  import gsap from 'gsap';
 import { NavItems } from '../constants/constants';

const Notes = () => {
  useGSAP(() => {
    gsap.from(".headding", {
      opacity: 0,
      
      duration: 1,
     
    });
    
  });
  return (
    <div className='w-full h-screen bg-white '>
      <h1 className='headding text-center text-red-600 font-bold font-[oswald] text-4xl  mt-6 tracking-wide'>Notes</h1>
      <div className="grid grid-cols-2 gap-4 mt-10 mx-10">
        {NavItems.map((item, index) => (
          <div className="bg-gray-200 flex justify-center items-center rounded-lg p-4">
            <div className="mr-4">{item.icon}</div>
            <div className="text-lg">{item.lable}</div>
          </div>
        ))}
      </div>
     
    </div>
  )
  
}

export default Notes


