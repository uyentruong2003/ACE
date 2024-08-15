import React, { useState, useEffect } from 'react';
import InputGroup from './InputGroup';
import Button from './Button';
import Select from './Select';
import { FormEvent } from 'react';

// interface to pass in fields for the input group:
interface Field {
    fieldType: "input" | "select";
    fieldId: string;
    inputType?: string; //for input element: text, number, password, email, datetime-local,...
    selectOptions?: string[]; //for select element
    fieldName: string;
    fieldValue: string;
    fieldMessage?: string;
    required?: boolean;
}
interface FormProps {
    className?: string;
    formTitle: string;
    fieldList: Field[];
}
const Form = ({className, formTitle, fieldList}: FormProps) => {
    

    // hook to keep track of the input change
    const[inputValue, setInputValue] = useState(fieldList);
    // update the inputValue hook whenever the input element is changed
    const handleInputChange = (event: any) => {
        const id = event.currentTarget.id; //get the id of the current input element
        const value = event.currentTarget.value; //get the value of the current input element
        setInputValue(prevState => //prevState is the previouse fieldList
            // loop through the list of input fields
            prevState.map((field) =>
                // if the id of the field is equal to the current element's id, update the field value with the current element's value
                // else, keep it the same
                field.fieldId === id ? {...field, fieldValue: value} : field
            )
        );
    };
    // // hook to keep track of the select change
    // const[selectValue, setSelectValue] = useState("");

    // const handleSelected = (event: any) => {
    //     const value = event.currentTarget.value;
    //     setSelectValue(value);
    //     handleInputChange(event);
    // }
    
    // hook to keep track of the form state
    const [isDone, setIsDone] = useState(true);

    // handle submission of the form
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted"); //placeholder. Replace later
        console.log(inputValue); //return the inputValue dict
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>{formTitle}</h2>
            {inputValue.map((field, index) => (
                <div key={index}>
                    {field.fieldType === "input" && (
                        <InputGroup
                        id={field.fieldId}
                        type={field.inputType || "text"} //default type is text
                        placeholder={`Enter your ${field.fieldName}...`}
                        labelText={field.fieldName}
                        required = {field.required}
                        onChange={handleInputChange}/>
                    )}
                    
                    {field.fieldType === "select" && (
                        <Select
                        id={field.fieldId}
                        labelText={field.fieldName}
                        options={field.selectOptions || []} //empty list if optionList don't exist
                        required = {field.required}
                        onSelect={handleInputChange}
                        ></Select>
                    )}

                    <p style={{fontSize: '12px',color:'red'}}>{field.fieldMessage}</p>
                </div>
            ))}
            <Button id="SubmitBtn" color="primary" disabled={!isDone} type="submit">Submit</Button>
        </form>
    );
};

export default Form;