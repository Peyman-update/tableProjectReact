import React, { useState } from 'react'
import Table from './Table/Table'

function List({ setdate , data }) {

  return (
    <Table data={data} disPlay={setdate} />
  )
}

export default List