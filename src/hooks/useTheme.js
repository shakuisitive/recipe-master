import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useTheme() {
  let context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "This context can only be used within the defined components"
    );
  } else {
    return context;
  }
}
