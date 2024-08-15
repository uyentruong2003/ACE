import React from 'react'
import Form from '../components/Form'
import { useState } from 'react'
import styles from './Form.module.css'

function SignUp() {
  return (
    <>
      <div className={styles.background}></div>
      <div className = {`d-flex justify-content-center align-items-center ${styles.popupContainer}`}>
        <Form formTitle="Sign Up"
          fieldList={[
          {fieldId: "fname", fieldType:"input", fieldName:"First Name",fieldValue:"", inputType:"text"},
          {fieldId: "lname",fieldType:"input", fieldName:"Last Name",fieldValue:"", inputType:"text"},
          {fieldId: "email",fieldType:"input", fieldName:"Email",fieldValue:"", inputType:"email", fieldMessage:"Message for Email Input"},
          {fieldId: "password",fieldType:"input", fieldName:"Password",fieldValue:"",inputType:"password", fieldMessage:"Message for Password Input"},
          {fieldId: "testing",fieldType:"select", fieldName:"Testing",fieldValue:"",selectOptions:["option1","option2","option3"], fieldMessage:"Message for Password Input"}
        ]}>
        </Form>
      </div>
    </>

  )
}

export default SignUp