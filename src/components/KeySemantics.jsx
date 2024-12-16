import React from 'react'
import infography from '../lottie/infography.json'
import Lottie from 'lottie-react'

const KeySemantics = ({ myClass }) => {
  return (
    <div className='max-w-[1232px] mx-auto px-4'>
      <Lottie animationData={infography} className={`${myClass}`} />
    </div>
  )
}

export default KeySemantics