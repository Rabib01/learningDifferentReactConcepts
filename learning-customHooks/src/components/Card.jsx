import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

export default function Card() {
  const { themeState } = useContext(themeContext);
  return (
    <div
      style={{
        backgroundColor: themeState === "light" ? "#fff" : "#555",
        color: themeState === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "400px",
      }}
    >
      <h2>Themed Card</h2>
      <p>
        This card's style changes based on the current theme. The current theme
        is : <strong>{themeState}</strong>
      </p>
    </div>
  );
}
