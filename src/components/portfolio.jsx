import React from 'react'
import { line, PORTFOLIO, read, webimg, webimg2, webimg3, webimg4, webimg5 } from '../images'

const Portfolio = () => {
    const data =[
        {
            id:1,
            title: 'Medical Website',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ',
            img:webimg3
        },
        {
            id:2,
            title: 'Cryptocurrency Website',
            body: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum,  ',
            img:webimg2
        },
        {
            id:3,
            title: 'Bitcoin investment Web ',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ',
            img:webimg
        },
        {
            id:4,
            title: 'Body builder Web',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ',
            img:webimg4
        },
        {
            id:5,
            title: 'Dental Website',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ',
            img:webimg5
        },
    ]
  return (
      <div className='p-3 bg-[#EBF4F6] w-full relative'>
          <p className='font-semibold text-center mt-10'> Portfolio</p>
          <div className='flex flex-col items-center justify-center p-5'>
              <h3 className='text-4xl font-bold'>Our Partners in Your Success</h3>
              <img src={line} className='' alt="" />
          </div>
          <section className='flex flex-col items-center justify-center ml-20 sm:ml-32 sm:flex-row sm:justify-start sm:items-start flex-wrap mt-10 lg:mx-20 '>
              
          {data.map((res) =>
          <div className='shadow-xl m-3 sm:w-[350px] bg-white h-max rounded-lg p-5' key={res.id}>
              <img src={res.img} className='w-80 ' alt="" />
              <h2 className='font-bold text-2xl mt-5'>
                 {res.title}
              </h2>
              <p className='my-4'>
                 {res.body}
              </p>
           <img src={read} alt="" />
            </div>
              )}
          </section>
          <div className='absolute  left-0 top-[40rem] 2xl:top-20'>
              <img src={PORTFOLIO} alt="" />
          </div>
          <div className='flex items-center justify-center'>
              <button className='bg-[#5AA6B1] py-2 px-8 text-white my-10'>See All Portfolio </button>
          </div>
         
    </div>
  )
}

export default Portfolio
