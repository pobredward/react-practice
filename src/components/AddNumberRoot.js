import React, { Component } from "react";
import AddNumber from "./AddNumber";
import PropTypes from "prop-types";

export default class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber
          addNumber={(size) => {
            this.props.addNumber(size);
          }}
        ></AddNumber>
      </div>
    );
  }
}

AddNumberRoot.propTypes = {
  addNumber: PropTypes.func,
};
