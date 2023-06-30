import React, { useState } from 'react'
import Table from './Table/Table'

function List({ setdate }) {
  
  return (
    <Table disPlay={setdate} />
  )
}

export default List