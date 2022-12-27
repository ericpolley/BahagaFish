import React from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router'

export default function Apaperplanes() {
 
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
                <title>newsforPIGS</title>
                <meta name='description' content='News: Paper air planes are replacing Email?!?! - Read more about it here' />
            </Helmet>
    <div className='flex items-center justify-center m-2 mb-12'>
      
    <div className='w-[99%] lg:w-[80%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg bg-blue-100'>
      <h1 className='text-xl text-center m-4 text-gray-400'>News Article</h1>
      <div className='flex flex-col w-full items-center justify-center'>

      <>

{/* Title */}
<p className='w-full text-center text-md mb-6 font-semibold'>Paper Air Planes Are Replacing Email<br />
{/* Date */}
<span className='text-xs font-thin'>Published: 12/27/2022</span> 
</p>


{/* TEXT SECTION 1 */}

<p className='w-full lg:w-[80%] text-center border-t-4 border-blue-200 mb-5'>
  <br />
As the world becomes increasingly reliant on technology, it's easy to forget the simple pleasures of childhood. But one trend that seems to be making a comeback is the humble paper airplane. And believe it or not, artificial intelligence (AI) is playing a role in this resurgence.
<br />
In the age of emails and instant messaging, it's easy to get caught up in the constant stream of digital communication. But for some, the constant notifications and demands for attention can be overwhelming. That's where paper airplanes come in.
<br />


<br /></p> 

<p className='text-blue-100 text-xs'>I found this at: ericpolley.com</p>
{/* Image in the middle */}
  <img src="https://cdn.pixabay.com/photo/2020/03/09/18/10/aeroplane-4916661_960_720.jpg" className='
  w-[80vw] h-60 border-4 rounded-xl border-blue-300 object-cover' alt="planes" />
 
  <p className='w-[80%] m-5 mt-10 mb-5'>

{/* TEXT SECTION 2 */}

  At first glance, it may seem absurd to think that a folded piece of paper could compete with the convenience and efficiency of email. But for many people, the tactile experience of creating and launching a paper airplane is a welcome break from the screen-based communication of the digital world.
<br />

But it's not just the physical act of making and tossing a paper airplane that is appealing. There is something satisfying about the simplicity of the communication. With a paper airplane, the message is clear and to the point. There is no room for misinterpretation or misunderstanding. And with no need to worry about spam filters or hackers, paper airplanes offer a level of security that electronic communication can't match.
<br /><br />
So how is AI involved in this trend? It turns out that some companies are using AI to help employees create the perfect paper airplane. Using algorithms and machine learning, these tools can analyze the dimensions and folds of a paper airplane and provide feedback on how to make it fly further and more accurately.
<br />
While this may seem like a novelty at first, it's easy to see how this technology could be used in a more practical way. Imagine a team of engineers working on a design project. Instead of sending countless emails back and forth, they could use paper airplanes as a quick and simple way to communicate ideas and make decisions.
</p>

<p className='text-blue-100 text-xs'>I found this at: ericpolley.com</p>
{/* ADVERTISEMENT */}
<a href="http://ericpolley.com" title='Advertisement'>
<img src="https://cdn.pixabay.com/photo/2015/11/27/20/49/cards-1066386_960_720.jpg" alt="ad" className='
w-[80vw] h-60 object-cover object-bottom border-4 rounded-xl border-blue-300 cursor-pointer hover:border-blue-400' />
<p className=' text-xs text-slate-400 text-center m-0 p-0 mb-4'>[Advertisement]</p>
</a>

{/* TEXT SECTION 3 */}
<p className='w-[80%] m-5 mt-6 mb-20'>
There are certainly some pros and cons to using paper airplanes in the workplace. On the plus side, they offer a refreshing change of pace from the constant flow of electronic communication. They can also be a great ice breaker, encouraging team members to interact and collaborate in a more casual and relaxed setting.
<br />
On the downside, paper airplanes may not be suitable for more complex or sensitive conversations. They also can't be easily stored or referenced later on, unlike emails which can be saved and easily searched.
<br /><br />
Overall, the trend of using paper airplanes in the workplace is a refreshing reminder of the simple pleasures of life. While they may not replace email entirely, they offer a unique and enjoyable way to communicate and collaborate with colleagues. And with the help of AI, they may even be able to fly further and more accurately than ever before.
<br /><br /><br />


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
