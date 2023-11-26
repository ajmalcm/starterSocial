import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/reUsables/Navbar";

export default function App()
{
  return(
      <div className=" py-6 h-[100vh] max-h-full w-full max-w-[1000px] m-auto">
      <Navbar/>
        <Home/>
      </div>
  )
}