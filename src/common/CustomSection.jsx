import React from 'react'
import SubHeading from './SubHeading'

const CustomSection = ({ myClass }) => {
  return (
    <div className={`flex flex-wrap -mx-3 ${myClass} `}>
      <div className='w-1/2 px-3'>
          <SubHeading  />
      </div>
      <div className='w-1/2 px-3'></div>
    </div>
  )
}

export default CustomSection