import React from 'react'

const CustomInput = ({myType, customPlaceholder, myRequired, myClass, minimum}) => {
  return (
    <input required={myRequired} min={minimum} type={myType} placeholder={customPlaceholder} className={` ${myClass} py-4 w-80 mx-auto px-5 bg-lightBlue rounded-[48px]`} />
  )
}

export default CustomInput