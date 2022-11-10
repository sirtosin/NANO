import React from 'react'
import { Built, CallCard, CallHero, Client, Creative, Focus, Portfolio, WebBanner } from '../components'
import Featured from '../components/featured'
import { langData, webBannerData, webBuiltData, webCreativeData } from '../constant';
import { BUILT, bulb2, CREATIVE, webdev } from '../images';


const Web = () => {
  return (
    <div className='overflow-hidden'>
      <WebBanner
        title={'Creative|'}
        title2={'Websites'}
        body={' Stand out and generate more leads. Custom Websites Starting $999*'}
        img={webdev}
        data={webBannerData} />
      <div className='my-10 flex items-center justify-center lg:my-0 lg:absolute  lg:left-[30%] lg:-mt-14 z-40 2xl:left-[40%]'>
        <CallCard />
      </div>
      <div className='relative z-20'>
        <Built data={webBuiltData}
          img={BUILT} title={'How we Build Awesome Websites!'} />
      </div>
      <Creative
        img={CREATIVE}
        img2={bulb2}
        data={webCreativeData}
        subtext={''}
        title={'WHAT MAKES US DIFFERENT'}
        body={'We are a creative company that focuses on establishing long-term relationships with customers.'} />
      <Portfolio />
      <Focus />
      <Featured data={langData}
        color={'#FBE9E5'}
        color2={'white'}
        title={'Development Languages'} />
      <Client />
      <CallHero />
    </div>
  )
}

export default Web
