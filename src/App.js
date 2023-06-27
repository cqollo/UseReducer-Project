import React from "react";
/* import UserForm from "./userForm";
import Car from "./hooks";
import NewCounter from "./Counter";
import ContextProvider from "./CounterContext"; */
import FakeEcommerce from "./fetch";
import UpdateIncome from "./useReducer";

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

function App() {
  return (
    <div className="container">
      <FakeEcommerce />
      <UpdateIncome />
    </div>
  );
}
export default App;
