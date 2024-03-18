import React from "react";
import "./styles.css";
import useInput from "./useInput";

const displayMessage = (msg) => {
  alert(msg);
};

export default function App() {
  const [name, handleName, submitName] = useInput("", displayMessage);
  const [pw, handlePw, submitPw] = useInput("", displayMessage);

  return (
    <div className="App">
      <h1>UseInput</h1>
      <input
        type="text"
        placeholder="Type here..."
        value={name}
        onChange={handleName}
      />
      <button onClick={submitName}>Check</button>
      <input
        type="text"
        placeholder="Type here..."
        value={pw}
        onChange={handlePw}
      />
      <button onClick={submitPw}>Check</button>
    </div>
  );
}
