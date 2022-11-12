import React from 'react'
import { icon, info, line } from '../images'

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { infoData } from '../constant';

const Info = ({ category }) => {

  return (
    <div className={category === 'web-hosting' ? 'bg-[#EBF4F6] p-6 w-full h-max lg:h-[500px] flex flex-col justify-center items-center lg:flex-row lg:justify-around 2xl:justify-around 2xl:px-4 mx-auto' : 'bg-[#EBF4F6] p-6 w-full h-max lg:h-[500px] flex flex-col justify-center items-center lg:flex-row lg:justify-between 2xl:justify-around 2xl:px-4 mx-auto'}>
      {infoData.map((item) =>
        <>
          {category === item.category ?
            <>
              <div className='w-full p-4 lg:w-1/3'>
                <div className='mb-4'>
                  <h3 className='text-4xl font-bold'>{item.title}</h3>
                  <img src={line} className='w-60 ' alt="" />
                </div>
                <p>
                  {item.body}
                </p>
                <Link to={`/${item.category}`}>
                  <button className='my-5 bg-[#5AA6B1] text-white py-2 px-7'>
                    More Details
                  </button>
                </Link>
              </div>
              {item?.content ?
                <div className='flex flex-col items-center justify-center w-1/3'>
                  {item?.content.map((item) =>
                    <div key={item} className='m-3 rounded-full items-center bg-white px-4 sm:px-7 py-1 flex w-[270px] sm:w-[370px] h-[44px]'>
                      <img src={icon} className='mr-3' alt="" />
                      {item}
                    </div>
                  )}
                </div>
                : null}
            </>
            : null}
        </>
      )}
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
