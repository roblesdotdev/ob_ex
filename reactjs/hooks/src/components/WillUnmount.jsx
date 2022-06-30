import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log(
      "componentWillUnmount: is invoked immediately before a component is unmounted and destroyed."
    );
  }
  render() {
    return (
      <div>
        <h1>ComponentWillUnmount</h1>
      </div>
    );
  }
}

export const WillUnmountHook = () => {
  useEffect(() => {
    return () => {
      console.log(
        "componentWillUnmount Hook: is invoked immediately before a component is unmounted and destroyed."
      );
    };
  });
  return (
    <div>
      <h1>componentWillunmount Hook</h1>
    </div>
  );
};
