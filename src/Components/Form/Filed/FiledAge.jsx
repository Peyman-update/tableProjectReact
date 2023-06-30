
import React from 'react'

function FiledAge({value}) {
  return (
    <div className="form-group">
    <label id="ageUser">age</label>
    <input
      className="form-control"
      type="number"
      name="ageUser"
      value={value.age}
      onChange={(e) => {
        value.setAge(e.target.value)
      }}
    />
  </div>
  )
}

export default FiledAge