import React from "react";

function FiledJob({ value }) {
  return (
    <div className="form-group">
      <label id="jobUser">job</label>
      <input
        className="form-control"
        type="text"
        name="jobUser"
        value={value.job}
        onChange={(e) => {
          value.setJob(e.target.value);
        }}
      />
    </div>
  );
}

export default FiledJob;
