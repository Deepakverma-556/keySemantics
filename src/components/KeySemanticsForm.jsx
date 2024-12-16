import React from 'react'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'

const KeySemanticsForm = () => {
  return (
    <div className='bg-blue'>
      <div className='max-w-[1232px] mx-auto px-4 relative'>
        <img src="/assets/images/webp/open-curly-braces.webp" alt="open-curly-braces" className='absolute h-[137px] top-0 left-0' />
        <img src="/assets/images/webp/close-curly-braces.webp" alt="close-curly-braces" className='absolute h-[137px] bottom-0 right-0' />
        <SubHeading text='How does KeySemantics work' myClass='text-white text-center' />
        <Description text='Request a demo for your team and let us show you how KeySemantics can help your company' myClass='text-white text-center pt-2' />
        </div>
    </div>
  )
}

export default KeySemanticsForm