import React from 'react'
import { DATA_SECURITY_LIST } from '../utils/helper'
import SubHeading from '../common/SubHeading'
import CustomButton from '../common/CustomButton'

const DataSecurity = () => {
  return (
    <div className='bg-lightGray pt-[148px] pb-[164px]'>
      <div className='max-w-[1232px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3'>
          <div className='px-3 w-[51%]'>
            <img src="/assets/images/webp/data-security.webp" alt="data-security" />
          </div>
          <div className='px-3 w-[49%]'>
            <SubHeading text='Data Security and Hosting' />
            {
              DATA_SECURITY_LIST.map((obj, i) => (
                <ul key={i} className='max-w-[552px] pl-6 pt-2'>
                  <li className='list-disc'>{obj}</li>
                </ul>
              ))}
            <CustomButton text='Get a demo' myClass='py-3 px-4 border border-blue text-blue hover:text-white after:bg-blue mt-6 max-sm:mt-5 max-md:mx-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataSecurity