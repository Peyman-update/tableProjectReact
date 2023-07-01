
import React, { useState } from 'react'
import Recode from './Recode'
import { v4 as uuidv4 } from 'uuid';
import { v4 } from 'uuid';
function TableBody({ row , data }) {

  console.log('DATA IS :'+" "+ data)
  return (
      <>
          <tbody>
        {
          row.filter((item) => {
            
            return data === '' ? item : item.job.includes(data)
          }).map((v)=><Recode key={v4()} value={v}/>)
             } 
          </tbody>
      </>
  )
}

export default TableBody