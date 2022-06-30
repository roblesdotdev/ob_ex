import React, { Component, useEffect } from "react";

export class DidMount extends Component {
  componentDidMount() {
    console.log(
      "componentDidMount:  is invoked immediately after a component is mounted (inserted into the tree)"
    );
  }
  render() {
    return (
      <div>
        <h1>ComponentDidMount</h1>
      </div>
    );
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "componentDidMount Hook:  is invoked immediately after a component is mounted (inserted into the tree)"
    );
  }, []);
  return (
    <div>
      <h1>componentDidMount Hook</h1>
    </div>
  );
};
