import React, { Component } from "react";
import store from "../store";

export default class AddNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 2,
    };
  }
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={() => {
            store.dispatch({ type: "INCREMENT", size: this.state.size });
          }}
        />
        <input
          type="text"
          value={this.state.size}
          onChange={(e) => this.setState({ size: Number(e.target.value) })}
        />
      </div>
    );
  }
}
