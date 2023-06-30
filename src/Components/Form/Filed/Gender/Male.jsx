import React from "react";

function Male({ value }) {
  return (
    <>
      <div className="text-right">
        <label>{value.title}</label>
        <input
          className="d-block ml-auto"
          type="radio"
          value="Male"
          checked={value.value === "Male"}
          onChange={value.Change}
        />
      </div>
    </>
  );
}

export default Male;
