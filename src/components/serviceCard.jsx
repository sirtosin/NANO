import React from 'react'

const ServiceCard = ({data}) => {
  return (
   
      <div className='bg-white relative w-[300px] xl:w-[400px] shadow-sm xl:h-[202px] py-7 px-2 sm:px-10 hover:bg-[#DA452C] hover:!text-white my-5  hover:scale-105 duration-150 ease-out transition-all cursor-pointer'>
          <div className='bg-[#DA452C] w-16 h-16 rounded-full flex items-center justify-center p-2 absolute -top-7 left-0'>
              <img src={data.img} className='w-3/4' alt="" />
          </div>
          <h2 className='mt-8 font-bold' >
              {data.title}
          </h2>
          <small className=''>
              {data.body}
          </small>
          <div>

          </div>
      </div>
  )
}

export default ServiceCard
