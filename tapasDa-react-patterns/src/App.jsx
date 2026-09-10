import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { useTheme } from "./hooks/useTheme";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme;

  return (
    <div style={{}}>
      <h1></h1>
      <p></p>
    </div>
  );
}

export default App;
