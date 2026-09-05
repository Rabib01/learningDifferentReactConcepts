import { useState } from "react";
import "./App.css";
import ThemeContextProvider from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import CustomHooks from "./components/CustomHooks";
import SaveButton from "./components/SaveButton";

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="center">
          <Card />
        </div>
      </ThemeContextProvider>
      <div className="custom-hooks">
        <div className="custom-hooks__container">
          <h1>Custom Hooks: Sharing Logic between components</h1>
          <CustomHooks />
          <SaveButton />
        </div>
      </div>
    </div>
  );
}

export default App;
