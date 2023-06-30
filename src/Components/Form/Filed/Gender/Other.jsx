import React from "react";

function Other({ value }) {
  return (
    <>
      <div className="text-right">
        <label>{value.title}</label>
        <input
          className="d-block ml-auto"
          type="radio"
          value="Other"
          checked={value.value === "Other"}
          onChange={value.Change}
        />
      </div>
    </>
  );
}

export default Other;
