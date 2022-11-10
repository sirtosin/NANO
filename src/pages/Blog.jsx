import React from 'react'
import BlogPost from '../components/blog'
import { blogH } from '../images'

const Blog = () => {
  return (
    <div>

    <div className='bg-[#EBF4F6] w-full h-max sm:p-8 relative z-40'> 
      <div className=' flex flex-col sm:flex-row justify-between '>
        <section className='w-full lg:w-3/4 xl:w-1/2 2xl:w-1/3 2xl:mx-auto'>

          <div className='text-[#333333] p-8'>
            <h3 className='font-bold'>Featured Post</h3>
            <h2 className=' text-2xl lg:text-4xl  font-bold '>
              Step-by-step guide to choosing great font pairs
            </h2>
            <p className='my-10'>By John Doe   l   May 23, 2022 </p>
            <h4 className=' my-5 text-lg lg:text-2xl'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </h4>

            <button className=' border-2 text-white bg-[#5AA6B1] my-5 w-max  rounded-lg p-2 lg:py-4 lg:px-6 text-sm'>Read More  </button>
          </div>


        </section>
        <section className='w-full lg:w-3/4 xl:w-1/2 flex items-center mb-7 justify-center flex-col lg:-mt-20 xl:-mt-3 2xl:w-1/3 2xl:mx-auto'>
          <img
            src={blogH} className='w-full sm:w-[90%]' alt="" />

        </section>
      </div>
      </div>
      <BlogPost/>
    </div>

  )
}

export default Blog
