
import React, { useState } from 'react'
import Recode from './Recode'
function TableBody({ row }) {
  console.log(`Is Cord Array ? ${row}`)
  return (
      <>
          <tbody>
        {
          row.map((v)=><Recode value={v}/>)
             } 
          </tbody>
      </>
  )
}

export default TableBody