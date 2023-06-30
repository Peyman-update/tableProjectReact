import React, { useState } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

function Table({ disPlay }) {

  return (
      <>
          <table className='table table-dark text-center'>
              <thead>
                <tr>
                <TableHeader title={"Name"}/>
                  <TableHeader title={"Family"}/>
                  <TableHeader title={"Age"}/>
                  <TableHeader title={"Job"}/>
                  <TableHeader title={"Gender"}/>
                </tr>
                
              </thead>
              <TableBody row={disPlay} />
          </table>
      </>
  )
}

export default Table