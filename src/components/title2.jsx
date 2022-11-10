import React from 'react'
import { line } from '../images'

const Title2 = ({title,subtitle}) => {
  return (
      <div className='flex flex-col items-center justify-center p-5'>
          <h4 className='font-semibold'>{title ?? ''}</h4>
          <h3 className='text-2xl sm:text-4xl font-bold'>{subtitle ?? ''}</h3>
          <img src={line} className='w-40 -ml-5 sm:w-60' alt="" />
      </div>
  )
}

export default Title2
