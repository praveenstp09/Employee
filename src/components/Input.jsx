import React from 'react'

const Input = ({label,type='text',placeholder,name,value,onChange,required,className}) => {
  return (
    <div className=''>
      <label className='block font-semibold text-lg text-gray-600 mb-2 px-2'>{label}</label>
      <input type={type}  placeholder={placeholder} className={`w-[100%] h-[40px] p-3 text-lg border rounded-md border-gray-400 ${className}`} name={name} value={value} onChange={onChange} required={required}/>
    </div>
  )
}

export default Input
