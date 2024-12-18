import React from 'react'
import SubHeading from '../common/SubHeading'
import { KEY_SEMANTIC_WORK_LIST } from '../utils/helper'
import Lottie from 'lottie-react'

const KeySemanticWork = () => {
  return (
      <div className='max-w-[1058px] mx-auto px-4 pt-24 max-lg:pt-20 max-md:pt-16 max-sm:pt-12'>
        <SubHeading text='How does KeySemantic work?' myClass='text-blue text-center' />
        <div className='pt-14 max-lg:pt-8 max-md:pt-0 '>
          <div className='flex flex-wrap -mx-3 justify-between max-md:justify-center'>
            {KEY_SEMANTIC_WORK_LIST.map((obj, i) => (
              <div key={i} className='w-1/3 px-3 max-md:w-1/2 max-sm:w-full max-md:pt-6'>
                <Lottie animationData={obj.myLottie} className='lg:h-[190px] max-md:h-40 '/>
                <div className='max-w-[278px] mx-auto pt-6 max-md:pt-3'>{obj.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default KeySemanticWork