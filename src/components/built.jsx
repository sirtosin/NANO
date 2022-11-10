import React from 'react'
import { arrowc, BUILT, cert, desk, file, line, roller } from '../images'
import BuiltCard from './builtCard'

const Built = ({data,title,img}) => {
 
    return (
        <div className='bg-[#EBF4F6] w-full h-max p-10 relative'>
            <div className='flex flex-col items-center justify-center p-5 mt-20 -ml-10 sm:ml-0'>
                <h3 className='text-2xl sm:text-4xl font-bold'>{title}</h3>
                <img src={line} className='w-70' alt="" />
            </div>
            <section className='-ml-20 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-3 lg:grid-cols-3 xl:flex xl:justify-center xl:space-x-10  mt-32  '>
                    {data.map((res) =>
                        <BuiltCard key={res.id} data={res} />
                    )}
                </div>
              
                <div className='hidden xl:flex items-center  justify-evenly mt-4 2xl:justify-between xl:mx-auto max-w-7xl'>
                    <img src={arrowc} className='ml-32' alt="" />
                    <img src={arrowc} className='-ml-20' alt="" />
                    <img src={arrowc} className='-ml-20' alt="" /> 
                </div>
            </section>
           
            <div className='hidden sm:flex absolute right-2 -top-5'>
                <img src={img} className='' alt="" />
            </div>
        </div>
    )
}

export default Built
