import React from 'react'
import SubHeading from '../common/SubHeading'
import { KEY_LIST } from '../utils/helper'

const Key = () => {
  return (
    <div className='pb-[148px] pt-5'>
      <div className='max-w-[1232px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-1/2 px-3'>
            <img src="/assets/images/webp/working-girl.webp" alt="working-girl" className='h-[337px]' />
          </div>
          <div className='w-1/2 px-3'>
            <div className='h-[337px]'>
              <SubHeading text='Key Q&A' />
              {KEY_LIST.map((obj, i) => (
                <ul>
                  <li className='list-disc'>{obj}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Key