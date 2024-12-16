import React from 'react'
import { HEADLESS_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'
import SubHeading from '../common/SubHeading'

const HeadlessFederated = () => {
  return (
    <div className='bg-lightGray'>
      <div className='max-w-[1232px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3'>
          <div className='px-3 w-[49%]'>
            <SubHeading text='Headless federated search' />
            {
              HEADLESS_LIST.map((obj, i) => (
                <ul key={i} className='pl-6 max-w-[552px] pt-2'>
                  <li className='list-disc'>{obj}</li>
                </ul>
              ))}
            <CustomButton text='Get a demo' myClass='py-3 px-4 border border-blue text-blue hover:text-white after:bg-blue mt-6 max-sm:mt-5 max-md:mx-auto' />
          </div>
          <div className='px-3 w-[51%]'>
            <img src="/assets/images/webp/federated-search.webp" alt="federated-search" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadlessFederated