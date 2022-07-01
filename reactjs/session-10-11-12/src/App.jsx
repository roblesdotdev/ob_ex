import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  const [intervalId, setIntervalId] = useState(0);

  const getColor = () => Math.floor(Math.random() * 256); // 0 - 255

  const generateRandomRGB = () => ({
    r: getColor(),
    g: getColor(),
    b: getColor(),
  });

  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  const generateColor = () => {
    const rgb = generateRandomRGB();
    setColor(rgbToHex(rgb.r, rgb.g, rgb.b));
  };

  const changeColor = () => {
    setIntervalId(setInterval(generateColor, 400));
  };

  const stopChange = () => {
    clearInterval(intervalId);
  };

  const resetColor = () => {
    stopChange();
    setColor("#000000");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <p>Reset with double click. Stop color leaving mouse.</p>
      <div
        className="square"
        onMouseOver={changeColor}
        onMouseLeave={stopChange}
        onDoubleClick={resetColor}
        style={{ width: "255px", height: "255px", backgroundColor: color }}
      ></div>
      <p>Color: {color}</p>
    </div>
  );
}

export default App;
