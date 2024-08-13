import React from 'react'
import Form from './components/Form'
import { useState } from 'react'
import styles from './Login.module.css'

function SignUp() {
  return (
    <>
      <div className={styles.background}></div>
      <div className = {`d-flex justify-content-center align-items-center ${styles.containerCustom}`}>
        <Form formTitle="Sign Up"
          inputFieldList={[
          {inputFieldName:"FirstName",inputFieldValue:"", inputFieldType:"text"},
          {inputFieldName:"LastName",inputFieldValue:"", inputFieldType:"text"},
          {inputFieldName:"Email",inputFieldValue:"", inputFieldType:"email"},
          {inputFieldName:"Password",inputFieldValue:"",inputFieldType:"password"}]}
          message="Email already exists">
        </Form>
      </div>
    </>

  )
}

export default SignUp