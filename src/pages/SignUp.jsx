import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",

  });
  const {name, email, password} = formData;
  function onChange(e) {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
  }
 const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center m-2 mb-12'>
    <div className='w-[99%] lg:w-[80%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg'>
      <h1 className='text-xl text-center m-4'>Sign Up</h1>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center'>
          <form  className='w-[360px] rounded-lg border-4 border-blue-200 flex flex-col items-center text-center bg-blue-100'>
            <input className="border rounded-lg border-gray-500 w-[300px] mt-8 text-center" placeholder='Name' type="text" id="name" value={name} onChange={onChange} />
            <input className="border rounded-lg border-gray-500 w-[300px] mt-4 text-center" placeholder='email' type="email" id="email" value={email} onChange={onChange} />
            <input className="border rounded-lg border-gray-500 w-[300px] mt-4 text-center" placeholder='password' type="password" id="password" value={password} onChange={onChange} />
            <p className='w-[50%] mb-12 mt-8 m-3 cursor-pointer bg-blue-400 p-3 text-white font-medium rounded-xl hover:bg-blue-500 active:bg-blue-600'>Sign Up</p>
          </form>
          <p className='mt-8 text-gray-400 text-center'>Already have an account?</p>
        <p onClick={()=>navigate('/SignIn')} className='m-3 text-center cursor-pointer bg-green-400 p-3 text-white font-medium rounded-xl hover:bg-green-500 active:bg-green-600'>Sign In Instead</p>
        </div>
        </div>
    </div>
    </div>
  )
}
