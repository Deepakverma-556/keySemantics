import React from 'react'
import { DATA_SECURITY_LIST } from '../utils/helper'
import CustomSection from '../common/CustomSection'

const DataSecurity = () => {
  return (
      <CustomSection myClass='flex-row-reverse pt-[148px] pb-[164px] max-lg:py-20 max-md:py-16 max-sm:py-12' text='Data Security and Hosting' myImage='/assets/images/webp/data-security.webp' myAlt='data-security' myList={DATA_SECURITY_LIST} />
  )
}

export default DataSecurity