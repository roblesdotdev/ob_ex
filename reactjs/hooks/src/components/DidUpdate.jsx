import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "componentDidUpdate Hook: is invoked immediately after updating occurs. This method is not called for the initial render."
    );
  }
  render() {
    return (
      <div>
        <h1>ComponentDidUpdate</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "componentDidUpdate Hook: is invoked immediately after updating occurs. This method is not called for the initial render."
    );
  });
  return (
    <div>
      <h1>componentDidUpdate Hook</h1>
    </div>
  );
};
