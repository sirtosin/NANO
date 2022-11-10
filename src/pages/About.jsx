import React from 'react'
import { CallHero, Design } from '../components'
import { designData2, designData3 } from '../constant'
import { ABOUT, aboutimg, aboutweb, CHOOSE, code, code2, code3, DESIGN, line, split, split22 } from '../images'

const About = () => {
  return (
    <main className='mb-20'>

      <section className='w-full bg-[#EBF4F6] h-max p-8'>
        <div className='flex flex-col items-center justify-center p-5'>
          <h3 className='text-4xl font-bold'>About</h3>
          <img src={line} className='w-40' alt="" />
          <h4 className='font-semibold mx-5 sm:w-[450px] my-10'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </h4>
        </div>

        <div className='lg:mx-20 relative'>
          <img src={aboutweb} className='2xl:ml-[40rem]' alt="" />
          <div className='hidden lg:flex absolute -top-10 -right-24 lg:-right-28'>
            <img src={ABOUT} alt="" />
          </div>
        </div>
      </section>
      <section className='mb-20'>
        <div className='flex flex-col p-5 w-[300px] sm:w-[600px] lg:w-[800px] mb-10'>
          <h4 className='font-semibold mx-4 sm:w-[450px] my-10'>
            ACHIEVEMENT
          </h4>
          <h3 className='text-2xl sm:text-4xl font-bold'>interior customization with Danaanz, best quality with professional workers</h3>
          <img src={line} className='w-80' alt="" />
        </div>
        <div className='flex items-center lg:space-x-10 mx-5  lg:mx-auto flex-col lg:flex-row justify-center'>
          <img src={aboutimg} alt="" />
          <article className=' mt-10 bg-[#5AA6B1] w-[252px] h-[525px] flex items-center space-y-20 justify-center flex-col lg:mt-0'>
            <div className='flex flex-col text-white items-center'>
              <h2 className='text-4xl font-semibold'>350+</h2>
              <p>Project Completed</p>
            </div>
            <div className='flex flex-col text-white items-center'>
              <h2 className='text-4xl font-semibold'>23+</h2>
              <p>Professional Teams</p>
            </div>
            <div className='flex flex-col text-white items-center'>
              <h2 className='text-4xl font-semibold'>15+</h2>
              <p>Years Experience</p>
            </div>
          </article>

        </div>
      </section>
      <Design data={designData2}
        subtitle={'WHY CHOOSE US?'}
        btn={true}
        img2={code}
        img={DESIGN}
        title={'The BIG Picture, in 3 Steps'} />
      <Design data={designData3}
        subtitle={''}
        btn={true}
        img2={code3}
        reverse
        img={CHOOSE}
        title={''} />
      <CallHero/>
    </main>

  )
}

export default About
