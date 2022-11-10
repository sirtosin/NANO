import React from 'react'

const HostBanner = ({title,title3,body,img}) => {
  return (
      <div className=' flex flex-col sm:flex-row justify-between '>
          <section className='w-full lg:w-3/4 xl:w-1/2 2xl:w-1/3 2xl:mx-auto'>

              <div className='text-[#333333] p-8'>
                  <div className='mt-10 w-[200px] h-1 bg-[#DA452C] mb-4' />
                  <h2 className=' text-4xl lg:text-6xl  font-bold '>
                      {title3}
                      <span className='mx-2 text-[#DA452C]'>{title}</span>
                      
                  </h2>
                  <h4 className='text-[#5AA6B1] my-5 text-lg lg:text-2xl'>
                      {body}
                  </h4>

                  <button className=' border-2 text-white bg-[#5AA6B1] my-5 w-max  rounded-lg p-2 lg:p-4 text-sm'>SEE PRICING</button>
              </div>


          </section>
          <section className='w-full lg:w-3/4 xl:w-1/2 flex items-center mb-7 justify-center flex-col lg:-mt-20 xl:-mt-3 2xl:w-1/3 2xl:mx-auto'>
              <img
                  src={img} className='w-[90%]' alt="" />

          </section>
      </div>
  )
}

export default HostBanner
