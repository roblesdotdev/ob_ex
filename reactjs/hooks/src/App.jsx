import React, { useState } from "react";
import { DidMount, DidMountHook } from "./components/DidMount";
import { DidUpdate, DidUpdateHook } from "./components/DidUpdate";
import { WillUnmount, WillUnmountHook } from "./components/WillUnmount";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DidMount />
      <DidMountHook />
      <DidUpdate />
      <DidUpdateHook />
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? (
        <>
          <WillUnmount />
          <WillUnmountHook />
        </>
      ) : null}
    </div>
  );
}

export default App;
