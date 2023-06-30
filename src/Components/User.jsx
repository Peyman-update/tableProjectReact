import React, { useState } from 'react'
import Form from './Form/Form'

function User({userDate}) {
  const [form,setForm] = useState([])

  const updateForm = (newState) => {
    setForm([...newState]);
    userDate(newState)
    
  }
  return (
      <>
      <Form getdate={updateForm} />
      </>
  )
}

export default User