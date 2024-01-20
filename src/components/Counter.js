import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={increment}>
      {props.name} {count}
    </button>
  );
}

Counter.propTypes = {
  name: PropTypes.string,
};

Counter.defaultProps = {
  name: "click",
};
