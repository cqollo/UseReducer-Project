import React from "react";
import "./newform.css";

const Inputs = (props) => {
  const { label, id, changeValues, ...input } = props;
  return (
    <div className="input">
      <label>{label}</label>
      <input {...input} onChange={changeValues} />
    </div>
  );
};

export default Inputs;
