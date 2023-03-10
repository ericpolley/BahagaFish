import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="flex justify-center items-center shadow-xl border-2 border-gray-300 bg-blue-100 fixed top-0 w-full h-auto m-0 p-0 ">
      <div className="w-[90%] md:w-[77%] flex justify-between items-center">
        <div className="flex md:flex-row flex-col items-center w-full">
          <div className=" border-blue-200 border-4 rounded-full bg-sky-300 p-1 flex justify-center items-center">
            <img
              src="https://cdn.pixabay.com/photo/2019/05/14/11/26/fish-4202148_960_720.png"
              onClick={() => navigate("/News")}
              alt="fish"
              className="cursor-pointer h-12 w-14 md:m-1"
            />
          </div>
          <p
            onClick={() => navigate("/")}
            className="hidden md:block font-semibold text-lg lg:text-xl lg:ml-12 md:ml-8 
        text-blue-500 cursor-pointer hover:text-blue-400 active:text-blue-300"
          >
            BAHAGAFISH
          </p>
        </div>
        <div className="flex justify-between w-full sm:w-[90%] md:w-[70%] lg:w-[50%] ml-6 lg:ml-12">
          <p
            onClick={() => navigate("/")}
            className={`text-slate-400 hover:text-blue-500 active:text-blue-400 m-3 cursor-pointer ${
              pathMatchRoute("/") && "text-blue-800 border-b-2 border-blue-400"
            }`}
          >
            Home
          </p>
          <p
            onClick={() => navigate("/News")}
            className={`text-slate-400 hover:text-blue-500 active:text-blue-400 m-3 cursor-pointer ${
              pathMatchRoute("/News") &&
              "text-blue-800 border-b-2 border-blue-400"
            }`}
          >
            News
          </p>
          <p
            onClick={() => navigate("/About")}
            className={`text-slate-400 hover:text-blue-500 active:text-blue-400 m-3 cursor-pointer ${
              pathMatchRoute("/About") &&
              "text-blue-800 border-b-2 border-blue-400"
            }`}
          >
            About
          </p>
          {/*  <p onClick={()=>navigate('/Profile')} className={`text-slate-400 m-3 cursor-pointer ${pathMatchRoute("/Profile") && "text-black border-b-2 border-blue-400"}`}>Profile</p> */}
          {/* <p onClick={()=>navigate('/SignIn')} className={`text-slate-400 m-3 cursor-pointer ${pathMatchRoute("/SignIn") && "text-black border-b-2 border-blue-400"}`}>Sign In</p> */}
        </div>
      </div>
    </div>
  );
}
