import React from 'react'
import Form from '../components/Form'
import { useState } from 'react'
import styles from './Form.module.css'

function Login() {
  return (
    <>
      <div className={styles.background}></div>
      <div className = {`d-flex justify-content-center align-items-center ${styles.containerCustom}`}>
        <Form formTitle="Login"
          inputFieldList={[
          {elementId: "email", elementType:"input",inputFieldName:"Email",inputFieldValue:"", inputFieldType:"email", inputFieldMessage:"Message for Email Input"},
          {elementId: "password", elementType:"input",inputFieldName:"Password",inputFieldValue:"",inputFieldType:"password", inputFieldMessage:"Message for Email Input"}]}>
        </Form>
      </div>
    </>

  )
}

export default Login