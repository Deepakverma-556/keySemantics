import React from 'react'
import Description from '../common/Description'

const BottomBar = () => {
  const year = new Date().getFullYear()
  return (
    <div className='bg-darkBlue py-6 max-md:py-4'>
      <div className='max-w-[1232px] px-4 mx-auto flex justify-between flex-wrap '>
        <Description myClass='text-xs text-purple max-sm:text-xs max-sm:w-full max-sm:text-center' text={`©${year} KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland`} />
        <a href="mailto:" className='max-sm:mx-auto max-sm:pt-2'><Description myClass='text-xs text-purple max-sm:text-xs underline ' text='info@keysemantics.ch'/></a>
      </div>
    </div>
  )
}

export default BottomBar