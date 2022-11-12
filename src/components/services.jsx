import React from 'react'
import { servicesData } from '../constant'
import { board, board1, board2, board3, BUSINESS, line } from '../images'
import Card from './card'
import Title from './title'
import Title2 from './title2'

const Services = ({ title, img, subtitle, data, setCategory }) => {
  return (
    <div className='mb-20 relative'>
      <div className='-mt-2 lg:-mt-8 absolute -z-20 left-[35em] xl:left-[50em] 2xl:left-[80%]'>
        <img src={img??''} className='' alt="" />
      </div>
     <Title2 title={title} subtitle={subtitle} /> 
      <div className='flex flex-col space-y-5 justify-center sm:flex-row items-center sm:space-x-3 px-4 '>
        <div className='hidden'>
          <Card
            img={board2}
            title={'Web Design'}
            body={''}

          />
        </div>
        {data.map((item) =>
          <Card
            img={item.img}
            title={item.title}
            body={item.body}
            key={item.id}
            category={item.category}
            setCategory={setCategory}
          />
        )}
      </div>
    </div>
  )
}

export default Services
