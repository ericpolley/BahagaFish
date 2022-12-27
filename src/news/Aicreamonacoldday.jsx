import React from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router'

export default function Aicecreamonacoldday() {
 
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
                <title>NEWSFORPIGS: Story</title>
                <meta name='description' content='News: Northern USA bans ice cream on account of the recent cold weather - Read more about it here' />
            </Helmet>
    <div className='flex items-center justify-center m-2 mb-12'>
      
    <div className='w-[99%] lg:w-[80%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg bg-blue-100'>
      <h1 className='text-xl text-center m-4 text-gray-400'>News Article</h1>
      <div className='flex flex-col w-full items-center justify-center'>

      <>

{/* Title */}
<p className='w-full text-center text-md mb-6 font-semibold'> Northern USA bans ice cream on account of the recent cold weather <br />
{/* Date */}
<span className='text-xs font-thin'>Published: 12/27/2022</span> 
</p>


{/* TEXT SECTION 1 */}

<p className='w-full lg:w-[80%] text-center border-t-4 border-blue-200 mb-5'>
As the winter chill sweeps through the northern United States, ice cream lovers are in for a major disappointment. In a shocking move, several states have announced a ban on the sale of ice cream due to the recent cold weather.
<br /></p> 

<p className='text-blue-100 text-xs'>I found this at: ericpolley.com</p>
{/* Image in the middle */}
  <img src="https://cdn.pixabay.com/photo/2017/08/03/14/38/ice-cream-2576622_960_720.jpg" className='
  w-[80vw] h-60 border-4 rounded-xl border-blue-300 object-cover' alt="planes" />
 
  <p className='w-[80%] m-5 mt-10 mb-5'>

{/* TEXT SECTION 2 */}
The decision has sparked outrage among ice cream enthusiasts, with many taking to social media to express their dismay. "This is a travesty!" wrote one Twitter user. "Ice cream is a staple of summer, how can they ban it just because it's cold outside?"
<br />
Others have pointed out the economic consequences of the ban. "People are losing their ice cream jobs left and right," said one concerned citizen. "Ice cream shops are closing down, and it's going to be tough for those workers to find new employment."
<br />
The ban has also had a major impact on special occasions. "My daughter's birthday is coming up, and we were planning on having an ice cream cake," said one mother. "Now it looks like we'll be having cake with a side of cake. It's just not the same."
<br />
The decision to ban ice cream has not been without controversy. Some have accused the government of overreach, arguing that individuals should have the right to make their own choices about what they eat, regardless of the weather.
</p>

<p className='text-blue-100 text-xs'>I found this at: ericpolley.com</p>
{/* ADVERTISEMENT */}
<a href="http://ericpolley.com" title='Advertisement'>
<img src="https://cdn.pixabay.com/photo/2019/12/21/06/52/programmer-4709802_960_720.jpg" alt="ad" className='
w-[80vw] h-60 object-cover object-center border-4 rounded-xl border-blue-300 cursor-pointer hover:border-blue-400' />
<p className=' text-xs text-slate-400 text-center m-0 p-0 mb-4'>[Advertisement]</p>
</a>

{/* TEXT SECTION 3 */}
<p className='w-[80%] m-5 mt-6 mb-20'>
Others, however, have defended the ban, pointing out the potential health risks of eating ice cream in cold temperatures. "Ice cream can cause stomachaches and other digestive issues if consumed in the cold," said one supporter of the ban. "It's a necessary precaution to protect public health."
<br />
Despite the backlash, it appears that the ban on ice cream is here to stay. For now, ice cream lovers in the north will have to find alternative ways to satisfy their cravings. Perhaps it's time to break out the hot chocolate and marshmallows.
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
