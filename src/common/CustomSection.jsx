import React from 'react'
import SubHeading from './SubHeading'
import CustomButton from './CustomButton'

const CustomSection = ({ myClass, text, myAlt, myImage }) => {
  return (
    <div className={`flex flex-wrap -mx-3 ${myClass} flex-row`}>
      <div className='w-1/2 px-3'>
        <SubHeading text={text} />
        <CustomButton text='Get a demo' myClass='py-3 px-4 border border-blue text-blue hover:text-white after:bg-blue mt-6 max-sm:mt-5 max-md:mx-auto' />
      </div>
      <div className='w-1/2 px-3'>
        <img src={myImage} alt={myAlt} className='h-[337px]' />
      </div>
    </div>
  )
}

export default CustomSection