import React from 'react'
import CustomButton from '../common/CustomButton'
import SubHeading from '../common/SubHeading'

const Hero = () => {
    return (
        <div className='bg-hero bg-cover bg-no-repeat bg-center pt-[49px] pb-[287px] max-lg:pb-20 max-md:pb-16 max-sm:pb-12 max-lg:pt-8 max-md:pt-4 relative bg-lightGray'>
            <div className='bg-heroShape bg-cover bg-no-repeat bg-center h-[741px] w-[498px] flex absolute left-1/2 bottom-0 -translate-x-1/2 max-lg:h-[480px] max-lg:w-[300px] max-md:w-[200px] max-md:h-[370px] max-sm:w-40 max-sm:h-[250px]'></div>
            <div className='max-w-[1232px] mx-auto px-4 relative z-10'>
                <div className='flex items-center justify-between'>
                    <a href="#logo"><img src="/assets/images/webp/logo.webp" alt="logo" className='h-10 max-md:h-8 max-sm:h-7' /></a>
                    <CustomButton text='Request a demo' myClass='text-sm py-3 px-4 border border-blue text-blue hover:text-white after:bg-blue ' />
                </div>
                <SubHeading text='AI-Powered Search as a Service' myClass='text-[64px] text-blue text-center max-w-[700px] mx-auto pt-[198px] max-lg:pt-20 max-md:text-5xl max-sm:text-3xl max-md:pt-16 max-sm:pt-12 max-sm:max-w-80 max-sm:leading-8' />
                <p className='font-medium text-2xl leading-8 text-blue text-center pt-10 max-md:text-[22px] max-md:pt-5 max-sm:text-lg max-sm:pt-2 pb-12 max-md:pb-8 max-sm:pb-3'>Unlock your content with KeySemantics.</p>
                <CustomButton text='Get started' myClass='font-medium text-base py-5 px-8 bg-blue text-white after:bg-sky mx-auto' />
            </div>
        </div>
    )
}

export default Hero