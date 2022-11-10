import React from 'react'
import { CallHero, Client, Form, SeoDesign, WebBanner2 } from '../components'
import Featured from '../components/featured'

import { langData2, seoDesignData3 } from '../constant'
import { SEO as seo, webbanner2 } from '../images'

const Marketing = () => {
    return (
        <div>
            <WebBanner2
                title={'Website'}
                title3={'Get My'}
                title2={'Audit'}
                body={' Start your 7-Days Free trial and Get Site Audits, Backlink Data, Automated Reports & More'}
                img={webbanner2} />
            <Featured center color={'#FBE9E5'} color2={'white'} data={langData2} title={'Trusted by thousands of agencies, in-house marketers, media companies, freelancers'} />
            <Client />
            <SeoDesign data={seoDesignData3}
                img={seo}
                title={'What You Need To Know'} />
            <CallHero />
            <Form />
        </div>
    )
}

export default Marketing
