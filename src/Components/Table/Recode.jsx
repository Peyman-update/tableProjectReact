import React from 'react'

function Recode({value}) {
  return (
    <>
    <tr>
      <td>{value.name}</td>
      <td>{value.family}</td>
      <td>{value.job}</td>
      <td>{value.age}</td>
      <td>{value.gender}</td>
    </tr>
    </>
  )
}

// name: name,
// family: family,
// job: job,
// age: age,
// gender: "female",

export default Recode 