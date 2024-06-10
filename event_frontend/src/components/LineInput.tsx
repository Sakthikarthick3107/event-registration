import React, { ChangeEvent } from 'react'

type LineInputType = {
    name : string,
    type : string,
    value : string,
    placeholder : string,
    onChange: (e : ChangeEvent<HTMLInputElement>) => void
}

const LineInput = ({name , type,value ,placeholder, onChange} : LineInputType) => {
  return (
    <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className='border-0 my-4 border-b-2 border-b-blue-600 bg-transparent outline-none' />
  )
}

export default LineInput