import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-blue-500">Hello World!</h1>
      </div>
    </div>
  );
}

export default App;
