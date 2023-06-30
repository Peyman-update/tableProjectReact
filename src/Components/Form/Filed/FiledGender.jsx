import React from "react";

function FiledGender({ value }) {
  return (
      <>
      <div className="text-right">
      <label>{ value.title}</label>
      <input className="d-block ml-auto" type="checkbox" value={value.value} />
      </div>
    
    </>
  );
}

export default FiledGender;
