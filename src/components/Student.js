import React from "react";
import PropTypes from "prop-types";

export default function Student({ name, dispatch, id, isHere }) {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
        onClick={() => dispatch({ type: "mark", payload: { id } })}
      >
        {name}
      </span>
      <button onClick={() => dispatch({ type: "delete", payload: { id } })}>
        삭제
      </button>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isHere: PropTypes.bool.isRequired,
};
