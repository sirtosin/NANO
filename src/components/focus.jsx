import React from 'react'
import { designimg, Gif2, line } from '../images'

const Focus = () => {
    return (
        <div className=' p-4 mx-auto max-w-7xl mb-32'>
            <h2 className='text-center font-semibold mt-20'>OUR DESIGN LANGUAGE</h2>
            <div className='flex flex-col items-center justify-center p-5'>
                <h3 className='text-4xl font-bold'>A Focus on Design + Fuction</h3>
                <img src={line} className='w-80' alt="" />
            </div>
            <section className='relative flex my-2 items-center justify-center flex-col lg:flex-row mx-auto '>
                <div className=' sm:ml-40 mt-10 sm:mt-0'>
                    <img src={Gif2} className='w-full sm:w-2/3'  alt="" />
                </div>
                <div className='flex mt-[20rem] md:ml-32 relative mb-10 sm:mb-0 items-center justify-center lg:absolute w-full sm:w-1/2 p-10 lg:ml-[30rem]'>
                    <div className='absolute -top-52 sm:mt-0 sm:-ml-32  bg-[#E9E9E9] w-[300px] xl:-top-32 p-8 h-max sm:w-[504px] sm:h-[350px] flex flex-col space-y-4 sm:p-16 text-[#494949]'>
                        <p >Create and maintain inclusive and high-quality content, protecting your brand reputation and reducing the risk of compliance lawsuits and fines.
                        </p>
                        <p className='my-10'>Identify, prioritize, and implement the most impactful content optimizations so you can craft truly impactful, and engaging, customer experiences.</p>
                        <button className='bg-[#5AA6B1] py-2 px-4 text-white mt-32 w-[200px]'>BOOK A FREE CONSULT</button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Focus
