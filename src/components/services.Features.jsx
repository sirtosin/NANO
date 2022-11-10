import React from 'react'
import { servicesDataCard } from '../constant'
import { FEATURES, line } from '../images'
import ServiceCard from './serviceCard'
import Title from './title'

const ServicesFeatures = () => {
  return (
      <div className='bg-[#DA4B271F] w-full h-max relative'>
          <Title title={'Features'} center={false}/>
          <div className='hidden sm:flex absolute  left-0 top-[10rem]'>
              <img src={FEATURES} alt="" />
          </div>
          <section className='py-10'>
              <div className='flex items-center justify-center flex-col lg:grid lg:grid-cols-2 bg-[#E9E9E9] w-max gap-4 p-8 h-max mx-auto xl:p-10 '>
                  {servicesDataCard.map((item) =>
                  <ServiceCard key={item.id} data={item} />
                  )}
              </div>
        </section>
    </div>
  )
}

export default ServicesFeatures
