import React from 'react'
import CustomSection from '../common/CustomSection'
import { HEADLESS_LIST } from '../utils/helper'

const HeadlessFederated = () => {
  return (
    <CustomSection text='Headless federated search' myImage='/assets/images/webp/federated-search.webp' myAlt='federated-search' myList={HEADLESS_LIST} />
  )
}

export default HeadlessFederated