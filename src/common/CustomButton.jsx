import React from 'react'

const CustomButton = ({text, myClass}) => {
  return (
    <button className={`${myClass} text-sm max-md:text-xs max-sm:py-2 max-sm:px-3 text-nowrap rounded-[48px] transition-all duration-300 relative z-10 flex overflow-hidden after:flex after:transition-all after:duration-300 after:rounded-[48px] after:absolute after:right-1/2 after:left-1/2 after:top-1/2 after:bottom-1/2 after:hover:top-0 after:hover:bottom-0 after:hover:left-0 after:hover:right-0 after:-z-10 `}>{text}</button>
  )
}

export default CustomButton