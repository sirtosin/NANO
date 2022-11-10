import React from 'react'
import { Affordable, Banner, CallHero, Client, Design, Form, Hero, Info, Services } from '../components'
import Featured from '../components/featured'
import { designData, langData, servicesData } from '../constant'
import { BUSINESS, DESIGN, designimg, Gif1 } from '../images'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Banner />
            <Hero />
            <Services data={servicesData}
                img={BUSINESS}
                title={'first'}
                subtitle={'What we do Best!'}
            />
            <Info />
            <Design data={designData}
                subtitle={''}
                btn={false}
                img={DESIGN}
                img2={Gif1}
                title={'The BIG Picture, in 3 Steps'} />
            <Affordable />
            <Client />
            <div className=''>
                <Featured
                    color={'#FBE9E5'}
                    color2={'white'}
                    data={langData} title={'Our Partners in Your Success'} />
            </div>
            <CallHero />
            <Form />
        </div>
    )
}

export default Home
