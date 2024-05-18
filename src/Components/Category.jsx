import React from 'react'
import smartphone from '../Assets/Icons/smartphone-call.png'
import computer from '../Assets/Icons/imac.png'
import headphone from '../Assets/Icons/headphone.png'
import camera from '../Assets/Icons/camera (1).png'
import games from '../Assets/Icons/gaming.png'
import watch from '../Assets/Icons/smart-watch.png'

export default function Category() {
    return (
        <div className='mb-10 py-4'>
            <div className='mx-32 py-3 '>
                <h1 className='text-2xl font-bold text-red-500'>Categories</h1>
            </div>
            <div className='mx-32 py-3 '>
                <h1 className='text-4xl font-bold color-red-500'>Browse By Category</h1>
            </div>

            <div className='mx-32 py-3'>
                <div className='card  flex flex-wrap flex1-row justify-center gap-6'>
                    <div className='gfg p-10 pb-7 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer '>
                        <img src={smartphone} alt="" style={{ height: "100px" }} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>Phones</h1>
                        </div>
                    </div>
                    <div className='gfg p-10 pb-7 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer '>
                        <img src={computer} alt="" style={{ height: "100px" }} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>Computers</h1>
                        </div>
                    </div>
                    <div className='gfg p-10 pb-7 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer '>
                        <img src={watch} alt="" style={{ height: "100px" }} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>SmartWatch</h1>
                        </div>
                    </div>
                    <div className='gfg p-10 pb-7 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer '>
                        <img src={camera} alt="" style={{ height: "100px" }} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>Camera</h1>
                        </div>
                    </div>
                    <div className='gfg p-10 pb-7 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer '>
                        <img src={headphone} alt="" style={{ height: "100px" }} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>HeadPhones</h1>
                        </div>
                    </div>
                    <div className='gfg p-10 pb-7 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer ' >
                        <img src={games} alt="" style={{ height: "100px"}} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>Gaming</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
