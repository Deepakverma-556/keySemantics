import React from 'react'
import SubHeading from './SubHeading'
import CustomButton from './CustomButton'

const CustomSection = ({ myClass, text, myAlt, myImage, myList }) => {
  return (
    <div className='bg-lightGray'>
      <div className='max-w-[1232px] mx-auto px-4'>
        <div className={`flex flex-wrap -mx-3 items-center ${myClass} `}>
          <div className='w-[49%] px-3 max-md:w-full'>
            <SubHeading text={text} myClass='max-lg:leading-9 max-md:text-center max-md:pb-2 max-sm:pb-0' />
            <ul className='list-disc pl-6'>
              {
                myList.map((obj, i) => (
                  <li key={i} className='pt-2'>{obj}</li>
                ))
              }
            </ul>
            <CustomButton text='Get a demo' myClass='text-sm py-[11.34px] px-[14.53px] border border-blue text-blue hover:text-white after:bg-blue mt-6 max-sm:mt-5 max-md:mx-auto' />
          </div>
          <div className='w-[51%] px-3 max-md:w-full max-md:pt-6'>
            <img src={myImage} alt={myAlt} className='h-[337px] max-md:mx-auto object-cover max-sm:h-60' />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default CustomSection