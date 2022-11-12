import React from 'react'
import { arrow, arrow2, aws, bing, cfib, figma, gcloud, godaddy, gpartner, high, line, mailchimp, mailgun, meta, shopify, twilo, zap, zoho } from '../images'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Title from './title';
const Hero = () => {
  const data = [
    {
      id: 1,
      img: bing,
    },
    {
      id: 2,
      img: mailgun,
    },
    {
      id: 3,
      img: aws,
    },
    {
      id: 4,
      img: mailchimp,
    },
    {
      id: 5,
      img: zoho,
    },
    {
      id: 6,
      img: meta,
    },
    {
      id: 7,
      img: shopify,
    },
    {
      id: 8,
      img: cfib,
    },
    {
      id: 9,
      img: godaddy,
    },
    {
      id: 10,
      img: zap,
    },
    {
      id: 11,
      img: figma,
    },
    {
      id: 12,
      img: gpartner,
    },
    {
      id: 13,
      img: gcloud,
    },
    {
      id: 14,
      img: high,
    },
    {
      id: 15,
      img: twilo,
    },
  ]

  return (
    <div className='flex items-center justify-center flex-col bg-[#EBF4F6] w-full h-[362px] px-5 lg:px-10'>
      <Title title={'Our Partners in Your Success'}/>
      <Swiper
        className='w-full bg-white rounded-full p-2 h-[50px] sm:h-[80px]'
          spaceBetween={15}
        slidesPerView={10}
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
          <SwiperSlide className='flex items-center justify-center space-x-3'>
                <img src={item.img} className='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
