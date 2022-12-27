import React from 'react'
import { useNavigate } from 'react-router'

export default function Footer() {
   const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center shadow-xl border-2 border-gray-300 bg-blue-100'>
    <div className='w-[90%] md:w-[77%] flex justify-center'>

<div className='flex flex-row justify-center items-center w-full'> 


 </div>
<div className='flex flex-row justify-center items-center w-full sm:w-[90%] md:w-[90%] text-sm'> 
<img src="https://cdn.pixabay.com/photo/2021/01/09/22/55/pig-5903673_960_720.png" onClick={()=>navigate('/')} alt="pig" className='cursor-pointer h-10 p-1 bg-blue-100 md:m-3 border-blue-200 border-4 rounded-full' />
<p className=''>copyright Eric Polley 2022 <a className='mr-1  text-blue-500 hover:text-blue-400 active:text-blue-300' href="http://ericpolley.com"> ericpolley.com</a></p>

</div>
</div>
</div>
  )
}
