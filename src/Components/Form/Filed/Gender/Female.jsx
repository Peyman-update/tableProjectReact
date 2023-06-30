import React from "react";

function Female({ value }) {
  return (
    <>
      <div className="text-right">
        <label>{value.title}</label>
        <input
          className="d-block ml-auto"
          type="radio"
          value="Female"
          checked={value.value === "Female"}
          onChange={value.Change}
        />
      </div>
    </>
  );
}

export default Female;
