import React, { useState } from "react";
import "./newform.css";

const Inputs = (props) => {
  const [] = useState()
  const { label, id, errormessages, changeValues, ...input } = props;
  return (
    <div className="input">
      <label>{label}</label>
      <input {...input} onChange={changeValues}/>
    </div>
  );
};

export default Inputs;
