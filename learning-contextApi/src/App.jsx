import { useState } from "react";
import "./App.css";
import ThemeContextProvider from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Card from "./components/Card";

function App() {
  return (
    <ThemeContextProvider>
      <div className="app">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="center">
          <Card />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
