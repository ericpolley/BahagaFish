import React from 'react'
import { useNavigate } from 'react-router'

export default function CardAstrangerwednesday() {
 const navigate = useNavigate();
  return (
<>


<div className='m-1 flex flex-col border-2 rounded-xl border-blue-300 bg-sky-200 
items-center p-3 w-full md:w-[45%] lg:w-[30%] cursor-pointer'
 onClick={()=>navigate(('/strangerwednesday'))}>
<p className='text-center text-md mb-7 font-semibold'>Stranger Things Season 5 Full-Recast </p>
<p className='text-center text-xs mb-4 font-thin'>Published: 12/28/2022</p>
  <img src="https://cdn.pixabay.com/photo/2022/07/15/08/20/stranger-things-7322649_960_720.png" className='w-[60vw] lg:w-[30vw] lg:h-[30vh] h-[40vh] object-cover object-bottom border-4 rounded-xl border-blue-300 mb-2' alt="img" />
 
</div>


    </>
  )
}
