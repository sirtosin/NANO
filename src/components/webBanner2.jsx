import React, { useState } from 'react'
import { badge, down, icon } from '../images'
import { motion } from "framer-motion";


const WebBanner2 = ({ title, title3, title2, body, img, show, gif, vid }) => {
    const [step, setStep] = useState(0)
    // proceed to the next step
    const nextStep = () => {
        if (step > 3) {
            // alert('done')
        } else {
            setStep(step + 1);
        }
    }
    const nextForm = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div className=' flex flex-col sm:flex-row justify-between items-center -ml-5 sm:ml-0'>
            <section className='w-full md:w-1/2 2xl:w-1/3 2xl:mx-auto'>

                <div className='text-[#333333] p-8'>
                    <div className='mt-10 w-[200px] h-1 bg-[#DA452C] mb-4' />
                    <h2 className='text-xl lg:text-4xl  font-bold'>
                        {title3}
                        <span className='mx-2 text-[#DA452C]'>{title}</span>
                        {title2}
                    </h2>
                    <h4 className='text-[#5AA6B1] my-5 text-lg lg:text-2xl'>
                        {body}
                    </h4>

                    {!show ? <>

                        {step === 0 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full '> <div className=''>
                
                            <div className='flex items-center justify-between'>
                                <input type="text" placeholder='website' className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                <img src={down} alt="" />
                            </div>
                        </div>
                        </div>}
                        {step === 1 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full '><div className=''>
                           
                            <div className='flex items-center justify-between'>
                                <input type="email" placeholder='email' className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                <img src={down} alt="" />
                            </div>
                        </div>
                        </div>}
                        {step === 2 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full '><div className=''>
                           
                            <div className='flex items-center justify-between'>
                                <input type='number' placeholder='phone number' className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                <img src={down} alt="" />
                            </div>
                        </div>
                        </div>}
                        {step === 3 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full '><div className=''>
                        
                            <div className='flex items-center justify-between'>
                                <input placeholder='full name' type="text" className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                <img src={down} alt="" />
                            </div>
                        </div>
                        </div>}
                        {step >= 3 ? <button className=' border-2 text-white bg-[#5AA6B1] my-5 w-[100px]  rounded-lg p-2 lg:p-4 text-sm'>DONE</button> : <button onClick={(e) => nextForm(e)} className=' border-2 text-white bg-[#5AA6B1]/80 my-5 w-[100px]  rounded-lg p-2 lg:p-4 text-sm'>NEXT</button>}</> :
                        <div className='bg-[#EBF4F6] w-full md:-ml-6 lg:ml-0 sm:w-[400px] h-max  p-8 rounded-lg flex flex-col space-y-3'>
                            <div className='bg-transparent w-full border-[#DA452C] border-[1px]  px-6 py-2 rounded-full flex flex-col '>
                    
                                <input type="text" placeholder='email' className='bg-transparent outline-none border-b-2 ' />
                            </div>
                            <aside className='flex items-center space-x-4 w-full'>
                                <div className='bg-transparent w-1/2 border-[#DA452C] border-[1px]  px-4 py-1 rounded-full flex flex-col'>
                                  
                                    <input placeholder='firstname' type="text" className='bg-transparent outline-none border-b-2 ' />
                                </div>      <div className='bg-transparent w-1/2 border-[#DA452C] border-[1px]  px-4 py-1  rounded-full flex flex-col'>
                                
                                    <input placeholder='lastname' type="text" className='bg-transparent outline-none border-b-2 ' />
                                </div>
                            </aside>
                            <aside className='flex items-center space-x-4 w-full'>
                                <div className='bg-transparent w-1/2 border-[#DA452C] border-[1px]  px-4 py-1 rounded-full flex flex-col'>
                              
                                    <input placeholder='city' type="text" className='bg-transparent outline-none border-b-2 ' />
                                </div>      <div className='bg-transparent w-1/2 border-[#DA452C] border-[1px]  px-4 py-1 rounded-full flex flex-col'>
                                    <input type="number" placeholder='phone number' className='bg-transparent outline-none border-b-2 ' />
                                </div>
                            </aside>
                            <button className=' border-2 text-white bg-[#5AA6B1] my-10 w-3/4 rounded-lg p-2 lg:p-4 text-sm'>Start your 7-Days Free trial</button>
                        </div>}
                </div>


            </section>
            <section className='w-full md:w-1/2 flex items-center mb-7 justify-center flex-col lg:-mt-20 xl:-mt-3 2xl:w-1/3 2xl:mx-auto'>
                {vid ?
                    <video src={vid} className='mr-10' autoPlay loop muted />
                    :
                    <img src={img} className='w-[90%]' alt="" />
                }
                {gif || vid ? null :
                    <img src={badge} className='-ml-20 lg:-ml-[30rem]' alt="" />
                }

            </section>
        </div>
    )
}

export default WebBanner2
