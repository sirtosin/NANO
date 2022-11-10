import React from 'react'
import { CallHero, HostBanner, WebBanner2 } from '../components'
import FAQ from '../components/FAQ'
import Featured from '../components/featured'
import HostFeatures from '../components/hostFeatures'
import Packages2 from '../components/packages2'
import { langData2 } from '../constant'
import { PACKAGES, pricepack3, pricepack4, pricepack5, webBanner4 } from '../images'

const Hosting = () => {
  return (
    <div>
      <HostBanner
        title={'Super Fats Servers'}
        title3={'Power Your Website On Our'}
        body={'For as low as $3'}
        img={webBanner4} />
      <Packages2 img={PACKAGES}
        img2={pricepack3}
        color={'#FBE9E5'}
        img3={pricepack4}
        img4={pricepack5}
      />
      <HostFeatures />
      <Featured center color={'#FBE9E5'} color2={'white'} data={langData2} title={'Trusted by thousands of agencies, in-house marketers, media companies, freelancers'} />
      <CallHero />
      <FAQ/>
    </div>
  )
}

export default Hosting
