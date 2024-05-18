import React, { Component } from 'react'
import add from '../Assets/images/add1.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Carouse from './Carousel_Slider.jsx'
export default class Main_Section extends Component {

    render() {

        return (
            <>
                <div className='flex bg-brown-200 h-auto '>
                    <div className="left flex justify-center pt-10 border-r-2 border-gray-300" style={{ width: "350px", height: "500px" }}>
                        <div className="flex flex-col ">
                            <a href="" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Woman's Fashion</h1></a>
                            <a href="" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Men's Fashion </h1></a>
                            <a href="" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Electronics </h1></a>
                            <a href="" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Home & Lifestyle </h1></a>
                            <a href="" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Medicine </h1></a>
                            <a href="" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Sports & Outdoor </h1></a>
                            <a href="" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Baby's & Toys</h1></a>
                            <a href="" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Groceries and Pets</h1></a>
                            <a href="" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Health & Beauty</h1></a>
                        </div>
                    </div>

                    <div className="right  p-5" style={{ width: "1150px" }}>

                        <Carouse />

                    </div>

                </div>

                

            </>
        )
    }
}
