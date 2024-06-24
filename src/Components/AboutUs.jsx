import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Instagram } from 'lucide-react';
function AboutUs() {
  useGSAP(() => {
    gsap.from(".headding", {
      opacity: 0,
      
      duration: 1,
     
    });
    
  });
  return (
    <div className='w-full h-full bg-white flex-col justify-center '>
      <h1 className='headding text-center text-red-500 font-bold font-[oswald] text-4xl  mt-6 tracking-wide'>About Us</h1>
       <div className=' w-full h-40 flex justify-center items-center mt-36'>
      <a target='_blank' href="https://www.instagram.com/_university_studio_/">  <Instagram size={78} /></a>
       </div>
    </div>
  )
}

export default AboutUs
