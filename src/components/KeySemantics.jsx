import React from 'react'
import infography from '../lottie/infography.json'
import Lottie from 'lottie-react'

const KeySemantics = ({ myClass }) => {
  return (
    <div className=''>
      <Lottie animationData={infography} className={`${myClass}`} />
    </div>
  )
}

export default KeySemantics