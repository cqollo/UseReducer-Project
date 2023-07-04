import React, { useState } from "react";
/* import UserForm from "./userForm";
import Car from "./hooks";
import NewCounter from "./Counter";
import ContextProvider from "./CounterContext"; */
/* import FakeEcommerce from "./fetch";
import UpdateIncome from "./useReducer"; */
import Inputs from "./Form Validation/LogIn Form";
import "./App.css";

/* import Timer from "./Timer"; */

/* function App() {
  return (
    <ContextProvider>
      <div className="container">
        <UserForm />
        <Car />
        <NewCounter />
        <FetchData />
      </div>
    </ContextProvider>
  );
} */

/* function App() {
  return (
    <div className="container">
      <FakeEcommerce />
      <UpdateIncome />
    </div>
  );
}
export default App;
 */

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      label: "username",
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "Password",
      type: "Password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 4,
      name: "Confirm Password",
      type: "Password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const changeValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values)

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Inputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={changeValues}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
