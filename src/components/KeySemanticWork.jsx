import React from 'react'
import SubHeading from '../common/SubHeading'
import { KEY_SEMANTIC_WORK_LIST } from '../utils/helper'
import Lottie from 'lottie-react'

const KeySemanticWork = () => {
  return (
    <div>
      <div className='max-w-[1058px] mx-auto px-4 pt-24 pb-[318px]'>
        <SubHeading text='How does KeySemantic work?' myClass='text-blue text-center' />
        <div className='pt-14'>
          <div className='flex flex-wrap -mx-3 justify-between'>
            {KEY_SEMANTIC_WORK_LIST.map((obj, i) => (
              <div key={i} className='w-1/3 px-3'>
                <Lottie animationData={obj.myLottie}/>
                <div className='max-w-[278px] mx-auto pt-6'>{obj.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeySemanticWork