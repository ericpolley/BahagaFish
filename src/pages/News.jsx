import CardApaperplanes from '../newsCards/CardApaperplanes'
import { Helmet } from 'react-helmet'
import CardAicecreamonacoldday from '../newsCards/CardAicecreamonacoldday'
import CardAstrangerwednesday from '../newsCards/CardAstrangewednesday'
import CardAdrivethrupests from '../newsCards/CardAdrivethrupests'
import CardAy2k from '../newsCards/CardAy2k'
import CardAsmores from '../newsCards/CardAsmores'








export default function News() {


  
  return (

    <>
    
      
      
    <Helmet>
                <title>BAHAGAFISH: NEWS</title>
                <link rel="canonical" href="/#/News" />
                <meta name='description' content='BAHAGAFISH NEWS - Your one stop shop for fake news - Get the latest News from BahagaFish News' />
                <meta property="og:type" content="News" />
    <meta property="og:image" content="https://cdn.pixabay.com/photo/2019/05/14/11/26/fish-4202148_960_720.png" />
    <meta property="og:title" content="BAHAGAFISH NEWS" />
    <meta
      property="og:description"
      content="BAHAGAFISH NEWS - Your one stop shop for fake news - Get the latest News from BahagaFish News"
    />
    <meta
      property="og:url"
      content="https://news.ericpolley.com/#/News"
    />
   

            </Helmet>
         
        
    <div className='flex items-center justify-center mb-12 mt-28'>
    <div className='w-[99%] lg:w-[80%] shadow-xl border-4 p-5 m-4 mb-20 border-t-8 border-blue-200 rounded-lg bg-blue-100'>
      <h1 className='text-xl text-center m-4 mt-12'>News</h1>
      <div className='flex flex-row flex-wrap w-full justify-center items-center'>
        <CardAsmores />
        <CardAy2k />
        <CardAdrivethrupests />
      <CardAstrangerwednesday />
      <CardApaperplanes />
      <CardAicecreamonacoldday />
      


      </div>
    </div>
    </div>
    </>
    
  )
}
