import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.props.number} readOnly />
      </div>
    );
  }
}

DisplayNumber.propTypes = {
  number: PropTypes.number,
};
