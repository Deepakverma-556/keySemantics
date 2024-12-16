import React from 'react'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'

const KeySemanticsForm = () => {
  return (
    <div className='bg-blue py-24 max-lg:py-20 max-md:py-16 max-sm:py-12'>
      <div className='max-w-[1232px] mx-auto px-4 relative'>
        <img src="/assets/images/webp/open-curly-braces.webp" alt="open-curly-braces" className='absolute h-[137px] top-0 left-0' />
        <img src="/assets/images/webp/close-curly-braces.webp" alt="close-curly-braces" className='absolute h-[137px] bottom-0 right-0' />
        <SubHeading text='How does KeySemantics work' myClass='text-white text-center' />
        <Description text='Request a demo for your team and let us show you how KeySemantics can help your company' myClass='text-white text-center pt-2' />
        <form action="" className='flex flex-col gap-2 pt-16 '>
          <CustomInput myType='text' customPlaceholder='Name' myRequired='required' />
          <CustomInput myType='email' customPlaceholder='Email' myRequired='required' />
          <CustomInput myType='text' customPlaceholder='Company' myRequired='required' />
          <CustomInput myType='number' customPlaceholder='Phone (optional)' minimum="min=0" myClass='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
          <Description myClass='text-purple text-center pt-4' text='By submitting my contact information I agree to the KeySemantics Privacy Policy' />
          <CustomButton text='Request a demo' myClass='py-3 bg-sky px-4 text-white hover:text-black after:bg-white mt-6 max-sm:mt-5 mx-auto' />
        </form>
      </div>
    </div>
  )
}

export default KeySemanticsForm