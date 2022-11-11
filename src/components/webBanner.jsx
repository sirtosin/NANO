import React, { useState } from 'react'
import { icon, star, star2, webdev } from '../images'
import { motion } from 'framer-motion'
import { PopupModal } from 'react-calendly'

const WebBanner = ({ title, title2, body, img, data, btn ,vid}) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="flex flex-col justify-between sm:flex-row">
      <section className="w-full md:w-1/2 lg:w-3/4 xl:w-1/2 2xl:w-1/3 2xl:mx-auto">
        <div className="text-[#333333] p-4 sm:p-8">
          <div className="mt-10 w-[200px] h-1 bg-[#DA452C] mb-4" />
          <h2 className="text-4xl font-bold lg:text-6xl">
            <span className="text-[#DA452C]">{title}</span>
            {title2}
          </h2>
          <h4 className="text-lg lg:text-2xl mt-6">{body}</h4>
        </div>

        <div className="flex flex-col items-center justify-center w-1/3 ml-28 sm:ml-32 ">
          {data?.map((item) => (
            <div
              key={item.id}
              className="m-3 rounded-full items-center bg-[#EBF4F6] px-4 sm:px-7 py-1 flex w-[270px] sm:w-[370px] h-[44px]"
            >
              <img src={icon} className="mr-3" alt="" />
              {item.title}
            </div>
          ))}
        </div>

        {btn ? (
          <>
            <div className="flex items-center mx-3 my-10 space-x-4 sm:ml-16">
              <button className=" text-white w-[200px] bg-[#5AA6B1] rounded-lg p-2 lg:p-4 text-sm">
                GET STARTED
              </button>
              <button className=" border-2 text-[#DA452C]  w-[300px] border-[#DA452C] rounded-lg p-2 lg:p-4 text-sm">
                SPEAK WITH AN EXPERT
              </button>
            </div>
            <div className="bg-[#DA452C] flex items-center space-x-1 text-white w-max px-4 mx-6  text-xl sm:ml-14 rounded my-10">
              <h2>Excellent</h2>

              <aside className="items-center hidden sm:flex mt-3">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </aside>
              <p>5 star reviews on</p>
              <img src={star2} alt="" />
              <p>Trustpilot</p>
            </div>
          </>
        ) : (
          <div className="flex items-center my-10 ml-16 space-x-2">
            <button
              onClick={() => setOpenModal(true)}
              className="text-white bg-[#DA452C] rounded-lg p-2 lg:p-4 text-sm"
            >
              BOOK A FREE CONSULT
            </button>
          </div>
        )}
      </section>
      <section className="flex flex-col items-center justify-center w-full md:w-1/2 lg:w-3/4 xl:w-1/2 mb-7 lg:-mt-20 xl:-mt-3 2xl:w-1/3 2xl:mx-auto">
        {vid ?
          <motion.video initial={{
            x: 200,
            opacity: 0,
          }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ ease: 'easeOut', duration: 1.2 }} src={vid} className='mr-10' autoPlay loop muted />
          :
          <motion.img initial={{
            x: 200,
            opacity: 0,
          }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ ease: 'easeOut', duration: 1.2 }} src={img} className='w-[90%]' alt="" />
        }
      </section>
      <PopupModal
        url="https://calendly.com/nanoqode/schedule-a-call"
        onModalClose={() => setOpenModal(false)}
        open={openModal}
        rootElement={document.getElementById('root')}
      />
    </div>
  )
}

export default WebBanner
