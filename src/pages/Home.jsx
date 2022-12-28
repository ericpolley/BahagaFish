import React from 'react'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (

    <>
    <Helmet>
                <title>BAHAGAFISH</title>
                <meta name='description' content='News: Fake news for Real people!' />
            </Helmet>
            <div className='h-8'></div>
    <div className='flex items-center justify-center mb-12'>
    <div className='w-[99%] lg:w-[80%] bg-blue-100 shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg flex flex-col justify-center items-center'>
      <h1 className='w-full text-xl text-center mt-12 pb-2 border-b-8 border-blue-200'> Welcome </h1>
      <div className='flex flex-row flex-wrap items-center justify-center'>
     <div className='w-full lg:w-[45%] text-lg text-center flex justify-center items-center mb-4 mt-4'>
           <p className='bg-sky-200 p-8 border-4 border-blue-200 rounded-xl text-sm'>BAHAGAFISH <br />
           <span className=' text-xs text-gray-500'>  (Bah-ha-guh-fish) </span>
           <br />
          <span className=' text-xs text-gray-400'>
          [ EX: "What a load of Bahagafish" ]
          </span>
          <br /><br />
           Welcome to Bahagafish, a one-stop destination for all the latest and greatest (fictional) news and stories from around the world. Our team of skilled writers and animators are dedicated to bringing you a unique blend of humor and absurdity, all while keeping you informed on the latest developments in the world of ice cream, paper airplanes, and beyond.        
           <br /><br />
Bahagafish was founded in December 2022 by a group of "friends" with a passion for writing and animation. From humble beginnings as a small blog, we have grown into a beloved source of entertainment and satire for readers around the globe. Our mission is to bring a smile to your face and a spark of creativity to your day, all while keeping you up-to-date on the weird and wonderful happenings of the world.
<br /><br />
At Bahagafish, we are proud to have a diverse and talented team of writers, animators, and software developers. Our team brings a wealth of experience and expertise to the table, and we are always striving to push the boundaries of what is possible with our content. From silly ice cream ban stories to thought-provoking pieces on the future of email, we have something for everyone.
<br /><br />
At Bahagafish, you can expect to find all sorts of wild and wacky stories. Whether it's a heartwarming tale of a lost paper airplane being reunited with its owner, or a tongue-in-cheek analysis of the latest ice cream flavor trends, we have something for every reader. We also feature regular updates on the latest technological advancements, as well as satirical takes on current events and pop culture phenomena.
<br /><br />
So why wait? Dive in and explore the world of Bahagafish today. And don't forget to share your favorite stories with your friends and family – we love to see our content being enjoyed by as many people as possible!
<br /><br />  


<br />
      </p>
      </div>
      
      <div className='flex flex-col items-center justify-center lg:ml-4 p-0'>
      
      <div className="bg-blue-300 border-8 border-blue-200 m-1 p-5 rounded-full w-full lg:w-[30vw]">
      <img src="https://cdn.pixabay.com/photo/2019/05/14/11/26/fish-4202148_960_720.png" alt="fish" className='' />
      </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
