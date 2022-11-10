import React from 'react'
import { line } from '../images'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Title from './title';
const Featured = ({title,data,color,color2,center}) => {
   

  return (
      <div style={{
          background:color
      }} className={center ? ' w-full h-[200px]  sm:h-[362px] p-5 items-center justify-center flex space-y-5 flex-col' :' w-full h-[200px] sm:h-[362px] p-5 flex items-center justify-center space-y-5 flex-col'}>
          <Title title={'Our Partners in Your Success'} center={false} />
          <Swiper
              style={{
                  background:color2
              }}
              className='w-full  rounded-full p-2 h-[50px] sm:h-[80px]'
              //   spaceBetween={15}
              slidesPerView={4}
              navigation
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              // modules={[Autoplay]}
              modules={[Navigation]}
              // autoplay={{
              //     delay: 3000,
              //     disableOnInteraction: false,
              // }}
              // loop={true}
              speed={2000}>
              {data.map((item) => (
                  <SwiperSlide className='flex items-center justify-center'>
                      <img src={item.img} className='w-16' />
                  </SwiperSlide>
              ))}
          </Swiper>
    </div>
  )
}

export default Featured
