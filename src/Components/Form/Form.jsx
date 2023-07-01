import React, { useState } from "react";
import FiledName from "./Filed/FiledName";
import FiledFamily from "./Filed/FiledFamily";
import FiledJob from "./Filed/FiledJob";
import FiledAge from "./Filed/FiledAge";
// import FiledGender from "./Filed/Gender/FiledGender";
import Male from "./Filed/Gender/Male";
import Female from "./Filed/Gender/Female";
import Other from "./Filed/Gender/Other";
import BtnSubmit from "./BtnSubmit";

function Form({ getdate }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Yes");

  const Date = (newState) => {
    setData([...newState]);
    getdate(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push({
      name: name,
      family: family,
      job: job,
      age: age,
      gender: gender,
    });
    NullFiled(data);
    Date(data);
    setName("");
    setFamily("");
    setJob("");
    setAge("");
    setGender("");
  };

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const NullFiled = (data) => {
   
    data.forEach((Filed)=>{
      Filed.name === "" || Filed.family === "" || Filed.job ==="" 
      || Filed.age === "" || Filed.gender === "" ? EmptyArray() : console.log("Hello User");
     
      
      
    })
      
  };

  const EmptyArray = () => {
    alert("Please Enter Your Info");
      data.pop()
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FiledName value={{ name: name, setName: setName }} />
        <FiledFamily value={{ family: family, setFamily: setFamily }} />
        <FiledJob value={{ job: job, setJob: setJob }} />
        <FiledAge value={{ age: age, setAge: setAge }} />
        <Male value={{ value: gender, title: "Male", Change: handleChange }} />
        <Female
          value={{ value: gender, title: "Female", Change: handleChange }}
        />
        <Other
          value={{ value: gender, title: "Other", Change: handleChange }}
        />
        <BtnSubmit value={"Send"} />
      </form>
    </>
  );
}

export default Form;
