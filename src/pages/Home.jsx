import React from 'react'

export default function Home() {
  return (
    <div className='flex items-center justify-center m-2 mb-12'>
    <div className='w-[75%] bg-blue-100 shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg flex flex-col justify-center items-center'>
      <h1 className='w-full text-xl text-center mt-4 pb-2 border-b-8 border-blue-200'> Welcome </h1>
      <div className='flex flex-row flex-wrap'>
     <div className='w-full lg:w-[45%] text-lg text-center flex justify-center items-center mb-4 mt-4'>
           <p className='bg-sky-200 p-8 border-4 border-blue-200 rounded-xl text-sm'>News for Pigs! <br />
      
           Welcome to News for Pigs, the home of fake news that's guaranteed to make you laugh!
<br /><br />
If you're tired of the constant stream of depressing and serious news, then you've come to the right place. At News for Pigs, we specialize in creating ridiculous and absurd stories that are sure to bring a smile to your face. Whether it's a report on a giant hamster running for president or a conspiracy theory about aliens living among us, we've got you covered.
<br />
But we're not just in the business of making people laugh. We also believe in the power of satire and absurdity to encourage critical thinking and skepticism. In a world where fake news seems to be all too prevalent, we want to encourage our readers to question the stories they see and think for themselves.
<br /><br />
So if you're in need of a break from the daily grind or just want to laugh at the absurdity of it all, we hope you'll join us at News for Pigs. We promise to keep the fake news coming and to do our part in bringing a little joy to your day.
<br />
Thanks for visiting, and don't forget to check back often for the latest and greatest from the world of fake news!
<br />
      </p>
      </div>
      
      <div className='flex flex-col items-center justify-center lg:ml-4 p-0'>
      
      <div className="bg-blue-300 border-8 border-blue-200 m-1 p-5 rounded-full w-full lg:w-[30vw]">
      <img src="https://cdn.pixabay.com/photo/2014/12/21/23/41/pig-575824_960_720.png" alt="pigs" className='' />
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}
