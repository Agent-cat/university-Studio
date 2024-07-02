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
    <div className='w-full h-screen bg-white grid grid-cols-2 grid-rows-subgrid md:grid-cols-3 md:grid-rows-subgrid'>
      {NavItems.map((items,index)=>(
         <div key={index} className="bg-black  col-span-1 m-3 row-span-20 text-center ">{items.lable}</div>
      ))}
     
    </div>
  )
  
}

export default Notes


