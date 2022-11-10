import React from 'react'

const BuiltCard = ({ data }) => {
    return (
        <div className='bg-white relative h-[322px] py-7 px-10 ml-20 hover:bg-[#DA452C] hover:!text-white  hover:scale-105 duration-150 ease-out transition-all cursor-pointer'>
            <div className='bg-[#5AA6B1] w-20 h-20 rounded-full flex items-center justify-center absolute -top-7 left-0'>
                <img src={data.img} alt="" />
            </div>
            <h2 className='mt-8'>
                {data.title}
            </h2>
            <small className='text-[#DA4B27] hover:text-white'>
                {data.body}
            </small>
            <div>
                {data?.content?.map((res) =>

                    <div className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-[#DA4B27] rounded-full hover:bg-white' />
                        <p>{res}</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default BuiltCard
