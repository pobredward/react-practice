import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayNumber from "./DisplayNumber";

export default class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber number={this.props.number}></DisplayNumber>
      </div>
    );
  }
}

DisplayNumberRoot.propTypes = {
  number: PropTypes.number,
};
