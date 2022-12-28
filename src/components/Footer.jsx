import React from 'react'
import { useNavigate } from 'react-router'

export default function Footer() {
   const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center shadow-xl border-2 border-gray-300 bg-blue-100'>
    <div className='w-[90%] md:w-[77%] flex justify-center'>


<div className='flex flex-row justify-center items-center w-full md:w-[90%] text-sm'> 
<div className='bg-sky-300 border-blue-200 border-4 rounded-full w-24 flex items-center justify-center'>
<img src="https://cdn.pixabay.com/photo/2019/05/14/11/26/fish-4202148_960_720.png" onClick={()=>navigate('/News')} alt="fish" className='cursor-pointer h-14 w-16 p-1 md:m-3 ' />
</div>
<p className='text-xs'>copyright Eric Polley 2022 <a className='w-full mr-1  text-blue-500 hover:text-blue-400 active:text-blue-300' href="http://ericpolley.com"> ericpolley.com</a></p>

</div>
</div>
</div>
  )
}
