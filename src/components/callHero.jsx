import React from 'react'
import { bghero } from '../images'

const CallHero = () => {
  return (
      <section style={{
          backgroundImage: `url(${bghero})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '200px'
      }} className=' sm:m-20'>
          <div className='flex  flex-col pl-5 sm:items-center sm:flex-row sm:justify-between sm:py-5 sm:px-10 lg:py-10 lg:px-20'>
              <aside className='w-full sm:w-3/4 lg:w-1/2 mt-10'>
                  <div className='w-[100px] h-1 bg-[#DA452C]' />
                  <h3 className='text-white mt-4 sm:text-xl'>
                      Convinced yet? Let's make something
                      great together.
                  </h3>
              </aside>
              <div className='w-1/4 mt-4 sm:mt-10'>
                  <a href="tel:+18003512961">
                      <button className='w-max p-3 bg-[#5AA6B1] text-sm text-white'>SCHEDULE A CALL</button>
                  </a>
              </div>
          </div>
      </section>
  )
}

export default CallHero
