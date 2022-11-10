import React from 'react'
import { Built, CallCard, CallHero, Client, Creative, Design, Portfolio, WebBanner } from '../components'
import Featured from '../components/featured'
import { designData2, designData3, softBannerData, softBuiltData, softCreativeData, softLangData } from '../constant'
import { blank, CHOOSE, code, code3, DESIGN, DIGITAL, Gif3, SOFTWARE, stand } from '../images'

const Softaware = () => {
  return (
      <div className='overflow-hidden'>
          <WebBanner
              title={'User-Friendly|'}
              title2={'Software'}
              body={' Get it right the first time. Build Feature-rich solutions from just $1499'}
              img={Gif3}
              data={softBannerData} />
          <div className='my-10 flex items-center justify-center lg:my-0 lg:absolute  lg:left-[30%] lg:-mt-14 z-40 2xl:left-[40%]'>
              <CallCard />
          </div>
          <div className='relative z-20'>
              <Built data={softBuiltData}
                  img={SOFTWARE} title={'Software Creation Process'} />
          </div>
          <Creative
              img={DIGITAL}
              img2={stand}
              data={softCreativeData}
              subtext={''}
              call
              title={''}
              body={'Take the software path to your digital future!!.'} />
          <Portfolio />
          <Design data={designData2}
              subtitle={'WHY CHOOSE US?'}
              btn={true}
              img2={code}
              img={DESIGN}
              title={'Here are a few reasons why our customers choose NanoQode.'} />
          <Design data={designData3}
              subtitle={''}
              btn={true}
              img2={code3}
              reverse
              img={CHOOSE}
              title={''} />
          <Featured color={'white'} color2={'#FBE9E5'} data={softLangData} title={'Development Languages'} />
          <Client />
          <CallHero />
      </div>
  )
}

export default Softaware
