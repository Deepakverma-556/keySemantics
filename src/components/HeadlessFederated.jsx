import React from 'react'
import CustomSection from '../common/CustomSection'
import { HEADLESS_LIST } from '../utils/helper'
import CustomButton from '../common/CustomButton'

const HeadlessFederated = () => {
  return (
    <div className='max-w-[1232px] mx-auto px-4'>
      <CustomSection text='Headless federated search' myImage='/assets/images/webp/federated-search.webp' myAlt='federated-search' />
      {/* {
        HEADLESS_LIST.map((obj, i) => (
          <ul>
            <li className='list-disc'>{obj}</li>
          </ul>
        ))} */}
    </div>
  )
}

export default HeadlessFederated