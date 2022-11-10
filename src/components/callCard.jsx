import React from 'react'
import { call, msg } from '../images'

const CallCard = () => {
    return (
        <div
            style={{
                boxShadow: '20px 20px 20px 20px #EBF4F6'
        }}
            className='bg-white px-4 mx-4 md:px-10 w-[548px] h-max md:h-[129px] rounded-lg flex  space-x-4 md:space-x-8  items-center  text-[#494949]'>
            <div className='flex space-x-4 md:space-x-6 items-center  text-sm sm:text-lg'>
                <img src={call} className='w-8 md:w-1/3' alt="" />
                <aside className='flex space-y-1 flex-col'>
                    <small className='text-xs'>
                        Toll Free Number
                    </small>
                    <h2 className='font-bold'>
                        800-361-2961
                    </h2>
                </aside>
            </div>

            <div className='bg-[#5AA6B1] w-0.5 h-[50px]' />
            <div className='flex space-x-4 text-sm sm:text-lg md:space-x-6 items-center'>
                <aside className='flex space-y-1 flex-col'>
                    <small className='text-xs'>
                        Get a Quote
                    </small>
                    <h2 className='font-bold'>
                        Live Chat With Us
                    </h2>
                </aside>
                <img src={msg} className='w-8 md:w-1/3' alt="" />
            </div>
        </div>
    )
}

export default CallCard
