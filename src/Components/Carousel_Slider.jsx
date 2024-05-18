// import React, { Component } from 'react'
// import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import React, { Component } from 'react'

export default function Carousel_Slider() {
  const slides = [
    {
      url: "https://source.unsplash.com/random/?Cryptocurrency&1"
    },
    {
      url: "https://source.unsplash.com/random/Mobiles"
    },
    {
      url: "https://source.unsplash.com/random/Laptops"
    },
    {
      url: "https://source.unsplash.com/random/cycle"
    },
    {
      url: "https://source.unsplash.com/random/money"
    },

  ];

  const [currentIndex , setCurrentIndex] = useState(0);
  const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 :currentIndex -1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () =>{
    const isLastSlide = currentIndex === slides.length -1 ;
    const newIndex = isLastSlide ? 0 :currentIndex +1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }
 
  return (
       <div>
        <div className="max-w-[1400px] h-[550px] w-full m-auto py-4 px-4 relative group" >
          <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'> </div>
        </div>
        <div className=' absolute top-[50%] left-[400px] -translate-x-0 translate-y-[50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft size={30} onClick={prevSlide}/>
        </div>
        <div className=' absolute top-[50%] right-[70px] -translate-x-0 translate-y-[50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight size={30} onClick={nextSlide}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex)=> {
          <div key={slideIndex} 
          onClick={ () => goToSlide(slideIndex)} 
          className='text-2xl cursor-pointer'>
            <RxDotFilled/>
          </div>
        })}
        </div>
      </div>
      
  
  )
}
