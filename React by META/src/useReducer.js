import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "buy_ingredients") return { money: state.money - 200 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "Host_a_celebrity") return { money: state.money + 5000 };
  return state;
};

function UpdateIncome() {
  const initialState = { money: 10000 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1> Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "buy_ingredients" })}>
          Shopping for veggies
        </button>
        <button onClick={() => dispatch({ type: "sell_a_meal" })}>
          Serve a meal to the customers
        </button>
        <button onClick={() => dispatch({ type: "Host_a_celebrity" })}>
          Host a celeb
        </button>
        <button onClick={() => dispatch({ type: "Host_a_celebrity" })}>
          Host a celeb
        </button>
        <button onClick={() => dispatch({ type: "Host_a_celebrity" })}>
          Host a celeb
        </button>
        <button onClick={() => dispatch({ type: "Host_a_celebrity" })}>
          Host a celeb
        </button>
      </div>
    </div>
  );
}

export default UpdateIncome;
