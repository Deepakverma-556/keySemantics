import React from 'react'

const Description = ({text, myClass}) => {
  return (
    <p className={`text-base leading-7 text-blue max-sm:text-sm ${myClass}`}>{text}</p>
  )
}

export default Description