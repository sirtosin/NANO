import React from 'react'
import {CallHero, Client,Form, SeoDesign, WebBanner2 } from '../components'
import Featured from '../components/featured'
import Packages2 from '../components/packages2'
import {  langData2, seoDesignData3 } from '../constant'
import { PACKAGES, pricepack3, pricepack4, pricepack5, SEO, seo,  webbanner3 } from '../images'

const SEOPage = () => {
  return (
    <div>
      <WebBanner2
        title={'Website'}
        title3={'Get My'}
        title2={'Audit'}
        vid={seo}
        body={'Start your 7-Days Free trial and Get Site Audits, Backlink Data, Automated Reports & More'}
        img={webbanner3} />
      <Featured center color={'#FBE9E5'} color2={'white'} data={langData2} title={'Trusted by thousands of agencies, in-house marketers, media companies, freelancers'} />
      <Client />
      <Packages2 img={PACKAGES}
        img2={pricepack3}
        img3={pricepack4}
        img4={pricepack5}
      />
      <SeoDesign data={seoDesignData3}
        img={SEO}
        title={'What You Need To Know'} />
      <CallHero/>
      <Form/>
    </div>
  )
}

export default SEOPage
