import React, { useEffect, useState } from "react";
import List from "./List";
import User from "./User";
import { type } from "@testing-library/user-event/dist/type";
import Search from "./Search";

function Main() {
  const [state1, setState1] = useState([]);
  const [search, setSearch] = useState('');
  const updateState1 = (newState) => {
    setState1([...newState]);
  };
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <List data={search} setdate={state1} />
          </div>
          <div className="col-md-4">
            <User  userDate={updateState1} />
            <Search value={{search , setSearch}}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
