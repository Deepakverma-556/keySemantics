import React from 'react'
import infography from '../lottie/infography.json'
import Lottie from 'lottie-react'
  
const KeySemantics = ({myClass}) => {
  return (
    <Lottie animationData={infography} classID={`${myClass}`} />
  )
}

export default KeySemantics