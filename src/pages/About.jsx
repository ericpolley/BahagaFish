import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router'

export default function About() {
  const navigate = useNavigate();
  return (

    <>
    <Helmet>
                <title>BAHAGAFISH: About</title>
                <link rel="canonical" href="/#/about" />
                <meta name='description' content='News: Fake news for Real people! BAHAGAFISH is who we are!' />
                <title>BAHAGAFISH: NEWS</title>
                <meta name='description' content='News: Fake news for Real people!' />
                <meta property="og:type" content="News" />
    <meta property="og:image" content="https://cdn.pixabay.com/photo/2019/05/14/11/26/fish-4202148_960_720.png" />
    <meta property="og:title" content="About BAHAGAFISH NEWS" />
    <meta
      property="og:description"
      content="About: BAHAGAFISH NEWS - Your one stop shop for fake news"
    />
    <meta
      property="og:url"
      content="https://news.ericpolley.com/#/about"
    />
            </Helmet>
            <div className='h-8'></div>
    <div className='flex items-center justify-center mb-12'>
    <div className='w-[99%] lg:w-[80%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg bg-blue-100'>
      <h1 className='text-xl text-center m-4 mt-12'>About</h1>
      <div className='flex flex-col justify-center items-center'>
      <p className=' w-[90%]'>
      Welcome to the wacky world of Bahagafish! We are a team of mischievous writers, animators, and software developers who have a knack for creating hilarious and absurd news stories. Whether it's a tale of ice cream being banned in the northern USA or paper airplanes taking over the world of email, we have a knack for bringing the weird and wonderful to the forefront of your attention.
<br /><br />
Bahagafish was founded in December 2022 by the one and only Eric Polley, a man with a passion for all things absurd and a love of making people laugh. From the very beginning, our goal has been to bring a smile to your face and a spark of creativity to your day, all while keeping you informed on the latest and greatest (fictional) happenings from around the world.
<br /><br />
But we're not just a one-man show! No for real. Like, for real real. At Bahagafish, we are proud to have a diverse and talented team of writers, animators, and software developers. Our team brings a wealth of experience and expertise to the table, and we are always striving to push the boundaries of what is possible with our content. From silly ice cream ban stories to thought-provoking pieces on the future of email, we have something for everyone.
<br /><br />
So, just how do we come up with all of these wild and wacky stories? It's a closely guarded secret, but we can give you a little sneak peek into our creative process. First, we start by brainstorming ideas – the zanier, the better. Then, we assign each idea to one of our skilled writers, who works their magic to turn it into a fully-fledged story. Once the writing is complete, our animators and software developers get to work bringing the story to life with colorful graphics and interactive elements. Finally, we polish everything up and release it to the world, ready to make you laugh and think.
<br /><br />
So why wait? Dive in and explore the world of Bahagafish today. And don't forget to share your favorite stories with your friends and family – we love to see our content being enjoyed by as many people as possible! We hope you enjoy your stay and come back for more hilarious news and entertainment.
<br /><br />
      </p>
     

      <div className=" w-full border-b-8 border-blue-200 mt-8"></div>
      <div className="bg-blue-300 border-8 border-blue-200 m-1 p-5 rounded-full w-full lg:w-[50vw] flex items-center justify-center">
      <img onClick={()=> navigate('/News')} src="https://cdn.pixabay.com/photo/2019/05/14/11/26/fish-4202148_960_720.png" alt="pigs" className='w-[30vw] cursor-pointer' />
      </div>
    
      </div>
    </div>
    </div>
    </>
  )
}
