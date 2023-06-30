import React from "react";

function FiledFamily({ value }) {
  return (
    <div>
      <div className="form-group">
        <label id="familyUser">family</label>
        <input
          className="form-control"
          type="text"
          name="familyUser"
          value={value.family}
          onChange={(e) => {
            value.setFamily(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default FiledFamily;
