import React from 'react'
import { Link } from 'react-router-dom'
import { FirstYearSubjects } from '../constants/constants'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import gsap from 'gsap'
const FirstYear = () => {
  useGSAP(() => {
    gsap.from(".Notes", {
      opacity: 0,
      scale: 0.5,
      x: -100,
      stagger: 0.2,
      duration: 1,
      
    });
  });
  return (
    <div className=' w-full h-screen overflow-scroll '>
       <div className=" ml-10 md:ml-7 flex items-center ">
        
          <div >
            <ul className=" grid gris-cols-1 md:grid-cols-3 gap-4  items-center mx-[10%] md:mx-0  ">
              {
                FirstYearSubjects.map((subject,index)=>(
                  <div key={index} className=" Notes  col-span-1  text-black bg-white shadow-md bg-clip-border rounded-xl   w-[90%] md:w-auto">
                  <div className="  mx-4 mt-4 overflow-hidden  text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40">
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-tight text-blue-gray-900">
                      {subject.lable}
                    </h4>
                    <p
                      className="block font-sans text-base antialiased text-red-500 font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                        According to Y-23
                    </p>
                  </div>
                  <div className="flex justify-center p-6 pt-2 gap-7">
                  <Link to={subject.DownloadLink} className="py-2 px-4 text-white font-bold bg-blue-500 rounded-lg ">
                    Download
                  </Link>
                  </div>
                </div>
                ))
               
              }
              
            </ul>
            
          </div>
       
      </div>
    </div>
  )
}

export default FirstYear
