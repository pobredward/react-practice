import React, { Component } from "react";
import AddNumber from "../components/AddNumber";
import store from "../store";

export default class _AddNumber extends Component {
  render() {
    return (
      <AddNumber
        onClick={(size) => {
          store.dispatch({ type: "INCREMENT", size: size });
        }}
      ></AddNumber>
    );
  }
}
