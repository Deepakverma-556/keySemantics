import React from 'react'
import infography from '../lottie/infography.json'
import mobile from '../lottie/mobile.json'
import Lottie from 'lottie-react'

const KeySemantics = () => {
  return (
    <div className='bg-gradient-to-b from-white from-50% to-lightGray to-50% pb-[86px] max-lg:pb-10 max-md:pb-8 max-sm:py-5 max-lg:pt-10 max-md:pt-8 '>
      <div className='max-w-[1232px] mx-auto'>
        <Lottie animationData={infography} className='max-sm:hidden' />
        <Lottie animationData={mobile} className='h-[900px] sm:hidden' />
      </div>
    </div>
  )
}

export default KeySemantics