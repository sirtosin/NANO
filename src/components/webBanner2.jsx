import React, { useState } from 'react'
import { badge, down, icon } from '../images'
import { motion } from "framer-motion";
import { postApi } from '../utils/services';


const WebBanner2 = ({ title, title3, title2, body, img, show, gif, vid }) => {
    const [step, setStep] = useState(0);
    const [inputFile, setInputFile] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
    })
    const [inputFile2, setInputFile2] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        city: '',
    })
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

    const handleForm2 = (e) => {
        const value = e.target.value;
        setInputFile2({
            ...inputFile2,
            [e.target.name]: value
        });
    }
    const submitForm2 = (e) => {
        console.log('inpu333', inputFile2)
        e.preventDefault()
        const subPayload = {
            firstname: inputFile2.firstname,
            lastname: inputFile2.lastname,
            email: inputFile2.email,
            city: inputFile2.city,
            phone: inputFile2.phone
        }
        const payload = {
            title: 'telephony',
            content: subPayload
        }
        postApi(payload).then((res) => console.log('res', res)).catch((err) => console.log('err', err))
        setInputFile2({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            city: '',
        })
    }
    const handleForm = (e) => {
        const value = e.target.value;
        setInputFile({
            ...inputFile,
            [e.target.name]: value
        });
    }
    const submitForm = (e) => {
        console.log('inputFile', inputFile)
        e.preventDefault()
        const subPayload = {
            name: inputFile.name,
            email: inputFile.email,
            website: inputFile.website,
            phone: inputFile.phone
        }
        const payload = {
            title: 'social',
            content: subPayload
        }
        postApi(payload).then((res) => console.log('res', res)).catch((err) => console.log('err', err))
        setInputFile({
            name: '',
            email: '',
            website: '',
            phone: '',
        })
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
                                <input type="text" value={inputFile.website} placeholder='website' onChange={handleForm} name='website' className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                <img src={down} alt="" />
                            </div>
                        </div>
                        </div>}
                        {step === 1 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full'><div className=''>

                            <div className='flex items-center justify-between'>
                                <input type="email" value={inputFile.email} placeholder='email' onChange={handleForm} name="email" className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                <img src={down} alt="" />
                            </div>
                        </div>
                        </div>}
                        {step === 2 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full '><div className=''>

                            <div className='flex items-center justify-between'>
                                <input type='number' value={inputFile.phone} placeholder='phone number' onChange={handleForm} name='phone' className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                <img src={down} alt="" />
                            </div>
                        </div>
                        </div>}
                        {step === 3 && <div className='flex flex-col h-max bg-transparent w-[304px] border-[#DA452C] border-[1px] mt-20 mb-10 p-5 rounded-full '><div className=''>

                            <div className='flex items-center justify-between'>
                                <input placeholder='full name' value={inputFile.name} onChange={handleForm} name='name' type="text" className='mx-2 bg-transparent outline-none border-b-2 flex-1' />
                                <img src={down} alt="" />
                            </div>
                        </div>
                        </div>}
                        {step >= 3 ? <button onClick={submitForm} className=' border-2 text-white bg-[#5AA6B1] my-5 w-[100px]  rounded-lg p-2 lg:p-4 text-sm'>DONE</button> : <button onClick={(e) => nextForm(e)} className=' border-2 text-white bg-[#5AA6B1]/80 my-5 w-[100px]  rounded-lg p-2 lg:p-4 text-sm'>NEXT</button>}</> :
                        <div className='bg-[#EBF4F6] w-full md:-ml-6 lg:ml-0 sm:w-[400px] h-max  p-8 rounded-lg flex flex-col space-y-3'>
                            <div className='bg-transparent w-full border-[#DA452C] border-[1px]  px-6 py-2 rounded-full flex flex-col '>

                                <input type="text" value={inputFile2.email} placeholder='email'
                                    onChange={handleForm2}  name='email' className='bg-transparent outline-none border-b-2 ' />
                            </div>
                            <aside className='flex items-center space-x-4 w-full'>
                                <div className='bg-transparent w-1/2 border-[#DA452C] border-[1px]  px-4 py-1 rounded-full flex flex-col'>

                                    <input placeholder='firstname' value={inputFile2.firstname} type="text" onChange={handleForm2} name='firstname' className='bg-transparent outline-none border-b-2 ' />
                                </div>      <div className='bg-transparent w-1/2 border-[#DA452C] border-[1px]  px-4 py-1  rounded-full flex flex-col'>

                                    <input placeholder='lastname' value={inputFile2.lastname} type="text" onChange={handleForm2} name='lastname' className='bg-transparent outline-none border-b-2 ' />
                                </div>
                            </aside>
                            <aside className='flex items-center space-x-4 w-full'>
                                <div className='bg-transparent w-1/2 border-[#DA452C] border-[1px]  px-4 py-1 rounded-full flex flex-col'>

                                    <input placeholder='city' value={inputFile2.city} type="text" onChange={handleForm2} name='city' className='bg-transparent outline-none border-b-2 ' />
                                </div>      <div className='bg-transparent w-1/2 border-[#DA452C] border-[1px]  px-4 py-1 rounded-full flex flex-col'>
                                    <input type="number" value={inputFile2.phone} placeholder='phone number'
                                        
                                        onChange={handleForm2} name='phone' className='bg-transparent outline-none border-b-2 ' />
                                </div>
                            </aside>
                            <button onClick={submitForm2} className=' border-2 text-white bg-[#5AA6B1] my-10 w-3/4 rounded-lg p-2 lg:p-4 text-sm'>Start your 7-Days Free trial</button>
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
