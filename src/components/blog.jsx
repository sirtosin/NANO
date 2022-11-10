import React from 'react'
import { blogPost } from '../constant'
import { BLOGS } from '../images'
import BlogCard from './blogCard'

const BlogPost = () => {
  return (
      <div className='bg-[#F5F5F5] w-full h-max p-7'>
          <section className='relative w-full '>
              <div className='hidden sm:flex absolute right-10 -top-40 '>
                  <img src={BLOGS} alt="" />
              </div>
              <div className='my-20 relative'>
                  <h3 className='font-bold text-2xl mt-10'>All posts</h3>
                  <div className='w-full h-0.5 bg-[#DA452C] px-20 mt-6' />
              </div>
              <div className='flex flex-col mx-20 items-center justify-center 2xl:grid grid-cols-2 gap-7'>
                  {blogPost.map((item) => 
                 
                 <BlogCard key={item.id} data={item}/>
                 )}
              </div>
          </section>
       
      </div>
  )
}

export default BlogPost
