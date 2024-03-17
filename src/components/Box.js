import React from "react";
import PropTypes from "prop-types";

export default function Box({ createBoxStyle }) {
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    console.log("Box is Changing");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
}

Box.propTypes = {
  createBoxStyle: PropTypes.func.isRequired,
};
