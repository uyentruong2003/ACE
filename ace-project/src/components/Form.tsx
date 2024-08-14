import React, { useState, useEffect } from 'react';
import InputGroup from './InputGroup';
import Button from './Button';
import Select from './Select';
import { FormEvent } from 'react';

// interface to pass in fields for the input group:
interface InputField {
    elementType: "input" | "select";
    elementId: string;
    inputFieldType?: string; //for input element: text, number, password, email, datetime-local,...
    inputFieldOptions?: string[]; //for select element
    inputFieldName: string;
    inputFieldValue: string;
    inputFieldMessage?: string;
}
interface FormProps {
    formTitle: string;
    inputFieldList: InputField[];
}
const Form = ({formTitle, inputFieldList}: FormProps) => {
    
    const[inputState, setInputState] = useState(inputFieldList);
    // hook to keep track of the form state
    const [isDone, setIsDone] = useState(true);

    // update the inputState hook whenever the input element is changed
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.currentTarget.id; //get the id of the current input element
        const value = event.currentTarget.value; //get the value of the current input element
        setInputState(prevState => //prevState is the previouse inputFieldList
            // loop through the list of input fields
            prevState.map((inputField) =>
                // if the id of the field is equal to the current element's id, update the field value with the current element's value
                // else, keep it the same
                inputField.elementId === id ? {...inputField, inputFieldValue: value} : inputField
            )
        );
      };
    
    // handle submission of the form
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted"); //placeholder. Replace later
        console.log(inputState); // return the inputState dict
    };

    // still need function to handle onSelect:

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>{formTitle}</h2>
            {inputState.map((inputField, index) => (
                <div key={index}>
                    {inputField.elementType === "input" && (
                        <InputGroup
                        id={inputField.elementId}
                        type={inputField.inputFieldType || "text"} //default type is text
                        placeholder={`Enter your ${inputField.inputFieldName}...`}
                        labelText={inputField.inputFieldName}
                        required
                        onChange={handleInputChange}/>
                    )}
                    
                    {inputField.elementType === "select" && (
                        <Select
                        id={inputField.elementId}
                        labelText={inputField.inputFieldName}
                        options={inputField.inputFieldOptions ? inputField.inputFieldOptions : []}
                        required
                        /* still need onSelect property added */> 
                        </Select>
                    )}

                    <p style={{fontSize: '12px',color:'red'}}>{inputField.inputFieldMessage}</p>
                </div>
            ))}
            <Button id="SubmitBtn" color="primary" disabled={!isDone} type="submit">Submit</Button>
        </form>
    );
};

export default Form;