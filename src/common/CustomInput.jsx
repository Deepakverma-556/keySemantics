import React from 'react'

const CustomInput = ({myType, customPlaceholder, myRequired, myClass, minimum, customId, customValue, customOnChange}) => {
  return (
    <input onChange={customOnChange} value={customValue} id={customId} required={myRequired} min={minimum} type={myType} placeholder={customPlaceholder} className={` ${myClass} py-4 w-80 mx-auto px-5 bg-lightBlue rounded-[48px] text-white outline-none mb-2`} />
  )
}

export default CustomInput