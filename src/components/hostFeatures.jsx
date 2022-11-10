import React from 'react'
import { hostDataCard } from '../constant'
import { FEATURES, line } from '../images'
import HostCard from './hostCard'
import Title from './title'

const HostFeatures = () => {
  return (
      <div className='bg-[#E9E9E9] w-full h-max relative'>
          <Title title={'Features'} center={false} />
          <div className='hidden sm:flex absolute  left-0 top-[10rem]'>
              <img src={FEATURES} alt="" />
          </div>
          <section className='py-10'>
              <div className='flex items-center justify-center flex-col lg:grid lg:grid-cols-2 bg-[#E9E9E9] w-max gap-6 p-2Features sm:p-8 h-max mx-auto xl:p-10 '>
                  {hostDataCard.map((item) =>
                      <HostCard key={item.id} data={item} />
                  )}
              </div>
          </section>
      </div>
  )
}

export default HostFeatures
