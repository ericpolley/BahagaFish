import React from 'react'
import { useNavigate } from 'react-router'

export default function CardAicecreamonacoldday() {
 const navigate = useNavigate();
  return (
<>


<div className='m-1 flex flex-col border-2 rounded-xl border-blue-300 bg-sky-200 
items-center p-3 w-full md:w-[45%] lg:w-[30%] cursor-pointer'
 onClick={()=>navigate(('/icecreamonacoldday'))}>
<p className='text-center text-md mb-1 font-semibold'>Northern USA bans ice cream</p>
<p className='text-center text-xs mb-4 font-thin'>Published: 12/27/2022</p>
  <img src="https://cdn.pixabay.com/photo/2017/08/03/14/38/ice-cream-2576622_960_720.jpg" className='w-[80%] border-4 rounded-xl border-blue-300 mb-2' alt="img" />
 
</div>


    </>
  )
}
