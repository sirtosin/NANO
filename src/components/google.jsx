import React from 'react'
import { google, Stars } from '../images'

const Google = ({title, desc}) => {
  return (
      <div className='w-[300px] p-5 sm:w-[416px] h-max shadow-sm rounded bg-white sm:p-7 m-2'>
          <img src={Stars} alt="" />
          <p className='my-3'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
          </p>
          <section className='flex items-center justify-between'>
              <div>
                  <h2 className='font-bold text-lg'>{title}</h2>
                  <p className='text-sm'>{desc}</p>
              </div>
              <img src={google} className='w-16' alt="" />
          </section>
    </div>
  )
}

export default Google
