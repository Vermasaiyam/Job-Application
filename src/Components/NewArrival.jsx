import React from 'react'
import im from '../Assets/images/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871 (1).jpeg'
export default function NewArrival() {
    return (
        <div>
            <div className='mx-32 py-3 '>
                <h1 className='text-2xl font-bold text-red-500'>Featured</h1>
            </div>
            <div className='mx-32 py-3 '>
                <h1 className='text-4xl font-bold color-red-500'>Placement Guaranteed Courses</h1>
            </div>

            <div className='mx-32 py-3 p-3 flex  gap-3'>
                <div className="relative leftimage bg-blue-500 bg-no-repeat bg-cover rounded-lg " style={{ height: "550px", width: "50%", backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuhMydS5MoNZJWn-y305u5hYSwxaxpIqlww&s)", backgroundSize: "614px 550px;" }}>
                    {/* <img src={im} alt="" /> */}
                    <div className=' absolute bottom-0 w-1/2 text-white p-4 flex-col mx-2 mb-2'>
                        <h1 className='text-3xl font-bold text-red-500 m-3'>Data Science Training</h1>
                        {/* <h1>Black and White version of the PS5 <br />coming out on sale.</h1> */}
                        <a href="#" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-600">Start</a>
                    </div>

                </div>
                <div className="right w-1/2 gap-3 flex-col flex">
                    <div className="relative rightone  bg-contain rounded-lg" style={{ height: "280px", width: "100%", backgroundImage: "url(https://training-uploads.internshala.com/homepage/media/specialization_section/card-images-desktop/full-stack-web-development-specialization-v2.png.webp)" }}>
                        {/* <img src={im} alt="" /> */}
                        <div className=' absolute  bottom-0 w-1/2 text-white p-4 flex-col mx-2 mb-2'>
                            <h1 className='text-3xl font-bold text-red-500 m-3'>Web Develpoment Course</h1>
                            {/* <h1>Featured woman collections that <br />give you another vibe.</h1> */}
                            <a href="#" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-600">Start</a>
                        </div>
                    </div>
                    <div className="righttwo relative flex gap-3">
                        <div className="left  bg-cover bg-no-repeat rounded-lg" style={{ height: "258px", width: "50%", backgroundImage: "url(https://training-uploads.internshala.com/homepage/media/specialization_section/card-images-desktop/electric-vehicles-specialization.png.webp)" }}>
                            {/* <img src={im} alt="" /> */}
                            <div className=' absolute  bottom-0 w-1/2 text-white p-4 flex-col mx-2 mb-2'>
                            <h1 className='text-3xl py-1 m-3'>Electric Vehicle Course</h1>
                            {/* <h1>Amazon Wireless Speaker</h1> */}
                            <a href="#" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-600">Start</a>
                        </div>
                        </div>
                        <div className="right  bg-cover rounded-lg " style={{ height: "258px", width: "50%", backgroundImage: "url(https://training-uploads.internshala.com/homepage/media/specialization_section/card-images-desktop/human-resource-management-specialization.png.webp)" }}>
                            {/* <img src={im} alt="" /> */}
                            <div className=' absolute b bottom-0 w-1/2 text-white p-4 flex-col mx-2 mb-2'>
                            <h1 className='text-3xl py-1 m-3'>HR Management Course</h1>
                            {/* <h1>GUCCI INTENSE OUD EDP</h1> */}
                            <a href="#" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-600">Start</a>
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
