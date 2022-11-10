import React from 'react'
import { arrow, arrow2, line, love } from '../images'
import Google from './google'

const Client = () => {
  return (
    <div className='bg-[#EBF4F6] w-full h-max lg:h-[652px] p-8'>
      <div className='flex items-center justify-center  flex-col'>
        <img src={love} alt="" />
        <img src={line} alt="" />
      </div>
      <div className='flex items-center space-x-2 absolute right-20 mt-3'>
        <aside className='bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center'>
          <img src={arrow} alt="" />
        </aside>
        <aside className='bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center'>
          <img src={arrow2} alt="" />
        </aside>
      </div>
      <div className='lg:ml-16 mt-20 flex items-center flex-col justify-center lg:flex-row lg:space-x-5'>
        <Google
          title={'Jerome Bell'}
          desc={'Marketing Coordinator'}
        />
        <Google 
          title={'Cody Fisher'}
          desc={'President of Sales'}
        />
        <Google 
          title={'Robert Fox'}
          desc={'Web Designer'}
        />
      </div>
      {/* <div className='flex items-center justify-center mt-20'>
        <button className='bg-[#5AA6B1] py-2 px-8 text-white'>More Details</button>
      </div> */}
    </div>
  )
}

export default Client
