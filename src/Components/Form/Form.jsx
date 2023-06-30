import React, { useState } from "react";
import FiledName from "./Filed/FiledName";
import FiledFamily from "./Filed/FiledFamily";
import FiledJob from "./Filed/FiledJob";
import FiledAge from "./Filed/FiledAge";
import FiledGender from "./Filed/FiledGender";
import BtnSubmit from "./BtnSubmit";

function Form({ getdate }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(false);

  const Date = (newState) => {
    setData([...newState]);
    getdate(newState);
  }

  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();

    data.push({
      name: name,
      family: family,
      job: job,
      age: age,
      gender: "female",
    });

    Date(data)
    

    setName("");
    setFamily("");
    setJob("");
    setAge("");
    setGender("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FiledName value={{ name: name, setName: setName }} />
        <FiledFamily value={{ family: family, setFamily: setFamily }} />
        <FiledJob value={{ job: job, setJob: setJob }} />
        <FiledAge value={{ age: age, setAge: setAge }} />
        <FiledGender value={{ value: false, title: "Male" }} />
        <FiledGender value={{ value: false, title: "Female" }} />
        <FiledGender value={{ value: false, title: "Other" }} />
        <BtnSubmit />
      </form>
    </>
  );
}

export default Form;
