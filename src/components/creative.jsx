import React, {useState} from 'react'
import { accl, bulb2, CREATIVE, line, menu, recycle, rise } from '../images'
import { PopupModal } from 'react-calendly'

const Creative = ({data,img,title,body,subtext,img2,call}) => {
    const [openModal, setOpenModal] = useState(false)
  return (
      <div className=''>
          <section className='bg-[#DA4B271F] relative w-full h-[350px]'>
              <div className='absolute -right-40 -top-8 sm:-top-12'>
                  <img src={img} className='w-3/4' alt="" />
              </div>
              <div className='flex flex-col items-start sm:pl-10'>
                  <p className='mt-20 ml-6 font-bold'>{title??''}</p>
                  <div className='flex flex-col items-center justify-center p-5 sm:w-[650px]'>
                      <h3 className='text-2xl font-bold lg:text-4xl md:-ml-48 lg:ml-0'>
                      {body}
                      </h3>
                      <img src={line} className='-ml-32 w-60 md:w-3/4 lg:-ml-20' alt="" />
                  </div>
                  <p className='ml-6 font-semibold text-[#333333]'>{subtext??''}</p>
           </div>
          </section>
          <section className='relative flex flex-col items-center justify-center mx-10 my-10 space-y-3 md:justify-start md:flex-row md:space-x-4 2xl:my-40'>
              <div className='flex flex-col w-full mt-10 space-y-6 lg:w-1/2'>
                  {data.map((res) =>
                      <div className='flex items-center space-x-5 ' key={res.id}>
                          <div className=' w-28 p-2 h-12 rounded-full flex items-center justify-center bg-[#5AA6B1]  2xl:w-12 2xl:h-12'>
                              <img src={res.img} className='w-3/4' alt="" />
                          </div>
                          <div className='flex flex-col'>
                              <h2 className='font-semibold '>{res.title}</h2>
                              <p className='my-1'>{res.body}</p>
                          </div>
                      </div>
                  )}
                  {call &&
                      <button  onClick={() => setOpenModal(true)} className='my-5 bg-[#DA452C] w-max text-white py-2 px-7'>
                          SCHEDULE A FREE CALL
                      </button>}
              </div>
             
              <div className='w-full ml-16 lg:w-1/2 lg:absolute -top-32 -right-32 '>
                  <img src={img2??''} className='w-3/4 2xl:w-1/3' alt="" />
              </div>
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

export default Creative
