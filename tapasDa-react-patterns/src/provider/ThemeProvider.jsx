import { useState } from "react";
import { ThemeContext } from "../context";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme((prev) => !prev);
    document.body.classList.toggle("dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
