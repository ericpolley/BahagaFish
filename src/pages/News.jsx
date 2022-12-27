import React from 'react'
import CardApaperplanes from '../newsCards/CardApaperplanes'

export default function News() {
  return (
    <div className='flex items-center justify-center m-2 mb-12'>
    <div className='w-[75%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg bg-blue-100'>
      <h1 className='text-xl text-center m-4'>News</h1>
      <div className='flex flex-row flex-wrap w-full justify-center items-center'>


      <CardApaperplanes />


      </div>
    </div>
    </div>
  )
}
