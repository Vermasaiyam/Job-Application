import React from 'react'
import delivery from '../Assets/Icons/delivery.png'
import support from '../Assets/Icons/24-7.png'
import refund from '../Assets/Icons/refund.png'
export default function Banner() {
  return (
    <div>
      <div className='flex flex-row flex-wrap h-96  mx-32 py-3 gap-5 justify-center mt-10     '>
            <div className='  h-[100%] w-[30%] flex flex-col justify-center items-center gap-2'>
                <div className='p-5 flex justify-center'>
                    <img src={support} alt="" style={{height:"100px"}} />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>24/7 EXPERT SUPPORT</h1>
                </div>
                <div>
                    <h1 className='text-md'>Friendly 24/7 Expert Support</h1>
                </div>
            </div>
            <div className='  h-[100%] w-[30%] flex flex-col justify-center items-center gap-2'>
                <div className='p-5 flex justify-center'>
                    <img src={refund} alt="" style={{height:"100px"}} />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>MONEY BACK GUARANTEE</h1>
                </div>
                <div>
                    <h1 className='text-md'>We return money within 30 days (if not placed)</h1>
                </div>
            </div>
           
           
      </div>
    </div>
  )
}
