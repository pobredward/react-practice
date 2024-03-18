import React from "react";

export default function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = React.useState(initialValue);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const displayMessage = () => {
    submitAction(inputValue);
    setInputValue("");
  };

  return [inputValue, handleInputValue, displayMessage];
}
