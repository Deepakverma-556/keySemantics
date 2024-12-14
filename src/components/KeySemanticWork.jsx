import React from 'react'
import SubHeading from '../common/SubHeading'
import { KEY_LIST, KEY_SEMANTIC_WORK_LIST } from '../utils/helper'

const KeySemanticWork = () => {
  return (
    <div>
      <div className='max-w-[1058px] mx-auto px-4 pt-24 pb-6'>
        <SubHeading text='How does KeySemantic work?' myClass='text-blue text-center' />
        <div className='pt-14'>
          <div className='flex flex-wrap -mx-3'>
            {KEY_SEMANTIC_WORK_LIST.map((obj, i) => (
              <div className='1/4'>
                <div className='rounded-lg flex items-center justify-center'>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeySemanticWork