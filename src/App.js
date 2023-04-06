import React, { useState } from "react";
import "./styles.css";
import { useCount } from "./counter-context";

function CounterController() {
  const { dispatch } = useCount();
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>Incrment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

function CountDisplay() {
  const {
    state: { count }
  } = useCount();
  return <div>{count}</div>;
}

export default function App() {
  return (
    <div className="App">
      count
      <CountDisplay />
      <CounterController />
    </div>
  );
}
