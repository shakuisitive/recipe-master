import { createContext, useReducer } from "react";

export let ThemeContext = createContext();

let themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};
export function ThemeProvider({ children }) {
  let [state, dispatch] = useReducer(themeReducer, {
    color: "#58249c",
    mode: "light",
  });

  let changeColor = (newColor) => {
    dispatch({ type: "CHANGE_COLOR", payload: newColor });
  };

  let changeMode = (newMode) => {
    dispatch({ type: "CHANGE_MODE", payload: newMode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
