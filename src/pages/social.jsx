import React from 'react'
import { CallHero, Client, Form, SeoDesign, WebBanner2 } from '../components'
import Featured from '../components/featured'
import Packages from '../components/packages'
import Packages2 from '../components/packages2'

import { langData2, seoDesignData3 } from '../constant'
import { package2, pricepack, pricepack2, SEO as seo, webbanner, webbanner2 } from '../images'

const Social = () => {
    return (
        <div>
            <WebBanner2
                title={'Your Socials'}
                title3={'Kickstart '}
                title2={''}
                body={'Start your 7-Days Free trial Now'}
                img={webbanner} />
            <Featured center color={'#FBE9E5'} color2={'white'} data={langData2} title={'Trusted by thousands of agencies, in-house marketers, media companies, freelancers'} />
            <Client />
            <Packages2 img={package2}
                img2={pricepack}
                img3={pricepack2}
                img4={''}
                big
            />
            <SeoDesign data={seoDesignData3}
                img={seo}
                title={'What You Need To Know'} />
            <CallHero />
            <Form />
        </div>
    )
}

export default Social
