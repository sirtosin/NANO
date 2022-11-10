import React from 'react'
import { arrow, arrow2, line, PACKAGES, pricepack, pricepack3, pricepack4, pricepack5 } from '../images'

const Packages2 = ({img,img2,img3,img4,big,color}) => {
  return (
    
      <div
          style={{
          background:color || 'white'
      }}
          className='relative h-max sm:h-[750px] -mt-10'>
          <div className='flex flex-col items-center justify-center p-5 my-10'>
              <h3 className='text-4xl font-bold mt-10'>Pricing</h3>
              <img src={line} className='w-60' alt="" />
          </div>
          <section className='mt-10 lg:mt-16 mb-20 flex items-center justify-center sm:justify-start relative'>
              <div className={big ? 'hidden sm:flex top-10 z-20 relative' : 'hidden sm:flex -top-20 z-20 absolute'}>
                  <img src={img} alt="" className='w-[90%]'/>
              </div>
              <div className='hidden md:flex items-center space-x-2 relative ml-16'>
                  <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                      <img src={arrow} alt="" />
                  </div>
                  <div className='w-[50px] h-[50px] rounded-full border-[#DA452C] bg-transparent flex items-center justify-center border-2'>
                      <img src={arrow2} alt="" />
                  </div>
              </div>
              <div className='sm:mt-20 sm:ml-10 justify-center lg:ml-32 flex items-center space-x-3 flex-col md:flex-row lg:mt-0'>
                  <a href="https://subscriptions.zoho.com/subscribe/96495d0d2cfda4f90941a96b3aa635067906f5e6327bed22ad482bf477cf719e/SEOPREMIUM" target={'_blank'}>
                  <img src={img2} className=' md:w-40 lg:w-52  hover:scale-105 duration-150 ease-out transition-all' alt="" /></a>
                    <a href="https://subscriptions.zoho.com/subscribe/96495d0d2cfda4f90941a96b3aa635067906f5e6327bed22ad482bf477cf719e/SEOPREMIUM" target={'_blank'}><img src={img3} className=' md:w-40 lg:w-52  hover:scale-105 duration-150 ease-out transition-all' alt="" /></a>
                    <a href="https://subscriptions.zoho.com/subscribe/96495d0d2cfda4f90941a96b3aa635067906f5e6327bed22ad482bf477cf719e/SEOPREMIUM" target={'_blank'}><img src={img4} className='md:w-40 lg:w-52  hover:scale-105 duration-150 ease-out transition-all' alt="" /></a>
              </div>
              {/* <div className=' lg:-mt-32 flex items-center space-x-1 flex-col md:grid justify-center md:grid-cols-2 lg:grid-cols-4 ml-10 2xl:mx-auto '>
                    <img src={price} className='w-full p-1 hover:scale-105 duration-150 ease-out transition-all' alt="" />
                </div> */}
          </section>
      </div>
  )
}

export default Packages2
