import React from 'react'
import { useNavigate } from 'react-router'

export default function CardApaperplanes() {
 const navigate = useNavigate();
  return (
<>
<meta name="description" content=" Paper Air Planes are Replacing Email?!?! News Story - click to read more " />

<div className='m-1 flex flex-col border-2 rounded-xl border-blue-300 bg-sky-200 
items-center p-3 w-full md:w-[45%] lg:w-[30%] cursor-pointer'
 onClick={()=>navigate(('/Apaperplanes'))}>
<p className='text-center text-md mb-1 font-semibold'>Paper Air Planes Are Replacing Email</p>
<p className='text-center text-xs mb-4 font-thin'>Published: 12/27/2022</p>
  <img src="https://cdn.pixabay.com/photo/2020/03/09/18/10/aeroplane-4916661_960_720.jpg" className='w-[80%] border-4 rounded-xl border-blue-300 mb-2' alt="planes" />
 
</div>


    </>
  )
}
