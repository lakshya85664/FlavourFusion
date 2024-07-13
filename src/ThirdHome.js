import React from 'react'
import Photo1 from './Photo1.jpg'
import Photo2 from './Photo2.jpg'
import Photo3 from './Photo3.jpg'
import Photo4 from './Photo4.jpg'
import Photo5 from './Photo5.jpg'
import Photo6 from './Photo6.jpg'
import Photo7 from './Photo7.jpg'
import Photo8 from './Photo8.jpg'
import Photo9 from './Photo9.jpg'
import { HiChevronLeft } from "react-icons/hi"
import { HiChevronRight } from "react-icons/hi";

const Thirdhome = () => {


  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft= slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft= slider.scrollLeft + 500;
  }
  
  return (
    <>
    <div className='bg-amber-50 p-10 relative flex items-center'>
        <HiChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40}/>
        <div id ='slider' className='w-full h-full h-72 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            <img src={Photo1} alt='avg' className='pr-10 pb-5 inline-block h-80 w-64'/>
            <img src={Photo2} alt='avg' className='pr-10 pb-5 inline-block h-80 w-64'/>
            <img src={Photo3} alt='avg' className='pr-10 pb-5 inline-block h-80 w-64'/>
            <img src={Photo4} alt='avg' className='pr-10 pb-5 inline-block h-80 w-64'/>
            <img src={Photo5} alt='avg' className='pr-10 pb-5 inline-block h-80 w-64'/>
            <img src={Photo6} alt='avg' className='pr-10 pb-5 inline-block h-80 w-64'/>
            <img src={Photo7} alt='avg' className='pr-10 pb-5 inline-block h-80 w-64'/>
            <img src={Photo8} alt='avg' className='pr-10 pb-5 inline-block h-80 w-64'/>
            <img src={Photo9} alt='avg' className='pb-5 inline-block h-80 w-64'/>
        </div>
        <HiChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
    </div> 
    <hr/>
    </>
  )
}

export default Thirdhome