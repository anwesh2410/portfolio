import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();
// Note: `darkMode` naming is inverted throughout this codebase — when true, the UI
// renders LIGHT (bg-white). Default to `true` so the site loads light (dark mode off).
const initialState = { darkMode: true };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{ state: false || state, dispatch: dispatch }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
