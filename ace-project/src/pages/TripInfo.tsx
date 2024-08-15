import React from 'react'
import Form from '../components/Form'
import { useState } from 'react'
import styles from './Form.module.css'

function TripInfo() {
  return (
    <>
      <div className={styles.background}></div>
      <div className = {`d-flex justify-content-center align-items-center ${styles.standardContainer}`}>
        <Form formTitle="Trip Information"
          fieldList={[
          {fieldId: "pickupTime", fieldType:"input",fieldName:"Pickup Time",fieldValue:"", inputType:"datetime-local", fieldMessage:"Message for Pickup Time Input"},
          {fieldId: "dropoffTime", fieldType:"input",fieldName:"Dropoff Time",fieldValue:"", inputType:"datetime-local", fieldMessage:"Message for Dropoff Time Input"},
          {fieldId: "pickupLoc", fieldType:"input",fieldName:"Pickup Location",fieldValue:"", inputType:"text", fieldMessage:"Message for Pickup Location Input"},
          {fieldId: "dropoffLoc",fieldType:"select", fieldName:"Dropoff Location",fieldValue:"",selectOptions:["ATL","BHM"], fieldMessage:"Message for Dropoff Location Input"},
          {fieldId: "slotLimit", fieldType:"input",fieldName:"Slot Limit",fieldValue:"", inputType:"number", fieldMessage:"Message for Slot Limit Input"},
          {fieldId: "checkedBagLimit", fieldType:"input",fieldName:"Checked Bag Limit",fieldValue:"", inputType:"number", fieldMessage:"Message for Checked Bag Limit Input"},
          {fieldId: "carryOnLimit", fieldType:"input",fieldName:"Carry On Limit",fieldValue:"", inputType:"number", fieldMessage:"Message for Carry On Limit Input"},
          {fieldId: "costPerPerson", fieldType:"input",fieldName:"Est. Cost per Person ($)",fieldValue:"", inputType:"number", fieldMessage:"Message for Cost Input"},
          {fieldId: "note", fieldType:"input",fieldName:"Checked Bag Limit",fieldValue:"", inputType:"text", fieldMessage:"Message for Note Input"},
        ]}>
        </Form>
      </div>
    </>

  )
}

export default TripInfo