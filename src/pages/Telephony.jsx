import React from 'react'
import {CallHero, Client, Services, WebBanner2 } from '../components'
import Featured from '../components/featured'
import Packages2 from '../components/packages2'
import ServicesFeatures from '../components/services.Features'
import { langData2, servicesData2 } from '../constant'
import { Gif4, PACKAGES, pricepack3, pricepack4, pricepack5, webbanner3 } from '../images'

const Telephony = () => {
  return (
    <div>
      <WebBanner2
        title={'Phone Plan'}
        title3={'Get A Business/Residential'}
        title2={''}
        show
        gif
        body={'Start your 7-Days Free trial'}
        img={Gif4} />
      <Featured color={'#FBE9E5'} color2={'white'} data={langData2} title={'Trusted by'} />
      <Client />
      <Packages2 img={PACKAGES}
        img2={pricepack3}
        img3={pricepack4}
        img4={pricepack5}
        color={'#FBE9E5'}
      />
      <CallHero />
      <Services data={servicesData2} 
        img={''}
        title={''}
        subtitle={'How It Works'}/>
      <ServicesFeatures/>
    </div>
  )
}

export default Telephony
