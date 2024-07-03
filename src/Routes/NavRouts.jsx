import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import AttendenceCalculator from '../Components/AttendenceCalculator'
import Notes from '../Components/Notes'
import Clubs from '../Components/Clubs'
import Xerox from '../Components/Xerox'
import AboutKLU from '../Components/AboutKLU'
import AboutUs from '../Components/AboutUs'
import GamingStudio from '../Components/GamingStudio'
import FirstYear from '../Components/FirstYear'
import SecondYear from '../Components/SecondYear'
import ThirdYear from '../Components/ThirdYear'
import FourthYear from '../Components/FourthYear'

const NavRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="Attendence-Calculator" element={<AttendenceCalculator/>}></Route>
      <Route path="Notes" element={<Notes />}></Route>
      <Route path="Clubs" element={<Clubs />}></Route>
      <Route path="Xerox" element={<Xerox />}></Route>
      <Route path="About-KLU" element={<AboutKLU />}></Route>
      <Route path="About-Us" element={<AboutUs />}></Route>
      <Route path="GamingStudio" element={<GamingStudio />}></Route>
      <Route path="Notes/First-Year" element={<FirstYear />}></Route>
      <Route path="Notes/Second-Year" element={<SecondYear />}></Route>
      <Route path="Notes/Third-Year" element={<ThirdYear />}></Route>
      <Route path="Notes/Fourth-Year" element={<FourthYear />}></Route>

    </Routes>
  )
}

export default NavRouts
