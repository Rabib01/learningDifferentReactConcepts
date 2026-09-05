import { createContext, useState } from "react";

{
  /**
   * If we had kept it insde the function
   * Every time ThemeContext() renders, you're creating a new context object.
   * other components might need to reference the same context object
   *
   * Therefore we need to separate the context definition to the provider component
   */
}

export const themeContext = createContext("light");

export default function ThemeContextProvider({ children }) {
  const [themeState, setThemeState] = useState("light");

  function toggleThemeState() {
    setThemeState(themeState === "light" ? "dark" : "light");
  }

  return (
    <themeContext.Provider value={{ themeState, toggleThemeState }}>
      {children}
    </themeContext.Provider>
  );
}
