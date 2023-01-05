import React from 'react'
import { useNavigate } from 'react-router'

export default function CardAy2k() {
 const navigate = useNavigate();
  return (
<>


<div className='m-1 flex flex-col border-2 rounded-xl border-blue-300 bg-sky-200 
items-center p-3 w-full md:w-[45%] lg:w-[30%] cursor-pointer'
 onClick={()=>navigate(('/y2k'))}>
<p className='text-center text-md mb-7 font-semibold'>Computers may reschedule Y2k</p>
<p className='text-center text-xs mb-4 font-thin'>Published: 01/04/2023</p>
  <img src="https://cdn.pixabay.com/photo/2019/12/31/22/38/fantasy-4732736_960_720.jpg" className='w-[60vw] lg:w-[30vw] lg:h-[30vh] h-[40vh] object-cover border-4 rounded-xl border-blue-300 mb-2' alt="img" />
 
</div>


    </>
  )
}
