import React from 'react'
import Form from '../components/Form'
import { useState } from 'react'
import styles from './Form.module.css'

function Login() {
  return (
    <>
      <div className={styles.background}></div>
      <div className = {`d-flex justify-content-center align-items-center ${styles.popupContainer}`}>
        <Form formTitle="Login"
          fieldList={[
          {fieldId: "email", fieldType:"input",fieldName:"Email",fieldValue:"", inputType:"email", fieldMessage:"Message for Email Input"},
          {fieldId: "password", fieldType:"input",fieldName:"Password",fieldValue:"",inputType:"password", fieldMessage:"Message for Email Input"}]}>
        </Form>
      </div>
    </>

  )
}

export default Login