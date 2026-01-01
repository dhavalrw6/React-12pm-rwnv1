import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {

  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
        return {count : 0}
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        increment
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        decrement
      </button>
      
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        reset
      </button>
    </div>
  );
};

export default UseReducer;
