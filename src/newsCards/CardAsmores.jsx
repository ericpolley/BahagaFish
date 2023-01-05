import React from 'react'
import { useNavigate } from 'react-router'

export default function CardAsmores() {
 const navigate = useNavigate();
  return (
<>


<div className='m-1 flex flex-col border-2 rounded-xl border-blue-300 bg-sky-200 
items-center p-3 w-full md:w-[45%] lg:w-[30%] cursor-pointer'
 onClick={()=>navigate(('/smores'))}>
<p className='text-center text-md mb-1 font-semibold'>Scientist believe smores may be the secret to time travel</p>
<p className='text-center text-xs mb-4 font-thin'>Published: 01/05/2023</p>
  <img src="https://cdn.pixabay.com/photo/2016/08/10/04/14/smores-1582448_960_720.jpg" className='w-[60vw] lg:w-[30vw] lg:h-[30vh] h-[40vh]  object-cover border-4 rounded-xl border-blue-300 mb-2' alt="img" />
 
</div>


    </>
  )
}
