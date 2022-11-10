import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
import { line, shadow, slide2, slide3, slide4 } from '../images';

const SeoDesign = ({ data, title, img, reverse }) => {
    const slidedata = [
        {
            id: 1,
            img: slide2,
        },
        {
            id: 2,
            img: slide3,
        },
        {
            id: 3,
            img: slide4,
        },
        {
            id: 4,
            img: shadow,
        },
    ]
  return (
      <div className='bg-[#DA4B271F] p-4'>
          <main className='xl:mx-24 2xl:max-w-7xl 2xl:mx-auto'>
              
          <div className={ 'flex flex-col items-center justify-center p-5'}>
              <h3 className='text-2xl sm:text-4xl font-bold'>{title ?? ''}</h3>
              <img src={title ? line : ''} className='' alt="" />
          </div>
          <section className='flex my-20 items-center justify-center flex-col lg:flex-row sm:ml-32 relative 2xl:max-w-7xl 2xl:mx-auto'>
              <div className={'hidden sm:absolute -left-24 lg:-left-8 sm:flex' }>
                  <img src={img} alt="" />
              </div>
              <div className='flex  items-center justify-center relative w-full lg:w-[60%] xl:w-1/2 '>
                  <div className='mt-4 sm:mt-0  sm:-ml-32 bg-[#E9E9E9] w-[320px] justify-center sm:w-[524px] h-max flex items-center flex-col space-y-4 p-6 relative z-30'>
                      {data.map((item) =>
                          <div key={item.id}
                              className='m-4 bg-white p-4 flex items-center space-x-5 hover:bg-[#BAE3E9] w-[280px] sm:w-[300px] duration-150 transition-all hover:shadow-xl hover:scale-105 ease-out rounded-md'>
                              <img src={item.img} alt="" />
                              <div className='flex flex-col space-y-2'>
                                  <h2 className='font-bold '>{item.title}</h2>
                                  <p className='text-sm'>
                                      {item.body}
                                  </p>
                              </div>

                          </div>
                      )}
                  </div>
                
                  <Swiper
                      className='hidden sm:flex w-full bg-white p-2 h-[400px] mt-28 '
                      //   spaceBetween={15}
                      slidesPerView={1}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      modules={[Autoplay]}
                      autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                      }}
                      loop={true}
                      speed={2000}>
                      {slidedata.map((item) => (
                          <SwiperSlide className='flex items-center justify-center'>
                              <img src={item.img} className='' />
                          </SwiperSlide>
                      ))}
                  </Swiper>
              </div>

          </section>
          </main>

      </div>
  )
}

export default SeoDesign
