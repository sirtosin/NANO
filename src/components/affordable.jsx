import React from 'react'
import { Link } from 'react-router-dom'
import { arrow, arrow2, card, card2, card3, card4, DEVELOPMENT, line } from '../images'

const Affordable = () => {
  return (
    <div className='relative'>
      <div className='flex flex-col items-center justify-center p-5 mt-3'>
        <h3 className='text-4xl font-bold'>Affordable Services</h3>
        <img src={line} className='w-1/3 -ml-12 2xl:w-60' alt="" />
      </div>
      <section className='mt-10 lg:mt-40 mb-20 flex items-center justify-center sm:justify-start relative'>
        <div className='hidden sm:flex -top-10 lg:-top-60 z-20 absolute'>
          <img src={DEVELOPMENT} alt="" />
        </div>
        <div className='hidden md:flex items-center space-x-4 relative ml-20'>
          <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
            <img src={arrow} alt="" />
          </div>
          <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
            <img src={arrow2} alt="" />
          </div>
        </div>
        <div className=' lg:-mt-32 flex items-center space-x-1 flex-col md:grid justify-center md:grid-cols-2 lg:grid-cols-4 ml-10 2xl:mx-auto '>
          <Link to='/web-development'>
          <img src={card} className='p-1 hover:scale-105 duration-150 ease-out transition-all' alt="" /></Link>
          <Link to='/web-hosting'><img src={card2} className='p-1 hover:scale-105 duration-150 ease-out transition-all' alt="" /></Link>
            <Link to='/telephony'><img src={card3} className='p-1 hover:scale-105 duration-150 ease-out transition-all' alt="" /></Link>
          <Link to='/search-engine-optimization'> <img src={card4} className='p-1 hover:scale-105 duration-150 ease-out transition-all' alt="" /></Link>
        </div>
   </section>
    </div>
  )
}

export default Affordable
