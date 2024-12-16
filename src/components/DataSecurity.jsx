import React from 'react'
import { DATA_SECURITY_LIST } from '../utils/helper'
import CustomSection from '../common/CustomSection'

const DataSecurity = () => {
  return (
    <div className='max-w-[1232px] mx-auto px-4'>
      <CustomSection text='Data Security and Hosting' myImage='/assets/images/webp/data-security.webp' myAlt='data-security' myClass='flex-col-reverse' />
      {/* {
        DATA_SECURITY_LIST.map((obj, i) => (
          <ul>
            <li className='list-disc'>{obj}</li>
          </ul>
        ))} */}
    </div>
  )
}

export default DataSecurity