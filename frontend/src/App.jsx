import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/reUsables/Navbar";

export default function App()
{
  return(
      <div className="py-14 px-10 bg-[#f0f0f0] h-[100vh] max-h-full w-full">
      <Navbar/>
        <Home/>
      </div>
  )
}