import { React } from "react";
import PropTypes from "prop-types";

export default function InputField({
  type,
  value,
  placeholder,
  onChange,
  errorMessage,
}) {
  return (
    <React.Fragment>
      <input
        style={{ border: "1px solid red" }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <br />
      <div style={{ color: "red" }}>{errorMessage}</div>
    </React.Fragment>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
