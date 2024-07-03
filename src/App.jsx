import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X , Home, } from "lucide-react";
import { NavItems } from "./constants/constants";
import { useGSAP } from "@gsap/react";
import NavRouts from "./Routes/NavRouts";
import gsap from "gsap";
function App() {
  let [open, change] = useState(false);
  let end = () => {
    change(false);
  };
 
  let toggle = () => {
    change(!open);
  };
  useGSAP(() => {
    gsap.from(".nav", {
      opacity: 0,
      x: -20,
      duration: 0.5,
      stagger: 0.1,
    });
    gsap.from(".div ",{
      opacity:30,
      x:-80,
      duration:0.7,
    })
  });
  

  return (
    <div className=" vishnu w-full h-screen grid grid-cols-9 bg-white overflow ">
   
      <div className="bg-white div h-full col-span-2 md:flex hidden overflow-hidden ">
        <div className="  InnerSidebar ">
          <ul className="flex flex-col  justify-center overflow-hidden ">
            <div className="ProfileDiv">
              
            </div>
            <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? " Active  nav  " : "SidebarNavlink nav"} mt-4`
                }
              >
                <div className="ml-8">
                 <Home/>
                </div>
                <div className="  ml-3 ">
                  <p className="">Home</p>
                </div>
              </NavLink>
            {NavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  `${isActive ? " Active  nav  " : "SidebarNavlink nav"} mt-4`
                }
              >
                <div className="ml-8">
                  {item.icon}
                </div>
                <div className="  ml-5 ">
                  <p className="">{item.lable}</p>
                </div>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white-400 h-full  col-span-9 overflow-hidden  md:col-span-7">
        
        <div className=" w-full bg-white max-h-20   border-black border-b-2  md:h-20 flex  justify-between   items-center">
          <p className="ml-5 md:text-4xl font-[oswald] text-[6vw]  font-bold  ">
            University Studio
          </p>
          <button className="mr-8 p-3 md:flex hidden px-8 rounded-3xl bg-black text-white font-bold">
            Login/SignUp
          </button>

          <button onClick={toggle} className="md:hidden flex   mx-3 px-3 py-6">
            {open ? <X size={"2.5em"} /> : <Menu size={"2.5em"} />}
          </button>
        </div>
        {open && (
          <div className="z-40 fixed w-full h-screen bg-black md:hidden flex-col  text-2xl">
            <ul className="">
            <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? " Active nav  " : "SidebarNavlink  nav "
                    } mt-14`
                  }
                  onClick={end}
                >
                  <div className="ml-8">
                  <Home/>
                  </div>
                  <div className="  ml-3 ">
                    <p className="">Home</p>
                  </div>
                </NavLink>
              {NavItems.map((items, index) => (
                <NavLink
                  key={index}
                  to={items.to}
                  className={({ isActive }) =>
                    `${
                      isActive ? " Active nav  " : "SidebarNavlink  nav "
                    } mt-4`
                  }
                  onClick={end}
                >
                  <div className="ml-8">
                    {items.icon}
                  </div>
                  <div className="  ml-5 ">
                    <p className="">{items.lable}</p>
                  </div>
                </NavLink>
              ))}
            </ul>
          </div>
        )}
        
        <NavRouts/>
      </div>
    </div>
  );
}

export default App;
