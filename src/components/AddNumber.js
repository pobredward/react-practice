import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1,
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
            this.props.onClick(this.state.size);
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

AddNumber.propTypes = {
  onClick: PropTypes.func,
};
