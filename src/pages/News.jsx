import React from 'react'
import CardApaperplanes from '../newsCards/CardApaperplanes'
import { Helmet } from 'react-helmet'
import CardAicecreamonacoldday from '../newsCards/CardAicecreamonacoldday'

export default function News() {
  return (

    <>
    <Helmet>
                <title>NEWSFORPIGS: NEWS</title>
                <meta name='description' content='News: Fake news for Real people! News for Pigs.' />
            </Helmet>
    <div className='flex items-center justify-center m-2 mb-12'>
    <div className='w-[99%] lg:w-[80%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg bg-blue-100'>
      <h1 className='text-xl text-center m-4'>News</h1>
      <div className='flex flex-row flex-wrap w-full justify-center items-center'>


      <CardApaperplanes />
      <CardAicecreamonacoldday />


      </div>
    </div>
    </div>
    </>
  )
}
