import React from 'react'
import Form from '../components/Form'
import { useState } from 'react'
import styles from './Form.module.css'

function SignUp() {
  return (
    <>
      <div className={styles.background}></div>
      <div className = {`d-flex justify-content-center align-items-center ${styles.containerCustom}`}>
        <Form formTitle="Sign Up"
          inputFieldList={[
          {elementId: "fname", elementType:"input", inputFieldName:"First Name",inputFieldValue:"", inputFieldType:"text"},
          {elementId: "lname",elementType:"input", inputFieldName:"Last Name",inputFieldValue:"", inputFieldType:"text"},
          {elementId: "email",elementType:"input", inputFieldName:"Email",inputFieldValue:"", inputFieldType:"email", inputFieldMessage:"Message for Email Input"},
          {elementId: "password",elementType:"input", inputFieldName:"Password",inputFieldValue:"",inputFieldType:"password", inputFieldMessage:"Message for Password Input"},
          // {elementId: "testing",elementType:"select", inputFieldName:"Testing",inputFieldValue:"",inputFieldOptions:["option1","option2","option3"], inputFieldMessage:"Message for Password Input"}
        ]}>
        </Form>
      </div>
    </>

  )
}

export default SignUp