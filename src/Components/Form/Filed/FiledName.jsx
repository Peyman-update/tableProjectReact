import React from "react";

function FiledName({ value }) {
    
  return (
    <div className="form-group">
      <label id="nameUser">name</label>
      <input
        className="form-control"
        type="text"
        name="nameUser"
        value={value.name}
        onChange={(e) => {
          value.setName(e.target.value)
        }}
      />
    </div>
  );
}

export default FiledName;
