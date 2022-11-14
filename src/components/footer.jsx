import React, { useState } from 'react'
import { facebook, instaw, logo2, twitter, vimeo, youtube } from '../images'
import { postApi } from '../utils/services'

const Footer = () => {
  const [email, setEmail] = useState('')
  const submitForm = (e) => {
    e.preventDefault()
    const payload = {
      title: 'newsletter',
      content: email
    }
    postApi(payload).then((res) => console.log('res', res)).catch((err) => console.log('err', err))
    setEmail('')
  }
  return (
    <div className='bg-[#5AA6B1] w-full text-white
    '>
      <div className='flex  flex-col lg:flex-row  lg:justify-between p-8'>
        <section className='flex flex-col space-y-4  w-full lg:w-1/4'>
          <img src={logo2} className='w-40' alt="" />
          <p className=''>
            Nanoqode services are designed to meet modern digital business needs. From getting your company up-to-specs on security, deploying custom solutions, managing you marketing strategy and many more.
          </p>
          <div className='flex items-center space-x-4'>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instaw} alt="" />
            <img src={vimeo} alt="" />
            <img src={youtube} alt="" />
          </div>
        </section>
        <section className='grid grid-cols-1 my-4 sm:grid-cols-2 p-3 sm:my-0 gap-x-8 w-full lg:w-1/3'>
          <div className='flex flex-col space-y-7'>
            <h2 className='font-semibold text-lg'>Get in Touch</h2>
            <p className='text-xs font-light'>888 Sargent AveWinnipeg, Manitoba, R3E 0C7 Canada</p>
            <p className='text-xs font-light'></p>info@nanoqode.com
            <p className='text-xs font-light'>+1 (800) 361-2961</p>
          </div>
          <div className='flex flex-col space-y-3'>
            <h2 className='font-semibold text-lg'>Learn More</h2>
            <p className='text-xs font-light'>About Us</p>
            <p className='text-xs font-light'>Projects</p>
            <p className='text-xs font-light'>Terms of Use</p>
            <p className='text-xs font-light'>Privacy Policy</p>
            <p className='text-xs font-light'>Contact Us</p>
          </div>
        </section>
        <section className='flex flex-col space-y-5 w-full lg:w-1/4'>
          <h2 className='font-semibold text-lg'>
            Our Newsletter
          </h2>
          <p className='text-xs font-light'>
            Subscribe to our newsletter to get our news delivered to your inbox!
          </p>
          <input onChange={(e) => setEmail(e.target.value)} type="email" value={email}placeholder='Enter your email' className='text-[#333333] p-2 outline-none border-none' />

          <button onClick={submitForm} className='bg-[#DA4B27] py-2 px-8 text-white'>Subscribe</button>
        </section>
      </div>
      <div className='w-full h-0.5 bg-white' />
      <p className='text-xs font-light mt-3 text-right  p-4'>&copy; 2022 Nanoqode.
        All rights reserved.</p>
    </div>
  )
}

export default Footer
