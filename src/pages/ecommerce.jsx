import React from 'react'
import { CallCard, CallHero, Client, Design, Form, Portfolio, WebBanner } from '../components'
import Featured from '../components/featured'
import Packages from '../components/packages'
import { designData33, langData2, softBannerData } from '../constant'
import { DESIGN, eapp, ehero, line, PACKAGES } from '../images'

const Ecommerce = () => {
  return (
    <div className='overflow-hidden'>
      <WebBanner
        btn
        title={'SuperCharge Your'}
        title2={'Ecommerce'}
        body={' Get Your Business Online Today! Starting at Just $35/Month'}
        img={ehero}
        data={null} />
      <Portfolio />
      <Featured color={'#FBE9E5'} color2={'white'} data={langData2} title={'Our Client Base'} />
      <Packages img={PACKAGES} img2={""}img3={''} color={'#EBF4F6'}/>
      <div className='my-20'>
        <div className='mx-4 sm:ml-20 mb-10 w-full sm:w-1/2 2xl:w-full'>
          <h3 className='text-2xl sm:text-4xl font-bold'>Need An Urgent Project Delivered ASAP?
            We’re Waiting For Your Call!</h3>
          <img src={line} className='' alt="" />
        </div>
        <div className='flex items-center justify-center'>
          <CallCard />
        </div>
      </div>
      <Client />
      <CallHero />
      <Design data={designData33}
        subtitle={''}
        btn={true}
        img2={eapp}
        img={DESIGN}
        title={''} />
      <Form />
    </div>
  )
}

export default Ecommerce
