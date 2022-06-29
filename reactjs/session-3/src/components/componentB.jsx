import React, { useState } from "react";
import PropTypes from "prop-types";

const ComponentB = ({ state }) => {
  const [connected, setConnected] = useState(state);
  const style = {
    online: { color: "green", fontWeight: "bold" },
    offline: { color: "red" },
  };
  return (
    <div>
      <h3 style={!connected ? style.online : style.offline}>
        {connected ? "Contact offline" : "Contact online"}
      </h3>
      <button onClick={() => setConnected(!connected)}>
        {connected ? "Connect" : "Disconect"}
      </button>
    </div>
  );
};

ComponentB.propTypes = {
  state: PropTypes.bool,
};

export default ComponentB;
