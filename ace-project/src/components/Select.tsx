import React from 'react'


interface SelectProps {
    id: string;
    labelText: string;
    options: string[];
    required: boolean;
    onSelect?: (event: any) => void;
}

function Select({id, labelText, options, onSelect, required}: SelectProps) {
  return (
    <>  
        <label className='col-form-label' htmlFor={id}>
            {required && <span className='text-danger'>*</span>}
            {labelText}</label>
        <select className='form-select' value="" onChange={onSelect}>
            {options.map((option) => (
                <option value = {option} selected= {false}>{option}</option>
            ))}
        </select>
    </>
  )
}

export default Select