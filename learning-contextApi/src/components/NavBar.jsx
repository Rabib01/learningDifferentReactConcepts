import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

export default function NavBar() {
  const { themeState, toggleThemeState } = useContext(themeContext);
  return (
    <nav
      style={{
        background: themeState === "light" ? "#f0f0f0" : "#333",
        color: themeState === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Hello world: This is my app</h1>
      <div>
        <span style={{ marginRight: "10px" }}>
          Current Theme : {themeState}
        </span>
        <button
          onClick={toggleThemeState}
          style={{
            padding: "5px 10px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Toogle
        </button>
      </div>
    </nav>
  );
}
