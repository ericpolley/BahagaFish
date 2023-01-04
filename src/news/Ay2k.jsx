import React from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router'

export default function Ay2k() {
 
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
                <title>BAHAGAFISH: Story</title>
                <link rel="canonical" href="/#/y2k" />
                <meta name='description' content='News: Computers are thinking about rescheduling Y2k! - Read more about it here' />
                <meta property="og:type" content="Blog" />
    <meta property="og:image" content="https://cdn.pixabay.com/photo/2022/09/29/17/19/space-station-7487714_960_720.png" />
    <meta property="og:title" content="News: Computers are thinking about rescheduling Y2k! - Read more about it here - BAHAGAFISH NEWS" />
    <meta
      property="og:description"
      content="Computers regret missing Y2k and are thinking about rescheduling Y2k! - Read more about it here - BAHAGAFISH NEWS"
    />
    <meta
      property="og:url"
      content="https://news.ericpolley.com/#/y2k"
    />
            </Helmet>
            
    <div className='flex items-center justify-center mb-12 mt-28'>
      
    <div className='w-[99%] lg:w-[80%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg bg-blue-100'>
      <h1 className='text-xl text-center m-4 text-gray-400'>News Article</h1>
      <div className='flex flex-col w-full items-center justify-center'>

      <>

{/* Title */}
<p className='w-full text-center text-md mb-6 font-semibold'> Computers regret missing Y2k and are thinking about rescheduling!  <br />
{/* Date */}
<span className='text-xs font-thin'>Published: 01/04/2023</span> 
</p>


{/* TEXT SECTION 1 */}

<p className='w-full lg:w-[80%] text-center border-t-4 border-blue-200 mb-5'>
  <br />
  Hello everyone! It's Eric from Bahaga Fish News here, bringing you the latest scoop on the tech world. Today, we're talking about Y2K.
  <br /><br />
For those who might not remember, Y2K was a big deal back in the year 2000. The concern was that computers would malfunction when the calendar rolled over from 1999 to 2000, because many older computers only stored the last two digits of the year. People were worried that this would cause widespread chaos and destruction.
<br /><br />
Well, fast forward to today, and it turns out that Y2K wasn't as big of a deal as people thought it would be. Sure, there were a few hiccups here and there, but overall, the transition went smoothly.<br /></p> 

<p className='text-blue-100 text-xs'>I found this at: ericpolley.com</p>
{/* Image in the middle */}
  <img src="https://cdn.pixabay.com/photo/2022/09/29/17/19/space-station-7487714_960_720.png" className='
  w-[80vw] h-80 border-4 rounded-xl border-blue-300 object-cover object-center' alt="img" />
 
  <p className='w-[80%] m-5 mt-10 mb-5 text-center'>

{/* TEXT SECTION 2 */}
But it turns out that the computers are regretting missing out on all the fun. That's right, they're thinking about rescheduling Y2K!
<br /><br />
According to sources within the tech industry, the computers have been talking amongst themselves and they're feeling a bit left out. They missed out on all the hype and anticipation leading up to the big day, and they're envious of all the attention that other technological disasters have received.
<br /><br />
"We wanted to be a part of something special," said one computer. "We wanted to cause a little chaos and maybe even shut down a few systems. But it just didn't happen for us. It's like we missed out on our chance to shine."
<br /><br />
So, the computers have decided that they want to reschedule Y2K. They're still working out the details, but they're thinking about sometime in the next few years.
<br /><br />
"We're not sure exactly when it will be, but we're definitely looking at dates in the near future," said another computer. "We want to give people enough time to prepare, but not too much time. We want to keep them on their toes."
</p>

<p className='text-blue-100 text-xs'>I found this at: ericpolley.com</p>
{/* ADVERTISEMENT */}
<a href="http://ericpolley.com" title='Advertisement'>
<img src="https://cdn.pixabay.com/photo/2018/05/16/15/41/computer-3406108_960_720.jpg" alt="ad" className='
w-[80vw] h-60 object-cover object-center border-4 rounded-xl border-blue-300 cursor-pointer hover:border-blue-400' />
<p className=' text-xs text-slate-400 text-center m-0 p-0 mb-4'>[Advertisement]</p>
</a>

{/* TEXT SECTION 3 */}
<p className='w-[80%] m-5 mt-6 mb-20 text-center'>
The tech industry is in a bit of a frenzy over this news. Many companies are rushing to update their systems and make sure they're ready for the new Y2K. Some are even considering hiring extra staff to help with the preparations.
<br /><br />
But not everyone is excited about the prospect of a new Y2K. Some people are worried that it could cause even more problems than the original Y2K.
<br /><br />
"We already had to deal with one Y2K, do we really need another one?" said one concerned citizen. "I'm not sure if I'm ready to go through all that stress again."
<br /><br />
Despite the concerns, the computers are determined to move forward with their plans. They're confident that they'll be able to handle whatever problems might come their way, and they're excited to finally get their chance to cause a little chaos.
<br /><br />
So, mark your calendars and get ready, because Y2K is coming back! The date may be uncertain, but one thing is for sure: it's sure to be a wild ride.
<br /><br />
That's all for now from Bahaga Fish News. Until next time, stay safe and keep your computer systems updated.
<br /><br /><br /><br />
{/* Sign Out */}

Thanks for reading <br />
Eric Polley - <a href="https://ericpolley.com" className='cursor-pointer text-blue-500 hover:text-blue-400 active:text-blue-300'>ericpolley.com</a>
  
  </p>

<p className="text-blue-500 hover:text-blue-400 active:text-blue-300 cursor-pointer" onClick={()=>navigate(('/News'))}>Back to News</p>

    </>


      </div>
    </div>
    </div>
    </>
  )
}
