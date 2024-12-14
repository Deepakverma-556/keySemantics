import React from 'react'

const SubHeading = ({text,myClass}) => {
  return (
    <h2 className={`${myClass} font-bold text-[32px] max-sm:text-2xl leading-[72px] text-center`}>{text}</h2>
  )
}

export default SubHeading