import React from 'react'
import { Helmet } from 'react-helmet'

export default function About() {
  return (

    <>
    <Helmet>
                <title>NEWSFORPIGS: About</title>
                <meta name='description' content='News: Fake news for Real people! News for Pigs. This is who we are!' />
            </Helmet>
    <div className='flex items-center justify-center m-2 mb-12'>
    <div className='w-[99%] lg:w-[80%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg bg-blue-100'>
      <h1 className='text-xl text-center m-4'>About</h1>
      <div className='flex flex-col justify-center items-center'>
      <p className=' w-[90%]'>
      Welcome to News for Pigs! We are a group of mischievous writers who have come together to bring fake news to the masses. Our mission is simple: to provide a humorous and entertaining escape from the often-dreary world of real news.
<br />
We officially launched on January 2023, but our roots go back much further. As a group of animators and software developers with a love for satire and absurdity, we have always been drawn to the ridiculous and the outrageous. And in a time when fake news seems to be all too prevalent, we saw an opportunity to use our skills for good (or at least, for a good laugh).
<br /><br />
So what can you expect from News for Pigs? First and foremost, we are in the business of making people laugh. Whether it's a story about a giant hamster running for president or a report on the latest conspiracy theory, we strive to bring a bit of levity to an otherwise serious world.
<br />
But we also want to engage our readers in a deeper way. By poking fun at the often absurd nature of the news, we hope to encourage critical thinking and skepticism. We want our readers to question the stories they see, and to think for themselves rather than blindly accepting what is presented to them.
<br /><br />
Of course, it's important to note that everything we publish is purely fictional. While we may draw inspiration from real events, our stories are purely for entertainment purposes and should not be taken seriously.
<br /><br />
So if you're in need of a break from the daily grind, or just want to laugh at the absurdity of it all, we hope you'll join us at 'News for Pigs'. We promise to keep the fake news coming, and to do our part in bringing a little joy to your day.
      </p>
     

      <div className=" w-full border-b-8 border-blue-200 mt-8"></div>
      <img src="https://cdn.pixabay.com/photo/2014/12/21/23/41/pig-575824_960_720.png" alt="pigs" className='w-[60%]' />
    
      </div>
    </div>
    </div>
    </>
  )
}
