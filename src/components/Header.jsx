import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    function pathMatchRoute(route) {
        if(route === location.pathname) {
            return true;
        }
    }
  return (

    <div className='flex justify-center items-center shadow-xl border-2 border-gray-300 bg-blue-100'>
            <div className='w-[90%] md:w-[77%] flex justify-between'>
        
        <div className='flex md:flex-row flex-col justify-center items-center w-full'> 
        <img src="https://cdn.pixabay.com/photo/2021/01/09/22/55/pig-5903673_960_720.png" onClick={()=>navigate('/')} alt="pig" className='cursor-pointer h-16 p-1 bg-blue-100 md:m-3 border-blue-200 border-4 rounded-full' />
        <p onClick={()=>navigate('/')} className='w-full hidden md:block font-semibold text-lg lg:text-xl lg:ml-12 md:ml-4 text-blue-500 cursor-pointer hover:text-blue-400 active:text-blue-300'>News for Pigs</p>
         </div>
        <div className='flex justify-between w-full sm:w-[90%] md:w-[70%] lg:w-[50%] ml-6 lg:ml-12'> 
            <p onClick={()=>navigate('/')} className={`text-slate-400 m-3 cursor-pointer ${pathMatchRoute("/") && "text-black border-b-2 border-blue-400"}`}>Home</p>
            <p onClick={()=>navigate('/News')} className={`text-slate-400 m-3 cursor-pointer ${pathMatchRoute("/News") && "text-black border-b-2 border-blue-400"}`}>News</p>
            <p onClick={()=>navigate('/About')} className={`text-slate-400 m-3 cursor-pointer ${pathMatchRoute("/About") && "text-black border-b-2 border-blue-400"}`}>About</p>
           {/*  <p onClick={()=>navigate('/Profile')} className={`text-slate-400 m-3 cursor-pointer ${pathMatchRoute("/Profile") && "text-black border-b-2 border-blue-400"}`}>Profile</p> */}
            {/* <p onClick={()=>navigate('/SignIn')} className={`text-slate-400 m-3 cursor-pointer ${pathMatchRoute("/SignIn") && "text-black border-b-2 border-blue-400"}`}>Sign In</p> */}
           
           
        </div>
        </div>
    </div>
  )
}
