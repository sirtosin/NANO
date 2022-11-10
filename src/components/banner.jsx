import React, {useState} from 'react'
import { banner, boy, bulb, chart, divider, eng, loading, peeps, scrolll } from '../images'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { PopupModal } from "react-calendly";
import { Link, useNavigate } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
const Banner = () => {
  const [openModal, setOpenModal] = useState(false)
const data = [
    {
      id: 1,
      img: banner,
    },
    {
      id: 2,
      img: boy,
    },
    {
      id: 3,
      img: bulb,
    },
    {
      id: 4,
      img: peeps,
    },
    {
      id: 5,
      img: divider,
    },
    {
      id: 6,
      img: chart,
    },
    {
      id: 7,
      img: eng,
    },
  ]

  return (
    <div className='flex flex-col justify-between sm:flex-row'>
      <section className='w-full lg:w-3/4 xl:w-1/2 2xl:w-1/3 2xl:mx-auto'>
       
        <div className='text-[#333333] p-10'>
          <div className='mt-10 w-[200px] h-1 bg-[#DA452C] mb-4' />
          <h2 className='text-4xl font-bold lg:text-6xl mt-6'>
            Grow your business,
            without Limits!
          </h2>
          <h4 className='mt-10 text-lg lg:text-2xl'>
            Connect with our experts to start
            the evalution today.
          </h4>
        </div>

        <div className='flex items-center ml-10 space-x-2'>
          <button onClick={() => setOpenModal(true)} className='text-white bg-[#5AA6B1] text-sm rounded-lg p-2 lg:p-4 '>BOOK A FREE CONSULT</button>
          <button className='text-[#DA452C] border-[#DA452C] border-2  rounded-lg bg-transparent p-2 lg:p-4 text-sm'><Link to='/search-engine-optimization'> FREE TRAFFIC REPORT </Link></button>
        </div>
        <div className='ml-1 -mt-20'>
          <img src={scrolll} className='' alt="" />
        </div>
      </section>
      <section className='flex flex-col items-center justify-center w-full md:w-1/2 xl:w-1/2 mb-7 lg:-mt-20 xl:-mt-3 2xl:w-1/3 2xl:mx-auto'>
        <Swiper
          className='w-full'
          //   spaceBetween={15}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay,Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
              delay: 3000,
              disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}>
          {data.map((item) => (
            <SwiperSlide className='flex items-center justify-center'>
              <img src={item.img} className='' />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <img src={loading} alt="" /> */}

      </section>
      <PopupModal
          url="https://calendly.com/nanoqode/schedule-a-call"
          // pageSettings={this.props.pageSettings}
          // utm={this.props.utm}
          // prefill={this.props.prefill}
          onModalClose={() => setOpenModal(false)}
          open={openModal}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
        />
    </div>
  )
}

export default Banner
