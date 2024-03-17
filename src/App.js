import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  const [size, setSize] = React.useState(100);
  const [isDark, setIsDark] = React.useState(false);

  const createBoxStyle = React.useCallback(() => {
    return {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: "red",
    };
  }, [size]);

  return (
    <div className="App" style={{ background: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      ></input>
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle}></Box>
    </div>
  );
}
