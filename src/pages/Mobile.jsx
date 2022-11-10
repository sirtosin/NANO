import React from 'react'
import { Built, CallCard, CallHero, Client, Creative, Design, Portfolio, WebBanner } from '../components'
import Featured from '../components/featured'
import { designData2, designData3, mobileBannerData, mobileBuiltData, mobileCreativeData } from '../constant'
import { app, APPS, CHOOSE, DESIGN, mobile, PROCEES, split, split2, split22 } from '../images'

const Mobile = () => {
  return (
    <div className='overflow-hidden'>
      <WebBanner
        title={'Innovative| '}
        title2={'Apps'}
        body={'Cutting-edge mobile solutions to drive your company’s growth Starting from just $699'}
        img={mobile}
        data={mobileBannerData} />
      <div className='my-10 flex items-center justify-center lg:my-0 lg:absolute  lg:left-[30%] lg:-mt-14 z-40 2xl:left-[40%]'>
        <CallCard />
      </div>
      <div className='relative z-20'>
      <Built title={'Our Development Process'} img={PROCEES}
        data={
          mobileBuiltData
        } />
      </div>
      <Creative
        img={APPS}
        img2={app}
        data={mobileCreativeData}
        subtext={'Things that come together to make a great app'}
        title={'WHAT MAKES US DIFFERENT'}
        body={'Mobile Apps that make a difference!.'} />
      <Portfolio />
        <Design data={designData2}
          subtitle={'WHY CHOOSE US?'}
          btn={true}
          img2={split22}
          img={DESIGN}
          title={'The BIG Picture, in 3 Steps'} />
        <Design data={designData3}
          subtitle={''}
          btn={true}
          img2={split}
          reverse
          img={CHOOSE}
          title={''} />
      <Client />
      <CallHero />
    </div>
  )
}

export default Mobile
