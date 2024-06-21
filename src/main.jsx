import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import Layout from "./layout";
import Home from "./Components/Home";
import AttendenceCalculator from "./Components/AttendenceCalculator";
import Notes from "./Components/Notes";
import AboutKLU from "./Components/AboutKLU";
import AboutUs from "./Components/AboutUs";
import Clubs from "./Components/Clubs";
import Xerox from "./Components/Xerox";

import GamingStudio from "./Components/GamingStudio";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="Attendence-Calculator" element={<AttendenceCalculator/>}></Route>
      <Route path="Notes" element={<Notes />}></Route>
      <Route path="Clubs" element={<Clubs />}></Route>
      <Route path="Xerox" element={<Xerox />}></Route>
      <Route path="About-KLU" element={<AboutKLU />}></Route>
      <Route path="About-Us" element={<AboutUs />}></Route>
      <Route path="GamingStudio" element={<GamingStudio />}></Route>
     
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
