import React from 'react'
import { icon, info, line } from '../images'

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Info = () => {
  const data = [
    {
      id: 1,
      title: 'Web Development'
    },
    {
      id: 2,
      title: 'Mobile App Development'
    },
    {
      id: 3,
      title: 'Software Development'
    },
    {
      id: 4,
      title: 'ERP & Business Solution Deployment'
    },
    {
      id: 5,
      title: 'API & Open Source Integration'
    },
    {
      id: 6,
      title: 'Ecommerce & Shopify Solutions'

    },





  ]
  return (
    <div className='bg-[#EBF4F6] p-6 w-full h-max lg:h-[500px] flex flex-col justify-center items-center lg:flex-row lg:justify-between 2xl:justify-around 2xl:px-40'>
      <div className='w-full p-4 lg:w-1/3'>
        <div className='mb-4'>
          <h3 className='text-4xl font-bold'>Website Creation</h3>
          <img src={line} className='w-60 ' alt="" />
        </div>
        <p>
          Your technology partner for innovative and impactful digital solutions. We are a digital commerce agency that fits perfectly with your business. We work with you and take your stakeholders into consideration when developing custom solutions that guarantee significant value from your digital investment.
        </p>
        <Link to='/web-development'>
        <button className='my-5 bg-[#5AA6B1] text-white py-2 px-7'>
          More Details
          </button>
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center w-1/3'>
        {data.map((item) =>
          <div key={item.id} className='m-3 rounded-full items-center bg-white px-4 sm:px-7 py-1 flex w-[270px] sm:w-[370px] h-[44px]'>
            <img src={icon} className='mr-3' alt="" />
            {item.title}
          </div>
        )}
      </div>
      <motion.img
        initial={{
         x: 200,
          opacity: 0,
        }}
        whileInView={{
         x: 0,
          opacity: 1,
        }}
        className='mb-10'
        transition={{ ease: "easeOut", duration: 1.2 }}
        src={info}
      />
    </div>
  )
}

export default Info
