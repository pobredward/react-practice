import React, { Component } from "react";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}
