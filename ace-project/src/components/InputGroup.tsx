import React from 'react';

// interface to pass needed fields for the input group
interface InputGroupProps {
  type: string;
  labelText: string;
  placeholder?: string;
  id: string;
  required?: boolean;
  onChange?: (event: any) => void;
}

const InputGroup = ({ type, labelText, placeholder, id, required, onChange}: InputGroupProps) => {
  return (
    <div className='row'>
      <label className='col-form-label' htmlFor={id}>
        {required && <span className="text-danger">*</span>}
        {labelText}
      </label>
      <div>
        <input className='form-control' id={id} type={type} placeholder={placeholder} onChange={onChange}/>
      </div>
    </div>
  );
}

export default InputGroup;
