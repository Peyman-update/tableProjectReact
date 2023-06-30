import React ,{ useEffect, useState } from 'react'
import List from './List'
import User from './User'
import { type } from '@testing-library/user-event/dist/type'

function Main() {
  const [state1, setState1] = useState([])
  const updateState1 = (newState) => {
    setState1([...newState])
    console.log(state1);
 }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'><List setdate={state1} /></div>
          <div className='col-md-4'><User userDate={updateState1} /></div>
        </div>
      </div>
    </>
  )
}

export default Main