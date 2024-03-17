import React from "react";
import "./styles.css";

const hardCalculate = (number) => {
  console.log("Big calculation...");
  for (let i = 0; i < 100; i++) {
    console.log("_");
  }
  return number + 100000;
};

const easyCalculate = (number) => {
  console.log("Easy calculation!");
  return number + 1;
};

export default function App() {
  const [hardNumber, setHardNumber] = React.useState(1);
  const [easyNumber, setEasyNumber] = React.useState(1);

  const hardSum = React.useMemo(() => hardCalculate(hardNumber), [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div className="App">
      <h1>Hard Calculation</h1>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      ></input>
      <span> + 10000 = {hardSum}</span>

      <h1>Easy Calculation</h1>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      ></input>
      <span> + 1 = {easySum}</span>
    </div>
  );
}
