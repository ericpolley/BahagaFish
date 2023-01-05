import React from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router'

export default function Asmores() {
 
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
                <title>BAHAGAFISH: Story</title>
                <link rel="canonical" href="/#/smores" />
                <meta name='description' content='News: Scientist believe smores may be the secret to time travel! - Read more about it here' />
                <meta property="og:type" content="Blog" />
    <meta property="og:image" content="https://cdn.pixabay.com/photo/2014/02/27/20/59/bees-276190_960_720.jpg" />
    <meta property="og:title" content="News: Scientist believe smores may be the secret to time travel! - Read more about it here - BAHAGAFISH NEWS" />
    <meta
      property="og:description"
      content="Scientist believe smores may be the secret to time travel- Read more about it here - BAHAGAFISH NEWS"
    />
    <meta
      property="og:url"
      content="https://news.ericpolley.com/#/smores"
    />
            </Helmet>
            
    <div className='flex items-center justify-center mb-12 mt-28'>
      
    <div className='w-[99%] lg:w-[80%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg bg-blue-100'>
      <h1 className='text-xl text-center m-4 text-gray-400'>News Article</h1>
      <div className='flex flex-col w-full items-center justify-center'>

      <>

{/* Title */}
<p className='w-full text-center text-md mb-6 font-semibold'> Scientist believe smores may be the secret to time travel <br />
{/* Date */}
<span className='text-xs font-thin'>Published: 01/05/2023</span> 
</p>


{/* TEXT SECTION 1 */}

<p className='w-full lg:w-[80%] text-center border-t-4 border-blue-200 mb-5'>
  <br />
  It's a typical summer evening at a campsite in the woods. The fire is burning brightly and the smell of roasting marshmallows fills the air. Suddenly, one of the campers exclaims "I have an idea! Let's make smores!"
  <br /><br />
For those who may not be familiar, smores are a classic treat made by sandwiching a toasted marshmallow and a piece of chocolate between two graham crackers. They are a beloved treat for many, but little did we know that they may hold the key to unlocking the mysteries of time travel.
<br /><br />
According to renowned scientist Dr. Jane Smith, "Something about the combination of graham cracker, chocolate, and marshmallow creates a hole in time and space."
<br /><br />
At first, this claim may seem far-fetched, but upon further examination, the science behind it begins to make sense.<br /></p> 

<p className='text-blue-100 text-xs'>I found this at: ericpolley.com</p>
{/* Image in the middle */}
  <img src="https://cdn.pixabay.com/photo/2017/08/02/11/42/smore-2571151_960_720.jpg" className='
  w-[80vw] h-80 border-4 rounded-xl border-blue-300 object-cover object-center' alt="img" />
 
  <p className='w-[80%] m-5 mt-10 mb-5 text-center'>

{/* TEXT SECTION 2 */}

The graham crackers, chocolate, and marshmallows all contain unique properties that could potentially contribute to the creation of a time portal.
<br /><br />
The graham crackers are made of whole wheat flour, which has been shown to contain high levels of energy. This energy, combined with the sugar in the chocolate and the airy, fluffy texture of the marshmallow, creates a burst of energy that could potentially create a rift in the fabric of space-time.
<br /><br />
But how could we test this theory? Dr. Smith and her team of researchers decided to conduct an experiment.
<br /><br />
They gathered a group of volunteers and had them eat smores under controlled conditions, while monitoring their brain activity and physical reactions.
<br /><br />
The results were astounding. During the consumption of the smores, the volunteers' brain waves spiked to levels never before seen, and their heart rates increased significantly.
</p>

<p className='text-blue-100 text-xs'>I found this at: ericpolley.com</p>
{/* ADVERTISEMENT */}
<a href="http://ericpolley.com" title='Advertisement'>
<img src="https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_960_720.jpg" alt="ad" className='
w-[80vw] h-60 object-cover object-center border-4 rounded-xl border-blue-300 cursor-pointer hover:border-blue-400' />
<p className=' text-xs text-slate-400 text-center m-0 p-0 mb-4'>[Advertisement]</p>
</a>

{/* TEXT SECTION 3 */}
<p className='w-[80%] m-5 mt-6 mb-20 text-center'>
But the most intriguing finding was that several of the volunteers reported feeling as though they were transported to a different time and place, with some even recalling specific events from their past in vivid detail.
<br /><br />
This led Dr. Smith to believe that the energy created by the smores was indeed causing a disruption in the space-time continuum, leading to the possibility of time travel.
<br /><br />
But of course, more research needs to be done before we can fully understand the true extent of the smores' time-traveling capabilities. Dr. Smith and her team are continuing their experiments and are hopeful that they can uncover more about this incredible phenomenon.
<br /><br />
In the meantime, the next time you sit around a campfire making smores, just remember that you may be participating in the unlocking of one of the greatest mysteries of the universe. And who knows, you may even find yourself traveling through time.
<br /><br />
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
