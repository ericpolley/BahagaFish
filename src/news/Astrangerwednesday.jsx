import React from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router'

export default function Astrangerwednesday() {
 
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
                <title>BAHAGAFISH: Story</title>
                <link rel="canonical" href="/#/strangerwednesday" />
                <meta name='description' content='News: Stranger Things has been recast with the cast of Wednesday - Read more about it here' />
                <meta property="og:type" content="Blog" />
    <meta property="og:image" content="https://cdn.pixabay.com/photo/2022/07/15/08/20/stranger-things-7322649_960_720.png" />
    <meta property="og:title" content="News: Stranger Things has been recast with the cast of Wednesday - Read more about it here - BAHAGAFISH NEWS" />
    <meta
      property="og:description"
      content="Stranger Things has been recast with the cast of Wednesday - Read more about it here - BAHAGAFISH NEWS"
    />
    <meta
      property="og:url"
      content="https://news.ericpolley.com/#/strangerwednesday"
    />
            </Helmet>
            <div className='h-8'></div>
    <div className='flex items-center justify-center mb-12'>
      
    <div className='w-[99%] lg:w-[80%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg bg-blue-100'>
      <h1 className='text-xl text-center m-4 text-gray-400'>News Article</h1>
      <div className='flex flex-col w-full items-center justify-center'>

      <>

{/* Title */}
<p className='w-full text-center text-md mb-6 font-semibold'> Stranger Things has been recast with the cast of Wednesday <br />
{/* Date */}
<span className='text-xs font-thin'>Published: 12/28/2022</span> 
</p>


{/* TEXT SECTION 1 */}

<p className='w-full lg:w-[80%] text-center border-t-4 border-blue-200 mb-5'>
  <br />
As a huge fan of both "Stranger Things" and "Wednesday," I couldn't be more excited about the news that the cast of "Wednesday" will be taking over for the next season of "Stranger Things." This is a recasting move that nobody saw coming, but one that is sure to shake things up in a big way.
<br /><br />
Jenna Ortega, who rose to fame as Harley Diaz on the hit Disney Channel series "Stuck in the Middle," will be stepping into the role of Eleven. With her quirky personality and undeniable talent, Ortega is sure to bring a fresh and exciting energy to the character.
<br /></p> 

<p className='text-blue-100 text-xs'>I found this at: ericpolley.com</p>
{/* Image in the middle */}
  <img src="https://cdn.pixabay.com/photo/2022/08/22/03/11/couple-7402583_960_720.jpg" className='
  w-[80vw] h-80 border-4 rounded-xl border-blue-300 object-cover object-center' alt="img" />
 
  <p className='w-[80%] m-5 mt-10 mb-5 text-center'>

{/* TEXT SECTION 2 */}
Christina Ricci, known for her roles in films like "The Addams Family" and "Casper," will be taking on the role of Mike. Ricci has proven time and time again that she can tackle a wide range of characters, and we can't wait to see what she brings to the table as Mike.
<br /><br />
Luis Guzmán, who has appeared in a number of films and TV shows over the years, including "Pitch Perfect 3" and "Narcos," will be stepping into the role of Hopper. Guzmán is no stranger to playing tough, no-nonsense characters, and we have no doubt that he will bring a lot of depth and complexity to the role of Hopper.
<br /><br />
Catherine Zeta-Jones, who has had a long and successful career in both film and television, will be taking on the role of Joyce Byers. With her versatility and range as an actress, we have no doubt that Zeta-Jones will bring a fresh perspective to the character.


</p>

<p className='text-blue-100 text-xs'>I found this at: ericpolley.com</p>
{/* ADVERTISEMENT */}
<a href="http://ericpolley.com" title='Advertisement'>
<img src="https://cdn.pixabay.com/photo/2017/11/06/09/32/comedian-2923122_960_720.jpg" alt="ad" className='
w-[80vw] h-60 object-cover object-top border-4 rounded-xl border-blue-300 cursor-pointer hover:border-blue-400' />
<p className=' text-xs text-slate-400 text-center m-0 p-0 mb-4'>[Advertisement]</p>
</a>

{/* TEXT SECTION 3 */}
<p className='w-[80%] m-5 mt-6 mb-20 text-center'>
George Burcea, a rising star in the acting world, will be taking on the role of Will. Burcea has already proven his ability to tackle challenging roles, and we can't wait to see what he brings to the table as Will.
<br /><br />
Emma Myers, who has appeared in a number of TV shows and films over the years, including "The Good Doctor" and "The Handmaid's Tale," will be stepping into the role of Max. Myers is known for her strong and powerful performances, and we have no doubt that she will bring a lot of depth and complexity to the character of Max.
<br /><br />
As "Stranger Things" fans gear up for the highly anticipated fifth season, there is no doubt that the recasting of the show with the cast of "Wednesday" will bring a whole new level of excitement and intrigue to the series. We can't wait to see what the new cast brings to the table and how they will take the story in new and unexpected directions.
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
