import { useState, useEffect } from "react";

const ClockHook = () => {
  const [state, setState] = useState(() => ({
    date: new Date(),
    age: 0,
    name: "John",
    lastname: "Doe",
  }));

  useEffect(() => {
    const tick = () => {
      setState({ ...state, age: state.age + 1, date: new Date() });
    };
    const timerId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerId);
    };
  });
  return (
    <div>
      <h2>
        Time
        {state.date.toLocaleTimeString()}
      </h2>
      <h3>
        {state.name} {state.lastname}
      </h3>
      <h1>Age: {state.age}</h1>
    </div>
  );
};

export default ClockHook;
