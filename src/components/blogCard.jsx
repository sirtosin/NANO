import React from 'react'

const BlogCard = ({data}) => {
  return (
      <div className='flex flex-col space-y-4 justify-center m-4 items-center lg:flex-row lg:space-x-10'>
          <img src={data.img} alt="" />
          <div className='flex space-y-5 flex-col w-[300px] sm:w-[400px]'>
              <h3 className='text-[#5AA6B1] font-semibold'>{data.title}</h3>
              <h2 className='font-bold text-3xl'>{data.subTitle}</h2>
              <p className=''>{data.body}</p>
          </div>
    </div>
  )
}

export default BlogCard
