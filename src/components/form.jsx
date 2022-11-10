import React from 'react'
import { bball,blob, emailb, fbblack, insta, line, location, phone, pin } from '../images'
import CallHero from './callHero'

const Form = () => {
  return (
    <div className='my-20'>
      <section className='lg:w-[850px] lg:mx-auto mb-4 h-max bg-white mx-3 shadow-lg p-5 flex space-y-3 md:items-center flex-col md:flex-row md:justify-between'>
        <aside className='flex flex-col space-y-5 p-3 md:w-1/2 md:mx-10'>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-4xl font-bold'>Drop Us a Line</h3>

              <img src={line} className='w-1/2 -ml-12 2xl:w-60' alt="" />
              <p className='mt-5'>
                Get talking with our team of experts and let's help you get your project up and running in no time.
              </p>
            </div>
          </div>
          <div>
            <p className='flex items-center'>
              <img src={phone} className='mr-2' alt="" />
              +1 (800) 361-2961
            </p>

            <p className='flex items-center'>
              <img src={emailb} className='mr-2' alt="" />
              info@nanoqode.com
            </p>
             <p className='flex items-center w-[250px]'>
              <img src={location} className='mr-2' alt="" />
              888 Sargent Ave
              Winnipeg, Manitoba, R3E 0C7, Canada
            </p>
          </div>
          <div className='flex items-center space-x-5'>
            <img src={fbblack} alt="" />
            <img src={pin} alt="" />
            <img src={bball} alt="" />
            <img src={insta} alt="" />
          </div>
        </aside>
        <aside className='w-full flex-1'>
          <form className='relative'>
              <div className='flex flex-col w-3/4'>
                <label htmlFor="name" className='font-bold text-xl'>Full Name</label>
                <input type="text" className='border-b-2 border-[#33333380] outline-none p-2' placeholder='John Doe' />
              </div>
              <div className='flex flex-col w-3/4'>
                <label htmlFor="email" className='font-bold text-xl'>Email</label>
                <input type="email" className='border-b-2 border-[#33333380] outline-none p-2' placeholder='itagencyc@gmail.com' />
              </div>
              <div className='flex flex-col w-3/4'>
                <label htmlFor="name" className='font-bold text-xl'>Message</label>
                <textarea type="text" className='resize-none border-b-2 border-[#33333380] outline-none p-2' placeholder='Write your message' />
              </div>

            <button className='bg-[#5AA6B1] py-2 px-8 text-white mt-10'>Send message</button>
            <div className='absolute -right-5 -bottom-5'>
              <img src={blob} alt="" className='w-24 lg:w-40' />
            </div>
          </form>
        </aside>
      </section>
    </div>
  )
}

export default Form
